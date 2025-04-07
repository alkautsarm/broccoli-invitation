
# 🥦 Broccoli & Co. Invitation Website 

Broccoli & Co. is an upcoming online service company. This project provides Invitation Website to Broccolli's user.

## 🛠️ Initialization

Initialization step is mandatory before starting local development, production build, and testing. To initialize this project, clone this project using HTTPS or SSH. Below example use HTTPS.
```bash
  git clone https://github.com/alkautsarm/broccoli-invitation.git
  cd broccoli-invitation
  yarn
```

Install packages.
```bash
  yarn
```

## ⚙️ Local Development

Run local development using below script to enable Hot Module Replacement (HMR).

```bash
  yarn dev
```

## 🚀 Production Build

To build the app, run below command. The build files will be generated in `dist` folder. You can deploy this `dist` folder using your preferance static server.

```bash
  yarn build
```

To check your production build in local, run below command. (Notes: Only use `preview` for local environment).

```bash
  yarn preview
```
Detail of production build can check [Vite Static Deploy Docs](https://vite.dev/guide/static-deploy).

## 🧪 Testing

Before start watch testing, run below script for testing initialization. This script will enable playwright to add dependency and install browsers (ex: Chromium).

```bash
  yarn test:init
```

Then, run below script to start watching your testing.

```bash
  yarn test:start
```

## 💻 Technology Stacks

|Technology| Usage |
|--|--|
| React | Component-based frontend library |
| Vite | Fast and modern frontend build tool |
| React Hook Form | Form management library  in React |
| Tailwind CSS | Utility-first CSS framework |
| Vitest & Playwright | Testing framework |
| ESLint & Prettier | Code standardization and formatter |
| Husky & Lint Staged | Git hooks to run eslint and prettier script upon Git committing |
| Commitlint | Standardize commit message |
   
## 📂 Project Structure

```bash
src/
├── assets/			# Images, icons, etc.
├── components/     # Reusable UI components
├── constants/      # Shared constants
├── hooks/          # Custom React hooks
├── interfaces/     # Shared interfaces and types
├── pages/          # Route-level pages
└── App.tsx         # Root component
```

## 👨🏻‍💻 Authors

[@alkautsarm](https://github.com/alkautsarm)