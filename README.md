# 🎬 Cineclube Avenida
Aula de Linguagens de Programação Emergentes - 14/03

## 📝 Notas:

- o ``for=""`` vira ``htmlFor=""``
- como a barra de pesquisa não fica sempre na tela, o componente de pesquisa (Search.tsx) vai no arquivo "page.tsx" ao invés do "layout.tsx". O componente de navbar (Title.tsx) fica no "layout.tsx" porque ele é fixo nas telas
- ``lg:text-6x`` ou ``md:text-5xl`` é para outras mídias que não são mobile. O Tailwind é mobile-first (``text-6xl``)
- pra ativar o menu-burguer e outras coisas que precisam do JavaScript, pra facilitar, adiciona o cdn do script antes do ``<body>`` no arquivo "layout.tsx"
- ``npm i react-icons`` pra instalar os ícones do React | https://react-icons.github.io/react-icons/
    - pra usar o ícone escolhido no site, é só importar o ícone no arquivo, nesse caso em Title.tsx e incluir o componente ao lado de "Entrar". É possível estilizar o componente direto, exemplo: ``<FaUserCircle className="inline mb-1" /> Entrar`` 

### Exercícios para a próxima aula:
1. Acrescentar "Novo Cadastro" (link) na tela de login
2. Criar o form de cadastro de um novo cliente
