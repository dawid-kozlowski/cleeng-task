# Subscription Management App

A React application for viewing and managing user subscriptions with a responsive grid layout.

## Features

- **Subscription List**: View all active, paused, and canceled subscriptions
- **Responsive Grid**: Automatically adjusts layout based on screen size
- **Cancel Subscriptions**: Mark subscriptions as canceled
- **Styled Components**: Modern UI with styled-components

## Getting Started

### Prerequisites

This project uses [Bun](https://bun.sh) as the package manager. If you don't have Bun installed, you can install it with:

```bash
# macOS, Linux, and WSL
curl -fsSL https://bun.sh/install | bash

# Windows (PowerShell)
powershell -c "irm bun.sh/install.ps1 | iex"
```

For more installation options, visit [https://bun.sh/docs/installation](https://bun.sh/docs/installation).

**Alternatively**, you can use npm if you prefer not to install Bun.

### Installation

Install dependencies:

```bash
# Using Bun
bun install

# Or using npm
npm install
```

### Development

Start the development server:

```bash
# Using Bun
bun run dev

# Or using npm
npm run dev
```

The app will be available at `http://localhost:5173` (or the next available port if 5173 is in use). The development server includes hot module replacement (HMR) for instant updates as you edit the code.

### Build

Create a production build:

```bash
# Using Bun
bun run build

# Or using npm
npm run build
```

The optimized build will be output to the `dist/` directory.

### Testing

Run the test suite in watch mode:

```bash
# Using Bun
bun run test

# Or using npm
npm run test
```

The test suite was created using agentic AI to ensure comprehensive coverage of the application's core functionality. Tests include component rendering states (loading, error, empty, and populated), user interactions (subscription cancellation), and custom hook behavior (data fetching and state management). All tests are written with Vitest and React Testing Library.

## Project Structure

```
src/
├── components/
│   ├── SubscriptionCard.tsx      # Individual subscription card
│   ├── SubscriptionList.tsx      # Grid of subscription cards
│   └── *.test.tsx                # Component tests
├── hooks/
│   ├── useSubscriptions.ts       # Hook for subscription data
│   └── useSubscriptions.test.ts  # Hook tests
├── lib/
│   ├── GlobalStyles.ts           # Global CSS styles
│   └── mock-data.ts              # Mock subscription data
└── types/
    └── types.ts                  # TypeScript type definitions
```
