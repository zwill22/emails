# Email template

![PNPM][pnpm-badge]
![React][react-badge]
![TailwindCSS][tailwind-badge]
![Markdown][markdown-badge]
![TypeScript][typescript-badge]

This repo includes email templates for HTML emails created using [React Email][react-email].
React Email is a library of unstyled components for creating emails using React, TailwindCSS, and TypeScript.
An email created using this library may be compiled into HTML using the provided `render` method.

## Developing Emails

Running

```sh
pnpm run dev
```

starts the React Email development environment.
Inside which, any email in the `emails` directory can be viewed, or sent to an address.

## Images

The images directory contains several images in SVG and PNG format.
Some email clients may not render SVG, so it is advised to convert them to PNG.
A simple converter is provided, which converts all SVG files in the images folder to PNG.

```sh
pnpm run convert
```

## Rendering

Templates can be rendered into HTML using the `renderAll()` function in `renderer/index.ts`.
This file also provides a `getRenderers()` function, which returns a map to renderer
functions to render each email separately.

[pnpm-badge]: https://img.shields.io/badge/pnpm-%234a4a4a.svg?style=for-the-badge&logo=pnpm&logoColor=f69220
[react-badge]: https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB
[tailwind-badge]: https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white
[markdown-badge]: https://img.shields.io/badge/markdown-%23000000.svg?style=for-the-badge&logo=markdown&logoColor=white
[typescript-badge]: https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white
[react-email]: https://react.email/
