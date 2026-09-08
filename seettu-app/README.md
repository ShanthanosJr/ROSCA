# Seettu (ROSCA) Management App

A mobile-first web application designed to digitize and manage Rotating Savings and Credit Associations (ROSCAs), known locally as "Seettu" in Sri Lanka. This application focuses on transparency, trust, and offline-first capabilities to empower communities with verifiable financial records.

## Table of Contents
- [Overview](#overview)
- [Architecture & Tech Stack](#architecture--tech-stack)
- [Core Features](#core-features)
- [Modular Task Breakdown](#modular-task-breakdown)
- [Design System & Styling](#design-system--styling)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)

## Overview

Traditional ROSCAs rely heavily on manual record-keeping, leading to disputes, lack of transparency, and delayed turn-orders. This app replaces notebooks with an **immutable, append-only ledger**. The core principle is that **trust** is the highest priority: the app is built to make records visibly tamper-evident. 

With offline-first synchronization, three-tier stakeholder permissions, and real-time verifiable transactions, this platform bridges the gap between informal community savings and secure digital finance.

## Architecture & Tech Stack

This project is a React 18 application built with Vite, TypeScript, and Tailwind CSS. It is structured as a Progressive Web App (PWA) to ensure accessibility even in low-connectivity environments.

| Layer | Choice | Rationale |
|---|---|---|
| **Framework** | React 18 + Vite + TypeScript | Fast HMR, strict type-checking for financial data integrity. |
| **Styling** | Tailwind CSS | Utility-first styling with robust design tokens. |
| **Routing** | React Router v6 | Nested routes for three stakeholder tiers (`/member`, `/organizer`, `/community`). |
| **State Management**| Zustand + React Query | Zustand for UI state; React Query for caching, retries, and offline data. |
| **Backend / DB** | Node.js + Express + MongoDB | MongoDB for flexible schema design and scalable document storage, replacing Supabase. |
| **Offline Storage** | IndexedDB via Dexie.js | Crucial for offline-first capabilities during collection cycles. |

## Core Features

- **Three-Tier Permission Model:** Separate views and capabilities for Members, Organizers, and Community Leaders, secured via backend API authentication and Role-Based Access Control (RBAC).
- **Offline-First Synchronization:** Uses an outbox pattern with Dexie.js. Members can record payments without an internet connection; the app syncs automatically once reconnected.
- **Immutable Ledger:** Transactions are append-only. No updates or deletions are allowed, ensuring a verifiable history that resolves disputes through unalterable data.
- **Automated Turn-Order:** Supports fixed, lottery, or organizer-decision turn orders. Turn positions advance automatically when cycles close.
- **Verifiable Exports:** Members can generate signed PDF/CSV exports of their confirmed transaction history for credit applications.

## Modular Task Breakdown

The development is divided into focused modules to allow parallel work without merge conflicts. Each module encapsulates its own components, hooks, API calls, and state.

1. **Authentication & User Management:** Phone OTP login and session persistence. Role-based route guarding.
2. **Member Dashboard & Payment Tracking:** Optimistic UI for offline payment recording, contribution summaries, and sync status tracking.
3. **Turn-Order Management (Organizer):** Group creation, member invites, and turn-order computation algorithms.
4. **Transaction History & Verification:** Paginated, cursor-based ledger viewing with export functionality.
5. **Reminders & Notifications:** Background push notifications and localized reminder scheduling.
6. **Community Leader Reports:** Anonymized, aggregated dashboards ensuring data privacy while providing community-level insights.

## Design System & Styling

The design language emphasizes a **calm, editorial, high-trust** aesthetic derived from modern fintech and architectural principles. 

- **Colors:**
  - **Primary:** Navy Ink (`#141A22`) and Pure White (`#FFFFFF`) for a clean, professional base.
  - **Accent:** "Verified Green" (`#3DDC97`) replacing standard warm accents. This color is exclusively used to denote confirmed financial actions, reinforcing trust.
  - **Backgrounds:** Off-white/canvas for transactional screens to prioritize readability.
- **Typography:**
  - A two-typeface system: A bold grotesk sans-serif for primary headings, paired with a serif italic reserved strictly for emphasizing "high-trust" keywords (e.g., "Your payment is *confirmed*").
  - Clean geometric sans-serif for UI elements and body text.
- **Components:**
  - Large border radii (`20-24px`) on cards and fully rounded (`pill`) buttons.
  - Generous whitespace and vertical rhythm for scannability.
  - Line-style iconography and subtle staggered elements for a premium feel without clutter.

## Getting Started

### Prerequisites
- Node.js (v18+)
- npm / yarn / pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd seettu-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   Copy `.env.example` to `.env.local` and configure your MongoDB and backend credentials:
   ```env
   VITE_API_BASE_URL=http://localhost:5000/api
   MONGODB_URI=your-mongodb-connection-string
   VITE_APP_ENV=development
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

## Project Structure

The project strictly follows a feature-first architecture to isolate domain logic:

```text
src/
├── app/               # App shell, routing, global providers
├── design-system/     # Reusable UI primitives and design tokens
├── modules/           # Feature modules (auth, dashboard, turn-order, etc.)
├── shared/            # Cross-module utilities, API clients, and offline logic
├── store/             # Global Zustand stores
└── tests/             # Unit, integration, and E2E specs
```

> **Note:** Module folders never import from each other directly. All cross-module communication goes through `shared/` to maintain strict decoupling.

---
*This repository contains the frontend application and client-side logic for the Seettu/ROSCA platform.*
