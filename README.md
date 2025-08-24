# Gerenciador de Senhas com Next.js e Arquitetura Limpa

Bem-vindo ao nosso mini curso! Este projeto foi desenhado para guiar você na construção de um gerenciador de senhas moderno e robusto para o front-end. Ao longo das aulas, vamos explorar conceitos avançados de desenvolvimento web, aplicando **Arquitetura Limpa** para criar um código organizado, escalável e de fácil manutenção.

## 🚀 Sobre o Projeto

O objetivo é desenvolver uma aplicação front-end completa onde os usuários podem salvar e gerenciar suas senhas de forma segura e intuitiva. Mais do que apenas construir uma aplicação, você aprenderá a estruturar seu projeto de uma maneira profissional, separando as responsabilidades e preparando-o para crescer.

## 🛠️ Tecnologias Utilizadas

Este projeto será construído com as seguintes tecnologias:

- **React.js:** Biblioteca para construir interfaces de usuário.
- **Next.js:** Framework React para produção, com foco em renderização e otimização.
- **TypeScript:** Superset do JavaScript que adiciona tipagem estática ao código.

## ✅ Pré-requisitos

Antes de começar, certifique-se de que você tem as seguintes ferramentas instaladas em sua máquina:

- [Node.js](https://nodejs.org/en/) (versão LTS recomendada)
- [Visual Studio Code](https://code.visualstudio.com/) (ou seu editor de código preferido)

## ▶️ Como Executar o Projeto

Para rodar este projeto localmente, siga os passos abaixo:

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/matheusa1/seinfo-front
    ```
2.  **Navegue até o diretório do projeto:**
    ```bash
    cd seinfo-front
    ```
3.  **Instale as dependências:**
    ```bash
    npm install
    ```
4.  **Inicie o servidor de desenvolvimento:**
    `bash
npm run dev
`
    Após executar os comandos, abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver a aplicação em funcionamento.

## 🗺️ Roadmap do Curso

O curso está dividido em módulos sequenciais, projetados para construir o projeto passo a passo. Começaremos com a configuração básica e, gradualmente, adicionaremos funcionalidades e conceitos mais avançados.

---

### **Módulo 1: Configuração do Projeto**

Vamos dar o pontapé inicial! Nesta fase, vamos configurar nosso ambiente de desenvolvimento do zero com Next.js e TypeScript. Também instalaremos todas as dependências essenciais que nos darão suporte ao longo do curso, como ESLint, Prettier e outras ferramentas para garantir a qualidade do código.

### **Módulo 2: Tela de Cadastro e a Camada `@core`**

Com o projeto configurado, começaremos a parte prática construindo a interface da tela de cadastro. O mais importante aqui será a introdução ao conceito de **Arquitetura Limpa**, onde criaremos nossa camada `@core` para isolar e proteger as regras de negócio da aplicação.

### **Módulo 3: Tela de Login**

Seguindo a mesma estrutura da tela de cadastro, desenvolveremos a interface de login. O foco será na reutilização de componentes e na criação de formulários interativos e com validação de dados.

### **Módulo 4: Implementando a Autenticação**

É hora de dar vida às telas! Conectaremos as interfaces de login e cadastro a um sistema de autenticação. Aprenderemos a gerenciar o estado do usuário (logado/deslogado) e a proteger o acesso às informações.

### **Módulo 5: Layout Padrão e Rotas Protegidas**

Para evitar a repetição de código e criar uma experiência de usuário consistente, desenvolveremos um layout padrão que será compartilhado entre as páginas da área logada. Aqui, implementaremos o conceito de **rotas protegidas**, garantindo que apenas usuários autenticados possam acessar certas partes da aplicação.

### **Módulo 6: Cadastro de Senhas**

Nesta etapa, construiremos a funcionalidade principal: o formulário para cadastrar novas senhas. Vamos conectar a interface com nossa camada de regras de negócio (`@core`) para validar e salvar os dados de forma segura.

### **Módulo 7: Listagem de Senhas**

Com as senhas sendo salvas, o próximo passo é exibi-las para o usuário. Criaremos a tela que lista todas as senhas cadastradas, focando em como buscar e apresentar esses dados de forma clara e organizada.

### **Módulo 8: Gerenciamento de Estado com React Query**

Para otimizar as chamadas à API e gerenciar o estado dos dados de forma eficiente, vamos integrar o **React Query (TanStack Query)**. Você aprenderá a usar o `QueryClient` para fazer o _fetching_, _caching_ e a atualização dos dados da aplicação de maneira declarativa e poderosa.

### **Módulo 9: Adicionando Paginação**

Quando a lista de senhas crescer, não queremos carregar tudo de uma vez. Neste módulo, implementaremos a paginação na nossa listagem, melhorando a performance e a usabilidade da aplicação.

### **Módulo 10: Refinando a Interface da Listagem**

Com a lógica funcionando, vamos focar nos detalhes. Melhoraremos o design e a interatividade de cada item da lista, adicionando funcionalidades como copiar a senha para a área de transferência e visualizar os detalhes.

### **Módulo 11: Implementando Temas (Light/Dark Mode)**

Para finalizar, daremos um toque profissional à nossa aplicação. Implementaremos um sistema de temas que permite ao usuário alternar entre os modos claro (light) e escuro (dark).

## ⚙️ Parte 1: Configuração e Estrutura do Projeto

Nesta primeira parte, vamos preparar todo o ambiente de desenvolvimento. O objetivo é criar uma base sólida e profissional, com ferramentas que garantem a qualidade e a consistência do nosso código desde o início.

---

### **1. Criando o Projeto com Next.js**

Vamos começar utilizando o comando oficial para criar um novo projeto Next.js.

**1.1. Execute o comando de criação:**

Use o seguinte comando no seu terminal. Optamos por `--use-pnpm` para usar o gerenciador de pacotes PNPM e `--empty` para começar com um projeto limpo.

```bash
  npx create-next-app@latest --use-pnpm --empty
```

**1.2. Selecione as seguintes opções:**

Durante a instalação, o Next.js fará algumas perguntas. Configure seu projeto com as seguintes respostas:

- **Would you like to use TypeScript?** › **Yes**
- **Would you like to use ESLint?** › **Yes**
- **Would you like to use Tailwind CSS?** › **No** (Vamos instalar e configurar manualmente a v4)
- **Would you like to use `src/` directory?** › **Yes**
- **Would you like to use App Router?** › **Yes**
- **Would you like to customize the default import alias?** › **No**

---

### **2. Garantindo a Qualidade do Código com ESLint e Prettier**

Antes de escrevermos a lógica da nossa aplicação, é fundamental configurar ferramentas de _linting_ e formatação. O **ESLint** nos ajuda a encontrar e corrigir problemas no código, enquanto o **Prettier** garante que todo o código siga um padrão de estilo consistente.

**2.1. Instale as dependências de desenvolvimento:**

```bash
  pnpm add -D prettier eslint-plugin-prettier eslint-config-prettier @typescript-eslint/eslint-plugin eslint-plugin-react-hooks @trivago/prettier-plugin-sort-imports eslint-plugin-unused-imports prettier-plugin-tailwindcss
```

**2.2. Configure o ESLint:**

Substitua o conteúdo do arquivo `eslint.config.mjs` pelo código abaixo. Ele integra as regras do Next.js com as do Prettier, garantindo que não haja conflitos.

```javascript
// eslint.config.mjs
import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { FlatCompat } from '@eslint/eslintrc'

import configPrettier from 'eslint-config-prettier'
import prettierRecommended from 'eslint-plugin-prettier/recommended'
import unusedImports from 'eslint-plugin-unused-imports'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

/** @type {import('eslint').Linter.FlatConfig[]} */
const eslintConfig = [
  ...compat.extends('next/core-web-vitals'),
  configPrettier,
  prettierRecommended,
  {
    plugins: {
      'unused-imports': unusedImports,
    },
    rules: {
      'no-unused-vars': 'off',
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],
    },
  },
]

export default eslintConfig
```

**2.3. Configure o Prettier:**

Crie um arquivo chamado `.prettierrc` na raiz do projeto e adicione as seguintes regras. Este arquivo define como nosso código será formatado.

```json
{
  "endOfLine": "lf",
  "semi": false,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "all",
  "useTabs": false,
  "importOrder": [
    "^@core/(.*)$",
    "^@/components/(.*)$",
    "^@/app/(.*)$",
    "^[./]"
  ],
  "importOrderSeparation": true,
  "importOrderSortSpecifiers": true,
  "plugins": [
    "@trivago/prettier-plugin-sort-imports",
    "prettier-plugin-tailwindcss"
  ],
  "tailwindFunctions": ["clsx", "cva", "cn"],
  "tailwindPreserveWhitespace": true
}
```

**2.4. Adicione o script de formatação:**

No arquivo `package.json`, adicione o script `format`. Isso nos permitirá formatar todo o projeto com um único comando.

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "format": "prettier --write ."
  }
}
```

---

### **3. Configurando o Tailwind CSS v4**

Vamos usar a versão mais recente do Tailwind CSS para estilização, que simplifica bastante a configuração.

**3.1. Instale o Tailwind e o PostCSS:**

```bash
  pnpm add tailwindcss @tailwindcss/postcss postcss
```

**3.2. Crie o arquivo de configuração do PostCSS:**

Na raiz do projeto, crie o arquivo `postcss.config.mjs` com o seguinte conteúdo:

```javascript
// postcss.config.mjs
const config = {
  plugins: {
    '@tailwindcss/postcss': {},
  },
}
export default config
```

**3.3. Configure os estilos globais:**

Dentro de `src/app/`, crie o arquivo `globals.css` e adicione a diretiva do Tailwind:

```css
/* src/app/globals.css */
@import 'tailwindcss';
```

**3.4. Importe os estilos no Layout:**

Finalmente, importe o arquivo `globals.css` no seu layout principal, o `src/app/layout.tsx`, para que os estilos sejam aplicados a toda a aplicação.

```tsx
// src/app/layout.tsx
import './globals.css'
// ... resto do código
```

---

### **4. Definindo a Tipografia com Next/Font**

Para otimizar o carregamento das fontes e garantir a melhor performance, usaremos o sistema integrado do Next.js.

**4.1. Importe e configure a fonte:**

No arquivo `src/app/layout.tsx`, vamos importar e configurar a fonte **Poppins** do Google Fonts.

```tsx
// src/app/layout.tsx
import './globals.css'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})
```

**4.2. Aplique a fonte ao projeto:**

Adicione a variável da fonte ao `className` da tag `<body>` para que ela seja aplicada globalmente.

```tsx
// src/app/layout.tsx
export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
```

---

Com nosso projeto configurado, estilizado e com as ferramentas de qualidade de código prontas, estamos prontos para começar a construir as funcionalidades

## 🏛️ Parte 2: Tela de Cadastro e Arquitetura Limpa

Com o projeto configurado, vamos construir nossa primeira funcionalidade: a tela de cadastro. Mais importante do que apenas criar a interface, vamos introduzir os conceitos de **Arquitetura Limpa**, separando as responsabilidades do nosso código em camadas bem definidas.

---

### **1. Estrutura da Página de Cadastro**

Seguindo o padrão do **App Router** do Next.js, cada rota é um diretório. Vamos criar a estrutura para a nossa página de cadastro.

**1.1. Crie o arquivo da página:**

Dentro da pasta `src/app/`, crie a seguinte estrutura de diretórios e o arquivo `page.tsx`:

```
src/app/auth/sign-up/page.tsx
```

**1.2. Adicione o conteúdo inicial:**

Este será o ponto de partida da nossa página.

```tsx
// src/app/auth/sign-up/page.tsx
import { FC } from 'react'

const SignUpPage: FC = () => {
  return (
    <div>
      <h1>Tela de cadastro</h1>
    </div>
  )
}

export default SignUpPage
```

---

### **2. Implementando a Biblioteca de Componentes (Shadcn/UI)**

Para construir uma interface bonita e acessível de forma rápida, usaremos a biblioteca **Shadcn/UI**. Ela é uma coleção de componentes reutilizáveis que podemos adicionar ao nosso projeto.

**2.1. Inicialize o Shadcn/UI no projeto:**

Execute o comando abaixo e siga as instruções no terminal. Você pode aceitar as opções padrão.

```bash
  pnpm dlx shadcn-ui@latest init
```

> **Dica:** Você pode usar o site [TweakCN](https://tweakcn.com/) para visualizar e customizar o tema dos componentes antes de configurar.

**2.2. Instale os componentes que vamos utilizar:**

Vamos adicionar os componentes de Card, Input, Formulário, Botão e Notificações (Sonner).

```bash
  pnpm dlx shadcn-ui@latest add card input form button sonner
```

---

### **3. Construindo a Interface de Cadastro**

Agora, vamos usar os componentes do Shadcn/UI para montar a estrutura visual da nossa tela.

**3.1. Atualize o arquivo da página (`page.tsx`):**

Vamos organizar a página para centralizar um card que conterá nosso formulário.

```tsx
// src/app/auth/sign-up/page.tsx
import { FC } from 'react'
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import SignUpForm from './components/sign-up-form' // Criaremos este componente a seguir

const SignUpPage: FC = () => {
  return (
    <section
      className={'flex h-screen w-screen items-center justify-center px-5'}
    >
      <Card className={'w-full max-w-md'}>
        <CardHeader>
          <CardTitle>Crie sua conta</CardTitle>
          <CardDescription>
            Insira suas informações para se cadastrar na plataforma.
          </CardDescription>
        </CardHeader>
        <SignUpForm />
      </Card>
    </section>
  )
}

export default SignUpPage
```

**3.2. Crie o componente do formulário:**

Para manter nosso código organizado, a lógica do formulário ficará em um componente separado. Crie o arquivo:

```
src/app/auth/sign-up/components/sign-up-form.tsx
```

---

### **4. Validação de Dados com Zod e React Hook Form**

Antes de preencher o formulário, vamos definir as regras de validação. Usaremos **Zod** para criar os esquemas de dados e **React Hook Form** para gerenciar o estado do formulário.

**4.1. Instale as bibliotecas:**

```bash
  pnpm add react-hook-form zod @hookform/resolvers
```

**4.2. Crie o Schema de Validação:**

O schema define o formato e as regras que os dados do formulário devem seguir. Crie a seguinte estrutura de pastas e o arquivo `sign-up.schema.ts`:

Adicione o seguinte conteúdo:

```ts
// src/@core/module/auth/schema/sign-up.schema.ts
import { z } from 'zod'

export const signUpSchema = z
  .object({
    name: z
      .string({
        error: 'O Nome deve ser um texto',
      })
      .min(3, { error: 'O nome deve ter ao menos 3 caracteres' })
      .nonempty({ error: 'O nome é obrigatório' }),
    email: z
      .email({ error: 'Informe um e-mail válido' })
      .nonempty({ error: 'O e-mail é obrigatório' }),
    password: z
      .string({ error: 'A senha deve ser um texto' })
      .min(6, 'A senha deve ter ao menos 6 caracteres')
      .nonempty({ error: 'A senha é obrigatória' }),
    confirmPassword: z
      .string({ error: 'A senha deve ser um texto' })
      .min(6, 'A senha deve ter ao menos 6 caracteres')
      .nonempty({ error: 'A senha é obrigatória' }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    error: 'As senhas não conferem',
    path: ['confirmPassword'], // Campo onde será exibido o erro
  })
  .transform((data) => ({
    // Remove o campo de confirmação de senha
    name: data.name,
    email: data.email,
    password: data.password,
  }))
```

> **Nota:** Estamos usando a sintaxe do **Zod v4+**, onde as mensagens de erro são passadas pela propriedade `{ error: '...' }`.

**4.3. Crie as Entidades de Tipos:**

Para garantir a tipagem em todo o nosso fluxo, vamos extrair os tipos do nosso schema. Crie o arquivo `sign-up.entity.ts`:

```ts
// src/@core/module/auth/domain/sign-up.entity.ts
import { z } from 'zod'
import { signUpSchema } from '@/@core/module/auth/schemas/sign-up.schema'

// Tipo dos dados de entrada do formulário (antes do .transform)
export type TSignUpInputSchema = z.input<typeof signUpSchema>

// Tipo dos dados de saída (após o .transform)
export type TSignUpOutputSchema = z.output<typeof signUpSchema>
```

---

### **5. Implementando o Formulário com a Lógica**

Agora, vamos construir o componente `sign-up-form.tsx` e conectá-lo ao nosso schema de validação. Mas, primeiro, vamos customizar alguns componentes do Shadcn/UI para atender exatamente às nossas necessidades.

**5.1. Customizando os Componentes de Formulário**

- **Botão com Propriedade `block`:** Vamos estender o componente `Button` padrão para incluir uma variante `block`, que o fará ocupar 100% da largura de seu contêiner. Isso é perfeito para os botões de ação em nosso formulário.

  **Substitua o conteúdo do arquivo `src/components/ui/button.tsx` pelo código abaixo:**

  ```tsx
  // src/components/ui/button.tsx
  import * as React from 'react'
  import { Slot } from '@radix-ui/react-slot'
  import { cva, type VariantProps } from 'class-variance-authority'

  import { cn } from '@/lib/utils'

  const buttonVariants = cva(
    "inline-flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
    {
      variants: {
        variant: {
          default:
            'bg-primary text-primary-foreground shadow-xs hover:bg-primary/90',
          destructive:
            'bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
          outline:
            'border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50',
          secondary:
            'bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80',
          ghost:
            'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50',
          link: 'text-primary underline-offset-4 hover:underline',
        },
        size: {
          default: 'h-9 px-4 py-2 has-[>svg]:px-3',
          sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
          lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
          icon: 'size-9',
        },
        block: {
          true: 'w-full',
          false: '',
        },
      },
      defaultVariants: {
        variant: 'default',
        size: 'default',
      },
    },
  )

  function Button({
    className,
    variant,
    size,
    block,
    asChild = false,
    ...props
  }: React.ComponentProps<'button'> &
    VariantProps<typeof buttonVariants> & {
      asChild?: boolean
    }) {
    const Comp = asChild ? Slot : 'button'

    return (
      <Comp
        data-slot="button"
        className={cn(buttonVariants({ variant, size, block, className }))}
        {...props}
      />
    )
  }

  export { Button, buttonVariants }
  ```

- **Input de Senha com Visibilidade:** Para melhorar a experiência do usuário, criaremos um componente `PasswordInput` que inclui um botão para mostrar ou esconder a senha.

  **Substitua o conteúdo do arquivo `src/components/ui/input.tsx` pelo código abaixo:**

  ```tsx
  // src/components/ui/input.tsx
  import * as React from 'react'
  import { useState } from 'react'

  import { cn } from '@/lib/utils'
  import { Button } from '@/components/ui/button'
  import { Eye, EyeOff } from 'lucide-react'

  function Input({ className, type, ...props }: React.ComponentProps<'input'>) {
    return (
      <input
        type={type}
        data-slot="input"
        className={cn(
          'flex h-9 w-full min-w-0 rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none selection:bg-primary selection:text-primary-foreground file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm dark:bg-input/30',
          'focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50',
          'aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40',
          className,
        )}
        {...props}
      />
    )
  }

  function PasswordInput({
    className,
    ...props
  }: React.ComponentProps<'input'>) {
    const [showPassword, setShowPassword] = useState<boolean>(false)

    return (
      <div className={'flex space-x-1'}>
        <input
          type={showPassword ? 'text' : 'password'}
          data-slot="input"
          className={cn(
            'flex h-9 w-full min-w-0 rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none selection:bg-primary selection:text-primary-foreground file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm dark:bg-input/30',
            'focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50',
            'aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40',
            className,
          )}
          {...props}
        />

        <Button
          type={'button'}
          onClick={() => setShowPassword((prev) => !prev)}
        >
          {showPassword ? <EyeOff /> : <Eye />}
        </Button>
      </div>
    )
  }
  export { Input, PasswordInput }
  ```

**5.2. Montando o Componente `sign-up-form.tsx`**

Com nossos componentes customizados prontos, podemos agora montar o formulário de cadastro.

**Adicione o seguinte código ao arquivo `src/app/auth/sign-up/components/sign-up-form.tsx`:**

```tsx
'use client'

import { FC } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  TSignUpInputSchema,
  TSignUpOutputSchema,
} from '@/@core/module/auth/domain/sign-up.entity'
import { signUpSchema } from '@/@core/module/auth/schemas/sign-up.schema'

import { CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input, PasswordInput } from '@/components/ui/input'

const SignUpForm: FC = () => {
  const form = useForm<TSignUpInputSchema>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  })

  const onHandleSubmit = (formData: TSignUpInputSchema) => {
    const parsedData: TSignUpOutputSchema = signUpSchema.parse(formData)
    console.log({ parsedData })
  }

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onHandleSubmit)}>
        <CardContent className={'flex flex-col space-y-3'}>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nome</FormLabel>
                <FormControl>
                  <Input placeholder="Seu nome completo" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>E-mail</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="seu@email.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Senha</FormLabel>
                <FormControl>
                  <PasswordInput placeholder="••••••••" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirme a senha</FormLabel>
                <FormControl>
                  <PasswordInput placeholder="••••••••" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </CardContent>
        <CardFooter className={'flex flex-col space-y-2'}>
          <Button type="submit" block>
            Cadastrar
          </Button>
          <Button type="button" block variant={'secondary'}>
            Já possuo uma conta
          </Button>
        </CardFooter>
      </form>
    </FormProvider>
  )
}

export default SignUpForm
```

---

### **6. Implementando a Camada `@core` (Arquitetura Limpa)**

Agora, vamos criar a lógica para de fato "cadastrar o usuário". Faremos isso na camada `@core`, que é isolada da nossa interface gráfica.

**6.1. Instale as dependências para Inversão de Dependência e HTTP:**

```bash
  pnpm add reflect-metadata inversify axios
```

**6.2. Configure o Cliente HTTP (Axios):**

Crie um arquivo para a nossa instância do Axios, que será responsável por todas as chamadas de API.

```ts
// src/@core/module/common/infra/http.ts
import axios, { AxiosInstance } from 'axios'

export const HTTP: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
})

// Interceptor para tratar respostas e erros de forma padronizada
HTTP.interceptors.response.use(
  (res) => res.data,
  (err) => Promise.reject(err.response?.data ?? err),
)
```

**6.3. Defina as Camadas da Arquitetura:**

- **Domínio (Contrato):** Define o que a funcionalidade deve fazer, sem se preocupar com a implementação.

  ```ts
  // src/@core/module/auth/domain/auth.gateway.ts
  import { TSignUpOutputSchema } from './sign-up.entity'

  export interface IAuthGateway {
    signUp(params: TSignUpOutputSchema): Promise<void>
  }
  ```

- **Aplicação (Caso de Uso):** Orquestra a execução da regra de negócio.

  ```ts
  // src/@core/module/auth/application/sign-up.use.case.ts
  import { IAuthGateway } from '../domain/auth.gateway'
  import { TSignUpOutputSchema } from '../domain/sign-up.entity'

  export class SignUpUseCase {
    constructor(private readonly gateway: IAuthGateway) {}

    execute(params: TSignUpOutputSchema): Promise<void> {
      return this.gateway.signUp(params)
    }
  }
  ```

- **Infraestrutura (Implementação):** É a implementação concreta do contrato, neste caso, usando HTTP.

  ```ts
  // src/@core/module/auth/infra/http.gateway.ts
  import { IAuthGateway } from '../domain/auth.gateway'
  import { TSignUpOutputSchema } from '../domain/sign-up.entity'
  import { AxiosInstance } from 'axios'

  export class AuthHttpGateway implements IAuthGateway {
    constructor(private readonly http: AxiosInstance) {}

    async signUp(params: TSignUpOutputSchema): Promise<void> {
      // O segundo argumento é o corpo da requisição (body)
      return await this.http.post('/auth/sign-up', params)
    }
  }
  ```

**6.4. Configure o Container de Inversão de Dependência:**

O container do Inversify irá "montar" nossas classes, conectando a interface (`IAuthGateway`) à sua implementação (`AuthHttpGateway`) sem que o caso de uso precise saber dos detalhes.

```ts
// src/@core/module/auth/infra/container.registry.ts
import 'reflect-metadata'
import { Container } from 'inversify'
import { AxiosInstance } from 'axios'
import { HTTP } from '../../common/infra/http'
import { AuthHttpGateway } from './http.gateway'
import { SignUpUseCase } from '../application/sign-up.use.case'
import { IAuthGateway } from '../domain/auth.gateway'

const Registry = {
  AxiosAdapter: Symbol.for('AxiosAdapter'),
  AuthGateway: Symbol.for('AuthGateway'),
  SignUpUseCase: Symbol.for('SignUpUseCase'),
}

const container = new Container()

// Binds
container.bind<AxiosInstance>(Registry.AxiosAdapter).toConstantValue(HTTP)

container.bind<IAuthGateway>(Registry.AuthGateway).toDynamicValue((context) => {
  return new AuthHttpGateway(context.container.get(Registry.AxiosAdapter))
})

container
  .bind<SignUpUseCase>(Registry.SignUpUseCase)
  .toDynamicValue((context) => {
    return new SignUpUseCase(context.container.get(Registry.AuthGateway))
  })

export const auth = {
  signUp: container.get<SignUpUseCase>(registry.SignUpUseCase),
}
```

---

### **7. Integrando a UI com a Camada `@core`**

Finalmente, vamos conectar o formulário ao nosso caso de uso usando **React Query** para gerenciar o estado da requisição (loading, error, success).

**7.1. Instale o React Query:**

```bash
  pnpm add @tanstack/react-query
```

**7.2. Configure o Provedor do React Query:**

Crie um contexto para encapsular nossa aplicação com o `QueryClient`.

```tsx
// src/app/context/react-query.context.tsx
'use client'
import { FC, ReactNode } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

type TReactQueryContextProvider = {
  children: ReactNode
}

const ReactQueryContextProvider: FC<TReactQueryContextProvider> = ({
  children,
}) => {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}

export default ReactQueryContextProvider
```

**7.3. Adicione os Provedores ao Layout Principal:**

Atualize o `src/app/layout.tsx` para incluir o `ReactQueryProvider` e o `<Toaster />` do Sonner, que exibirá as notificações.

```tsx
// src/app/layout.tsx
import { Poppins } from 'next/font/google'
import './globals.css'
import ReactQueryProvider from './context/react-query.context'
import { Toaster } from '@/components/ui/sonner'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className}`}>
        <ReactQueryContextProvider>
          {children}
          <Toaster richColors position={'top-center'} closeButton />
        </ReactQueryContextProvider>
      </body>
    </html>
  )
}
```

**7.4. Finalize a Lógica de Submissão do Formulário:**

Agora, no componente `sign-up-form.tsx`, vamos importar e usar o `useMutation` do React Query para chamar nosso caso de uso e lidar com as respostas de sucesso e erro.

```tsx
// src/app/auth/sign-up/components/sign-up-form.tsx

// ... (imports)
import { useMutation } from '@tanstack/react-query'
import { auth } from '@/@core/module/auth/infra/container.registry'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'

const SignUpForm: FC = () => {
  const router = useRouter()
  const form = useForm<TSignUpInputSchema>(/* ... */)

  const { mutate, isPending } = useMutation({
    mutationFn: (params: TSignUpOutputSchema) => auth.signUp.execute(params),
    onSuccess: async () => {
      toast.success('Conta criada com sucesso!')
      form.reset()
      await router.push('/auth/sign-in')
    },
    onError: (err) => {
      toast.error(err.message ?? 'Ocorreu um erro, tente novamente.')
    },
  })

  const onHandleSubmit = (formData: TSignUpInputSchema) => {
    const parsedData = signUpSchema.parse(formData)
    mutate(parsedData)
  }

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onHandleSubmit)}>
        {/* ... (CardContent com os FormFields) ... */}
        <CardFooter>
          <Button type="submit" block disabled={isPending}>
            Cadastrar
          </Button>
          {/* ... */}
        </CardFooter>
      </form>
    </FormProvider>
  )
}
```

## 🚪 Parte 3: Implementando a Tela de Login

Com o fluxo de cadastro finalizado, vamos agora construir a tela de login. O processo será muito similar, aproveitando a estrutura e a arquitetura que já criamos.

---

### **1. Criando a Estrutura da Página de Login**

Assim como fizemos no cadastro, vamos criar a rota e o componente principal da página de login.

**1.1. Crie o arquivo da página:**

Crie a estrutura de diretórios e o arquivo `page.tsx` para a rota de login:
O código é quase idêntico ao da página de cadastro, apenas alterando os textos do cabeçalho.

```tsx
// src/app/auth/sign-in/page.tsx
import { FC } from 'react'
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import SignInForm from './components/sign-in-form' // Criaremos este componente

const SignInPage: FC = () => {
  return (
    <section
      className={'flex h-screen w-screen items-center justify-center px-5'}
    >
      <Card className={'w-full max-w-md'}>
        <CardHeader>
          <CardTitle>Entre com sua conta</CardTitle>
          <CardDescription>
            Preencha seu e-mail e credenciais para entrar na sua conta
          </CardDescription>
        </CardHeader>
        <SignInForm />
      </Card>
    </section>
  )
}

export default SignInPage
```

---

### **2. Definindo o Schema e a Entidade de Login**

O formulário de login é mais simples que o de cadastro. Ele precisa apenas de `email` e `password`.

**2.1. Crie o Schema de Validação do Login:**

Crie o arquivo `sign-in.schema.ts` na pasta de schemas:

```ts
// src/@core/module/auth/schema/sign-in.schema.ts
import { z } from 'zod'

export const signInSchema = z.object({
  email: z.email({ error: 'Informe um e-mail válido' }),
  password: z
    .string()
    .min(6, { error: 'A senha deve ter no mínimo 6 caracteres' }),
})
```

**2.2. Crie a Entidade de Tipos do Login:**

Agora, crie o arquivo de entidade para extrair os tipos do schema e definir a tipagem da resposta da API.

```ts
// src/@core/module/auth/domain/sign-in.entity.ts
import { z } from 'zod'
import { signInSchema } from '@/@core/module/auth/schemas/sign-in.schema'

export type TSignInSchema = z.infer<typeof signInSchema>

export type TSignInResponse = {
  access_token: string
}
```

---

### **3. Estendendo a Camada `@core` para Autenticação**

Vamos adicionar a funcionalidade de login à nossa arquitetura, seguindo os mesmos padrões da funcionalidade de cadastro.

**3.1. Atualize o Gateway de Autenticação:**

Adicione o método `signIn` à interface `IAuthGateway`.

```ts
// src/@core/module/auth/domain/auth.gateway.ts
import { TSignUpOutputSchema } from '@/@core/module/auth/domain/sign-up.entity'
import {
  TSignInResponse,
  TSignInSchema,
} from '@/@core/module/auth/domain/sign-in.entity'

export interface IAuthGateway {
  signUp(params: TSignUpOutputSchema): Promise<void>
  signIn(params: TSignInSchema): Promise<TSignInResponse>
}
```

**3.2. Crie o Caso de Uso de Login:**

Crie o arquivo `sign-in.use.case.ts` na pasta de `application`.

```ts
// src/@core/module/auth/application/sign-in.use.case.ts
import { IAuthGateway } from '@/@core/module/auth/domain/auth.gateway'
import {
  TSignInResponse,
  TSignInSchema,
} from '@/@core/module/auth/domain/sign-in.entity'

export class SignInUseCase {
  constructor(private readonly gateway: IAuthGateway) {}

  execute(params: TSignInSchema): Promise<TSignInResponse> {
    return this.gateway.signIn(params)
  }
}
```

**3.3. Implemente o `signIn` no `AuthHttpGateway`:**

Adicione a implementação do método `signIn` no gateway HTTP.

```ts
// src/@core/module/auth/infra/auth-http.gateway.ts
// ... (imports)
import { paths } from '@/@core/module/auth/infra/key' // Supondo que este arquivo contenha os paths da API

export class AuthHttpGateway implements IAuthGateway {
  constructor(private readonly http: AxiosInstance) {}

  async signUp(params: TSignUpOutputSchema): Promise<void> {
    return await this.http.post(paths.signUp, params)
  }

  async signIn(params: TSignInSchema): Promise<TSignInResponse> {
    return await this.http.post(paths.signIn, params)
  }
}
```

**3.4. Registre o `SignInUseCase` no Container:**

Finalmente, registre o novo caso de uso no container de injeção de dependência.

```ts
// src/@core/module/auth/infra/container.registry.ts
import 'reflect-metadata'
import { HTTP } from '@/@core/module/common/infra/http'
import { AuthHttpGateway } from './http.gateway'
import { Container } from 'inversify'
import { AxiosInstance } from 'axios'
import { SignUpUseCase } from '../application/sign-up.use.case'
import { SignInUseCase } from '../application/sign-in.use.case'

const registry = {
  HTTP: Symbol.for('HTTP'),
  AuthHttpGateway: Symbol.for('AuthHttpGateway'),

  SignUpUseCase: Symbol.for('SignUpUseCase'),
  SignInUseCase: Symbol.for('SignInUseCase'),
}

const container = new Container()

container.bind<AxiosInstance>(registry.HTTP).toConstantValue(HTTP)
container
  .bind<AuthHttpGateway>(registry.AuthHttpGateway)
  .toDynamicValue((context) => {
    return new AuthHttpGateway(context.get(registry.HTTP))
  })
container
  .bind<SignUpUseCase>(registry.SignUpUseCase)
  .toDynamicValue((context) => {
    return new SignUpUseCase(context.get(registry.AuthHttpGateway))
  })
container
  .bind<SignInUseCase>(registry.SignInUseCase)
  .toDynamicValue((context) => {
    return new SignInUseCase(context.get(registry.AuthHttpGateway))
  })

export const auth = {
  signUp: container.get<SignUpUseCase>(registry.SignUpUseCase),
  signIn: container.get<SignInUseCase>(registry.SignInUseCase),
}
```

---

### **4. Implementando o Formulário de Login**

Agora, com toda a lógica da camada `@core` pronta, podemos criar o componente do formulário de login e conectá-lo ao nosso `SignInUseCase`.

**Crie o arquivo `sign-in-form.tsx` e adicione o seguinte código:**

```tsx
'use client'

import { FC } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input, PasswordInput } from '@/components/ui/input'
import { useMutation } from '@tanstack/react-query'
import { auth } from '@/@core/module/auth/infra/container.registry'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'
import { TSignInSchema } from '@/@core/module/auth/domain/sign-in.entity'
import { signInSchema } from '@/@core/module/auth/schema/sign-in.schema'

const SignInForm: FC = () => {
  const form = useForm<TSignInSchema>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const { mutate, isPending } = useMutation({
    mutationKey: ['signIn'],
    mutationFn: (params: TSignInSchema) => auth.signIn.execute(params),
  })

  const router = useRouter()

  const onHandleSubmit = (formData: TSignInSchema) => {
    mutate(formData, {
      onError: (err: Error) => {
        toast.error(err.message)
      },
      onSuccess: async () => {
        toast.success('Login realizado com sucesso')
        form.reset()
        router.push('/')
      },
    })
  }

  return (
    <FormProvider {...form}>
      <form
        onSubmit={form.handleSubmit(onHandleSubmit)}
        className={'flex flex-col space-y-4'}
      >
        <CardContent className={'flex flex-col space-y-2'}>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>E-mail</FormLabel>
                <FormControl>
                  <Input placeholder="seu@email.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Senha</FormLabel>
                <FormControl>
                  <PasswordInput placeholder="••••••••" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </CardContent>
        <CardFooter className={'flex flex-col space-y-2'}>
          <Button type="submit" block disabled={isPending}>
            Entrar
          </Button>
          <Button
            onClick={() => router.push('/auth/sign-up')}
            type={'button'}
            block
            variant={'secondary'}
          >
            Criar uma conta
          </Button>
        </CardFooter>
      </form>
    </FormProvider>
  )
}

export default SignInForm
```

## 🔐 Parte 4: Gerenciamento de Autenticação e Rotas Protegidas

Com os fluxos de cadastro e login funcionais, o próximo passo é gerenciar a sessão do usuário. Nesta seção, vamos:

1.  Salvar o token de autenticação em cookies.
2.  Criar um Contexto React para gerenciar o estado de autenticação globalmente.
3.  Proteger rotas usando um Middleware do Next.js.
4.  Buscar e armazenar as informações do usuário logado.

---

### **1. Instalando a Biblioteca de Cookies**

Para manipular os cookies do navegador de forma simples e segura, usaremos a biblioteca `js-cookie`.

**1.1. Instale a biblioteca e suas tipagens:**

```bash
    pnpm add js-cookie
    pnpm add -D @types/js-cookie
```

---

### **2. Criando o Contexto de Autenticação**

Um Contexto React (`Context`) é a maneira ideal de compartilhar o estado de autenticação (como o token e as informações do usuário) entre todos os componentes da nossa aplicação sem precisar passar `props` manualmente.

**2.1. Crie o arquivo do contexto:**

```
src/app/context/auth.context.tsx
```

**2.2. Implemente o `AuthContextProvider`:**

Este provedor conterá a lógica para `signIn` (salvar o token) e `signOut` (remover o token).

```tsx
// src/app/context/auth.context.tsx
'use client'

import {
  createContext,
  FC,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
} from 'react'

import Cookie from 'js-cookie'
import { useRouter } from 'next/navigation'

type TAuthContext = {
  signIn: (token: string) => void
  signOut: () => void
}

const AuthContext = createContext({} as TAuthContext)

type TAuthContextProvider = {
  children: ReactNode
}

export const AuthContextProvider: FC<TAuthContextProvider> = ({ children }) => {
  const router = useRouter()

  const signIn = useCallback(
    (token: string) => {
      Cookie.set('token', token, {
        sameSite: 'strict',
      })
      router.push('/')
    },
    [router],
  )
  const signOut = useCallback(() => {
    Cookie.remove('token')
    router.push('/auth/sign-in')
  }, [router])

  const getToken = useCallback(() => {
    return Cookie.get('token')
  }, [])

  useEffect(() => {
    const token = getToken()

    if (token) {
      signOut()
    }
  }, [getToken, signOut])

  const value: TAuthContext = useMemo(
    () => ({
      signIn,
      signOut,
    }),
    [signIn, signOut],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('useAuth must be used within an AuthContextProvider')
  }

  return context
}
```

**2.3. Adicione o provedor ao Layout principal:**

Envolva a aplicação com o `AuthContextProvider` para que todos os componentes filhos tenham acesso a ele.

```tsx
// src/app/layout.tsx
<html lang="en">
  <body className={`${poppins.className}`}>
    <ReactQueryContextProvider>
      <AuthContextProvider>
        {children}
        <Toaster richColors position={'top-right'} closeButton />
      </AuthContextProvider>
    </ReactQueryContextProvider>
  </body>
</html>
```

**2.4. Integre o `signIn` ao Formulário de Login:**

Agora, no `sign-in-form.tsx`, vamos usar o hook `useAuth` para chamar a função `signIn` quando a API retornar o token com sucesso.

```tsx
// src/app/auth/sign-in/components/sign-in-form.tsx

// ... (imports)
import { useAuth } from '@/app/context/auth.context'

const SignInForm: FC = () => {
  const { signIn } = useAuth()
  const { mutate, isPending } = useMutation(/*...*/)

  const onHandleSubmit = (formData: TSignInSchema) => {
    mutate(formData, {
      onError: (err: Error) => {
        toast.error(err.message)
      },
      onSuccess: async (response) => {
        toast.success('Login realizado com sucesso')
        signIn(response.access_token)
        form.reset()
      },
    })
  }
  // ... (resto do componente)
}
```

---

### **3. Protegendo Rotas com Middleware**

O Middleware do Next.js nos permite executar código antes de uma requisição ser completada. Vamos usá-lo para verificar a presença do token e redirecionar o usuário conforme necessário.

**Crie o arquivo `middleware.ts` na raiz do seu projeto:**

```ts
// middleware.ts
import { NextRequest, NextResponse } from 'next/server'

export const middleware = async (request: NextRequest) => {
  const { pathname } = request.nextUrl

  const homeUrl = new URL('/', request.url)
  const signInUrl = new URL('/auth/sign-in', request.url)

  const token = request.cookies.get('token')

  // Se não há token e o usuário tenta acessar a home, redirecione para o login
  if (!token && pathname === '/') {
    return NextResponse.redirect(signInUrl)
  }

  // Se há token e o usuário tenta acessar as rotas de autenticação, redirecione para a home
  if (token && pathname.includes('/auth')) {
    return NextResponse.redirect(homeUrl)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/auth/:path*', '/'],
}
```

Com isso, a rota `/` (home) agora é privada, e as rotas `/auth/*` só são acessíveis para usuários deslogados.

---

### **4. Buscando e Armazenando Dados do Usuário**

Após o login, precisamos buscar os dados do usuário (nome, email, etc.) e armazená-los no nosso `AuthContext`.

**4.1. Crie o Módulo `user` na Camada `@core`:**

Vamos criar uma nova estrutura de arquivos para as funcionalidades relacionadas ao usuário.

- **Entidade (`user.entity.ts`):**

  ```ts
  // src/@core/module/user/domain/user.entity.ts
  export type TUser = {
    sub: string
    id: string
    name: string
    email: string
    passkey: string
    createdAt: string
    updatedAt: string
  }
  ```

- **Gateway (`user.gateway.ts`):**

  ```ts
  // src/@core/module/user/domain/user.gateway.ts
  import { TUser } from '@/@core/module/user/domain/user.entity'

  export interface IUserGateway {
    getUserInfo(): Promise<TUser>
  }
  ```

- **Caso de Uso (`get-user-info.use.case.ts`):**

  ```ts
  // src/@core/module/user/application/get-user-info.use.case.ts
  import { IUserGateway } from '@/@core/module/user/domain/user.gateway'

  export class GetUserInfoUseCase {
    constructor(private readonly gateway: IUserGateway) {}

    async execute() {
      return await this.gateway.getUserInfo()
    }
  }
  ```

- **Infraestrutura (Gateway HTTP, Keys e Container):**

  ```ts
  // src/@core/module/user/infra/key.ts
  export const paths = {
    getUserInfo: '/auth/profile',
  }
  ```

  ```ts
  // src/@core/module/user/infra/http.gateway.ts
  import { IUserGateway } from '@/@core/module/user/domain/user.gateway'
  import { AxiosInstance } from 'axios'
  import { TUser } from '@/@core/module/user/domain/user.entity'
  import { paths } from '@/@core/module/user/infra/key'

  export class UserHttpGateway implements IUserGateway {
    constructor(private readonly http: AxiosInstance) {}

    async getUserInfo(): Promise<TUser> {
      return await this.http.get(paths.getUserInfo)
    }
  }
  ```

  ```ts
  // src/@core/module/user/infra/container.registry.ts
  import 'reflect-metadata'
  import { Container } from 'inversify'
  import { HTTP } from '@/@core/module/common/infra/http'
  import { UserHttpGateway } from './http.gateway'
  import { GetUserInfoUseCase } from '../application/get-user-info.use.case'
  import { IUserGateway } from '../domain/user.gateway'

  export const UserRegistry = {
    HTTP: Symbol.for('HTTP'),
    UserGateway: Symbol.for('UserGateway'),
    GetUserInfoUseCase: Symbol.for('GetUserInfoUseCase'),
  }

  export const userContainer = new Container()

  userContainer.bind(UserRegistry.HTTP).toConstantValue(HTTP)

  userContainer
    .bind<IUserGateway>(UserRegistry.UserGateway)
    .toDynamicValue((context) => {
      return new UserHttpGateway(context.container.get(UserRegistry.HTTP))
    })

  userContainer
    .bind<GetUserInfoUseCase>(UserRegistry.GetUserInfoUseCase)
    .toDynamicValue((context) => {
      return new GetUserInfoUseCase(
        context.container.get(UserRegistry.UserGateway),
      )
    })

  export const user = {
    getUserInfo: userContainer.get<GetUserInfoUseCase>(
      UserRegistry.GetUserInfoUseCase,
    ),
  }
  ```

**4.2. Injete o Token nas Requisições HTTP:**

Precisamos que todas as chamadas à API enviem o token de autenticação. Faremos isso com um _interceptor_ do Axios.

**Adicione o seguinte trecho ao arquivo `http.ts`:**

```ts
// src/@core/module/common/infra/http.ts
import axios, { AxiosInstance } from 'axios'
import Cookies from 'js-cookie'

export const HTTP: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
})

// Interceptor de Requisição
HTTP.interceptors.request.use((req) => {
  const token = Cookies.get('token')

  if (token) {
    req.headers.Authorization = `Bearer ${token}`
  }
  return req
})

// Interceptor de Resposta
HTTP.interceptors.response.use(
  (res) => res.data,
  (err) => Promise.reject(err.response?.data ?? err),
)
```

**4.3. Atualize o `AuthContext` para buscar e armazenar o usuário:**

Agora, vamos modificar o contexto para, além de salvar o token, também buscar e armazenar as informações do usuário.

**Substitua o conteúdo de `auth.context.tsx` pelo código abaixo:**

```tsx
// src/app/context/auth.context.tsx
'use client'

import {
  createContext,
  FC,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'

import Cookie from 'js-cookie'
import { usePathname, useRouter } from 'next/navigation'
import { TUser } from '@/@core/module/user/domain/user.entity'
import { user } from '@/@core/module/user/infra/container.registry'

type TAuthContext = {
  signIn: (token: string) => void
  signOut: () => void
  userInfo?: TUser
}

const AuthContext = createContext({} as TAuthContext)

type TAuthContextProvider = {
  children: ReactNode
}

export const AuthContextProvider: FC<TAuthContextProvider> = ({ children }) => {
  const [userInfo, setUserInfo] = useState<TUser>()
  const router = useRouter()
  const pathname = usePathname()

  const signIn = useCallback(
    async (token: string) => {
      Cookie.set('token', token, {
        sameSite: 'strict',
      })

      const userResponse = await user.getUserInfo.execute()
      setUserInfo(userResponse)

      router.push('/')
    },
    [router],
  )

  const signOut = useCallback(() => {
    Cookie.remove('token')
    setUserInfo(undefined)
    router.push('/auth/sign-in')
  }, [router])

  const handleGetUserInfo = useCallback(async () => {
    try {
      const userResponse = await user.getUserInfo.execute()
      setUserInfo(userResponse)
    } catch (error) {
      signOut() // Se falhar ao buscar o usuário (token inválido), desloga
    }
  }, [signOut])

  useEffect(() => {
    const token = getToken()

    if (token) {
      signOut()
    }
  }, [getToken, signOut])

  const value: TAuthContext = useMemo(
    () => ({
      signIn,
      signOut,
      userInfo,
    }),
    [signIn, signOut, userInfo],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('useAuth must be used within an AuthContextProvider')
  }

  return context
}
```

---

### **5. Testando o Fluxo de Logout**

Para verificar se tudo está funcionando, vamos adicionar um botão de logout na página inicial.

**Atualize o arquivo `src/app/page.tsx`:**

```tsx
// src/app/page.tsx
'use client'

import { useAuth } from '@/app/context/auth.context'
import { Button } from '@/components/ui/button'

export default function Home() {
  const { signOut, userInfo } = useAuth()

  return (
    <main className={'p-8'}>
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">
          Bem-vindo, {userInfo?.name ?? 'Usuário'}!
        </h1>
        <Button onClick={signOut} variant="destructive">
          Sair
        </Button>
      </div>
    </main>
  )
}
```

Agora você pode testar o ciclo completo: fazer login, ser redirecionado para a home, ver seu nome, e fazer logout para ser redirecionado de volta para a tela de login.

## 🔑 Parte 6: Cadastro e Criptografia de Credenciais

Nesta seção, vamos construir a funcionalidade principal do nosso gerenciador: salvar novas credenciais. O diferencial aqui será a segurança: vamos criptografar a senha no lado do cliente (no navegador) antes de enviá-la para o backend, garantindo que a senha nunca trafegue ou seja armazenada em texto plano.

---

### **1. Definindo a Regra de Negócio (`@core`)**

Como sempre, começamos pela camada de regra de negócio, definindo as estruturas de dados e os contratos da nossa nova funcionalidade.

**1.1. Crie o Schema e a Entidade da Credencial:**

- **Schema de Criação (`create.schema.ts`):** Define as regras de validação para o formulário de nova credencial.

  ```ts
  // src/@core/module/credential/schema/create.schema.ts
  import { z } from 'zod'

  export const createCredentialSchema = z.object({
    name: z
      .string({ error: 'O nome precisa ser um texto' })
      .min(1, { error: 'Informe um nome' }),
    password: z.string({ error: 'A senha precisa ser um texto ' }).optional(),
    username: z
      .string({ error: 'O nome de usuário precisa ser um texto' })
      .optional(),
    url: z
      .url({ error: 'Informe uma url válida' })
      .or(z.literal(''))
      .optional(),
    notes: z.string({ error: 'As notas precisam ser um texto' }).optional(),
  })
  ```

- **Entidade (`credential.entity.ts`):** Define as tipagens que usaremos na aplicação.

  ```ts
  // src/@core/module/credential/domain/credential.entity.ts
  import { z } from 'zod'
  import { createCredentialSchema } from '@/@core/module/credential/schema/create.schema'

  export type TCredential = {
    id: string
    userId: string
    name: string
    password?: string
    username?: string
    url?: string
    notes?: string
    createdAt: string
    updatedAt: string
  }

  export type TCreateCredential = z.infer<typeof createCredentialSchema>
  ```

**1.2. Crie o Gateway e o Caso de Uso:**

- **Interface do Gateway (`credential.gateway.ts`):** O contrato que define as ações possíveis.

  ```ts
  // src/@core/module/credential/domain/credential.gateway.ts
  import {
    TCreateCredential,
    TCredential,
  } from '@/@core/module/credential/domain/credential.entity'

  export interface ICredentialGateway {
    create(params: TCreateCredential): Promise<TCredential>
  }
  ```

---

### **2. Implementando a Criptografia no Cliente**

Antes de finalizar o caso de uso, precisamos da lógica de criptografia. O processo será:

1.  Gerar uma chave de criptografia segura (KDF) a partir da senha mestra do usuário.
2.  Usar essa chave para criptografar a senha da nova credencial usando o algoritmo AES-256-GCM.

**2.1. Gerando a Chave de Criptografia (KDF):**

Usaremos a função `pbkdf2Sync` do módulo nativo `crypto` do Node.js para criar uma chave forte e segura.

- **Crie o Caso de Uso `GenerateKdfUseCase`:**

  ```ts
  // src/@core/module/auth/application/generate-kdf.use.case.ts
  import { pbkdf2Sync } from 'node:crypto'

  export class GenerateKdfUseCase {
    execute(password: string, passkey: string): Buffer {
      // Gera uma chave de 32 bytes usando 10.000 de iterações de SHA512
      return pbkdf2Sync(password, passkey, 10000, 32, 'sha512')
    }
  }
  ```

**2.2. Armazenando a KDF no `AuthContext`:**

A KDF gerada no login precisa ficar disponível na aplicação. Vamos armazená-la no `AuthContext`.

- **Atualize o `auth.context.tsx`:**

  ```tsx
  // src/app/context/auth.context.tsx
  // ... (imports)
  import { auth } from '@/@core/module/auth/infra/container.registry' // Adicione esta importação

  type TAuthContext = {
    signIn: (token: string, password: string) => void // Adicione o parâmetro password
    signOut: () => void
    userInfo?: TUser
    KDF?: Buffer // Adicione o estado da KDF
  }

  // ...

  export const AuthContextProvider: FC<TAuthContextProvider> = ({
    children,
  }) => {
    const [userInfo, setUserInfo] = useState<TUser>()
    const [KDF, setKDF] = useState<Buffer>() // Adicione o estado
    const router = useRouter()

    const signIn = useCallback(
      async (token: string, password: string) => {
        // Receba a senha mestre
        Cookie.set('token', token, { sameSite: 'strict' })

        const userResponse = await user.getUserInfo.execute()
        setUserInfo(userResponse)

        // Gere e armazene a KDF
        const generatedKDF = auth.generateKdf.execute(
          password,
          userResponse.passkey,
        )
        setKDF(generatedKDF)

        router.push('/')
      },
      [router],
    )

    const signOut = useCallback(() => {
      Cookie.remove('token')
      setUserInfo(undefined)
      setKDF(undefined) // Limpe a KDF no logout
      router.push('/auth/sign-in')
    }, [router])

    // ... (resto do código, atualize o `value` do `useMemo`)
    const value: TAuthContext = useMemo(
      () => ({
        signIn,
        signOut,
        userInfo,
        KDF,
      }),
      [signIn, signOut, userInfo, KDF],
    )

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
  }
  ```

- **Ajuste a chamada `signIn` no Formulário de Login:**
  ```tsx
  // src/app/auth/sign-in/components/sign-in-form.tsx
  const onHandleSubmit = (formData: TSignInSchema) => {
    mutate(formData, {
      // ...
      onSuccess: async (response) => {
        toast.success('Login realizado com sucesso')
        // Passe a senha mestre para a função signIn
        signIn(response.access_token, formData.password)
        form.reset()
      },
    })
  }
  ```

**2.3. Criptografando a Senha:**

Agora, criamos o caso de uso que efetivamente cifra a senha da credencial.

- **Crie o `CryptPasswordUseCase`:**

  ```ts
  // src/@core/module/credential/application/crypt-password.use.case.ts
  import crypto from 'crypto'

  export class CryptPasswordUseCase {
    execute(password: string, KDF: Buffer): string {
      const iv = crypto.randomBytes(16) // Gera um vetor de inicialização aleatório
      const cipher = crypto.createCipheriv('aes-256-gcm', KDF, iv)
      let encrypted = cipher.update(password, 'utf8', 'hex')
      encrypted += cipher.final('hex')

      const authTag = cipher.getAuthTag()

      // Retorna uma string formatada contendo todas as partes necessárias para decifrar
      return `${iv.toString('hex')}:${authTag.toString('hex')}:${encrypted}`
    }
  }
  ```

**2.4. Finalizando o Caso de Uso `CreateUseCase`:**

Com a lógica de criptografia pronta, podemos finalizar o caso de uso de criação, que irá criptografar a senha antes de enviá-la ao gateway.

- **Atualize o `create.use.case.ts`:**

  ```ts
  // src/@core/module/credential/application/create.use.case.ts
  import { ICredentialGateway } from '@/@core/module/credential/domain/credential.gateway'
  import {
    TCreateCredential,
    TCredential,
  } from '@/@core/module/credential/domain/credential.entity'
  import { CryptPasswordUseCase } from '@/@core/module/credential/application/crypt-password.use.case'

  export class CreateUseCase {
    crypt = new CryptPasswordUseCase()

    constructor(private readonly gateway: ICredentialGateway) {}

    execute(params: TCreateCredential, KDF: Buffer): Promise<TCredential> {
      // Criptografa a senha somente se ela existir
      const cryptedPassword =
        params.password && this.crypt.execute(params.password, KDF)

      return this.gateway.create({
        ...params,
        password: cryptedPassword,
      })
    }
  }
  ```

---

### **3. Implementando a Camada de Infraestrutura**

Agora, conectamos nossa regra de negócio com o mundo exterior (API e injeção de dependência).

- **Keys (`key.ts`):**

  ```ts
  // src/@core/module/credential/infra/key.ts
  export const paths = {
    create: '/credential',
  }
  ```

- **Gateway HTTP (`http.gateway.ts`):**

  ```ts
  // src/@core/module/credential/infra/http.gateway.ts
  import { ICredentialGateway } from '@/@core/module/credential/domain/credential.gateway'
  import { AxiosInstance } from 'axios'
  import {
    TCreateCredential,
    TCredential,
  } from '@/@core/module/credential/domain/credential.entity'
  import { paths } from '@/@core/module/credential/infra/key'

  export class CredentialHttpGateway implements ICredentialGateway {
    constructor(private readonly http: AxiosInstance) {}

    async create(params: TCreateCredential): Promise<TCredential> {
      return this.http.post(paths.create, params)
    }
  }
  ```

- **Container de Injeção (`container.registry.ts`):**

  ```ts
  // src/@core/module/credential/infra/container.registry.ts
  import 'reflect-metadata'
  import { CredentialHttpGateway } from './http.gateway'
  import { Container } from 'inversify'
  import { AxiosInstance } from 'axios'
  import { HTTP } from '@/@core/module/common/infra/http'
  import { CreateUseCase } from '../application/create.use.case'
  import { ICredentialGateway } from '../domain/credential.gateway'

  const registry = {
    HTTP: Symbol.for('HTTP'),
    CredentialGateway: Symbol.for('CredentialGateway'),
    CreateUseCase: Symbol.for('CreateUseCase'),
  }

  const container = new Container()

  container.bind<AxiosInstance>(registry.HTTP).toConstantValue(HTTP)

  container
    .bind<ICredentialGateway>(registry.CredentialGateway)
    .toDynamicValue((context) => {
      return new CredentialHttpGateway(context.container.get(registry.HTTP))
    })
  container
    .bind<CreateUseCase>(registry.CreateUseCase)
    .toDynamicValue((context) => {
      return new CreateUseCase(
        context.container.get(registry.CredentialGateway),
      )
    })

  export const credential = {
    create: container.get<CreateUseCase>(registry.CreateUseCase),
  }
  ```

---

### **4. Construindo a Interface de Criação**

Com toda a lógica pronta, vamos criar a interface para o usuário adicionar novas senhas.

**4.1. Instale os Componentes de UI:**

```bash
  pnpm dlx shadcn-ui@latest add dialog textarea
```

**4.2. Crie o Modal e o Formulário:**

- **Componente do Formulário (`password-form.tsx`):**

  ```tsx
  // src/app/(dashboard)/components/password-form.tsx
  'use client'

  import { Dispatch, FC, SetStateAction } from 'react'
  import { FormProvider, useForm } from 'react-hook-form'
  import { TCreateCredential } from '@/@core/module/credential/domain/credential.entity'
  import { zodResolver } from '@hookform/resolvers/zod'
  import { createCredentialSchema } from '@/@core/module/credential/schema/create.schema'
  import {
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from '@/components/ui/form'
  import { Input, PasswordInput } from '@/components/ui/input'
  import { Textarea } from '@/components/ui/textarea'
  import { Button } from '@/components/ui/button'
  import { DialogClose } from '@radix-ui/react-dialog'
  import { useMutation } from '@tanstack/react-query'
  import { credential } from '@/@core/module/credential/infra/container.registry'
  import { useAuth } from '@/app/context/auth.context'
  import { toast } from 'sonner'

  type TPasswordForm = {
    setIsOpenModal: Dispatch<SetStateAction<boolean>>
  }

  const PasswordForm: FC<TPasswordForm> = ({ setIsOpenModal }) => {
    const { KDF } = useAuth()

    const form = useForm<TCreateCredential>({
      resolver: zodResolver(createCredentialSchema),
      defaultValues: {
        name: '',
        password: '',
        url: '',
        notes: '',
        username: '',
      },
    })

    const { mutate, isPending } = useMutation({
      mutationKey: ['credentialForm'],
      mutationFn: (params: TCreateCredential) =>
        credential.create.execute(params, KDF!),
    })

    const onHandleSubmit = (data: TCreateCredential) => {
      if (!KDF) {
        toast.error('Chave de segurança não encontrada. Faça login novamente.')
        return
      }
      mutate(data, {
        onSuccess: () => {
          toast.success('Senha salva com sucesso')
          setIsOpenModal(false)
          form.reset()
        },
        onError: () => {
          toast.error('Erro ao salvar a senha. Por favor, tente novamente.')
        },
      })
    }

    return (
      <FormProvider {...form}>
        <form
          className={'flex flex-col space-y-4'}
          onSubmit={form.handleSubmit(onHandleSubmit)}
        >
          {/* ... (Todos os FormFields para name, username, password, url, notes) ... */}
          <div className={'flex flex-col space-y-2'}>
            <DialogClose asChild>
              <Button block variant={'secondary'} type={'button'}>
                Cancelar
              </Button>
            </DialogClose>
            <Button block type="submit" disabled={isPending}>
              {isPending ? 'Salvando...' : 'Salvar'}
            </Button>
          </div>
        </form>
      </FormProvider>
    )
  }

  export default PasswordForm
  ```

- **Componente do Modal (`password-modal.tsx`):**

  ```tsx
  // src/app/(dashboard)/components/password-modal.tsx
  'use client'

  import { FC, ReactNode, useState } from 'react'
  import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from '@/components/ui/dialog'
  import PasswordForm from '@/app/(dashboard)/components/password-form'

  type TPasswordModal = {
    actionButton: ReactNode
  }

  const PasswordModal: FC<TPasswordModal> = ({ actionButton }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    return (
      <Dialog onOpenChange={setIsOpen} open={isOpen}>
        <DialogTrigger asChild>{actionButton}</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Nova Senha</DialogTitle>
            <DialogDescription>
              Salve sua nova credencial com as informações abaixo.
            </DialogDescription>
          </DialogHeader>
          <PasswordForm setIsOpenModal={setIsOpen} />
        </DialogContent>
      </Dialog>
    )
  }

  export default PasswordModal
  ```

**4.3. Adicione o Botão de Ação na Página Principal:**

Finalmente, adicione o botão que abre o modal na sua página inicial.

- **Atualize a `page.tsx` do dashboard:**

  ```tsx
  // src/app/(dashboard)/page.tsx
  import PasswordModal from '@/app/(dashboard)/components/password-modal'
  import { Button } from '@/components/ui/button'

  export default function Home() {
    return (
      <div className={'flex flex-1 flex-col gap-4'}>
        <header className={'flex h-fit w-full items-center justify-between'}>
          <h3 className="text-xl font-semibold">Minhas senhas</h3>
          <PasswordModal actionButton={<Button>Criar nova</Button>} />
        </header>
        {/* O conteúdo da listagem de senhas virá aqui */}
      </div>
    )
  }
  ```

## 📋 Parte 7: Listagem e Gerenciamento de Credenciais

Com a funcionalidade de criação pronta, o próximo passo é exibir as credenciais salvas para o usuário. Nesta seção, vamos implementar a listagem, a descriptografia para visualização e as ações de editar e excluir, completando o ciclo de gerenciamento de senhas.

---

### **1. Implementando a Paginação na Camada `@core`**

Para lidar com muitas credenciais de forma eficiente, implementaremos a paginação desde o início.

**1.1. Crie uma Entidade de Paginação Genérica:**

Vamos criar uma entidade reutilizável para paginação que poderá servir para outros módulos no futuro.

```ts
// src/@core/module/common/domain/pagination.entity.ts
export type TGetPagination = { page: number; limit: number }

export type TPagination<T> = {
  data: T[]
  total: number
  page: number
  limit: number
}
```

**1.2. Atualize o Módulo de Credenciais:**

Agora, vamos adicionar a lógica de paginação ao nosso módulo `credential`.

- **Atualize o Gateway (`credential.gateway.ts`):** Adicione o método `paginate`.

  ```ts
  // src/@core/module/credential/domain/credential.gateway.ts
  // ... (imports)
  import {
    TGetPagination,
    TPagination,
  } from '@/@core/module/common/domain/pagination.entity'

  export interface ICredentialGateway {
    paginate(params: TGetPagination): Promise<TPagination<TCredential>>
    create(params: TCreateCredential): Promise<TCredential>
    // ... (outros métodos)
  }
  ```

- **Crie o Caso de Uso de Paginação (`pagination.use.case.ts`):**

  ```ts
  // src/@core/module/credential/application/pagination.use.case.ts
  import { ICredentialGateway } from '@/@core/module/credential/domain/credential.gateway'
  import {
    TGetPagination,
    TPagination,
  } from '@/@core/module/common/domain/pagination.entity'
  import { TCredential } from '@/@core/module/credential/domain/credential.entity'

  export class PaginationUseCase {
    constructor(private readonly gateway: ICredentialGateway) {}

    execute(params: TGetPagination): Promise<TPagination<TCredential>> {
      return this.gateway.paginate(params)
    }
  }
  ```

- **Implemente no Gateway HTTP (`http.gateway.ts`):**

  ```ts
  // src/@core/module/credential/infra/http.gateway.ts
  // ...
  async paginate(params: TGetPagination): Promise<TPagination<TCredential>> {
    const path = `${paths.pagination}?page=${params.page}&limit=${params.limit}`
    return await this.http.get(path)
  }
  ```

- **Registre no Container de Injeção (`container.registry.ts`):**

  ```ts
  // src/@core/module/credential/infra/container.registry.ts
  // ... (imports)
  import { PaginationUseCase } from '../application/pagination.use.case'

  const registry = {
    // ...
    PaginationUseCase: Symbol.for('PaginationUseCase'),
  }

  // ... (container)
  container
    .bind<PaginationUseCase>(registry.PaginationUseCase)
    .toDynamicValue(
      (context) =>
        new PaginationUseCase(
          context.container.get(registry.CredentialGateway),
        ),
    )

  export const credential = {
    // ...
    pagination: container.get<PaginationUseCase>(registry.PaginationUseCase),
  }
  ```

---

### **2. Exibindo e Descriptografando a Lista de Senhas**

Com a lógica de busca pronta, vamos criar o componente para exibir os dados e, crucialmente, descriptografar as senhas para visualização.

**2.1. Crie o Caso de Uso para Descriptografar:**

Este caso de uso reverte o processo de criptografia que criamos anteriormente.

```ts
// src/@core/module/credential/application/decrypt-password.use.case.ts
import crypto from 'crypto'

export class DecryptPasswordUseCase {
  execute(encryptedPassword: string, KDF: Buffer): string {
    try {
      const parts = encryptedPassword.split(':')
      const iv = Buffer.from(parts[0], 'hex')
      const authTag = Buffer.from(parts[1], 'hex')
      const encryptedData = parts[2]

      const decipher = crypto.createDecipheriv('aes-265-gcm', KDF, iv)
      decipher.setAuthTag(authTag)

      let decrypted = decipher.update(encryptedData, 'hex', 'utf8')
      decrypted += decipher.final('utf8')

      return decrypted
    } catch {
      throw new Error(
        'Não foi possível descriptografar os dados. A chave pode estar incorreta ou os dados foram corrompidos.',
      )
    }
  }
}
```

**2.2. Registre o `DecryptPasswordUseCase` no Container:**

```ts
// src/@core/module/credential/infra/container.registry.ts
// ...
import { DecryptPasswordUseCase } from '../application/decrypt-password.use.case'

const registry = {
  // ...
  DecryptPasswordUseCase: Symbol.for('DecryptPasswordUseCase'),
}

// ...
container
  .bind<DecryptPasswordUseCase>(registry.DecryptPasswordUseCase)
  .toConstantValue(new DecryptPasswordUseCase())

export const credential = {
  // ...
  decryptPassword: container.get<DecryptPasswordUseCase>(
    registry.DecryptPasswordUseCase,
  ),
}
```

**2.3. Crie o Componente de Listagem (`PasswordList`):**

Este componente usará `useQuery` para buscar os dados e chamará o caso de uso de descriptografia para exibir a senha.

```tsx
// src/app/(dashboard)/components/password-list.tsx
'use client'
import { FC } from 'react'
import { useQuery } from '@tanstack/react-query'
import { credential } from '@/@core/module/credential/infra/container.registry'
import { useAuth } from '@/app/context/auth.context'
import { toast } from 'sonner'

const PasswordList: FC = () => {
  const { KDF } = useAuth()

  const { data, isLoading } = useQuery({
    queryKey: ['CredentialList'],
    queryFn: () => credential.pagination.execute({ page: 1, limit: 10 }),
    enabled: !!KDF, // A query só será executada quando a KDF estiver disponível
  })

  const decryptPassword = (encrypted: string) => {
    if (!KDF) return '••••••••'
    try {
      return credential.decryptPassword.execute(encrypted, KDF)
    } catch (err: unknown) {
      const typedErr = err as Error
      toast.error(typedErr.message)
      return 'Erro ao descriptografar'
    }
  }

  if (isLoading) return <p>Carregando senhas...</p>

  return (
    <div className="mt-4 space-y-2">
      {data?.data.map((cred) => (
        <div
          key={cred.id}
          className="flex items-center justify-between rounded-md border p-4"
        >
          <div>
            <h4 className="text-lg font-semibold">{cred.name}</h4>
            <p className="text-sm text-muted-foreground">
              {cred.password && decryptPassword(cred.password)}
            </p>
          </div>
          {/* Botões de ação virão aqui */}
        </div>
      ))}
    </div>
  )
}

export default PasswordList
```

**2.4. Adicione a lista à página principal:**

```tsx
// src/app/(dashboard)/page.tsx
// ...
import PasswordList from './components/password-list'

export default function Home() {
  return (
    <div className={'flex flex-1 flex-col gap-4'}>
      <header>{/* ... */}</header>
      <PasswordList />
    </div>
  )
}
```

---

### **3. Implementando a Edição de Credenciais**

Vamos reutilizar o modal e o formulário de criação para permitir a edição dos dados.

**3.1. Crie a Lógica de Atualização na Camada `@core`:**

- **Gateway:** Adicione o método `update` à interface `ICredentialGateway`.
- **Caso de Uso (`update.use.case.ts`):** Crie o caso de uso que criptografa a senha novamente antes de enviar para atualização.
- **Gateway HTTP:** Implemente a chamada `PATCH` para a rota de atualização.
- **Container:** Registre o `UpdateUseCase` na injeção de dependência.

_(O código para estas etapas está detalhado na sua solicitação e pode ser consultado lá)._

**3.2. Adapte os Componentes de UI para Edição:**

- **`PasswordModal` e `PasswordForm`:** Modifique os componentes para aceitarem uma prop opcional `data: TCredential`. Se `data` for fornecida, o formulário será pré-preenchido com os valores existentes (descriptografando a senha para exibição).

- **Lógica Condicional no Formulário:** Atualize a função `useMutation` no `PasswordForm` para chamar `credential.update.execute(...)` se `data` existir, ou `credential.create.execute(...)` caso contrário.

  ```tsx
  // src/app/(dashboard)/components/password-form.tsx
  const { mutate } = useMutation({
    mutationKey: ['credentialForm', data?.id],
    mutationFn: (params: TCreateCredential) => {
      if (data) {
        return credential.update.execute(data.id, params, KDF!)
      }
      return credential.create.execute(params, KDF!)
    },
    // ... onSuccess, onError
  })
  ```

**3.3. Adicione o Botão de Edição à Lista:**

Agora, no `PasswordList`, adicione o `PasswordModal` para cada item, passando os dados da credencial (`cred`) para a prop `data`.

```tsx
// src/app/(dashboard)/components/password-list.tsx
// ... (imports)
import PasswordModal from '@/app/(dashboard)/components/password-modal'
import { Button } from '@/components/ui/button'
import { EditIcon } from 'lucide-react'

// ... (dentro do map)
;<div className="flex items-center justify-between ...">
  {/* ... (nome e senha) */}
  <PasswordModal
    actionButton={
      <Button size={'icon'} variant={'ghost'}>
        <EditIcon className="size-4" />
      </Button>
    }
    data={cred}
  />
</div>
```

---

### **4. Implementando a Exclusão de Credenciais**

Para a exclusão, adicionaremos um modal de confirmação para evitar a remoção acidental de dados.

**4.1. Crie a Lógica de Exclusão na Camada `@core`:**

- **Gateway:** Adicione o método `delete` à interface `ICredentialGateway`.
- **Caso de Uso (`delete.use.case.ts`):** Crie um caso de uso simples que chama o método `delete` do gateway.
- **Gateway HTTP:** Implemente a chamada `DELETE` para a rota de exclusão.
- **Container:** Registre o `DeleteUseCase` na injeção de dependência.

_(O código detalhado para estas etapas está na sua solicitação)._

**4.2. Crie o Modal de Confirmação:**

- **Instale o `alert-dialog`:**

  ```bash
    pnpm dlx shadcn-ui@latest add alert-dialog
  ```

- **Crie o Componente `ConfirmDeletionModal`:**

  ```tsx
  // src/app/(dashboard)/components/confirm-deletion-modal.tsx
  'use client'
  import { FC } from 'react'
  import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from '@/components/ui/alert-dialog'
  import { Button } from '@/components/ui/button'
  import { Trash2Icon } from 'lucide-react'
  import { useMutation, useQueryClient } from '@tanstack/react-query'
  import { credential } from '@/@core/module/credential/infra/container.registry'
  import { toast } from 'sonner'

  type TConfirmDeletionModal = { id: string }

  const ConfirmDeletionModal: FC<TConfirmDeletionModal> = ({ id }) => {
    const queryClient = useQueryClient()
    const { mutate, isPending } = useMutation({
      mutationFn: () => credential.delete.execute(id),
      onSuccess: () => {
        toast.success('Credencial excluída com sucesso!')
        queryClient.invalidateQueries({ queryKey: ['CredentialList'] })
      },
      onError: () => {
        toast.error('Erro ao excluir a credencial.')
      },
    })

    return (
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button size={'icon'} variant={'ghost'} className="text-destructive">
            <Trash2Icon className="size-4" />
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Você tem certeza?</AlertDialogTitle>
            <AlertDialogDescription>
              Esta ação não pode ser desfeita. Isso excluirá permanentemente a
              credencial dos nossos servidores.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancelar</AlertDialogCancel>
            <AlertDialogAction onClick={() => mutate()} disabled={isPending}>
              Continuar
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    )
  }

  export default ConfirmDeletionModal
  ```

**4.3. Adicione o Botão de Exclusão à Lista:**

Finalmente, adicione o modal de confirmação a cada item da lista no `PasswordList`.

```tsx
// src/app/(dashboard)/components/password-list.tsx
// ... (imports)
import ConfirmDeletionModal from '@/app/(dashboard)/components/confirm-deletion-modal'

// ... (dentro do map)
;<div className="flex items-center justify-between ...">
  {/* ... (nome e senha) */}
  <div className="flex items-center">
    <PasswordModal /* ... */ />
    <ConfirmDeletionModal id={cred.id} />
  </div>
</div>
```

## 🔄 Parte 8: Mantendo a UI Sincronizada com `QueryClient`

Atualmente, quando criamos, atualizamos ou excluímos uma credencial, a nossa lista não é atualizada automaticamente. Para resolver isso e criar uma experiência de usuário fluida e reativa, vamos usar o `useQueryClient` do React Query para invalidar o cache da nossa lista de credenciais e forçar uma nova busca de dados.

---

### **1. Identificando a Chave da Query (`Query Key`)**

O primeiro passo é saber qual query queremos invalidar. No nosso componente `PasswordList`, definimos a chave de forma estática:

```tsx
// src/app/(dashboard)/components/password-list.tsx

const { data } = useQuery({
  queryKey: ['CredentialList'], // Esta é a chave que vamos invalidar
  queryFn: () => credential.pagination.execute({ page: 1, limit: 10 }),
})
```

A chave que identifica nossa lista de credenciais é `['CredentialList']`.

---

### **2. Invalidando o Cache após Criação e Atualização**

Vamos começar pelo formulário de criação e edição. Após a mutação ser bem-sucedida, informaremos ao React Query que os dados associados a `['CredentialList']` estão desatualizados.

**Atualize o arquivo `password-form.tsx`:**

Vamos importar o hook `useQueryClient` e chamá-lo dentro do callback `onSuccess` da nossa mutação.

```tsx
// src/app/(dashboard)/components/password-form.tsx
'use client'

import { Dispatch, FC, SetStateAction } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import {
  TCreateCredential,
  TCredential,
} from '@/@core/module/credential/domain/credential.entity'
import { zodResolver } from '@hookform/resolvers/zod'
import { createCredentialSchema } from '@/@core/module/credential/schema/create.schema'
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input, PasswordInput } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { DialogClose } from '@radix-ui/react-dialog'
import { useMutation, useQueryClient } from '@tanstack/react-query' // 1. Importe o useQueryClient
import { credential } from '@/@core/module/credential/infra/container.registry'
import { useAuth } from '@/app/context/auth.context'
import { toast } from 'sonner'

type TPasswordForm = {
  setIsOpenModal: Dispatch<SetStateAction<boolean>>
  data?: TCredential
}

const PasswordForm: FC<TPasswordForm> = ({ setIsOpenModal, data }) => {
  const { KDF } = useAuth()
  const queryClient = useQueryClient() // 2. Inicialize o cliente

  const form = useForm<TCreateCredential>({
    resolver: zodResolver(createCredentialSchema),
    defaultValues: {
      password: data?.password
        ? credential.decryptPassword.execute(data?.password, KDF!)
        : '',
      url: data?.url ?? '',
      notes: data?.notes ?? '',
      name: data?.name ?? '',
      username: data?.username ?? '',
    },
  })

  const { mutate, isPending } = useMutation({
    mutationKey: ['credentialForm', data?.id],
    mutationFn: (params: TCreateCredential) => {
      if (data) {
        return credential.update.execute(data.id, params, KDF!)
      }
      return credential.create.execute(params, KDF!)
    },
  })

  const onHandleSubmit = (formData: TCreateCredential) => {
    mutate(formData, {
      onSuccess: async () => {
        toast.success('Senha salva com sucesso')
        // 3. Invalide a query da lista
        await queryClient.invalidateQueries({
          queryKey: ['CredentialList'],
        })
        setIsOpenModal(false)
        form.reset()
      },
      onError: () => {
        toast.error('Erro ao salvar a senha. Por favor, tente novamente.')
      },
    })
  }

  return (
    <FormProvider {...form}>
      <form
        className={'flex flex-col space-y-4'}
        onSubmit={form.handleSubmit(onHandleSubmit)}
      >
        {/* ... (Conteúdo do formulário) ... */}
        <div className={'flex flex-col space-y-2'}>
          <DialogClose asChild>
            <Button block variant={'secondary'} type={'button'}>
              Cancelar
            </Button>
          </DialogClose>
          <Button block type="submit" disabled={isPending}>
            {isPending ? 'Salvando...' : 'Salvar'}
          </Button>
        </div>
      </form>
    </FormProvider>
  )
}

export default PasswordForm
```

---

### **3. Invalidando o Cache após a Exclusão**

Aplicaremos o mesmo padrão ao modal de confirmação de exclusão. Após o usuário confirmar e a credencial ser removida com sucesso, a lista será invalidada e atualizada automaticamente.

**Atualize o arquivo `confirm-deletion-modal.tsx`:**

O código já deve estar correto se você seguiu a implementação da Parte 7, mas aqui está a confirmação da lógica:

```tsx
// src/app/(dashboard)/components/confirm-deletion-modal.tsx
'use client'
import { FC } from 'react'
import {
  AlertDialog,
  AlertDialogAction,
  // ... (outros imports do alert-dialog)
} from '@/components/ui/alert-dialog'
import { Button } from '@/components/ui/button'
import { Trash2Icon } from 'lucide-react'
import { useMutation, useQueryClient } from '@tanstack/react-query' // 1. Importe o useQueryClient
import { credential } from '@/@core/module/credential/infra/container.registry'
import { toast } from 'sonner'

type TConfirmDeletionModal = { id: string }

const ConfirmDeletionModal: FC<TConfirmDeletionModal> = ({ id }) => {
  const queryClient = useQueryClient() // 2. Inicialize o cliente

  const { mutate, isPending } = useMutation({
    mutationFn: () => credential.delete.execute(id),
    onSuccess: () => {
      toast.success('Credencial excluída com sucesso!')
      // 3. Invalide a query da lista
      queryClient.invalidateQueries({ queryKey: ['CredentialList'] })
    },
    onError: () => {
      toast.error('Erro ao excluir a credencial.')
    },
  })

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button size={'icon'} variant={'ghost'} className="text-destructive">
          <Trash2Icon className="size-4" />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        {/* ... (Conteúdo do modal) ... */}
        <AlertDialogFooter>
          <AlertDialogCancel>Cancelar</AlertDialogCancel>
          <AlertDialogAction onClick={() => mutate()} disabled={isPending}>
            {isPending ? 'Excluindo...' : 'Continuar'}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default ConfirmDeletionModal
```

Com essas alterações, o ciclo de gerenciamento de credenciais está completo e a interface se comporta de maneira reativa, proporcionando uma experiência de usuário moderna e eficiente.

## 📄 Parte 9: Implementando a Paginação

Para garantir que nossa aplicação seja escalável e mantenha um bom desempenho, vamos adicionar controles de paginação à nossa lista de credenciais. Isso permitirá ao usuário navegar por grandes volumes de dados de forma organizada e eficiente.

---

### **1. Tornando a Busca de Dados Dinâmica**

O primeiro passo é fazer com que nossa busca de dados (`useQuery`) reaja a mudanças de página e limite de itens por página.

**1.1. Adicione os Estados de `page` e `limit`:**

No componente `PasswordList`, vamos usar o hook `useState` para controlar a página atual e o número de itens a serem exibidos.

**1.2. Atualize a `useQuery`:**

Agora, passamos os estados `page` e `limit` para a `queryKey` e para a função `queryFn`. O React Query irá automaticamente refazer a busca de dados sempre que um desses valores mudar.

```tsx
// src/app/(dashboard)/components/password-list.tsx
'use client'
import { FC, useState } from 'react' // 1. Importe o useState
// ... (outros imports)

const PasswordList: FC = () => {
  const { KDF } = useAuth()
  const [page, setPage] = useState<number>(1) // 2. Estado para a página atual
  const [limit, setLimit] = useState<number>(10) // 3. Estado para o limite de itens

  const { data, isLoading } = useQuery({
    // 4. Adicione page e limit à queryKey para que a query seja refeita quando eles mudarem
    queryKey: ['CredentialList', page, limit],
    // 5. Passe os estados para a função de busca
    queryFn: () => credential.pagination.execute({ page, limit }),
    enabled: !!KDF,
  })

  // ... (resto do componente)
}
```

---

### **2. Criando um Componente de Paginação Reutilizável**

Para não poluir nosso componente de lista, vamos criar um componente genérico e reutilizável para os controles de paginação.

**2.1. Instale o Componente `Select`:**

Precisaremos de um seletor para que o usuário possa escolher quantos itens por página deseja ver.

```bash
  pnpm dlx shadcn-ui@latest add select
```

**2.2. Crie o Componente `PaginationComponent`:**

Este componente receberá o estado da paginação e as funções para atualizá-lo, além do total de itens para calcular o número de páginas.

```tsx
// src/components/pagination.tsx
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from 'lucide-react'
import { Dispatch, FC, SetStateAction } from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Button } from '@/components/ui/button'

type TPaginationComponent = {
  page: number
  setPage: Dispatch<SetStateAction<number>>
  limit: number
  setLimit: Dispatch<SetStateAction<number>>
  total: number
}

const PaginationComponent: FC<TPaginationComponent> = ({
  page,
  setPage,
  limit,
  setLimit,
  total,
}) => {
  const totalPages = Math.ceil(total / limit) || 1

  return (
    <div className="flex items-center justify-between px-2 py-4">
      <div className="flex items-center space-x-2">
        <p className="text-sm font-medium">Registros por página</p>
        <Select
          value={limit.toString()}
          onValueChange={(value) => {
            setLimit(Number(value))
            setPage(1) // Volta para a primeira página ao mudar o limite
          }}
        >
          <SelectTrigger className="h-8 w-[70px]">
            <SelectValue placeholder={limit} />
          </SelectTrigger>
          <SelectContent side="top">
            {[10, 20, 30, 40, 50].map((pageSize) => (
              <SelectItem key={pageSize} value={`${pageSize}`}>
                {pageSize}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="flex w-[100px] items-center justify-center text-sm font-medium">
        Página {page} de {totalPages}
      </div>
      <div className="flex items-center space-x-2">
        <Button
          variant="outline"
          size="icon"
          className="hidden size-8 lg:flex"
          onClick={() => setPage(1)}
          disabled={page === 1}
        >
          <ChevronsLeft className="size-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="size-8"
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
        >
          <ChevronLeft className="size-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="size-8"
          onClick={() => setPage(page + 1)}
          disabled={page === totalPages}
        >
          <ChevronRight className="size-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="hidden size-8 lg:flex"
          onClick={() => setPage(totalPages)}
          disabled={page === totalPages}
        >
          <ChevronsRight className="size-4" />
        </Button>
      </div>
    </div>
  )
}

export default PaginationComponent
```

---

### **3. Integrando a Paginação e o Feedback de Lista Vazia**

Agora, vamos juntar tudo no componente `PasswordList`.

**3.1. Adicione um Feedback para Lista Vazia:**

É uma boa prática de UX mostrar uma mensagem clara quando não há dados para exibir.

**3.2. Adicione o `PaginationComponent`:**

Vamos renderizar o componente de paginação no final da lista, passando as props necessárias.

**Versão final do `PasswordList.tsx`:**

```tsx
// src/app/(dashboard)/components/password-list.tsx
'use client'
import { FC, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { credential } from '@/@core/module/credential/infra/container.registry'
import { useAuth } from '@/app/context/auth.context'
import { toast } from 'sonner'
import PasswordModal from '@/app/(dashboard)/components/password-modal'
import { Button } from '@/components/ui/button'
import { EditIcon, WindIcon } from 'lucide-react'
import ConfirmDeletionModal from '@/app/(dashboard)/components/confirm-deletion-modal'
import PaginationComponent from '@/components/pagination'

const PasswordList: FC = () => {
  const { KDF } = useAuth()
  const [page, setPage] = useState<number>(1)
  const [limit, setLimit] = useState<number>(10)

  const { data, isLoading } = useQuery({
    queryKey: ['CredentialList', page, limit],
    queryFn: () => credential.pagination.execute({ page, limit }),
    enabled: !!KDF,
  })

  const decryptPassword = (encrypted: string) => {
    // ... (função de descriptografia)
  }

  if (isLoading) {
    return <p className="text-center">Carregando...</p>
  }

  if (!data || data.data.length === 0) {
    return (
      <div
        className={
          'mt-10 flex flex-col items-center justify-center gap-2 text-muted-foreground'
        }
      >
        <WindIcon size={48} />
        <p>Nenhuma credencial encontrada.</p>
      </div>
    )
  }

  return (
    <div className="flex flex-1 flex-col justify-between">
      <div className="space-y-2">
        {data.data.map((cred) => (
          <div
            key={cred.id}
            className="flex items-center justify-between rounded-md border p-4"
          >
            {/* ... (Conteúdo do item da lista) ... */}
          </div>
        ))}
      </div>
      <PaginationComponent
        page={page}
        setPage={setPage}
        limit={limit}
        setLimit={setLimit}
        total={data.total}
      />
    </div>
  )
}

export default PasswordList
```

Com essas alterações, sua aplicação agora suporta paginação completa, permitindo uma navegação fluida e eficiente por todas as credenciais do usuário.


## ✨ Parte 10: Melhorando a Exibição dos Itens da Lista

À medida que nosso item da lista cresce, com nome, usuário, senha, notas e botões de ação, o componente `PasswordList` pode ficar sobrecarregado e difícil de ler. Uma ótima prática de refatoração é extrair a lógica de um item individual para seu próprio componente, seguindo o Princípio da Responsabilidade Única.

---

### **1. Criando o Componente `PasswordItem`**

Vamos criar um novo componente, `PasswordItem`, que será responsável exclusivamente por renderizar os detalhes e as ações de uma única credencial.

**1.1. Crie o arquivo do componente:**

```
src/app/(dashboard)/components/password-item.tsx
```

**1.2. Adicione a lógica de exibição do item:**

Este componente receberá os dados de uma credencial (`data`) como prop e cuidará de toda a renderização, incluindo a descriptografia da senha e a exibição dos modais de edição e exclusão.

```tsx
// src/app/(dashboard)/components/password-item.tsx
'use client'

import { FC } from 'react'
import PasswordModal from '@/app/(dashboard)/components/password-modal'
import { Button } from '@/components/ui/button'
import { EditIcon } from 'lucide-react'
import ConfirmDeletionModal from '@/app/(dashboard)/components/confirm-deletion-modal'
import { TCredential } from '@/@core/module/credential/domain/credential.entity'
import { credential } from '@/@core/module/credential/infra/container.registry'
import { toast } from 'sonner'
import { useAuth } from '@/app/context/auth.context'
import { PasswordInput } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

type TPasswordItem = {
    data: TCredential
}

const PasswordItem: FC<TPasswordItem> = ({ data }) => {
    const { KDF } = useAuth()

    const decryptPassword = (encrypted: string) => {
        try {
            return credential.decryptPassword.execute(encrypted, KDF!)
        } catch (err: unknown) {
            const typedErr = err as Error
            toast.error(typedErr.message)
        }
    }

    return (
        <div className="flex items-center justify-between border-b p-4">
            <div>
                <h4 className="text-lg font-semibold">{data.name}</h4>
                {data.username && (
                    <div className={'flex flex-col space-y-1'}>
                        <Label>Nome de usuário</Label>
                        <h4 className="text-lg font-semibold">{data.username}</h4>
                    </div>
                )}

                {data.password && (
                    <div className={'flex flex-col space-y-1'}>
                        <Label>Senha</Label>
                        <PasswordInput value={decryptPassword(data.password)} readOnly />
                    </div>
                )}
            </div>

            {data?.notes && (
                <div className={'flex max-w-sm flex-col space-y-1'}>
                    <Label>Notas:</Label>
                    <p>{data.notes}</p>
                </div>
            )}

            <div className={'flex space-x-2'}>
                <PasswordModal
                    actionButton={
                        <Button size={'icon'} variant={'ghost'}>
                            <EditIcon />{' '}
                        </Button>
                    }
                    data={data}
                />
                <ConfirmDeletionModal id={data.id} />
            </div>
        </div>
    )
}

export default PasswordItem
```

---

### **2. Simplificando o Componente `PasswordList`**

Agora que temos nosso componente de item, podemos simplificar drasticamente o `PasswordList`. Ele não precisa mais se preocupar com os detalhes de como um item é renderizado, apenas em buscar os dados e iterar sobre eles.

**Atualize o `map` dentro de `PasswordList.tsx`:**

Substitua todo o bloco de JSX que estava dentro do `.map()` pela chamada ao nosso novo componente.

```tsx
// src/app/(dashboard)/components/password-list.tsx
// ... (imports)
import PasswordItem from './password-item' // 1. Importe o novo componente

// ... (dentro do componente PasswordList)

return (
  <div className="flex flex-1 flex-col justify-between">
    <div className="divide-y rounded-md border">
      {/* 2. Simplifique o loop */}
      {data.data.map((cred) => (
        <PasswordItem data={cred} key={cred.id} />
      ))}
    </div>
    <PaginationComponent
      // ... (props da paginação)
    />
  </div>
)
```

Com essa refatoração, nosso código está mais limpo, organizado e cada componente tem uma responsabilidade clara, tornando a manutenção e a adição de novas funcionalidades no futuro muito mais fáceis.


## 🎨 Parte 11: Implementando Temas (Dark/Light Mode)

Para dar um toque final e profissional à nossa aplicação, e melhorar a experiência do usuário, vamos implementar um seletor de temas que permite alternar entre os modos claro (light) e escuro (dark), além de respeitar a preferência do sistema operacional.

---

### **1. Instalando a Biblioteca `next-themes`**

A `next-themes` é a biblioteca padrão para gerenciar temas em aplicações Next.js, integrando-se perfeitamente com o App Router e a renderização no servidor.

**Instale a biblioteca:**

```bash
  pnpm add next-themes
```

---

### **2. Configurando o Provedor de Tema (`ThemeProvider`)**

Para que a funcionalidade de temas esteja disponível em toda a aplicação, precisamos envolver nossa estrutura de componentes com um provedor.

**2.1. Crie o Componente Provedor:**

Vamos criar um componente wrapper que utiliza o `NextThemesProvider` para encapsular nossa aplicação.

```tsx
// src/app/providers/theme.provider.tsx
'use client'

import * as React from 'react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
```

**2.2. Adicione o Provedor ao Layout Raiz:**

Agora, envolvemos toda a aplicação com o `ThemeProvider` no `layout.tsx` principal. É importante adicionar a propriedade `suppressHydrationWarning` na tag `<html>` para evitar avisos de inconsistência entre o servidor e o cliente.

```tsx
// src/app/layout.tsx
import { ThemeProvider } from './providers/theme.provider' // Importe o provedor

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${poppins.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ReactQueryContextProvider>
            <AuthContextProvider>
              {children}
              <Toaster richColors position={'top-right'} closeButton />
            </AuthContextProvider>
          </ReactQueryContextProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
```

---

### **3. Criando o Botão de Alternância de Tema**

O próximo passo é criar o componente de UI que permitirá ao usuário interagir e trocar o tema.

**3.1. Instale o Componente `Dropdown Menu`:**

Usaremos um menu suspenso do Shadcn/UI para oferecer as opções de tema (Light, Dark, System).

```bash
  pnpm dlx shadcn-ui@latest add dropdown-menu
```

**3.2. Crie o Componente `ThemeToggleButton`:**

Este componente conterá a lógica para exibir o ícone correto (sol ou lua) e um menu para alterar o tema ao ser clicado.

```tsx
// src/components/theme-toggle.tsx
'use client'

import * as React from 'react'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

export function ThemeToggleButton() {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme('light')}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('dark')}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('system')}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
```

---

### **4. Adicionando o Botão à Interface**

Finalmente, vamos posicionar nosso novo botão nos locais apropriados da aplicação.

**4.1. No Header do Dashboard:**

Adicione o `ThemeToggleButton` ao cabeçalho principal, ao lado do botão de logout.

```tsx
// src/components/header.tsx
'use client'

import { FC } from 'react'
import { SidebarTrigger } from '@/components/ui/sidebar'
import { useAuth } from '@/app/context/auth.context'
import { Button } from '@/components/ui/button'
import { LogOutIcon } from 'lucide-react'
import { ThemeToggleButton } from '@/components/theme-toggle' // 1. Importe o botão

const Header: FC = () => {
  const { signOut, userInfo } = useAuth()

  return (
    <header
      className={
        'flex h-16 items-center justify-between border-b bg-background px-4 py-2'
      }
    >
      <div className={'flex items-center space-x-4'}>
        <SidebarTrigger />
        <h3 className="font-semibold">Olá, {userInfo?.name}</h3>
      </div>

      <div className={'flex items-center space-x-2'}>
        <ThemeToggleButton /> {/* 2. Adicione o botão aqui */}
        <Button size={'icon'} onClick={signOut} variant={'ghost'}>
          <LogOutIcon />
        </Button>
      </div>
    </header>
  )
}

export default Header
```

**4.2. Nas Telas de Autenticação:**

Para manter a consistência, também adicionaremos o seletor de tema às telas de login e cadastro. A melhor forma de fazer isso é criando um layout compartilhado para as rotas de autenticação.

*   **Crie um novo layout para as rotas de autenticação:**
    ```tsx
    // src/app/auth/layout.tsx
    import { FC, ReactNode } from 'react'
    import { ThemeToggleButton } from '@/components/theme-toggle'
    
    type TLayoutAuth = {
      children: ReactNode
    }
    
    const LayoutAuth: FC<TLayoutAuth> = ({ children }) => {
      return (
        <section
          className={'relative flex h-screen w-screen items-center justify-center px-5'}
        >
          {children}
          <div className={'absolute right-4 top-4'}>
            <ThemeToggleButton />
          </div>
        </section>
      )
    }
    
    export default LayoutAuth
    ```

*   **Ajuste as Páginas de `sign-in` e `sign-up`:**
    Com o layout compartilhado criado, agora você deve **remover** a tag `<section>` que envolve o conteúdo das páginas `sign-in/page.tsx` e `sign-up/page.tsx`, pois essa responsabilidade agora é do novo `layout.tsx`.

Com isso, sua aplicação agora tem um sistema de temas completo e consistente em todas as telas