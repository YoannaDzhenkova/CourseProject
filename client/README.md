# CourseProject - React + Vite

A simple and fast web application built with React and Vite.

## Features

- 🚀 Fast development with Vite
- 🔥 Hot Module Replacement (HMR)
- 🎯 Modern React features
- ✅ ESLint integration for clean code

## Getting Started

1. **Clone the repository:**
   ```sh
   git clone <repository-url>
   cd CourseProject/client
   ```
2. **Install dependencies:**
   ```sh
   npm install
   ```
3. **Run the app:**
   ```sh
   npm run dev
   ```

## Project Structure
```
CourseProject/
│── client/
│   ├── src/        # React components
│   ├── public/     # Static assets
│   ├── package.json
│   ├── vite.config.js
│   ├── README.md
```

## Features And Functionality

Public Section:

1. Home Page – Service catalog with service categories. When the 'Show more' button is clicked, a new page loads with services from that specific category. The page also includes a description of the business, its location, and the system they use. There's a contact form where both logged-in users and guests can submit questions to the business (the form is not functional for now).

2. Catalogue Page – This page contains a list of all services the business provides. Each service has a "Details" button. When clicked, a window appears with detailed information about the service, including its description and category. Below that, a list of reviews from clients is shown.

3. Authentication Forms – Registration and login forms to access the private part of the application.

Private Section (Clients):

The client section is accessible to all registered and logged-in users, excluding the admin.

This section allows clients to write reviews.

Private Section (Admin):

The admin section provides the most functionality.

In the category list and catalogue page, when a service is clicked, there are edit/delete buttons at the bottom. These buttons allow the admin to change information about the service or delete it from the server.

Only the admin can add new services.