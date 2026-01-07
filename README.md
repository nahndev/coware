# Coware

A modern web application built with Next.js, React 19, and TailwindCSS.

## Requirements

### System Requirements

- **Node.js**: Version v22.17.1 or higher
- **pnpm**: Recommended package manager (or npm/yarn)
- **Operating System**: Windows, macOS, or Linux

### Check Node.js Version

```bash
node --version
```

If you don't have Node.js v22.17.1, please download it from [nodejs.org](https://nodejs.org/) or use Node Version Manager (nvm).

### Install nvm (Optional)

```bash
# On macOS/Linux
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Restart terminal and install Node.js
nvm install 22.17.1
nvm use 22.17.1
```

## Tech Stack

- **Framework**: Next.js 16.1.1
- **Frontend**: React 19.2.3
- **Styling**: TailwindCSS 4.x
- **UI Components**: Radix UI
- **State Management**: Zustand
- **Icons**: Lucide React
- **Language**: TypeScript
- **Package Manager**: pnpm

## Installation Guide

### 1. Clone the project

```bash
git clone <repository-url>
cd coware
```

### 2. Install dependencies

```bash
# Using pnpm (recommended)
pnpm install

# Or using npm
npm install

# Or using yarn
yarn install
```

### 3. Environment configuration (if needed)

```bash
# Create .env.local file
cp .env.example .env.local

# Edit .env.local with necessary environment variables
```

## Usage Guide

### Run in development mode

```bash
pnpm dev
# or
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Build for production

```bash
pnpm build
# or
npm run build
# or
yarn build
```

### Run in production mode

```bash
pnpm start
# or
npm run start
# or
yarn start
```

### Run linting

```bash
pnpm lint
# or
npm run lint
# or
yarn lint
```

## Project Structure

```
coware/
├── src/
│   ├── app/              # App Router (Next.js 13+)
│   │   ├── layout.tsx    # Main layout
│   │   ├── page.tsx      # Home page
│   │   └── globals.css   # Global CSS
│   ├── components/       # Reusable components
│   │   └── ui/           # UI components
│   └── lib/              # Utilities and helpers
├── public/               # Static assets
├── package.json          # Dependencies and scripts
├── next.config.ts        # Next.js configuration
├── tsconfig.json         # TypeScript configuration
├── tailwind.config.ts    # TailwindCSS configuration
└── README.md            # Project documentation
```

## Available Scripts

| Script       | Description                     |
| ------------ | ------------------------------- |
| `pnpm dev`   | Run the app in development mode |
| `pnpm build` | Build the app for production    |
| `pnpm start` | Run the built app               |
| `pnpm lint`  | Check for coding style errors   |

## Key Features

- ⚡ **Next.js 16** - Modern React framework with App Router
- 🎨 **TailwindCSS 4** - Utility-first CSS framework
- 📱 **Responsive Design** - Optimized for all devices
- 🔧 **TypeScript** - Type safety for JavaScript
- 🎯 **Radix UI** - Accessible and customizable components
- 📦 **Zustand** - Simple and efficient state management
- 🎭 **Lucide Icons** - Beautiful and consistent icon set

## Contributing

1. Fork the project
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Create a Pull Request

## Support

If you encounter any issues or need support, please:

- Create an issue on GitHub
- Contact via email: [your-email@example.com]

## License

This project is distributed under the MIT License. See the `LICENSE` file for more details.

---

_Developed with ❤️ by the Coware team_
