# Setup Guide - Google Sheets Integration & Payment Links

## Google Sheets Setup (5 minutos)

### Passo 1: Criar a Planilha
1. Acesse [Google Sheets](https://sheets.google.com)
2. Crie uma nova planilha
3. Nomeie como "Empresários de Sucesso - Inscrições"

### Passo 2: Configurar o Apps Script
1. Na planilha, clique em **Extensões** → **Apps Script**
2. Delete o código padrão
3. Copie e cole o código do arquivo `google-apps-script.js`
4. Clique em **Salvar** (ícone de disquete)
5. **IMPORTANTE**: Execute a função `setupSheet` uma vez:
   - Selecione `setupSheet` no dropdown
   - Clique em ▶️ (Executar)
   - Autorize o script quando solicitado
   - Isso criará os cabeçalhos na planilha

### Passo 3: Implantar como Web App
1. Clique em **Implantar** → **Nova implantação**
2. Clique no ícone de engrenagem ⚙️ ao lado de "Selecionar tipo"
3. Escolha **Aplicativo da Web**
4. Configure:
   - **Descrição**: "API de Inscrições"
   - **Executar como**: Eu (seu email)
   - **Quem tem acesso**: Qualquer pessoa
5. Clique em **Implantar**
6. **COPIE A URL** que aparece (algo como: `https://script.google.com/...`)
7. Clique em **Concluído**

### Passo 4: Colar URL no Código
1. Abra o arquivo `components/RegistrationModal.tsx`
2. Encontre a linha:
   ```typescript
   const GOOGLE_SCRIPT_URL = 'YOUR_GOOGLE_SCRIPT_URL_HERE';
   ```
3. Substitua por:
   ```typescript
   const GOOGLE_SCRIPT_URL = 'SUA_URL_AQUI';
   ```

---

## Payment Links Configuration

### Passo 1: Obter Links do Asaas
1. Acesse sua conta Asaas
2. Crie dois links de pagamento:
   - **Link 1**: Para "Dia 01 Apenas"
   - **Link 2**: Para "Dia 01 + 02 (com Bônus)"

### Passo 2: Configurar no Código
1. Abra o arquivo `components/RegistrationModal.tsx`
2. Encontre as linhas:
   ```typescript
   const paymentLinks = {
     'day1': 'https://asaas.com/your-day1-payment-link',
     'day1-2': 'https://asaas.com/your-day1-2-payment-link'
   };
   ```
3. Substitua pelos seus links reais do Asaas

---

## Testando o Fluxo Completo

1. **Teste Local**:
   ```bash
   npm run dev
   ```

2. **Teste o Fluxo**:
   - Clique em "GARANTIR DIA 01"
   - Preencha o formulário
   - Submeta
   - Verifique se os dados apareceram na planilha
   - Confirme o redirect para o Asaas

3. **Repita** para "GARANTIR DIA 01 + 02"

---

## Troubleshooting

### Erro: "Failed to fetch"
- Verifique se a URL do Google Script está correta
- Certifique-se de que o script foi implantado como "Qualquer pessoa"

### Dados não aparecem na planilha
- Execute `setupSheet` novamente
- Verifique as permissões do script
- Olhe o console do navegador para erros

### Redirect não funciona
- Verifique se as URLs do Asaas estão corretas
- Teste as URLs diretamente no navegador

---

## Estrutura da Planilha

Após o setup, sua planilha terá as seguintes colunas:

| Timestamp | Nome | Telefone | Cidade | Data do Evento | Tipo de Ingresso |
|-----------|------|----------|--------|----------------|------------------|
| ...       | ...  | ...      | ...    | ...            | ...              |
