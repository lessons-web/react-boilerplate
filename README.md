# react-boilerplate

A basic react admin boilerplate with `react`、`react-router-dom`、`ant-design`、`valtio`、 and `apexcharts`.

## Get Started

```bash
# npm
npm install
npm run start

# yarn
yarn install
yarn start
```

> Note: You need to run two commands before starting development to ensure that the commitlint specification runs properly.
> 
> 1. `npm run prepare` or `yarn prepare`
>
> 2. `npx husky add .husky/commit-msg 'npx --no-install commitlint --edit $1'`

## Directory

```
RBT React Boilerplate
    ├── public                           // public common sources
    │   ├── imgs               
    │   ├── logo.png
    │   ├── minifest.json
    │   ├── robots.txt
    ├── src
    │   ├── assets                      // app sources
    │   │   ├── images
    │   │   └── styles
    │   ├── components                   // app components
    │   │   ├── chart
    │   │   └── layout
    │   ├── pages                       // pages folder
    │   │   ├── dashboard
    │   │   │   ├── index.tsx
    │   │   ├── billing
    │   │   │   ├── index.tsx
    │   │   ├── profile
    │   │   │   ├── index.tsx
    │   │   ├── tables
    │   │   │   ├── index.tsx
    │   │   └── router.tsx              // project router
    │   ├── hooks                       // react custom hooks
    │   ├── utils
    │   │   ├── api.ts                  // app apis
    │   │   ├── request.ts              // app request
    │   │   └── constants.ts            // app constants
    │   ├──main.tsx
    │   ├──vite-env.d.ts
    │   ├── CHANGELOG.md
    │   ├── eslintrc.cjs
    │   ├── package.json
    │   ├── .env                        // ENV file
    └── └── README.md
```

## DEV

More detail can see the [DEVDOC](./DEVDOC.md).

## Feature

    - Common Login / Auth module.