import React, { useState } from 'react';
import { X } from 'lucide-react';
import { CITIES, CITIES_FULL } from '../constants';
import { Button } from './Button';

interface RegistrationModalProps {
    isOpen: boolean;
    onClose: () => void;
    ticketType: 'day1' | 'day1-2';
}

export const RegistrationModal: React.FC<RegistrationModalProps> = ({ isOpen, onClose, ticketType }) => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        city: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState('');

    if (!isOpen) return null;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        // Validation
        if (!formData.name || !formData.phone || !formData.city) {
            setError('Por favor, preencha todos os campos');
            return;
        }

        setIsSubmitting(true);

        try {
            // Get selected city with date
            const selectedCity = CITIES.find(c => c.name === formData.city);

            // Prepare data for Google Sheets
            const sheetData = {
                timestamp: new Date().toISOString(),
                name: formData.name,
                phone: formData.phone,
                city: formData.city,
                date: selectedCity?.date || '',
                ticketType: ticketType === 'day1' ? 'Dia 01 Apenas' : 'Dia 01 + 02 (com bônus)'
            };

            // TODO: Replace with your Google Apps Script URL
            const GOOGLE_SCRIPT_URL = 'YOUR_GOOGLE_SCRIPT_URL_HERE';

            // Send to Google Sheets
            const response = await fetch(GOOGLE_SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(sheetData)
            });

            // Redirect to payment link
            // TODO: Replace with actual Asaas payment links
            const paymentLinks = {
                'day1': 'https://asaas.com/your-day1-payment-link',
                'day1-2': 'https://asaas.com/your-day1-2-payment-link'
            };

            window.location.href = paymentLinks[ticketType];

        } catch (err) {
            console.error('Erro ao enviar dados:', err);
            setError('Erro ao processar inscrição. Tente novamente.');
            setIsSubmitting(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                onClick={onClose}
            ></div>

            {/* Modal */}
            <div className="relative bg-brand-dark border-2 border-brand-neon/30 rounded-2xl p-8 max-w-md w-full shadow-[0_0_50px_rgba(0,209,255,0.2)] animate-scale-in">
                {/* Close button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                >
                    <X size={24} />
                </button>

                {/* Header */}
                <div className="mb-6">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                        Garantir Ingresso
                    </h2>
                    <p className="text-brand-neon font-semibold">
                        {ticketType === 'day1' ? '📅 Dia 01 Apenas' : '🎁 Dia 01 + 02 (com Bônus)'}
                    </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Name */}
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                            Nome Completo *
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-brand-neon transition-colors"
                            placeholder="Seu nome"
                            required
                        />
                    </div>

                    {/* Phone */}
                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                            Celular (WhatsApp) *
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-brand-neon transition-colors"
                            placeholder="(00) 00000-0000"
                            required
                        />
                    </div>

                    {/* City */}
                    <div>
                        <label htmlFor="city" className="block text-sm font-medium text-gray-300 mb-2">
                            Cidade do Evento *
                        </label>
                        <select
                            id="city"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-brand-neon transition-colors"
                            required
                        >
                            <option value="" className="bg-brand-dark">Selecione a cidade</option>
                            {(ticketType === 'day1-2' ? CITIES_FULL : CITIES).map((city) => (
                                <option key={city.name} value={city.name} className="bg-brand-dark">
                                    {city.name} - {city.date}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Error message */}
                    {error && (
                        <div className="text-red-400 text-sm bg-red-500/10 border border-red-500/30 rounded-lg p-3">
                            {error}
                        </div>
                    )}

                    {/* Submit button */}
                    <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full !py-4"
                    >
                        {isSubmitting ? 'Processando...' : 'Prosseguir para Pagamento →'}
                    </Button>

                    <p className="text-xs text-gray-500 text-center">
                        Você será redirecionado para a página de pagamento seguro
                    </p>
                </form>
            </div>
        </div>
    );
};
