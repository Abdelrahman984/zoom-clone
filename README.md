# ZoomClone

ZoomClone is a Zoom-like meeting application built with **Next.js** and powered by **GetStream.io** for real-time communication. It allows users to schedule, join, and manage video meetings with ease.

---

## 🚀 Features

- 🔐 Authentication with Clerk
- 🎥 Real-time video meetings with GetStream.io
- 📅 Schedule, join, and manage meetings
- 📂 Organized navigation with sidebar and top navigation bar
- 👥 Personal meeting rooms
- 📜 Meeting history (upcoming, previous, recordings)
- 🎨 Responsive UI with TailwindCSS

---

## 📦 Tech Stack

- [Next.js](https://nextjs.org/) – React framework for SSR and routing
- [GetStream.io](https://getstream.io/) – Video/Audio streaming SDK
- [Clerk](https://clerk.com/) – Authentication & User Management
- [TailwindCSS](https://tailwindcss.com/) – Styling
- [TypeScript](https://www.typescriptlang.org/) – Type safety
- [ShadCN/UI](https://ui.shadcn.com/) – UI components

---

## 📂 Project Structure

```bash
zoom-clone/
├── app/                # Next.js app router
├── components/         # Reusable UI components
├── constants/          # Sidebar links, avatar images, etc.
├── public/             # Static assets (icons, images)
│   ├── icons/          # SVG icons
│   └── images/         # Avatars & other images
├── styles/             # Global styles
└── ...
```

---

## ⚙️ Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/Abdelrahman984/zoom-clone.git
cd zoom-clone
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env.local` file in the root folder and add:

```env
NEXT_PUBLIC_STREAM_API_KEY=your_stream_api_key
STREAM_API_SECRET=your_stream_secret
NEXT_PUBLIC_CLERK_FRONTEND_API=your_clerk_frontend_api
CLERK_SECRET_KEY=your_clerk_secret
```

### 4. Run the development server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000).

---

## 🌍 Deployment

This project is ready for deployment on [Vercel](https://vercel.com/). Just connect your GitHub repository, set up environment variables, and deploy.

---

## 🖼️ Live Demo

👉 [ZoomClone on Vercel](https://zoom-clone.vercel.app/)

---

## 📸 Screenshots

<img width="598" height="725" alt="image" src="https://github.com/user-attachments/assets/ebf5a9da-edd2-4c2b-9776-de59fd65b9e9" />
<img width="1892" height="860" alt="image" src="https://github.com/user-attachments/assets/bbe1e856-1c78-4b35-8066-58522fb8de24" />
<img width="1369" height="762" alt="image" src="https://github.com/user-attachments/assets/77962042-bb50-4642-8904-23f5d2d78788" />
<img width="1901" height="873" alt="image" src="https://github.com/user-attachments/assets/03153f9e-8c2a-4000-9042-69c47e30b532" />
<img width="1906" height="875" alt="image" src="https://github.com/user-attachments/assets/0a2ab714-67f1-4209-8241-aa7599940fa7" />

---

## 📜 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

- **Abdelrahman Alaa** – [GitHub](https://github.com/Abdelrahman984)
