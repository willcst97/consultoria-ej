# Template de Website com Payload CMS

Este é o template oficial de website do [Payload CMS](https://github.com/payloadcms/payload/blob/main/templates/website), ideal para criar sites, blogs ou portfólios de qualquer escala. O projeto inclui um backend completo, um painel administrativo profissional e um website com design moderno pronto para produção.

Este template é perfeito para você se estiver desenvolvendo:

- Um site pessoal ou empresarial, blog ou portfólio
- Uma plataforma de publicação de conteúdo com fluxo de trabalho profissional
- Um projeto para explorar as capacidades do Payload

Funcionalidades principais:

- [Configuração otimizada do Payload](#como-funciona)
- [Sistema de autenticação](#usuarios-e-autenticacao)
- [Controle de acesso](#controle-de-acesso)
- [Construtor de layouts](#construtor-de-layouts)
- [Visualização de rascunhos](#visualizacao-de-rascunhos)
- [Visualização em tempo real](#visualizacao-em-tempo-real)
- [Revalidação sob demanda](#revalidacao-sob-demanda)
- [Otimização para SEO](#seo)
- [Sistema de busca](#busca)
- [Sistema de redirecionamentos](#redirecionamentos)
- [Sistema de agendamento de publicações](#agendamento-e-publicacao)
- [Website pronto para uso](#website)

## Início Rápido

Para rodar este projeto localmente, siga estes passos:

### Clonando o Projeto

Se você ainda não tem uma cópia do projeto, escolha um dos métodos abaixo:

#### Método 1 (recomendado)

Acesse o Payload Cloud e [clone este template](https://payloadcms.com/new/clone/website). Isso criará um novo repositório na sua conta do GitHub.

#### Método 2

Use o CLI `create-payload-app` para clonar este template diretamente:

```bash
pnpx create-payload-app meu-projeto -t website
```

#### Método 3

Use the `git` CLI to clone this template directly to your machine:

```bash
git clone -n --depth=1 --filter=tree:0 https://github.com/payloadcms/payload my-project && cd my-project && git sparse-checkout set --no-cone templates/website && git checkout && rm -rf .git && git init && git add . && git mv -f templates/website/{.,}* . && git add . && git commit -m "Initial commit"
```

### Desenvolvimento

1. Primeiro [clone o repositório](#clonando-o-projeto) se ainda não o fez
1. Execute `cd meu-projeto && cp .env.example .env` para criar o arquivo de variáveis de ambiente
1. Execute `pnpm install && pnpm dev` para instalar as dependências e iniciar o servidor
1. Acesse `http://localhost:3000` no seu navegador

Pronto! As alterações feitas em `./src` serão refletidas automaticamente no seu app. Siga as instruções na tela para fazer login e criar seu primeiro usuário administrador. Depois, confira a seção [Produção](#producao) quando estiver pronto para construir e servir seu app, e [Deploy](#deploy) quando estiver pronto para publicar.

## Como Funciona

A configuração do Payload é otimizada especificamente para as necessidades da maioria dos websites. Veja as principais configurações:

### Coleções

Consulte a documentação de [Collections](https://payloadcms.com/docs/configuration/collections) para mais detalhes sobre como estender essas funcionalidades.

- #### Usuários (Autenticação)

  Usuários são coleções com autenticação habilitada que têm acesso ao painel administrativo e conteúdo não publicado. Veja [Controle de Acesso](#controle-de-acesso) para mais detalhes.

  Para ajuda adicional, consulte o [Exemplo de Autenticação](https://github.com/payloadcms/payload/tree/main/examples/auth) oficial ou a documentação de [Autenticação](https://payloadcms.com/docs/authentication/overview#authentication-overview).

- #### Posts

  Posts são usados para criar artigos de blog, notícias ou qualquer outro tipo de conteúdo publicado ao longo do tempo. Todos os posts têm o construtor de layout habilitado, permitindo criar layouts únicos usando blocos de construção. Veja [Construtor de Layout](#construtor-de-layouts) para mais detalhes. Posts também têm sistema de rascunhos, permitindo pré-visualização antes da publicação.

- #### Páginas

  Todas as páginas têm o construtor de layout habilitado, permitindo criar layouts únicos usando blocos de construção. Veja [Construtor de Layout](#construtor-de-layouts) para mais detalhes. Páginas também têm sistema de rascunhos para pré-visualização antes da publicação.

- #### Mídia

  Esta é a coleção de uploads usada por páginas, posts e projetos para gerenciar mídias como imagens, vídeos, downloads e outros arquivos. Possui tamanhos pré-configurados, ponto focal e redimensionamento manual para ajudar no gerenciamento de imagens.

- #### Categorias

  Uma taxonomia usada para agrupar posts. As categorias podem ser aninhadas, por exemplo "Notícias > Tecnologia". Veja o [Plugin de Documentos Aninhados](https://payloadcms.com/docs/plugins/nested-docs) oficial para mais detalhes.

### Globais

Consulte a documentação de [Globais](https://payloadcms.com/docs/configuration/globals) para detalhes sobre como estender essa funcionalidade.

- `Header` (Cabeçalho)

  Os dados necessários para o cabeçalho do seu front-end, como links de navegação.

- `Footer` (Rodapé)

  Similar ao cabeçalho, mas para o rodapé do seu site.

## Controle de Acesso

O controle de acesso básico está configurado para limitar o acesso a diversos conteúdos com base no status de publicação.

- `users`: Usuários podem acessar o painel administrativo e criar ou editar conteúdo.
- `posts`: Todos podem acessar posts publicados, mas apenas usuários podem criar, atualizar ou excluí-los.
- `pages`: Todos podem acessar páginas publicadas, mas apenas usuários podem criar, atualizar ou excluí-las.

Para mais detalhes sobre como estender essa funcionalidade, consulte a documentação de [Controle de Acesso do Payload](https://payloadcms.com/docs/access-control/overview#access-control).

## Construtor de Layouts

Crie layouts únicos para qualquer tipo de conteúdo usando um poderoso construtor de layouts. Este template vem pré-configurado com os seguintes blocos de construção:

- Hero (Banner Principal)
- Content (Conteúdo)
- Media (Mídia)
- Call To Action (Chamada para Ação)
- Archive (Arquivo)

Cada bloco é totalmente projetado e integrado ao website front-end que acompanha este template. Veja [Website](#website) para mais detalhes.

## Editor Lexical

Uma experiência editorial completa que permite total liberdade para focar apenas na escrita do conteúdo, sem quebrar o fluxo de trabalho, com suporte para blocos do Payload, mídia, links e outros recursos disponíveis nativamente. Consulte a documentação do [Lexical](https://payloadcms.com/docs/rich-text/overview) para mais informações.

## Visualização de Rascunhos

Todos os posts e páginas têm o sistema de rascunhos habilitado, permitindo pré-visualização antes da publicação. Para isso, essas coleções usam [Versions](https://payloadcms.com/docs/configuration/collections#versions) com `drafts` configurado como `true`. Isso significa que ao criar um novo post, projeto ou página, ele será salvo como rascunho e não ficará visível no seu site até ser publicado. Você pode pré-visualizar seu rascunho antes de publicá-lo através de uma URL personalizada que redireciona para seu front-end de forma segura.

Como o front-end deste template é gerado estaticamente, as páginas, posts e projetos precisam ser regenerados quando houver alterações em documentos publicados. Para isso, utilizamos um hook `afterChange` que regenera o front-end quando um documento é alterado e seu `_status` é `published`.

Para mais detalhes sobre como estender essa funcionalidade, consulte o [Exemplo de Preview de Rascunho](https://github.com/payloadcms/payload/tree/examples/draft-preview) oficial.

## Visualização em Tempo Real

Além da visualização de rascunhos, você também pode habilitar a visualização em tempo real para ver sua página final enquanto edita o conteúdo, com suporte completo para renderização SSR. Veja a [documentação de Preview em Tempo Real](https://payloadcms.com/docs/live-preview/overview) para mais detalhes.

## Revalidação sob Demanda

Adicionamos hooks às coleções e globais para que todas as alterações em páginas, posts, rodapé ou cabeçalho sejam automaticamente atualizadas no frontend através da revalidação sob demanda suportada pelo Next.js.

> Nota: se uma imagem foi alterada, por exemplo, se foi recortada, você precisará republicar a página onde ela é usada para revalidar o cache de imagens do Next.js.

## SEO

Este template vem pré-configurado com o [Plugin SEO oficial do Payload](https://payloadcms.com/docs/plugins/seo) para controle completo de SEO direto do painel administrativo. Todos os dados de SEO são totalmente integrados ao website front-end que acompanha este template. Veja [Website](#website) para mais detalhes.

## Busca

Este template também vem pré-configurado com o [Plugin de Busca oficial do Payload](https://payloadcms.com/docs/plugins/search) para demonstrar como recursos de busca SSR podem ser facilmente implementados no Next.js com o Payload. Veja [Website](#website) para mais detalhes.

## Redirecionamentos

Se você está migrando um site existente ou movendo conteúdo para uma nova URL, pode usar a coleção `redirects` para criar redirecionamentos adequados das URLs antigas para as novas. Isso garante que os códigos de status corretos sejam retornados para os mecanismos de busca e que seus usuários não encontrem links quebrados. Este template vem pré-configurado com o [Plugin de Redirecionamentos oficial do Payload](https://payloadcms.com/docs/plugins/redirects) para controle completo de redirecionamentos direto do painel administrativo. Todos os redirecionamentos são totalmente integrados ao website front-end. Veja [Website](#website) para mais detalhes.

## Agendamento e Publicação Programada

Configuramos a [Publicação Programada](https://payloadcms.com/docs/versions/drafts#scheduled-publish) que utiliza a [fila de jobs](https://payloadcms.com/docs/jobs-queue/jobs) para publicar ou despublicar seu conteúdo em horários programados. As tarefas são executadas em um cronograma e podem ser executadas como uma instância separada, se necessário.

> Nota: Quando implantado na Vercel, dependendo do plano, você pode estar limitado apenas a execuções diárias do cron.

## Website

Este template inclui um frontend belamente projetado e pronto para produção, construído com o [Next.js App Router](https://nextjs.org), servido junto com seu app Payload em uma única instância. Isso permite que você faça o deploy do backend e do website onde precisar.

Recursos principais:

- [Next.js App Router](https://nextjs.org)
- [TypeScript](https://www.typescriptlang.org)
- [React Hook Form](https://react-hook-form.com)
- [Barra Admin do Payload](https://github.com/payloadcms/payload/tree/main/packages/admin-bar)
- [Estilização com TailwindCSS](https://tailwindcss.com/)
- [Componentes shadcn/ui](https://ui.shadcn.com/)
- Contas de usuário e autenticação
- Blog completo
- Fluxo de publicação
- Modo escuro
- Blocos de layout pré-prontos
- SEO otimizado
- Sistema de busca
- Sistema de redirecionamentos
- Visualização em tempo real

### Cache

Embora o Next.js inclua um conjunto robusto de estratégias de cache por padrão, o Payload Cloud faz proxy e armazena em cache todos os arquivos através do Cloudflare usando o [Plugin Cloud Oficial](https://www.npmjs.com/package/@payloadcms/payload-cloud). Isso significa que o cache do Next.js não é necessário e está desabilitado por padrão. Se você estiver hospedando seu app fora do Payload Cloud, pode reabilitar facilmente os mecanismos de cache do Next.js removendo a diretiva `no-store` de todas as requisições fetch em `./src/app/_api` e removendo todas as instâncias de `export const dynamic = 'force-dynamic'` dos arquivos de páginas, como `./src/app/(pages)/[slug]/page.tsx`. Para mais detalhes, consulte a [Documentação de Cache do Next.js](https://nextjs.org/docs/app/building-your-application/caching).

## Desenvolvimento

Para iniciar este exemplo localmente, siga o [Início Rápido](#inicio-rapido). Em seguida, [Popule](#populando-o-banco) o banco de dados com algumas páginas, posts e projetos.

### Trabalhando com PostgreSQL

PostgreSQL e outros bancos de dados SQL seguem um esquema rígido para gerenciar seus dados. Em comparação com nosso adaptador MongoDB, isso significa que há algumas etapas extras ao trabalhar com PostgreSQL.

Note que ao fazer grandes alterações no esquema, você corre o risco de perder dados se não fizer a migração manualmente.

#### Desenvolvimento Local

Recomendamos executar uma cópia local do seu banco de dados para que as atualizações de esquema sejam o mais rápidas possível. Por padrão, o adaptador PostgreSQL tem `push: true` para ambientes de desenvolvimento. Isso permite adicionar, modificar e remover campos e coleções sem precisar executar migrações de dados.

Se seu banco de dados estiver apontando para produção, você deve configurar `push: false`, caso contrário, correrá o risco de perder dados ou ter suas migrações dessincronizadas.

#### Migrações

[Migrações](https://payloadcms.com/docs/database/migrations) são essencialmente versões do código SQL que mantêm o controle do seu esquema. Ao fazer deploy com PostgreSQL, você precisará criar e executar suas migrações.

Para criar uma migração localmente:

```bash
pnpm payload migrate:create
```

Isso cria os arquivos de migração que você precisará enviar junto com sua nova configuração.

No servidor, após o build e antes de executar `pnpm start`, você deve executar suas migrações:

```bash
pnpm payload migrate
```

Este comando verificará se há migrações que ainda não foram executadas, tentará executá-las e manterá um registro das migrações que foram executadas no banco de dados.

### Docker

Alternativamente, você pode usar o [Docker](https://www.docker.com) para executar este template localmente. Para isso, siga estes passos:

1. Siga os [passos 1 e 2 acima](#desenvolvimento), o arquivo docker-compose usará automaticamente o arquivo `.env` na raiz do seu projeto
1. Execute `docker-compose up`
1. Siga os [passos 4 e 5 acima](#desenvolvimento) para fazer login e criar seu primeiro usuário administrador

Pronto! A instância Docker ajudará você a começar rapidamente, padronizando o ambiente de desenvolvimento para toda sua equipe.

### Populando o Banco

Para popular o banco de dados com algumas páginas, posts e projetos, você pode clicar no link 'seed database' no painel administrativo.

O script de população também criará um usuário de demonstração apenas para fins de teste:

- Autor Demo
  - Email: `demo-author@payloadcms.com`
  - Senha: `password`

> ATENÇÃO: popular o banco de dados é uma operação destrutiva, pois ele apaga seu banco de dados atual para criar um novo a partir do template. Execute este comando apenas se estiver iniciando um novo projeto ou se puder perder seus dados atuais.

## Produção

Para executar o Payload em produção, você precisa fazer o build e iniciar o painel Admin. Para isso, siga estes passos:

1. Execute o script `next build` usando `pnpm build` ou `npm run build` na raiz do projeto. Isso cria um diretório `.next` com o bundle do admin pronto para produção.
1. Por fim, execute `pnpm start` ou `npm run start` para rodar o Node em produção e servir o Payload a partir do diretório `.build`.
1. Quando estiver pronto para publicar, veja a seção de Deploy abaixo para mais detalhes.

### Deploy no Payload Cloud

A maneira mais fácil de fazer o deploy do seu projeto é usar o [Payload Cloud](https://payloadcms.com/new/import), uma solução de hospedagem que permite fazer deploy de instâncias prontas para produção dos seus apps Payload diretamente do seu repositório GitHub com apenas um clique.

### Deploy na Vercel

Este template também pode ser deployado gratuitamente na Vercel. Você pode começar escolhendo o adaptador de banco de dados da Vercel durante a configuração do template ou instalando e configurando manualmente:

```bash
pnpm add @payloadcms/db-vercel-postgres
```

```ts
// payload.config.ts
import { vercelPostgresAdapter } from '@payloadcms/db-vercel-postgres'

export default buildConfig({
  // ...
  db: vercelPostgresAdapter({
    pool: {
      connectionString: process.env.POSTGRES_URL || '',
    },
  }),
  // ...
```

Também oferecemos suporte ao armazenamento blob da Vercel:

```bash
pnpm add @payloadcms/storage-vercel-blob
```

```ts
// payload.config.ts
import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob'

export default buildConfig({
  // ...
  plugins: [
    vercelBlobStorage({
      collections: {
        [Media.slug]: true,
      },
      token: process.env.BLOB_READ_WRITE_TOKEN || '',
    }),
  ],
  // ...
```

Também há uma opção simplificada de [deploy com um clique](https://github.com/payloadcms/payload/tree/templates/with-vercel-postgres) para a Vercel, caso necessite.

### Auto-hospedagem

Antes de fazer o deploy do seu app, você precisa:

1. Garantir que seu app compila e funciona em produção. Veja [Produção](#producao) para mais detalhes.
2. Em seguida, você pode fazer o deploy do Payload como faria com qualquer aplicação Node.js ou Next.js, seja diretamente em um VPS, na plataforma de Apps da DigitalOcean, via Coolify ou outras opções. Mais guias em breve.

Você também pode fazer o deploy do seu app manualmente, confira a [documentação de deploy](https://payloadcms.com/docs/production/deployment) para detalhes completos.

## Dúvidas

Se você tiver algum problema ou dúvida, entre em contato conosco no [Discord](https://discord.com/invite/payload) ou inicie uma [discussão no GitHub](https://github.com/payloadcms/payload/discussions).
