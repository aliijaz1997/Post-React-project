# React Posts Project

## Overview

The React Posts Project is a Single Page Application (SPA) built with React. It fetches and displays posts from the JSONPlaceholder API, allowing users to create new posts. The application includes advanced styling, form validation, and pagination to show the latest 10 posts per page.

## Features

- **Create New Posts**: Users can submit new posts with a title, body, and user ID.
- **Display Posts**: Fetches and displays posts from the JSONPlaceholder API.
- **Pagination**: Displays the latest 10 posts per page with pagination controls.
- **Responsive Design**: Uses Bootstrap for responsive and modern UI design.
- **Advanced Styling**: Utilizes CSS modules for scoped and component-specific styling.
- **Latest First**: Ensures the latest input is shown first in the list.

## Technologies Used

- React
- Axios
- Bootstrap
- CSS Modules
- React Paginate

## Getting Started

### Prerequisites

Ensure you have Node.js and npm installed. You can download Node.js and npm from [here](https://nodejs.org/).

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/react-posts-project.git
   cd react-posts-project
   npm install
   npm start
   ```

### Project Structure

```bash react-posts-project/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── FormComponent.js
│   │   ├── FormComponent.module.css
│   │   ├── DataDisplay.js
│   │   ├── DataDisplay.module.css
│   │   ├── Pagination.js
│   │   ├── Pagination.module.css
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── README.md

```
