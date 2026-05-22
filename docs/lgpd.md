# LGPD e Privacy by Design

Este documento é um mapa técnico de privacidade para o MVP institucional. Não substitui revisão jurídica.

## Mapa de dados

| Item | Situação atual |
| --- | --- |
| Formulário | Não existe |
| Login | Não existe |
| Banco de dados | Não existe |
| Upload | Não existe |
| Cookies não essenciais | Não existem |
| Analytics/pixel | Não existem |
| Dados sensíveis de saúde | Não coletados pelo site |
| localStorage/sessionStorage | Não utilizados |
| Links externos | WhatsApp e possíveis redes/plataformas configuráveis por env |

## Dados coletados diretamente pelo site

Nenhum dado pessoal é coletado diretamente pelo site nesta versão.

## Dados tratados indiretamente

Ao clicar em links externos, o usuário pode fornecer dados a terceiros, como:

- WhatsApp/Meta.
- Instagram.
- TikTok.
- Facebook.
- Hotmart.
- Outros canais oficiais configurados pela operação.

Esses tratamentos seguem políticas e termos próprios das plataformas.

## Cookies

O MVP não utiliza cookies não essenciais. Se analytics, pixels, mapas, embeds ou ferramentas de marketing forem adicionados, será necessária nova avaliação de:

- Finalidade.
- Base legal.
- Transparência.
- Consentimento, quando aplicável.
- Registro de preferências, se houver CMP.

## Bases legais possíveis

As bases legais dependem da operação real do controlador. Possíveis bases a avaliar juridicamente:

- Execução de contrato ou procedimentos preliminares, quando o usuário solicita atendimento por canal externo.
- Legítimo interesse para comunicação institucional, desde que balanceado.
- Consentimento, se forem adicionados cookies não essenciais, pixels ou campanhas comportamentais.
- Cumprimento de obrigação legal ou regulatória, quando aplicável à operação médica.

## Finalidades

- Apresentar trajetória profissional e autoridade médica.
- Apresentar Renoova Medicina Estética.
- Apresentar especialidades e conteúdos digitais.
- Direcionar para canais oficiais de contato e agendamento.

## Terceiros

Terceiros potenciais:

- Vercel, como infraestrutura de hospedagem.
- WhatsApp/Meta e demais redes sociais, quando acionadas pelo usuário.
- Hotmart ou plataformas de conteúdo, se links forem configurados.

## Retenção

O site não retém dados pessoais diretamente. Dados enviados pelo usuário a plataformas externas ou à operação da clínica devem seguir política própria de retenção do controlador e dos operadores envolvidos.

## Riscos

- Usuário acreditar que plataformas externas pertencem ao site.
- Inclusão futura de analytics/pixel sem revisão de consentimento ou base legal.
- Configuração acidental de URL HTTP em produção.
- Exposição acidental de `.env` ou logs.
- Promessas legais não revisadas juridicamente.

## Medidas mitigadoras

- Política de Privacidade explicando links externos.
- Termos de Uso explicando natureza informativa do conteúdo.
- Validação de URLs por ambiente.
- Headers de segurança e CSP.
- Ausência de coleta desnecessária no MVP.
- `.gitignore` protegendo envs e logs.

## Checklist de revisão jurídica

- Confirmar nome jurídico do controlador.
- Confirmar CNPJ/CPF, endereço e canal do encarregado, se aplicável.
- Validar bases legais para contato e agendamento.
- Validar retenção operacional fora do site.
- Validar textos sobre conteúdo médico e limites de promessa de resultado.
- Revisar política de terceiros e transferência internacional.
- Revisar necessidade de consentimento se analytics/pixels forem adicionados.
