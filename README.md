# 🎓 Udemy Clone Platform

A modern front-end **online learning platform** inspired by Udemy, providing a smooth experience for browsing, enrolling, and learning from courses.  
Built with **Next.js** for the frontend and **Strapi Headless CMS** as the backend for content & course management.

---

## 🚀 Features

**“The project is still under development, and these features are planned for upcoming releases.”**

- 📚 Browse and filter courses by category
- 🔍 Search functionality
- 📝 Course detail pages with descriptions & curriculum
- 🎥 Video lectures integration (future)
- ❤️ Favorites (save courses)
- 🛒 Add to cart & checkout flow
- 💳 Stripe payment integration
- 🔐 User authentication (register/login)
- 👨‍🎓 Student dashboard (enrolled courses)
- 📱 Responsive design for mobile & desktop

---

## 🛠️ Tech Stack

- **Frontend UI:** Next.js, Semantic UI React
- **Backend CMS:** Strapi (Headless CMS)
- **Payments:** Stripe

---

## ⚙️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/HalimMahmoud/Udemy-Clone
   cd Udemy-Clone
   ```
2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Setup environment variables**
   Create a .env.local file in the root with:

   ```lua
   NEXT_PUBLIC_API_URL=http://localhost:1337
   STRIPE_SECRET_KEY=your_stripe_secret
   STRIPE_PUBLIC_KEY=your_stripe_public
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

Open http://localhost:3000
