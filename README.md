# CineClube - 14/03

- o ``for=""`` vira ``htmlFor=""``
- como a barra de pesquisa não fica sempre na tela, o componente de pesquisa (Search.tsx) vai no arquivo "page.tsx" ao invés do "layout.tsx". O componente de navbar (Title.tsx) fica no "layout.tsx" porque ele é fixo nas telas
- ``lg:text-6x`` ou ``md:text-5xl`` é para outras mídias que não são mobile. O Tailwind é mobile-first (``text-6xl``)
- pra ativar o menu-burguer e outras coisas que precisam do JavaScript, pra facilitar, adiciona o cdn do script antes do ``<body>`` no arquivo "layout.tsx"

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

