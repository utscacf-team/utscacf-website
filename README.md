# UTSC ACF Website

Visit the website [here](https://utscacf.vercel.app)

## Getting Started

Clone the project

```sh
git clone https://github.com/yong1le/utscacf-website.git
cd utscacf-website
```

In the file `keystatic.config.ts`, if the `storage` option is set to `"github"`, create
an `.env` file in the root of the directory, and set the following keys

```env
KEYSTATIC_GITHUB_CLIENT_ID
KEYSTATIC_GITHUB_CLIENT_SECRET
KEYSTATIC_SECRET
NEXT_PUBLIC_KEYSTATIC_GITHUB_APP_SLUG
```

This ensures that the keystatic cms has enough permissions to write to the repository. If
you don't have the values to the keys or you want to do testing, set
`storage: { kind: "local" }` in the config file.

Run the server

```sh
npm run dev
```

Open [http://localhost:3000]() on your computer
