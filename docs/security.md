# Segurança do Projeto

## Escopo técnico

Projeto institucional estático em Next.js, sem autenticação, banco de dados, formulários, uploads, checkout, área administrativa, analytics ou cookies não essenciais.

## Controles implementados

- Headers de segurança via `next.config.ts`.
- CSP restritiva com `default-src 'self'`.
- `object-src 'none'`, `base-uri 'self'`, `form-action 'self'` e `frame-ancestors 'none'`.
- `X-Frame-Options: DENY`.
- `X-Content-Type-Options: nosniff`.
- `Referrer-Policy: strict-origin-when-cross-origin`.
- `Permissions-Policy` bloqueando câmera, microfone, geolocalização, pagamento, USB e tópicos de browsing.
- HSTS apenas em produção.
- `upgrade-insecure-requests` apenas em produção.
- Validação de ambiente com Zod em `src/lib/env.ts`.
- `.env*`, logs, `.vercel`, `.next` e `node_modules` ignorados no Git.
- `package-lock.json` presente para integridade de dependências.

## CSP

Política atual:

- `default-src 'self'`
- `script-src 'self' 'unsafe-inline'`
- `style-src 'self' 'unsafe-inline'`
- `img-src 'self' data: blob: https:`
- `font-src 'self' data:`
- `connect-src 'self' https:`
- `frame-src 'none'`
- `object-src 'none'`
- `base-uri 'self'`
- `frame-ancestors 'none'`
- `form-action 'self'`

Observação: `unsafe-inline` em scripts e estilos é mantido por compatibilidade com a renderização do Next.js sem middleware de nonce. Não há `unsafe-eval` em produção. Se o projeto evoluir para um modelo com nonce, essa exceção deve ser removida.

## Checklist OWASP

- Broken Access Control: não aplicável no MVP sem login, perfis ou rotas privadas.
- Cryptographic Failures: HTTPS obrigatório em produção, HSTS em produção, sem dados sensíveis armazenados.
- Injection: sem entradas do usuário e sem `dangerouslySetInnerHTML`.
- Insecure Design: escopo mínimo, sem coleta desnecessária e sem funcionalidades administrativas.
- Security Misconfiguration: headers, CSP, env validation e `.gitignore` revisados.
- Vulnerable Components: `npm audit` deve ser executado antes de deploy.
- Authentication Failures: não aplicável no MVP sem autenticação.
- Software/Data Integrity: `package-lock.json` presente e dependências revisadas.
- Logging/Monitoring: não registrar dados pessoais; revisar logs da Vercel sem expor secrets.
- SSRF: não há busca de URLs arbitrárias do usuário.

## Itens não implementados por não se aplicarem ao escopo

- Login, autenticação e autorização.
- Banco de dados.
- Criptografia de dados em repouso da aplicação.
- Rate limiting de formulários ou APIs.
- Proteções de upload.
- Banner de cookies.
- Consent management platform.

## Revisões recomendadas

- Revisar CSP se embeds, mapas, vídeos, pixels ou analytics forem adicionados.
- Revisar bases legais e textos com assessoria jurídica.
- Rodar `npm run lint`, `npm run typecheck`, `npm run build` e `npm run audit` antes de publicar.
