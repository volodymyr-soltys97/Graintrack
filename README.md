# React Application

This is a simple React application demonstrating code organization, architectural approaches, and best practices.

## Features

- Authentication (login form, mock API service, session state)
- Basic layout with routing
- Home page displaying "Hello, World!"

## Tools

- React
- TanStack Router
- TailwindCSS
- Vite/Vitest
- TypeScript (SWC)
- RxJS + Dependency Injection (DI) using tsyringe

## Structure

- Code is divided into levels: app, core, shared, pages, features.
- UI components only respond to the passed state (no logic in components).
- Service layer is based on RxJS (reactive, declarative, event-driven model).
- Services are connected to UI through hooks, instances are created by DI (no `new` keyword).
- UI is as stateless as possible, using TailwindCSS and radix-ui primitives.
- Code is covered with tests using Vitest, boundaries of modules are clearly defined.

## Getting Started

1. Clone the repository
   ```bash
   git clone <repository_url>
   cd graintrack
