# Site Suplemed pronto para rodar

## Como instalar
1. Extraia a pasta `suplemed-site`
2. Abra a pasta no VS Code
3. No terminal rode:

```bash
npm install
npm run dev
```

4. Abra no navegador:

```bash
http://localhost:3000
```

## Onde trocar WhatsApp
Abra `src/app/page.tsx` e troque esta linha:

```ts
const whatsapp = 'https://wa.me/5567999999999?text=...'
```

Coloque seu número oficial com DDI e DDD.
