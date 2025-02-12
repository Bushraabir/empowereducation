# EmpowerEd

EmpowerEd is a dynamic and visually engaging web platform dedicated to empowering students and transforming lives by making education accessible to everyone. As a non-profit initiative, EmpowerEd offers interactive features that highlight its mission, journey, and educational tools.

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation & Setup](#installation--setup)
- [Environment Variables](#environment-variables)
- [Folder Structure](#folder-structure)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Overview
EmpowerEd is designed to:

- Inspire and empower students through interactive experiences.
- Present a clear mission statement and timeline of impactful milestones.
- Offer academic growth, mental well-being, and community engagement features.
- Provide an intuitive contact interface with real-time messaging via EmailJS.

With modern animations, scroll-triggered effects, and a responsive design, EmpowerEd ensures a seamless experience across devices.

## Features

### Hero Section:
- Full-screen landing page with an animated title ("EMPOWERED").
- Particle effects responding to mouse movements.
- Call-to-action button directing users to more information.

### Mission & Journey:
- A dedicated section outlining EmpowerEd's mission.
- A vertical timeline highlighting key milestones, including the launch of membership benefits and international outreach.

### Features Section:
- **Student Hub:** A community space for resource sharing and mentorship.
- **Mental Health Support:** AI-driven tools and resources.
- **Funding for Research:** Financial backing for innovative projects.
- **Visa & Passport Assistance:** Guidance for studying abroad.
- **Competition Organization:** Platforms for showcasing creativity and skills.
- **Scholarships:** Financial aid programs for students worldwide.
- **Global Network & Success Stories:** Connecting students and sharing inspiring achievements.

### Contact Section:
- A responsive contact form with an animated design.
- Email submission via EmailJS integration.
- Lottie animations for enhanced user experience.

## Technologies Used
- **React**: For building the user interface.
- **GSAP & ScrollTrigger**: For scroll-based and interactive animations.
- **Lottie & Framer Motion**: For high-quality animations and smooth transitions.
- **React Vertical Timeline Component**: To create a visually appealing timeline.
- **EmailJS**: For handling contact form submissions.
- **Vite**: For fast development and bundling.
- **CSS & Media Queries**: To ensure responsive design.
- **React Router** *(if applicable)*: For navigation between pages.

## Installation & Setup

### Clone the Repository:
```bash
git clone https://github.com/yourusername/empowered-website.git
cd empowered-website
```

### Install Dependencies:
Using npm:
```bash
npm install
```
Using Yarn:
```bash
yarn install
```

### Set Up Environment Variables:
Create a `.env` file at the root of your project and add your EmailJS credentials:
```env
VITE_APP_EMAILJS_SERVER_ID=your_emailjs_server_id
VITE_APP_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
VITE_APP_EMAIL_JS_PUBLIC_KEY=your_emailjs_public_key
```

### Run the Development Server:
Using npm:
```bash
npm run dev
```
Using Yarn:
```bash
yarn dev
```
The website will be accessible at `http://localhost:3000`.

## Folder Structure
```bash
empowered-website/
├── public/                     # Static assets (videos, images, etc.)
├── src/
│   ├── assets/                 # Lottie JSON files, images, videos, etc.
│   ├── components/             # Shared components (e.g., ParticleBackground)
│   ├── pages/                  # Page components (Home, About, Features, Contact)
│   ├── styles/                 # Global and component-specific CSS files
│   ├── App.jsx                 # Main application component with routing
│   └── main.jsx                # Entry point for Vite
├── .env                        # Environment variables for EmailJS
├── package.json
└── README.md
```

## Usage

- Navigate the site using the menu or call-to-action buttons.
- Enjoy interactive animations powered by GSAP and Lottie.
- Experience a responsive design optimized for mobile, tablet, and desktop.

## Contributing

Contributions are welcome! To contribute:
1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Commit your changes with clear messages.
4. Open a pull request detailing your changes.

Please follow code style guidelines and ensure well-documented code.

## License
This project is open-source and available under the **MIT License**.
