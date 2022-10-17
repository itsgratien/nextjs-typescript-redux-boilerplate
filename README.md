# UPG V2 Bank Office Portal

Urubuto Payment Gateway Version 2 Bank Office Portal

- [Guides](#guides)

  - [Requirements](#requirements)
  - [Tools & Technology Used](#tools--technology-used)
  - [Directory Structure](#directory-structures)
  - [How to run project locally ?](#how-to-run-project-locally)

- [Available Scripts](#available-scripts)
  - [yarn install](#yarn-install)
  - [yarn start](#yarn-start)
  - [yarn test](#yarn-test)
  - [yarn build](#yarn-build)
  - [yarn format](#yarn-format)
  - [yarn lint](#yarn-lint)

## Guides

### Requirements

- [NodeJs](https://nodejs.org/en/) must be installed in your computer and
- [Yarn](https://yarnpkg.com/getting-started/install)

### Tools & Technology Used

- [NodeJs](https://nodejs.org/en/)
- [Typescript](https://www.typescriptlang.org/docs/)
- [React](https://reactjs.org/docs/hooks-reference.html)
- [Next JS](https://nextjs.org/docs/getting-started)
- [Redux ToolKit](https://redux-toolkit.js.org/introduction/getting-started)
- [Tailwind](https://tailwindcss.com/docs/guides/create-react-app)
- [SCSS Modules](https://sass-lang.com/documentation/syntax)
- [MSW](https://mswjs.io/)
- [Jest](https://jestjs.io/docs/getting-started)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)

## Directory Structures

`src`:

- `assets` contains static files like images, icons etc
- `components` contains UI Components
- `contexts` contains custom context APIs
- `hooks` contains custom hook code
- `mocks` contains mock apis integrations
- `redux` redux store (state management)
- `styles` global styles
- `types` contains custom types
- `utils` contains configuration setups

### How to run project locally ?

- clone this repo
- open project in your editor (ex: vscode)
- in your terminal run `yarn install` to install packages
- run `yarn start` to start project locally

## Available Scripts

In the project directory, you can run:

### `yarn install`

To this command to install packages required to run this project

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Run Test

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

### `yarn lint`

Check eslint errors

### `yarn format`

Format Code With Prettier
