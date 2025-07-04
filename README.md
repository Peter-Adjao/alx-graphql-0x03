# 🚀 alx-graphql-0x03 — ALX Rick and Morty GraphQL App

This project is a React-based frontend built with **Next.js**, **TypeScript**, **TailwindCSS**, and **Apollo Client**. It consumes the [Rick and Morty GraphQL API](https://rickandmortyapi.com/graphql) to display episodes with pagination. In this version, we’ve added robust error handling using a custom-built `ErrorBoundary` component.

---

## 📁 Project Structure

This repo reflects three progressive phases:

- **0x01** – Set up project structure, GraphQL client, and environment  
- **0x02** – Fetch and render paginated data using Apollo `useQuery`, dynamic state, and reusable components  
- ✅ **0x03** – Implemented an `ErrorBoundary` class component to gracefully handle runtime errors  

---

## 📂 File Structure
alx-rick-and-morty-app/
├── components/
│   ├── ErrorBoundary.tsx
│   └── common/
│       └── EpisodeCard.tsx
├── graphql/
│   ├── apolloClient.ts
│   └── queries.ts
├── interfaces/
│   └── index.ts
├── pages/
│   ├── _app.tsx
│   └── index.tsx
├── styles/
│   └── globals.css
├── tsconfig.json
└── README.md


---

## ✅ Project Features

### Apollo Client Setup (`graphql/apolloClient.ts`)
- Configured Apollo Client with HTTP link and in-memory cache  
- Connected to `https://rickandmortyapi.com/graphql`

### Episode Query Setup (`graphql/queries.ts`)
- Defined `GET_EPISODES` query with pagination and filters

### Global Apollo Provider (`pages/_app.tsx`)
- Wrapped the app using `<ApolloProvider>` to enable query access

### Data Interfaces (`interfaces/index.ts`)
- Created TypeScript interfaces for episode data structure and props

### Episode UI + Pagination (`pages/index.tsx`)
- Queried episode data using `useQuery`
- Rendered episodes using custom `EpisodeCard` component
- Implemented pagination logic with `useState` and `useEffect`

### Error Handling with ErrorBoundary (`components/ErrorBoundary.tsx`)
- Catches rendering errors in child components
- Displays a fallback UI with a retry button
- Logs error details to the console

---

## 🎨 UI Highlights

- Responsive episode grid layout  
- Gradient-themed design with TailwindCSS  
- Pagination buttons with smooth hover effects  
- Reusable `EpisodeCard` component for clean structure  
- Graceful error fallback using `ErrorBoundary`

---

## 🎯 Learning Objectives

- Initialize a TypeScript-ready Next.js project with Tailwind and ESLint  
- Integrate Apollo Client and perform queries against a GraphQL endpoint  
- Handle query variables, pagination, and dynamic re-fetching  
- Use modular React components and custom interfaces for type safety  
- Implement a class-based `ErrorBoundary` to catch and recover from runtime errors

---

## 👨‍💻 Author

**Peter Adjao**  
GitHub: [@Peter-Adjao](https://github.com/Peter-Adjao)

---

## 📚 License

This project is licensed under the **MIT License**.  
It was developed as part of the **ALX Software Engineering** curriculum and is intended for educational purposes.



