# SymPro — Landing Page de Conversão

## Resumo

Landing page de conversão para o **SymPro**, plataforma SaaS de gestão para profissionais autônomos brasileiros. O objetivo da página é comunicar o valor do produto, qualificar o público-alvo e capturar leads antes do lançamento oficial.

---

## Contexto

O SymPro é um projeto pessoal em fase de pré-lançamento. A plataforma resolve um problema real e mal atendido: profissionais autônomos (cabeleireiros, esteticistas, personal trainers, fisioterapeutas etc.) que gerenciam clientes e finanças em cadernos, planilhas ou pelo WhatsApp — e perdem clientes e receita por falta de organização.

A landing page funciona como ponto de entrada do funil: apresenta o produto, demonstra valor por meio de mockups e seções educativas, e convida o visitante a entrar na lista de espera.

---

## Minha Função

Projeto em dupla: Adriano é responsável por todo o desenvolvimento, infraestrutura e design; o segundo integrante atua na área não-técnica (negócio, produto, conteúdo).

---

## Público-alvo

Profissionais autônomos brasileiros que prestam serviços e cobram por atendimento:

- Cabeleireiro(a)
- Esteticista
- Personal Trainer
- Fisioterapeuta
- Coach
- Nutricionista
- Manicure
- Massoterapeuta
- E qualquer outro prestador de serviços autônomo

Perfil de uso: celular ou tablet, no intervalo entre atendimentos ou no fim do expediente. Não são especialistas em tecnologia; buscam algo que funcione sem treinamento.

---

## Tecnologias

| Camada | Tecnologia |
|---|---|
| Framework | Next.js 15 (App Router, Turbopack) |
| Linguagem | TypeScript |
| UI | React 19 |
| Estilo | Tailwind CSS |
| Componentes | Radix UI via buildgrid-ui |
| Animações | Framer Motion |
| Tipografia | Manrope + Finger Paint (Google Fonts) |
| Ícones | Lucide React |
| Analytics | Vercel Analytics |
| Deploy | Vercel |
| Package manager | pnpm |

---

## Estrutura da Página

A landing é composta por 14 seções ordenadas para guiar o visitante pelo funil:

1. **Header** — navegação fixa com CTA principal
2. **Hero** — headline com typewriter animation, galeria rotativa de profissionais, floating cards com métricas fictícias e formulário de inscrição
3. **Para Quem** — grid de profissões atendidas
4. **Pilares** — proposta de valor em três eixos (clientes, agenda, finanças)
5. **Como Funciona** — três passos: criar conta → cadastrar clientes → controlar o negócio
6. **Vídeo** — demonstração do produto via YouTube (facade de performance)
7. **Dispositivos** — mockup multi-device (celular, tablet, desktop)
8. **Benefícios** — grade de 8 cards com as funcionalidades principais
9. **Diferenciais** — três funcionalidades únicas em relação a planilhas: semáforo de follow-up, metas diárias/mensais e relatórios de serviços
10. **Vitrine do Produto** — screenshots reais das telas da plataforma
11. **Depoimentos** — seção reservada (sem conteúdo ainda, projeto pessoal)
12. **Planos e Preços** — três planos com toggle mensal/anual
13. **Time** — apresentação do responsável pelo projeto
14. **FAQ** — perguntas frequentes
15. **CTA Final** — formulário de inscrição para a lista de espera

---

## Planos e Preços

| Plano | Mensal | Anual |
|---|---|---|
| Gratuito | R$ 0 | R$ 0 |
| Profissional | R$ 24,90/mês | R$ 21,90/mês |
| Profissional+ | R$ 99,90/mês | R$ 86,90/mês |

**Plano Gratuito** inclui: cadastro de clientes e serviços, agenda completa, relatórios básicos, 1 usuário, Central de Educação e suporte por e-mail.

**Plano Profissional** adiciona: follow-up e aniversariantes, dashboard personalizado, fichas e campos personalizados, upload de documentos, relatórios detalhados e suporte prioritário.

**Plano Profissional+** adiciona: até 3 usuários, agendas compartilhadas, automação de mensagens, relatórios avançados com exportação, onboarding personalizado e prioridade em novas funcionalidades.

---

## Destaques Técnicos

- **Performance (LCP)**: preload do hero image, video facade para o YouTube (zero JS bloqueante), imagens com `next/image` e cache otimizado
- **Acessibilidade**: WCAG 2.1 AA, contraste mínimo 4.5:1, `prefers-reduced-motion`, textos alternativos em todas as imagens, sem dependência exclusiva de cor
- **SEO**: metadata completo, Open Graph, Twitter Card, sitemap.xml, robots.txt, schema `WebSite` (JSON-LD)
- **Mobile-first**: layout responsivo com breakpoint mínimo em 380 px; seção de steps horizontal no desktop e vertical no mobile
- **Animações**: Framer Motion com `whileInView` e `viewport: { once: true }` para garantir performance suave no scroll
- **Design system**: cores em OKLCH, tokens de tipografia com `clamp()` para escalabilidade fluida
- **Formulário de captura**: API Route no Next.js para inscrição na lista de espera

---

## Princípios de Design

1. **Clareza antes de beleza** — cada seção comunica o benefício em menos de 5 segundos
2. **Profissional sem intimidar** — moderno e limpo, mas nunca corporativo-pesado
3. **Mostre, não descreva** — screenshots e mockups reais vendem mais do que bullets de features
4. **Movimento com propósito** — animações reforçam hierarquia e guiam atenção
5. **Mobile primeiro** — qualquer layout que quebre abaixo de 380 px é um bug

---

## Links

- **Site**: [sympro.com.br](https://sympro.com.br)
- **Repositório**: privado

---

## Status

Em pré-lançamento. A plataforma está em desenvolvimento ativo; a landing captura leads para a lista de espera antes da abertura pública.
