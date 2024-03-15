import type { Metadata } from "next";
import Title from "./components/Title";
import "./globals.css";

export const metadata: Metadata = {
  title: "CineClube Avenida",
  description: "Clube de Cinema, aluguel de filmes",
  keywords: ["cinema", "cineclube", "filmes", "locação de filmes"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="shortcut icon" href="./pipoca.png" type="image/x-icon" />
      </head>
      <body>
        <Title />
        {children}
        <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.js"></script>
      </body>
    </html>
  );
}
