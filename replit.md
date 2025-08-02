# Quick Win - 8 Ball Pool AI Assistant

## Overview

Quick Win is a modern web application that serves as an AI-powered assistant for 8 Ball Pool players. The application features a marketing landing page with sections for features, pricing, reseller programs, and user engagement. Built with a full-stack TypeScript architecture, it combines React frontend components with an Express.js backend and PostgreSQL database integration.

## User Preferences

Preferred communication style: Simple, everyday language.

## Recent Changes (August 2025)

### Mobile Responsiveness Enhancement
- Enhanced reseller dashboard with comprehensive mobile-first design
- Implemented responsive breakpoints using Tailwind CSS (sm:, lg: breakpoints)
- Created mobile-specific card layout for customer management (replaces table view on phones)
- Optimized touch targets and button sizes for mobile interaction
- Added collapsible header with icon-only buttons on small screens
- Improved stats grid with 2x2 layout on mobile devices
- Enhanced tab navigation with full-width grid layout
- Implemented better scrolling areas with mobile-optimized padding and spacing

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Styling**: Tailwind CSS with custom design system using CSS variables for theming
- **UI Components**: Radix UI primitives with shadcn/ui component library for consistent, accessible components
- **State Management**: TanStack Query for server state management and caching
- **Routing**: Wouter for lightweight client-side routing
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with TypeScript in ESM format
- **Framework**: Express.js with middleware for JSON parsing, URL encoding, and request logging
- **Database Layer**: Drizzle ORM with PostgreSQL dialect for type-safe database operations
- **Storage Interface**: Abstracted storage layer with in-memory implementation for development and database implementation for production
- **Session Management**: Express session handling with PostgreSQL session store

### Data Storage
- **Primary Database**: PostgreSQL with Neon serverless driver for cloud deployment
- **ORM**: Drizzle ORM for schema definition, migrations, and type-safe queries
- **Schema**: User authentication system with username/password fields and UUID primary keys
- **Migrations**: Drizzle Kit for database schema management and version control

### Development Environment
- **Monorepo Structure**: Shared code between client and server with TypeScript path mapping
- **Hot Reload**: Vite development server with HMR for rapid development
- **Error Handling**: Runtime error overlay for development debugging
- **Build Process**: Separate client (Vite) and server (esbuild) build pipelines

### Design System
- **Theme**: Dark-first design with CSS custom properties for consistent theming
- **Typography**: Inter font family for modern, readable interface
- **Color Palette**: Gradient-based design with primary (purple), secondary (pink), and accent colors
- **Components**: Glass morphism effects, gradient backgrounds, and smooth animations
- **Responsive**: Mobile-first approach with Tailwind breakpoints (sm:640px, lg:1024px)
- **Mobile UX**: Touch-friendly interface with optimized button sizes, card-based layouts, and collapsible navigation
- **Adaptive Layouts**: Desktop table views transform to mobile card views for better readability

### Authentication & Security
- **User System**: Username/password authentication with hashed password storage
- **Session Management**: Server-side sessions with PostgreSQL backing store
- **Type Safety**: Zod schema validation for user inputs and API requests

## External Dependencies

### Core Framework Dependencies
- **@neondatabase/serverless**: Serverless PostgreSQL driver for Neon database connections
- **drizzle-orm**: Type-safe ORM for database operations and query building
- **drizzle-kit**: CLI tools for database migrations and schema management
- **@tanstack/react-query**: Server state management and caching for React applications

### UI Component Libraries
- **@radix-ui/react-***: Comprehensive collection of accessible, unstyled UI primitives
- **class-variance-authority**: Utility for creating variant-based component APIs
- **clsx**: Conditional CSS class name utility
- **tailwindcss**: Utility-first CSS framework for styling

### Development Tools
- **vite**: Build tool and development server for modern web applications
- **@vitejs/plugin-react**: React support for Vite build system
- **esbuild**: Fast JavaScript bundler for server-side code compilation
- **tsx**: TypeScript execution engine for Node.js development

### Additional Libraries
- **react-hook-form**: Form state management and validation
- **wouter**: Minimalist routing library for React
- **date-fns**: Date manipulation and formatting utilities
- **react-icons**: Icon library with multiple icon sets
- **nanoid**: URL-safe unique ID generator