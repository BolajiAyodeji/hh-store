# Headless Hashnode Store

[![Release](https://github.com/BolajiAyodeji/hh-store/actions/workflows/release.yml/badge.svg)](https://github.com/BolajiAyodeji/hh-store/actions/workflows/release.yml)

A multi-country ecommerce template built with Commerce Layer, Nextjs, Sanity Studio, and deployed to Netlify.

![]()

---

## Features

- A user-friendly and performant ecommerce storefront (with products, categories, i18n, cart, checkout, etc.) built with TypeScript, Nextjs, [Commerce Layer React Components](https://github.com/commercelayer/commercelayer-react-components) library, and Tailwind CSS.
- International transactional functionalities powered by [Commerce Layer](https://commercelayer.io) API.
- Structured content and a customizable Sanity authoring environment (including demo data), accessible on `<yourdomain>/studio`.
- PSD2-compliant and production-ready checkout functionality powered by [Commerce Layer React Checkout](https://github.com/commercelayer/commercelayer-react-checkout) application.
- Commerce seed data powered by [Commerce Layer CLI Seeder](https://github.com/commercelayer/commercelayer-cli-plugin-seeder/blob/main/README.md) plugin.
- React18 and Next13 support.
- Type-checking and code linting.
- Localization support (including Italian and French translations).
- SEO and progressive web application (PWA) support.
- Comprehensive installation and usage documentation.
- One-click deployment configuration to Netlify.

| [Storefront](https://commercelayer-sanity-template.netlify.app) (`/` page) | [Sanity studio](https://commercelayer-sanity-template.netlify.app/studio) (`/studio` page)                                                                |
| ----------------------------------------- | ------------------------------ |
| [![A preview image showing the Commerce Layer dashboard.](./public/ui-preview.png)](https://commercelayer-sanity-template.netlify.app)          | [![A preview image showing the Sanity studio.](./public/sanity-preview.png)](https://commercelayer-sanity-template.netlify.app/studio)                   |

## Important Files and Folders

| **Path**                           | **Description**                      |
| ---------------------------------- | ------------------------------------ |
| `.env.local.sample`                | Example file with all the required environment variables.               |  
| `/components`                      | React components for the storefront.                          |
| `/locale/index.ts`                 | Config file for the storefront's transalations (`en-US`, `it-IT`, and `fr-FR`).     |
| `/hooks/GetToken.ts`               | React hook file to fetch a salesChannel token from Commerce Layer and save as a cookie.    |
| `/pages/[countryCode]/[lang]/index.tsx`     | Index page for the storefront (country selector and product listing).          |
| `/pages/[countryCode]/[lang]/[product].tsx` | Page for all product items (image, product information, and variant selection).       |
| `/pages/[countryCode]/[lang]/cart.tsx` | Cart page for for the storefront with link to checkout.        |
| `/data`                            | Exported data to seed your Sanity studio with.                         |  
| `/utils/sanity/api.ts`             | Where all data from Sanity is fetched using `groq` queries.        |
| `sanity.config.ts`                 | Config file for Sanity Studio.  |
| `sanity.cli.ts`                    | Config file for Sanity CLI.     |
| `/pages/studio/[[...index]].tsx`   | Where Sanity Studio is mounted using `next-sanity`.                 |
| `/schemas`                         | Where Sanity Studio gets its content types from.                  |
| `/plugins`                         | Where the advanced Sanity Studio customization is setup.              |

## Getting Started

The quickest way to get up and running is to use the deploy button below to set up and deploy automatically to Netlify. Afterward, you will add some seed data to Commerce Layer and Sanity studio. The deploy button will clone this repository and ask you to enter all the required environment variables. Alternatively, you can clone this repository, configure the template, import the dataset into your Sanity studio, import some seed commerce data into your Commerce Layer organization, and deploy your application. The installation guides below will show you how to achieve this.

### Installation Guide

1. Clone this repository ([learn how to do this](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository)).

2. Rename the `/env.local.example` file to `.env.local` and add the following credentials:

| **Variable**                         | **Description**                     |
| ------------------------------------ | ----------------------------------- |
| `BUILD_LANGUAGES`                    | The supported locales (the default is `en-US, it-IT, fr-FR`).                                                       |
| `NEXT_PUBLIC_SITE_NAME`              | Optional name for the `<title>` head tag (you can also edit this directly in the code).                           |
| `NEXT_PUBLIC_SITE_URL`               | Optional URL of your deployed project for the `og:url` meta property (you can also edit this directly in the code).|
| `NEXT_PUBLIC_CL_CLIENT_ID`                       | Your Commerce Layer sales channels application client ID (you can create this automatically by following this [onboarding guide](https://docs.commercelayer.io/developers) or manually on the [Commerce Layer dashboard](https://dashboard.commercelayer.io).          |
| `NEXT_PUBLIC_CL_ENDPOINT`                        | Your Commerce Layer organization's base endpoint (you can copy this on the [Commerce Layer dashboard](https://dashboard.commercelayer.io)).                                                 |
| `NEXT_PUBLIC_SANITY_PROJECT_TITLE`   | Optional name for the `<title>` head tag in Sanity studio (you can also edit this directly in the code).          |
| `NEXT_PUBLIC_SANITY_PROJECT_ID`      | Sanity project ID (you can get this from [sanity.io/manage](https://sanity.io/manage)) after creating a new project with the `npm -y create sanity@latest` CLI command or this [quick start wizard](https://sanity.io/get-started).                           |
| `NEXT_PUBLIC_SANITY_DATASET`         | Sanity dataset (you can get this from [sanity.io/manage](https://sanity.io/manage)).                                |
| `NEXT_PUBLIC_SANITY_API_VERSION`     | Sanity API version in the ISO date format, e.g `2022-02-15` (you can learn more about this in [Sanity docs](https://www.sanity.io/help/js-client-api-version)).                         |
| `NEXT_PUBLIC_SANITY_TOKEN`           | Sanity API token (you can get this from [sanity.io/manage](https://sanity.io/manage)).                           |

3. Run the command below to install the required dependencies:

```bash
pnpm install
```

4. Run the command below to start the development server:

```bash
pnpm run dev
```

## Contributors Guide

1. Fork [this repository](https://github.com/commercelayer/commercelayer-sanity-template) (learn how to do this [here](https://help.github.com/articles/fork-a-repo)).

2. Clone the forked repository like so:

```bash
git clone https://github.com/<your username>/commercelayer-sanity-template.git && cd commercelayer-sanity-template
```

3. Make your changes and create a pull request ([learn how to do this](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request)).

4. Someone will attend to your pull request and provide some feedback.

## Need Help?

1. Join [Commerce Layer's Slack community](https://slack.commercelayer.app).

2. Create an [issue](https://github.com/commercelayer/sanity-template-commercelayer/issues) in this repository.

3. Ping us [on Twitter](https://twitter.com/commercelayer).

## License

This repository is published under the [MIT](LICENSE) license.

---

<div align="center">
  <a href="https://commercelayer.io">
    <img src="https://data.commercelayer.app/assets/logos/glyph/black/commercelayer_glyph_black.svg" height="50" alt="Commerce Layer Logo">
  </a>
  <p><a href="https://commercelayer.io/why" target="_blank" rel="noopener noreferrer">Commerce Layer</a> is a multi-market commerce API and order management system that lets you add global shopping capabilities to any website, mobile app, chatbot, wearable, voice, or IoT device, with ease. Compose your stack with the best-of-breed tools you already mastered and love. Make any experience shoppable, anywhere, through a blazing-fast, enterprise-grade, and <a href="https://docs.commercelayer.io" target="_blank" rel="noopener noreferrer">secure API</a>.</p>
</div>
