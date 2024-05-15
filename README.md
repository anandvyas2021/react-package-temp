# React + Vite + TailwindCSS

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

This package is using yarn as the package manager.

Here are the resources for package setup:-

# versions

node => 20.13.1
npm => 10.5.2
yarn => 1.22.22

# vite.config.js

-   [vite-library mode](https://vitejs.dev/guide/build.html#library-mode)
-   This will help in setting the vite config file for the package/library mode.

# tailwind

-   [Tailwind for vite](https://tailwindcss.com/docs/guides/vite)
-   for setup tailwind, postcss, autoprefixer for the styling

-   direct commands:-
    > npm install -D tailwindcss postcss autoprefixer;
    > npx tailwindcss init -p
    > add these in main styles.css file:
        -   @tailwind base;
        -   @tailwind components;
        -   @tailwind utilities;
