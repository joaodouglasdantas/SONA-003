# SONA — Guia do Projeto

Aplicativo de apoio emocional com IA. Avatar estilo The Sims que reflete visualmente os registros de humor do usuário. Piloto fechado com 1-2 terapeutas parceiros.

Fonte: `SONA_Especificacao_MVP.docx` (decisões definidas com João Douglas, jul/2026). Este guia traduz a especificação em plano de execução técnico.

## Stack escolhida

- **App mobile:** React Native com Expo (TypeScript)
- **Backend:** Firebase (Auth, Firestore, Storage)
- **Publicação:** adiada — build direto / TestFlight interno durante o piloto

## Estrutura de pastas

```
SONA-003/
  PROJECT_GUIDE.md          este arquivo
  SONA_Especificacao_MVP.docx
  mobile-app/                app React Native (Expo)
    src/
      screens/                telas (onboarding, check-in, avatar, emergência)
      components/              componentes reutilizáveis
      services/                integração com Firebase
      theme/                   paleta de cores da roda de emoções, estilos
  backend/
    firebase/                 regras do Firestore, config de Storage, functions (se houver)
  docs/                       decisões, protocolo de risco, notas do piloto
  design/
    personagens/              assets dos 3-5 personagens pré-prontos
    roda-emocoes/             paleta de cores e mapeamento emoção→cor
```

## Escopo do MVP (dentro)

- 3–5 personagens pré-prontos (gênero/tom de pele/estilo variados)
- Registro por cor (roda de emoções), texto livre, eventos, check-in guiado
- Avatar com reflexo visual (cor/expressão/ambiente) — sem geração de texto por IA
- Avatar personalizado via processo manual fora do app (foto por formulário/e-mail)
- Tela fixa de emergência (CVV 188) + detecção de risco por IA em texto livre
- Exclusão de conta/dados pelo usuário

## Fora do MVP (fase 2+)

- Geração automática de imagem por IA
- Dashboard do terapeuta
- Resumos/reflexões geradas por IA de texto
- Fila de status de aprovação dentro do app
- Notificação automática ao terapeuta em caso de risco
- Cobrança automatizada / assinatura
- Publicação nas lojas oficiais

## Protocolo de segurança e risco — não negociável

- Detecção de risco por IA nunca é a única camada; sempre combinada com tela fixa de emergência (CVV 188)
- Definir e testar: o que o app mostra quando o alerta dispara, e se/como o terapeuta é notificado (requer consentimento explícito)
- Validar taxa de falso positivo/negativo com os terapeutas antes de confiar no modelo
- Registrar o protocolo por escrito e alinhar com os terapeutas do piloto antes do lançamento

## Privacidade

- Exclusão de conta e dados a qualquer momento (obrigatório desde o MVP)
- Fotos para avatar personalizado: apagar original assim que o avatar for entregue
- Consentimento explícito e por escrito antes de coletar foto ou dado de saúde mental
- Dados de humor/diário tratados como dado sensível de saúde

## Ordem de execução sugerida

1. Fechar por escrito o protocolo de risco/crise com os terapeutas do piloto
2. Configurar Firebase (Auth, Firestore, Storage) e modelo mínimo de dados (usuário, registros diários, avatar)
3. Definir paleta da roda de emoções e os 3–5 personagens-base (pode começar com placeholders)
4. Construir onboarding → registro diário → reflexo visual do avatar (núcleo do MVP)
5. Implementar tela de emergência + detecção de risco em texto
6. Definir canal externo (formulário/e-mail) para avatar personalizado
7. Rodar piloto com terapeutas parceiros e coletar feedback

## Modelo de dados inicial (Firestore, sugestão)

- `users/{userId}`: nome, terapeuta vinculado, personagem escolhido, avatar personalizado (url, status)
- `users/{userId}/registros/{registroId}`: data, cor/emoção, texto livre, categoria de evento, origem (check-in guiado ou livre)
- `terapeutas/{terapeutaId}`: pacientes vinculados (somente para vínculo, sem dashboard no MVP)

## Não fazer no MVP

Não construir dashboard de terapeuta, fila de aprovação dentro do app, cobrança automatizada, ou geração automática de imagem por IA. Manter escopo enxuto até validar com o piloto.
