# 💳 Aspire Card Management Web Application

A responsive web application that replicates the Aspire card management experience, developed as part of a code challenge. It features a pixel-perfect UI, card carousel, modal-based interactions, card freezing functionality, and mock API-driven architecture.

---

## 🚀 Live Demo

**🔗 Hosted App:** [https://aspire-lite.netlify.app/]  
**📦 GitHub Repo:** [https://github.com/rajat-rt/aspire-lite]

---

## 🖥️ CSS Challenge

The design has been implemented with high fidelity using a modern CSS framework.  
All assets were exported from Adobe XD.

- ✅ **Desktop View:** Pixel-perfect implementation

**Design Reference:**

- [Desktop Design](https://xd.adobe.com/view/80c753f2-db2f-4dfc-b6c2-ce39a4c787f0-d594/screen/7d8639be-16a2-4dc6-9ddc-c3bcd8d8f1ee/)
- [Mobile Design](https://xd.adobe.com/view/80c753f2-db2f-4dfc-b6c2-ce39a4c787f0-d594)

---

## 🔧 Tech Stack

- ⚛️ **Next.js** with **TypeScript** (React Framework for SSR and SSG)
- 💨 **Tailwind CSS** (utility-first CSS framework)
- 🧠 **React Context API** (for global state management)
- 💾 **Local Storage** (for persistent state)
- 🔧 **Next.js App Router** (for file-based routing and layout management)

---

## 🧠 Features

- 🎨 Pixel-perfect Aspire UI
- ➕ Add new card via modal
  - Generates random card number and expiration date
- ❄️ Freeze/unfreeze cards with visual feedback
  - Frozen cards are shown with reduced opacity
- 💾 Data persistence via State Management
- 💡 API-mocking architecture with simulated endpoints

---

## 🏗️ Project Structure

src/
│
├── components/ # Reusable UI components
├── context/ # React context for state management
├── hooks/ # Custom hooks
├── utils/ # Utility functions (e.g. for generating card data)
├── pages/ # Main page layout
├── assets/ # Design assets (e.g. icons, images)
├── types/ # TypeScript interfaces and types
└── App.tsx # Main app component

---

## ⚙️ Getting Started

### 🛠️ Prerequisites

- Node.js ≥ 18
- Yarn or npm

### 📦 Installation

```bash
git clone https://github.com/your-username/aspire-card-app.git
cd aspire-card-app
npm install


npm run dev

```
