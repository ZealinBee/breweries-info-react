# Introduction

This project uses typescript react to build an app that shows brewery information.It has some performance optimizations and it uses material UI for the styling and layout.

## Table of Content

- [Technologies](#technologies)
- [Project Structure](#project-strucutre)
- [Getting Started](#getting-started)

## Technologies

- REACT
- REACT ROUTER
- MUI
- TYPESCRIPT
- SCSS

## Features

- See all the breweries
- Pagination feature
- Search feature with debounce
- Ability to see details for individual breweries

## Project Structure

```
 ├── App.tsx
├── index.tsx
├── react-app-env.d.ts
├── reportWebVitals.ts
├── setupTests.ts
├── components
│   ├── BreweriesList.tsx
│   ├── BreweryCard.tsx
│   ├── Search.tsx
│   └── ThemeToggleButton.tsx
├── interfaces
│   └── Brewery.ts
├── pages
│   ├── BreweryPage.tsx
│   ├── Home.tsx
│   └── NotFound.tsx
└── styles
    ├── breweryPage.scss
    ├── card.scss
    └── styles.scss

```

## Getting Started

Clone the repository from github with `git clone` Then `npm i` for the packages and lastly `npm start` and go to your http://localhost:3000 to see the website  
Here is the deployed website: [Deployed Website][1]

[1]: https://unique-torrone-d43588.netlify.app/
