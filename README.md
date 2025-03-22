# WeWantWaste Skip Redesign

This project is a redesign of a front-end page for WeWantWaste, focusing on improving the look and feel, responsiveness, and UI/UX while keeping the original functionality intact. The goal was to create a clean, maintainable React codebase that displays correctly on both mobile and desktop web browsers.

**Live Demo:** [https://waste-skip-ui-redesign.vercel.app/](https://waste-skip-ui-redesign.vercel.app/)

## Key Features

*   **Modern UI Design:** A visually appealing and user-friendly design.
*   **Responsive Layout:** Adapts seamlessly to different screen sizes, ensuring a consistent experience on mobile and desktop.
*   **React & Next.js:** Built with React and Next.js for a fast and efficient user experience.
*   **Data Fetching:** Uses the WeWantWaste API to populate skip options dynamically.
*   **Theme Toggle:** Supports both light and dark modes.
*   **Improved Stepper:** The stepper component has been updated to be fully responsive.
*   **Mobile Drawer:** In mobile view, the stepper is placed in a drawer. The stepper is hidden on scroll and reappears when scrolling to the top.
*   **Testing:** Includes unit tests for key components.

## Technologies Used

*   React
*   Next.js
*   TypeScript
*   Tailwind CSS
*   Vercel
*   Jest
*   @testing-library/react

## Approach

1.  **Understanding the Requirements:** Analyzed the original page and the requirements outlined in the task description.
2.  **UI/UX Design:** Created a new design that improves the user experience and visual appeal.
3.  **Component Development:** Developed reusable React components for the skip options, stepper, and other UI elements.
4.  **Responsiveness:** Implemented a responsive layout using Tailwind CSS to ensure the page displays correctly on different screen sizes.
5.  **API Integration:** Integrated with the WeWantWaste API to fetch skip data dynamically.
6.  **Testing:** Implemented unit tests using Jest and @testing-library/react.
7.  **Deployment:** Deployed the application to Vercel for easy access and testing.

## Folder Structure

```
my-skip-app/
├── .git/
├── .next/
├── src/
│   ├── app/
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── not-found.tsx
│   ├── components/
│   │   ├── SkipCard.tsx
│   │   ├── SkipCardSkeleton.tsx
│   │   ├── Stepper.tsx
│   │   └── ThemeToggle.tsx
│   ├── hooks/
│   │   └── useSkips.ts
│   ├── types/
│   │   └── skip.ts
│   └── utils/
├── tests/
│   ├── SkipCard.test.tsx
│   └── Stepper.test.tsx
├── .gitignore
├── eslint.config.mjs
├── next.config.ts
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── README.md
└── tsconfig.json
```

*   `src/app`: Contains the main application components and routing.
*   `src/components`: Includes reusable UI components like `SkipCard`, `Stepper`, and `ThemeToggle`.
*   `src/hooks`: Contains custom hooks, such as `useSkips`.
*   `src/types`: Defines TypeScript types for the project.
*   `src/utils`: Includes utility functions.
*   `tests`: Contains unit tests for the components.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.
