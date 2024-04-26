# Real-Time Chat Application

<div align="center">
  
  ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
  ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
  ![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
  ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
  ![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
  ![WebSocket](https://img.shields.io/badge/WebSocket-010101.svg?style=for-the-badge&logo=websocket&logoColor=white)
  
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
  [![Node Version](https://img.shields.io/badge/node-%3E%3D%2016.0.0-green.svg)](https://nodejs.org)
  
</div>

## 📋 Overview

A modern, full-stack real-time chat application built with TypeScript, featuring instant messaging capabilities powered by WebSockets. This application demonstrates best practices in modern web development with a React frontend and Express backend.

## ✨ Features

- **Real-time Messaging**: Instant message delivery using WebSocket connections
- **Modern UI**: Clean and responsive interface built with React
- **State Management**: Centralized state management with Redux Toolkit
- **Type Safety**: Full TypeScript implementation for better developer experience
- **Database Persistence**: Message history stored in MongoDB
- **Hot Reloading**: Development environment with live reload for both client and server
- **Production Ready**: Optimized build configurations for deployment

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI library
- **Redux Toolkit** - State management
- **TypeScript** - Type safety
- **Webpack 5** - Module bundler
- **Babel** - JavaScript compiler

### Backend
- **Node.js** - Runtime environment
- **Express** - Web framework
- **WebSocket (ws)** - Real-time communication
- **MongoDB/Mongoose** - Database and ODM
- **TypeScript** - Type safety

### Development Tools
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Jest** - Testing framework
- **Nodemon** - Development server

## 📦 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v16.0.0 or higher)
- **npm** (v7.0.0 or higher)
- **MongoDB** (v4.4 or higher)

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/chat-application.git
cd chat-application
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Setup

Create a `.env` file in the root directory:

```env
# Server Configuration
PORT=3000
NODE_ENV=development

# Database Configuration
MONGODB_URI=mongodb://localhost:27017/chat-app

# WebSocket Configuration
WS_PORT=8080

# Client Configuration
REACT_APP_API_URL=http://localhost:3000
REACT_APP_WS_URL=ws://localhost:8080
```

### 4. Start MongoDB

Make sure MongoDB is running on your system:

```bash
# macOS/Linux
mongod

# Windows
mongod.exe
```

## 💻 Development

### Running the Application

To run both client and server in development mode:

```bash
# Terminal 1 - Start the TypeScript compiler for the server
npm run dev:server

# Terminal 2 - Start the server with nodemon
npm run server

# Terminal 3 - Start the client development server
npm run client
```

The application will be available at:
- Frontend: `http://localhost:8080`
- Backend API: `http://localhost:3000`
- WebSocket: `ws://localhost:8080`

### Available Scripts

```bash
# Start production server
npm start

# Development servers
npm run server          # Start server with nodemon
npm run client          # Start client dev server
npm run dev:server      # Watch and compile server TypeScript

# Build commands
npm run build:client    # Build client for production
npm run build:server    # Compile server TypeScript

# Code quality
npm run lint            # Run ESLint
npm test               # Run tests (when configured)
```

## 📁 Project Structure

```
chat-application/
├── client/                 # Frontend application
│   ├── src/               # Source files
│   │   ├── components/    # React components
│   │   ├── store/         # Redux store and slices
│   │   ├── utils/         # Utility functions
│   │   └── index.tsx      # Entry point
│   ├── tsconfig.json      # TypeScript config
│   └── webpack.config.js  # Webpack configuration
│
├── server/                # Backend application
│   ├── src/              # Source files
│   │   ├── controllers/  # Route controllers
│   │   ├── models/       # Database models
│   │   ├── routes/       # API routes
│   │   ├── services/     # Business logic
│   │   ├── utils/        # Utility functions
│   │   └── server.ts     # Entry point
│   └── tsconfig.json     # TypeScript config
│
├── types/                # Shared TypeScript types
├── .vscode/              # VS Code settings
├── eslint.config.js      # ESLint configuration
├── package.json          # Project dependencies
└── README.md            # Project documentation
```

## ⚙️ Configuration

### VS Code Settings

For proper ESLint integration with VS Code, ensure your `.vscode/settings.json` includes:

```json
{
  "eslint.experimental.useFlatConfig": true
}
```

This is required for ESLint's new flat config system as of April 2024. See [ESLint's migration guide](https://eslint.org/docs/latest/use/configure/migration-guide) for more information.

### TypeScript Configuration

The project uses separate TypeScript configurations for client and server to optimize for their respective environments.

## 🏗️ Building for Production

### Build the Client

```bash
npm run build:client
```

This creates an optimized production build in `client/dist/`.

### Build the Server

```bash
npm run build:server
```

This compiles TypeScript files to JavaScript in `server/dist/`.

### Run in Production

```bash
NODE_ENV=production npm start
```

## 🧪 Testing

```bash
npm test
```

*Note: Test configuration is pending. Jest is installed and ready for test implementation.*

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Code Style

- Follow the ESLint configuration
- Use Prettier for code formatting
- Write meaningful commit messages
- Add appropriate TypeScript types
- Comment complex logic

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Olivia Carlisle**

## 🙏 Acknowledgments

- Built with modern web technologies
- Inspired by best practices in full-stack development
- Special thanks to the open-source community

---

<div align="center">
  Made with ❤️ by Olivia Carlisle
</div>