# Dra. Kelly Ferraz / Renoova Medicina Estética

Landing page institucional premium criada com Next.js, TypeScript e Tailwind CSS.

## Escopo

- Site one-page institucional.
- Sem banco de dados.
- Sem login ou área administrativa.
- Sem checkout ou pagamento.
- Sem formulário.
- Sem upload de arquivos.
- Sem cookies não essenciais.
- Sem analytics ou pixel no MVP.
- Sem armazenamento local de dados pessoais.

## Requisitos

- Node.js `>=20`.
- npm.

## Como iniciar localmente

```powershell
cd "C:\Users\othia\OneDrive\Documents\Dra. Kelly 2"
npm install
npm run dev
```

URL local:

```text
https://localhost:3005
```

O ambiente local usa HTTPS por padrão com certificado autoassinado gerado pelo Next.js. O navegador pode exibir um aviso de certificado local na primeira abertura.

## Scripts

```powershell
npm run dev
npm run lint
npm run typecheck
npm run build
npm run start
npm run audit
```

## Variáveis de ambiente

Copie `.env.example` para `.env.local` apenas localmente se precisar configurar links reais.
Nunca versione `.env.local`, `.env.production` ou secrets.

Variáveis suportadas:

- `NEXT_PUBLIC_SITE_URL`
- `WHATSAPP_URL`
- `CONTACT_URL`
- `BOOK_URL`
- `INSTAGRAM_URL`
- `TIKTOK_URL`
- `FACEBOOK_URL`
- `HOTMART_URL`

Em produção, URLs públicas devem usar HTTPS. Links externos de contato também são validados como HTTPS.

## Segurança e privacidade

Consulte:

- `docs/security.md`
- `docs/lgpd.md`
- `docs/deploy-security.md`

Os textos legais em `/politica-de-privacidade` e `/termos-de-uso` são bases técnicas e dependem de revisão jurídica antes do uso oficial.
