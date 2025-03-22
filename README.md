# WeWantWaste Skip Redesign

This project is a redesigned front-end page for WeWantWaste with a focus on modern UI, responsive layouts, and improved user experience—all while retaining the original functionality. The redesign features enhanced skip option cards with zoomed-in images (using a dummy Picsum API), dark/light mode support, and a mobile-optimized stepper implemented as a drawer for easy navigation.

## Live Demo

[https://waste-skip-ui-redesign.vercel.app/](https://waste-skip-ui-redesign.vercel.app/)

## Key Features

- **Modern UI Design:** A clean, maintainable React codebase with a fresh visual approach.
- **Responsive Layout:** Seamlessly adapts across mobile and desktop screens.
- **Mobile-Optimized Stepper:** The stepper is implemented as a drawer on mobile, allowing for easy navigation between steps. It hides during scroll and reappears when scrolling up, improving navigation and user experience.
- **Dark/Light Mode Support:** Easily switch between dark and light themes.
- **Enhanced Skip Cards:** Redesigned cards featuring zoomed-in images (using a dummy Picsum API) with a simplified layout that removes redundant selection buttons.
- **Data-Driven:** Dynamically populated skip options via the WeWantWaste API.
- **Testing:** Unit tests with Jest and @testing-library/react ensure component reliability.

## Improvement Areas

- **Mobile Navigation:** Introduced a drawer approach for the stepper on mobile devices to enhance navigation and maximize screen real estate.
- **UI/UX Enhancements:** Redesigned skip cards to display zoomed-in images and removed redundant buttons for a cleaner interface.
- **Theme Customization:** Integrated dark/light mode toggling to improve accessibility and user preference support.
- **Performance Optimization:** Refactored component structure and optimized API integration for faster load times and a smoother experience.
- **Code Maintainability:** Streamlined codebase structure for improved readability and scalability.
- **Testing:** Expanded test coverage to ensure robust functionality across key components.

## Technologies Used

- React
- Next.js
- TypeScript
- Tailwind CSS
- Vercel
- Jest
- @testing-library/react

## Approach

1. **Requirement Analysis:** Reviewed the original page and task description to identify necessary improvements.
2. **UI/UX Redesign:** Crafted a modern design that enhances visual appeal and usability.
3. **Component Development:** Built reusable React components for skip options, stepper, and theme toggle.
4. **Responsive Design:** Leveraged Tailwind CSS to create a fluid layout across devices. Implemented a drawer for the stepper on mobile devices for easier navigation.
5. **API Integration:** Integrated the WeWantWaste API for dynamic data fetching.
6. **Testing:** Added unit tests to secure component functionality and ensure a stable user experience.
7. **Deployment:** Deployed on Vercel for streamlined access and continuous integration.

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

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Open Sans](https://vercel.com/font), a new font family for Vercel.
