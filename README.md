# 🌐 Next.js Social Media App

A modern, full-stack social media platform built with the latest web technologies including **Next.js 14**, **React 18**, **Clerk authentication**, **Supabase**, and **Prisma**. This project features a sleek UI with **Ant Design**, rich media support via **Cloudinary**, real-time interactions, and auto-animated components.

> 🔓 **Free to use** – Feel free to clone, modify, and deploy for personal or educational use.

---

## 🚀 Features

- 🔐 **Clerk Auth** – secure, production-ready authentication
- 🧬 **Supabase** – real-time database and user storage
- ⚙️ **Prisma ORM** – type-safe and scalable database access
- 🎨 **Ant Design + CSSinJS** – polished UI with powerful components
- 🖼️ **Cloudinary Integration** – image and media uploads
- 🌈 **Auto Animate** – smooth transitions for dynamic UI
- 📦 **React Query** – server-state management with caching and devtools
- 🔔 **React Hot Toast** – clean and customizable notifications

---

## 🛠️ Tech Stack

- **Framework**: Next.js 14, React 18
- **Styling**: Ant Design, @ant-design/cssinjs
- **Auth**: Clerk
- **Database**: Supabase (Postgres)
- **ORM**: Prisma
- **Media**: Cloudinary
- **State Management**: React Query
- **UX Enhancements**: Auto Animate, React Hot Toast

---

## 📂 Project Structure

.
├── pages/ # Next.js pages
├── components/ # Reusable UI components
├── lib/ # Helpers and API clients
├── styles/ # Theme and global styles
├── prisma/ # Prisma schema
└── public/ # Static assets


---

## 🔧 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/nextjs-social-media-app.git
cd nextjs-social-media-app
2. Install dependencies
bash
Copy
Edit
npm install
3. Setup environment variables
Create a .env file in the root:

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_key
CLERK_SECRET_KEY=your_clerk_secret
SUPABASE_URL=your_supabase_url
SUPABASE_ANON_KEY=your_anon_key
DATABASE_URL=your_database_url
CLOUDINARY_URL=your_cloudinary_url
4. Run Prisma migrations
bash
Copy
Edit
npx prisma generate
npx prisma migrate dev
5. Start the development server
npm run dev
The app will be live at http://localhost:3000.

📦 Deployment
You can deploy this project using platforms like:

Vercel

Netlify

Render

Just set the appropriate environment variables in the hosting dashboard.

🤝 Contributing
Contributions are welcome! Please fork the repo and submit a pull request for any bug fixes or improvements.

📄 License
This project is licensed under the MIT License — free to use, modify, and distribute.

📸 Screenshots (Optional)
Add screenshots or a Loom video demo here to showcase your UI.

🙌 Credits
Special thanks to the creators of:

Next.js

Clerk

Supabase

Prisma

Ant Design

Cloudinary

