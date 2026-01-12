import { Speaker, AgendaItem, City, Benefit } from './types';
import { TrendingUp, Users, Lightbulb, MapPin, Target, ShieldCheck } from 'lucide-react';

export const SPEAKERS: Speaker[] = [
  {
    name: "Fred Rocha",
    role: "Vendas e Inovação",
    description: "Especialista em varejo e consumo, Fred traz uma visão disruptiva sobre o novo jeito de vender e como aplicar inteligência artificial no dia a dia para ampliar resultados.",
    image: "https://picsum.photos/id/338/400/500" // Placeholder
  },
  {
    name: "Diego Suzano",
    role: "Estratégia e Gestão",
    description: "Líder do T3 Hub, Diego foca em processos, finanças e gestão de tempo, preparando empresários para o cenário político e econômico de 2026.",
    image: "https://picsum.photos/id/237/400/500" // Placeholder
  }
];

export const AGENDA: AgendaItem[] = [
  {
    time: "08h00 – 09h00",
    title: "Café da Manhã e Networking",
    description: "Recepção dos participantes e espaço para conexões qualificadas."
  },
  {
    time: "09h00 – 09h30",
    title: "Abertura Oficial",
    description: "Apresentação dos patrocinadores e alinhamento da agenda."
  },
  {
    time: "09h30 – 10h30",
    title: "Cenário Político e Econômico para 2026",
    speaker: "Diego Suzano",
    description: "Desafios e Oportunidades. Uma visão objetiva sobre os fatores que irão moldar o ambiente de negócios."
  },
  {
    time: "10h30 – 11h30",
    title: "O Novo Jeito De Vender",
    speaker: "Fred Rocha",
    description: "Muito Além da Inteligência Artificial. Como reduzir custos e otimizar processos."
  },
  {
    time: "11h30 – 12h30",
    title: "Boarding de Conselho",
    speaker: "Diego e Fred",
    description: "Espaço de discussão prática e construção de insights facilitado pelos mentores."
  },
  {
    time: "12h30 – 14h00",
    title: "Almoço de Networking",
    description: "Conexões estratégicas e troca de experiências (Almoço incluso)."
  },
  {
    time: "14h00 – 15h00",
    title: "Rodada de Negócios",
    description: "Sessão estruturada para geração de oportunidades reais entre os participantes."
  },
  {
    time: "15h00 – 16h00",
    title: "Processos, Finanças e Gestão de Tempo",
    speaker: "Diego Suzano",
    description: "O Diferencial Competitivo da Alta Performance em 2026."
  },
  {
    time: "16h00 – 17h00",
    title: "Planejamento Estratégico de Vendas e Mkt",
    speaker: "Fred Rocha",
    description: "Preparando sua empresa para o próximo ciclo."
  },
  {
    time: "17h00 – 17h30",
    title: "Dinâmica de Mentoria: Pinga-Fogo",
    description: "Respostas diretas, debates aprofundados e orientações personalizadas."
  },
  {
    time: "17h30",
    title: "Encerramento",
  }
];

export const CITIES: City[] = [
  { name: "Taiobeiras" },
  { name: "Salinas" },
  { name: "Januária" },
  { name: "Pirapora" },
  { name: "Bocaiúva" }
];

export const BENEFITS: Benefit[] = [
  { title: "Crescer acima da média", icon: TrendingUp },
  { title: "Construir visão de futuro", icon: Lightbulb },
  { title: "Tomar decisões antes da concorrência", icon: Target },
  { title: "Redes de relacionamento fortes", icon: Users },
  { title: "Elevar performance e gestão", icon: ShieldCheck },
  { title: "Estratégias locais", icon: MapPin },
];
