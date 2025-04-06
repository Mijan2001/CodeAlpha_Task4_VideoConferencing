Video Conference Website

A professional video conferencing platform built with the latest Next.js 15 and TypeScript, integrating powerful features like real-time communication, meeting management, screen sharing, and recording — all wrapped in a sleek, responsive UI.

project screenshots

## 📸 Demo

Here are some screenshots showcasing the app's features:

### Home Page

![Home Page](project-screenshoots/home-page1.png)

### Meeting Room

![Meeting Room](project-screenshoots/home-page2.png)

### Schedule Meeting

![Schedule Meeting](project-screenshoots/home-page3.png)

### Recorded Meetings

![Recorded Meetings](project-screenshoots/home-page4.png)

📌 Introduction
This project provides a secure and seamless video meeting experience. Users can log in, create or join meetings, and access essential functionalities like:

🔐 Secure authentication via Clerk

📅 Meeting scheduling

🎥 Video/audio management

📺 Screen sharing

📂 Meeting history & recordings

🧑‍🤝‍🧑 Participant management

🔁 Real-time interaction

⚙️ Tech Stack
Technology Description
Next.js Full-stack React framework
TypeScript Typed JavaScript for better code quality
Clerk Authentication and user management
getstream Real-time video SDK
shadcn/ui Beautiful and accessible UI components
Tailwind CSS Utility-first CSS for rapid styling
🚀 Features
🔐 Authentication
Secure login using Clerk, supporting social logins and email/password. User access levels are enforced for all functionalities.

🆕 New Meeting
Quickly start a new meeting. Configure camera and microphone before joining.

🎛️ Meeting Controls
Gain full control with:

🔴 Start/stop recording

📺 Screen sharing

🤫 Mute/unmute

🎉 Emoji reactions

🔊 Sound adjustments

🧑‍🤝‍🧑 Grid view & participant list

📌 Pin/unpin participants

✋ Manage user permissions (block/unblock, allow screen share)

🏃 Exit or End Meeting
Participants can leave anytime, and creators can end the session for everyone.

📆 Schedule Future Meetings
Plan ahead! Schedule meetings with date and time, visible under “Upcoming Meetings” for instant access and sharing.

🕓 Past Meetings List
Check all your previous meetings with detailed metadata.

🎞️ View Recorded Meetings
Access and rewatch your recorded sessions.

🧑‍💻 Personal Room
Each user gets a personal meeting room with a shareable link for quick calls.

🔗 Join via Link
Join any meeting instantly using a valid meeting link.

🔐 Secure & Real-time
Built on Stream's real-time SDKs to ensure private, fast, and secure communication.

📱 Responsive Design
Looks great on mobile, tablet, and desktop with a clean, responsive layout.

🤸 Quick Start
✅ Prerequisites
Make sure the following are installed:

## ✅ Prerequisites

Ensure the following tools are installed on your system before proceeding:

-   **Git**: Version control system for cloning and managing the repository.
-   **Node.js**: JavaScript runtime for running the application.
-   **npm**: Node package manager for installing dependencies.

---

## 📥 Clone the Repository

Run the following commands in your terminal to clone the repository and navigate into the project directory:

```bash
git clone https://github.com/Mijan2001/CodeAlpha_Task4_VideoConferencing.git
cd video-conference-app
```

---

## 📦 Install Dependencies

Install all required dependencies by running:

```bash
npm install
```

---

## 🛠️ Set Up Environment Variables

Create a `.env` file in the root directory of your project and add the following environment variables:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

NEXT_PUBLIC_STREAM_API_KEY=
STREAM_SECRET_KEY=
```

Replace the placeholders with your actual API keys and configuration values.

---
