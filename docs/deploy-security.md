# Deploy Seguro na Vercel

## Variáveis de ambiente

Configure variáveis reais apenas no painel da Vercel ou em `.env.local` local não versionado.

Nunca commitar:

- `.env`
- `.env.local`
- `.env.production`
- tokens
- senhas
- chaves de API
- webhooks privados

## Domínio e HTTPS

- Publicar somente em domínio com HTTPS ativo.
- Configurar `NEXT_PUBLIC_SITE_URL` com URL HTTPS final.
- Validar que todos os links externos configurados usam HTTPS.
- HSTS é enviado apenas em produção.

## Checklist antes de publicar

```powershell
npm run lint
npm run typecheck
npm run build
npm run audit
```

Verificar também:

- Nenhum `.env` real versionado.
- Nenhum log local versionado.
- Nenhum documento privado em `/public`.
- Política de Privacidade e Termos de Uso revisados juridicamente.
- Links de WhatsApp/redes sociais configurados com URLs oficiais.

## Como validar headers

Depois do deploy, executar:

```powershell
curl -I https://www.seu-dominio.com.br
```

Conferir:

- `Content-Security-Policy`
- `Strict-Transport-Security`
- `X-Content-Type-Options`
- `Referrer-Policy`
- `Permissions-Policy`
- `X-Frame-Options`

## Como validar ausência de HTTP

```powershell
rg -n "http://" .
```

URLs `http://localhost` só devem ser usadas como fallback técnico temporário. O fluxo local padrão deste projeto usa `https://localhost:3005`.

## Logs

- Revisar logs na Vercel sem copiar dados pessoais para tickets públicos.
- Não registrar dados sensíveis, tokens ou URLs com parâmetros privados.

## Rollback

- Usar a tela de deployments da Vercel para promover um deployment anterior.
- Registrar o motivo do rollback e validar novamente headers e rotas legais.

## Proteção de variáveis sensíveis

- Usar escopos de Preview/Production corretamente.
- Não prefixar secrets com `NEXT_PUBLIC_`.
- Só usar `NEXT_PUBLIC_` para dados que podem aparecer no navegador.

## Futuras integrações

Antes de adicionar analytics, pixel, mapas, embeds, checkout ou formulários:

- Revisar CSP.
- Revisar Política de Privacidade.
- Avaliar base legal/consentimento.
- Documentar terceiros e retenção.
