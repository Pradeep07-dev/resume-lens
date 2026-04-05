# Resume Lens - AI Resume Builder

**AI-powered resume builder built with React, Vite & Express**  
Create, customise and download professional looking CVs in just a few minutes.

## 🚀 Live Demo

[Visit the app](https://)

## 🧰 Tech Stack

- **Frontend:** React, Vite, TailwindCSS
- **Backend:** Node.js, Express
- **Deployment:** Vercel
- **Features:**
  - Form for personal info, experience, projects and education
  - Multiple templates for different styles
  - Export to PDF/download support
  - Live link of resume
  - Fully responsive and free to use

## 🧩 Setup & Installation

### 1. Clone the repo

```bash
git clone https://github.com/Pradeep07-dev/Resume-Lens.git
cd Resume-Builder
```

### 2. Install dependencies

```bash
# in root folder if monorepo or split accordingly
cd client && npm install
cd ../server && npm install
```

### 3. Environment variables

Create a .env file in the server folder:

```bash
PORT=3000
MONGODB_URI=<your mongo uri>
JWT_SECRET=<your jwt secret>
IMAGEKIT_PRIVATE_KEY=<your imagekit key>
OPENAI_API_KEY=<open api key>
OPENAI_BASE_URL=<openai base url>
OPENAI_MODEL="gemini-2.5-flash"
```

Create a .env file in the client folder:

```bash
VITE_BASE_URL=http://localhost:3000
```

### 4. Run locally

```bash
# Client
cd client
npm run dev

# Server
cd server
npm run server
```
