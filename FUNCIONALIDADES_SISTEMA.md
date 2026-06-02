# Funcionalidades do Sistema - Detalhamento Completo

> Documento atualizado em: 13 de novembro de 2025

## Índice

1. [Dashboard (Início)](#dashboard-início)
2. [Clientes](#clientes)
3. [Serviços](#serviços)
4. [Agendamentos](#agendamentos)
5. [Financeiro (Lançamentos)](#financeiro-lançamentos)
6. [Metas](#metas)
7. [Relatórios](#relatórios)
8. [Educação](#educação)
9. [Área Administrativa](#área-administrativa)
10. [Funcionalidades Globais](#funcionalidades-globais)

---

## Dashboard (Início)

**Rota:** `/`

### Descrição
Central de controle do sistema com visão geral de todas as informações importantes do negócio.

### Funcionalidades Principais

#### 1. Personalização do Dashboard
- **Configuração de Cards:** Usuário pode escolher quais cards exibir
- **Reorganização:** Cards podem ser reordenados conforme preferência
- **Layout Responsivo:** Adaptação automática para diferentes tamanhos de tela

#### 2. Cards Disponíveis
- **Atalhos:** Acesso rápido às funcionalidades mais usadas
- **Resumo do Mês:** Visão financeira consolidada do mês atual
- **Metas:** Progresso das metas de receita
- **Aniversariantes:** Clientes que fazem aniversário no mês
- **Próximos Agendamentos:** Compromissos futuros
- **Follow-up de Clientes:** Clientes que precisam de atenção
- **Clientes Ativos:** Estatísticas de clientes
- **Serviços:** Resumo dos serviços cadastrados
- **Categorias Financeiras:** Distribuição de receitas/despesas
- **Custos Fixos:** Acompanhamento de despesas recorrentes
- **Artigos de Ajuda:** Conteúdo educacional relevante

#### 3. Tour Guiado
- **Tour Interativo:** Apresentação das funcionalidades para novos usuários
- **Dicas Contextuais:** Orientações sobre como usar o dashboard
- **Opção de Refazer:** Possibilidade de revisar o tour a qualquer momento

#### 4. Banner de Boas-vindas
- Mensagem personalizada com nome do usuário
- Data e dia da semana atual
- Informações contextuais sobre o sistema

---

## Clientes

**Rota:** `/clientes`

### Descrição
Módulo completo para gerenciamento de relacionamento com clientes.

### Funcionalidades Principais

#### 1. Cadastro de Clientes
- **Informações Básicas:**
  - Nome completo
  - Email e telefone
  - Data de nascimento
  - Endereço completo (rua, número, bairro, cidade, estado, CEP)
  - CPF
  - Observações gerais

#### 2. Sistema de Tags
- **Criação de Tags:** Tags personalizadas com nome e cor
- **10 Cores Disponíveis:** Paleta de cores para categorização
- **Filtro por Tags:** Seleção múltipla com lógica OR
- **Gerenciamento:** Criar, editar e excluir tags
- **Aplicação:** Adicionar múltiplas tags por cliente

#### 3. Busca e Filtros
- **Busca em Tempo Real:** Por nome do cliente
- **Filtro por Status:**
  - Ativos: Clientes frequentes
  - Inativos: Clientes que não comparecem há tempo
  - Arquivados: Clientes que não retornarão
- **Filtro por Tags:** Múltiplas tags simultaneamente

#### 4. Ordenação
- **Por Nome:** Ordem alfabética (A-Z)
- **Por Aniversário:** Próximos aniversários primeiro

#### 5. Página de Detalhes do Cliente
**Rota:** `/clientes/[id]`

- **Informações Completas:** Todos os dados cadastrais
- **Histórico de Serviços:** Lista de todos os serviços realizados
- **Estatísticas:**
  - Total gasto
  - Número de atendimentos
  - Ticket médio
  - Último atendimento
- **Anotações:** Sistema de notas sobre o cliente
- **Tempo de Retorno Sugerido:** Configuração personalizada
- **Ações Rápidas:**
  - Editar informações
  - Arquivar/Desarquivar
  - Contato via WhatsApp
  - Novo agendamento

### Subpáginas

#### Aniversariantes
**Rota:** `/clientes/aniversarios`

**Funcionalidades:**
- **Estatísticas:**
  - Aniversariantes de hoje
  - Desta semana
  - Próximos 30 dias
  - Total no período
- **Cards de Aniversariantes:**
  - Nome e idade
  - Data do aniversário
  - Dias restantes
  - Indicadores visuais (hoje, esta semana)
- **Ações Rápidas:**
  - Contato via WhatsApp
  - Envio de email
  - Acesso ao perfil completo
- **Planejamento:** Visualização de aniversários futuros para campanhas

#### Follow-up de Clientes
**Rota:** `/clientes/followup`

**Funcionalidades:**
- **Sistema de Semáforo:**
  - 🔴 Vermelho: Atrasado (acima do tempo sugerido)
  - 🟡 Amarelo: Atenção (67-100% do tempo)
  - 🟢 Verde: Bom (33-67% do tempo)
  - 🔵 Azul: Excelente (0-33% do tempo)
- **Estatísticas:**
  - Total de clientes ativos
  - Ação imediata necessária
  - Próximos dias
  - Em dia
- **Seções Organizadas:**
  - Ação Imediata: Clientes atrasados
  - Próximos Dias: Clientes próximos ao retorno
  - Próximas Semanas: Clientes dentro do prazo
  - Configuração Pendente: Sem tempo definido
- **Ações nos Cards:**
  - Contato via WhatsApp
  - Definir tempo de retorno
  - Acesso ao perfil

---

## Serviços

**Rota:** `/servicos`

### Descrição
Catálogo completo de serviços oferecidos pelo negócio.

### Funcionalidades Principais

#### 1. Cadastro de Serviços
- **Informações:**
  - Nome do serviço
  - Descrição detalhada
  - Valor cobrado (R$)
  - Duração estimada (minutos)
  - Observações extras
  - Status (Ativo/Inativo)

#### 2. Busca e Filtros
- **Busca em Tempo Real:** Por nome do serviço
- **Filtro por Status:**
  - Ativos: Disponíveis para agendamento
  - Inativos: Temporariamente indisponíveis

#### 3. Ordenação
- **Por Nome:** Ordem alfabética (A-Z)
- **Por Valor:** Do maior para o menor preço

#### 4. Gerenciamento
- **Edição:** Atualização de informações e preços
- **Ativação/Desativação:** Controle de disponibilidade
- **Estatísticas:** Visualização de uso do serviço
- **Histórico:** Acompanhamento de agendamentos

---

## Agendamentos

**Rota:** `/agendamentos`

### Descrição
Sistema completo de gestão de agenda e compromissos.

### Funcionalidades Principais

#### 1. Visualizações de Agenda
- **Calendário Mensal:** Visão geral do mês
- **Visualização Semanal:** Detalhes da semana
- **Visualização Diária:** Agenda detalhada do dia
- **Lista de Agendamentos:** Formato de lista

#### 2. Criação de Agendamentos
- **Informações:**
  - Cliente (seleção ou novo cadastro)
  - Serviço(s) - Seleção múltipla
  - Data e horário
  - Duração (calculada automaticamente)
  - Observações
  - Status (Agendado, Confirmado, Concluído, Cancelado)

#### 3. Gestão de Agendamentos
- **Edição:** Modificação de horários e informações
- **Cancelamento:** Com registro de motivo
- **Confirmação:** Marcação de agendamentos confirmados
- **Conclusão:** Finalização com registro de serviço

#### 4. Notificações e Lembretes
- Sistema de lembretes para clientes
- Alertas de conflitos de horário
- Visualização de disponibilidade

---

## Financeiro (Lançamentos)

**Rota:** `/financeiro`

### Descrição
Controle completo de receitas e despesas do negócio.

### Funcionalidades Principais

#### 1. Navegação por Período
- **Seletor de Mês/Ano:** Navegação entre períodos
- **Setas de Navegação:** Avançar/retroceder meses
- **Seleção Rápida:** Clique no mês/ano para escolha direta

#### 2. Registro de Lançamentos

##### Receitas
- Valor recebido
- Descrição detalhada
- Data do recebimento
- Categoria da receita
- Status (Concluída/Pendente)
- Observações

##### Despesas
- Valor gasto
- Descrição do gasto
- Data da despesa
- Categoria da despesa
- Método de pagamento
- Status (Concluída/Pendente)
- Observações

#### 3. Sistema de Categorias
**Rota:** `/financeiro/categorias`

- **Criação de Categorias:** Personalizadas para receitas e despesas
- **Cores e Ícones:** Identificação visual
- **Gerenciamento:** Criar, editar e excluir categorias
- **Análise:** Relatórios por categoria

#### 4. Filtros Inteligentes
- **Por Tipo:** Receitas ou Despesas
- **Por Categoria:** Seleção de categoria específica
- **Por Status:** Concluídas ou Pendentes
- **Busca:** Por descrição ou valor
- **Tags Ativas:** Visualização de filtros aplicados

#### 5. Status de Conclusão
- **👍 Concluída:** Lançamento efetivado
- **👎 Pendente:** Lançamento registrado mas não efetivado
- **Alternância Rápida:** Clique no ícone para mudar status

#### 6. Resumo Financeiro
- **Total de Receitas:** Soma de todas as entradas
- **Total de Despesas:** Soma de todas as saídas
- **Saldo do Período:** Diferença entre receitas e despesas
- **Indicadores Visuais:** Cores e gráficos

#### 7. Lançamentos Recorrentes
**Rota:** `/financeiro/repeticoes`

- **Criação de Recorrências:** Lançamentos automáticos
- **Frequências:**
  - Diária
  - Semanal
  - Quinzenal
  - Mensal
  - Anual
- **Gerenciamento:** Editar, pausar ou excluir recorrências

---

## Metas

**Rota:** `/metas`

### Descrição
Sistema de definição e acompanhamento de metas de receita.

### Funcionalidades Principais

#### 1. Definição de Metas
- **Meta Mensal:** Valor total desejado para o mês
- **Meta Diária:** Distribuição automática por dia útil
- **Meta Semanal:** Agrupamento por semana

#### 2. Configuração de Dias Úteis
- **Dias Trabalhados:** Marcação de dias úteis
- **Dias Não Trabalhados:** Exclusão de dias (domingos por padrão)
- **Recálculo Automático:** Ajuste das metas ao marcar/desmarcar dias

#### 3. Acompanhamento de Progresso
- **Progresso Diário:** Comparação com meta do dia
- **Progresso Semanal:** Acumulado da semana
- **Progresso Mensal:** Percentual de conclusão
- **Indicadores Visuais:**
  - Barras de progresso
  - Cores (verde: atingido, amarelo: próximo, vermelho: abaixo)
  - Percentuais

#### 4. Página de Progresso
**Rota:** `/metas/progresso`

- **Histórico de Metas:** Metas de meses anteriores
- **Análise de Performance:** Comparação entre períodos
- **Gráficos:** Visualização de evolução
- **Estatísticas:** Média de atingimento, melhor/pior mês

---

## Relatórios

**Rota:** `/relatorios`

### Descrição
Análises detalhadas e visualizações de dados do negócio.

### Funcionalidades Principais

#### 1. Filtros de Período
- **Mês Atual:** Dados do mês corrente
- **Últimos 3/6/12 Meses:** Análise de tendências
- **Período Personalizado:** Seleção de datas específicas (até 3 anos)

#### 2. Aba Consolidado
- **Cards de Resumo:**
  - Total de receitas
  - Total de despesas
  - Balanço (lucro/prejuízo)
  - Margem de lucro (%)
- **Gráfico Comparativo:** Evolução mensal
- **Modos de Visualização:**
  - Mensal: Valores individuais por mês
  - Acumulado: Evolução progressiva
- **Tendências:** Indicadores de crescimento/declínio

#### 3. Aba de Serviços
- **Análises por Serviço:**
  - Receita total
  - Quantidade de atendimentos
  - Ticket médio
  - Participação no faturamento
- **Ranking:** Serviços mais lucrativos
- **Gráficos:** Distribuição visual

#### 4. Aba de Clientes
- **Métricas de Clientes:**
  - Faturamento por cliente
  - Frequência de atendimentos
  - Ticket médio por cliente
  - Clientes mais valiosos (VIP)
- **Análise de Comportamento:** Padrões de consumo
- **Segmentação:** Grupos de clientes

#### 5. Aba de Categorias
- **Seletor de Tipo:** Receitas ou Despesas
- **Gráfico Donut:** Distribuição por categoria
- **Ranking:** Categorias ordenadas por valor
- **Percentuais:** Participação de cada categoria
- **Análise Detalhada:** Drill-down por categoria

---

## Educação

**Rota:** `/educacao`

### Descrição
Centro educacional com conteúdo sobre gestão empresarial.

### Funcionalidades Principais

#### 1. Estatísticas de Estudo
- **Artigos Lidos:** Total de artigos concluídos
- **Séries Completadas:** Séries 100% finalizadas
- **Tempo de Estudo:** Tempo total investido
- **Sequência:** Dias consecutivos de leitura

#### 2. Séries Educacionais
- **Organização por Temas:** Gestão, Marketing, Finanças, etc.
- **Artigos Sequenciais:** Conteúdo progressivo
- **Barra de Progresso:** Visual por série
- **Indicadores:** Artigos lidos/não lidos

#### 3. Sistema de Leitura
- **Marcação Automática:** Artigos lidos são marcados
- **Revisão:** Possibilidade de reler artigos
- **Progresso Salvo:** Acompanhamento automático
- **Navegação:** Expandir/recolher séries

#### 4. Gamificação
- **Conquistas:** Séries completadas
- **Sequências:** Dias consecutivos
- **Metas:** Objetivos de leitura

---

## Área Administrativa

**Acesso:** Restrito a administradores

### Dashboard Administrativo
**Rota:** `/admin`

#### Estatísticas Gerais
- Total de usuários cadastrados
- Códigos de convite gerados
- Códigos utilizados
- Códigos disponíveis

#### Acesso Rápido
- Gerenciamento de usuários
- Códigos de convite
- Feedbacks recebidos

### Gerenciamento de Usuários
**Rota:** `/admin/usuarios`

#### Funcionalidades
- **Lista de Usuários:** Todos os usuários do sistema
- **Informações:**
  - Nome completo
  - Email
  - Data de cadastro
  - Status da conta
  - Tipo de plano
- **Ações:**
  - Visualizar detalhes
  - Editar permissões
  - Desativar/Ativar conta
  - Histórico de atividades

### Códigos de Convite
**Rota:** `/admin/codigos-convite`

#### Funcionalidades
- **Criação de Códigos:**
  - Código personalizado ou automático
  - Período de trial (dias)
  - Desconto (%)
  - Data de expiração
  - Limite de usos
- **Gerenciamento:**
  - Editar códigos existentes
  - Desativar códigos
  - Visualizar uso
  - Histórico de aplicações
- **Estatísticas:**
  - Códigos ativos/inativos
  - Taxa de conversão
  - Códigos mais usados

### Feedbacks dos Usuários
**Rota:** `/admin/feedbacks`

#### Funcionalidades
- **Tipos de Feedback:**
  - 💡 Sugestões
  - 👎 Críticas
  - 👍 Elogios
- **Visualização:**
  - Lista completa de feedbacks
  - Filtro por tipo
  - Ordenação por data
- **Detalhes:**
  - Mensagem completa
  - Imagens anexadas (até 3)
  - Informações do usuário
  - Data de envio
- **Análise:**
  - Estatísticas por tipo
  - Tendências
  - Ações tomadas

### Diagnóstico do Sistema
**Rota:** `/admin/diagnostico`

#### Funcionalidades
- Verificação de integridade do banco
- Logs de erros
- Performance do sistema
- Uso de recursos

---

## Funcionalidades Globais

### 1. Menu Flutuante (+)
**Disponível em todas as páginas**

#### Ações Rápidas
- **Novo Lançamento:** Criar receita ou despesa
- **Novo Cliente:** Cadastrar cliente
- **Novo Agendamento:** Criar compromisso

### 2. Sistema de Feedback
**Botão "Ajuda" no rodapé**

#### Funcionalidades
- **Envio de Feedback:**
  - Tipo: Sugestão, Crítica ou Elogio
  - Título (opcional)
  - Mensagem detalhada
  - Upload de imagens (até 3)
- **Categorias:** Organização por tipo
- **Acompanhamento:** Status do feedback

### 3. Central de Ajuda
**Rota:** `/ajuda`

#### Funcionalidades
- **Artigos de Ajuda:** Documentação completa
- **Busca:** Localização rápida de conteúdo
- **Categorias:** Organização por tema
- **Atalhos de Teclado:** Lista de atalhos disponíveis
- **Vídeos Tutoriais:** Conteúdo visual

### 4. Atalhos de Teclado
**Rota:** `/ajuda/atalhos`

#### Atalhos Disponíveis
- `Ctrl/Cmd + K`: Busca global
- `Ctrl/Cmd + N`: Novo lançamento
- `Ctrl/Cmd + Shift + C`: Novo cliente
- `Ctrl/Cmd + Shift + A`: Novo agendamento
- `?`: Exibir atalhos

### 5. Página de Atualizações
**Rota:** `/atualizacoes`

#### Funcionalidades
- **Changelog:** Histórico de versões
- **Versão Atual:** Indicação da versão em uso
- **Mudanças por Versão:**
  - 🆕 Novidades
  - ⚡ Melhorias
  - 🐛 Correções
- **Em Desenvolvimento:**
  - Funcionalidades Principais em progresso
  - Melhorias e Ajustes planejados
  - Status de cada item (Em progresso/Planejado)
- **Roadmap:** Funcionalidades futuras planejadas

### 6. Perfil do Usuário
**Rota:** `/perfil`

#### Funcionalidades
- **Informações Pessoais:**
  - Nome completo
  - Email
  - Telefone
  - Foto de perfil
- **Configurações:**
  - Alterar senha
  - Preferências de notificação
  - Tema (claro/escuro)
  - Idioma
- **Plano e Assinatura:**
  - Tipo de plano atual
  - Data de renovação
  - Histórico de pagamentos
  - Upgrade/Downgrade

### 7. Autenticação
- **Login:** Email e senha
- **Registro:** Com código de convite
- **Recuperação de Senha:** Via email
- **Verificação de Email:** Confirmação de conta
- **Logout:** Encerramento de sessão

### 8. Notificações
- **Push Notifications:** Alertas em tempo real (em desenvolvimento)
- **Email:** Notificações importantes
- **In-app:** Notificações dentro do sistema

---

## Tecnologias Utilizadas

### Frontend
- **Next.js 15:** Framework React com App Router
- **TypeScript:** Tipagem estática
- **Tailwind CSS:** Estilização
- **buildgrid-ui:** Biblioteca de componentes
- **React Query:** Gerenciamento de estado e cache

### Backend
- **Supabase:** Banco de dados PostgreSQL
- **Next.js API Routes:** Endpoints da API
- **Row Level Security (RLS):** Segurança de dados

### Ferramentas
- **pnpm:** Gerenciador de pacotes
- **ESLint:** Linting de código
- **Prettier:** Formatação de código

---

## Observações Importantes

### Segurança
- Todas as rotas protegidas requerem autenticação
- RLS implementado no banco de dados
- Validação de dados no frontend e backend
- Proteção contra SQL injection
- Sanitização de inputs

### Performance
- Server-side rendering quando possível
- Lazy loading de componentes
- Otimização de imagens
- Cache de queries com React Query
- Paginação em listas grandes

### Acessibilidade
- Suporte a leitores de tela
- Navegação por teclado
- Contraste adequado de cores
- Labels descritivos
- ARIA attributes

### Responsividade
- Design mobile-first
- Breakpoints para tablet e desktop
- Touch-friendly em dispositivos móveis
- Adaptação de layouts

---

## Roadmap Futuro

### Em Desenvolvimento
1. **Notificações Push:** Sistema de alertas em tempo real
2. **Melhorias no Follow-up:** Automação de mensagens
3. **Endereço e CPF:** Campos adicionais no cadastro de clientes
4. **Múltiplos Serviços:** Seleção de vários serviços por agendamento
5. **Sistema de Tags:** Para lançamentos financeiros
6. **Sub-categorias:** Organização hierárquica de categorias

### Planejado
- Integração com WhatsApp Business API
- Relatórios personalizáveis
- Exportação de dados (PDF, Excel)
- App mobile nativo
- Integração com meios de pagamento
- Sistema de comissões
- Multi-usuário (equipes)
- Agenda compartilhada

---

**Documento mantido por:** Equipe de Desenvolvimento  
**Última atualização:** 13 de novembro de 2025  
**Versão do Sistema:** Consulte `/atualizacoes` para versão atual
