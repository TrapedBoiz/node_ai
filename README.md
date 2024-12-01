# 🚀 NodeCore

A modern, scalable Node.js backend application built with TypeScript and Clean Architecture principles.

## ✨ Features

- 🏗️ **Clean Architecture** - Organized in domains, use cases, and interfaces
- 📝 **TypeScript** - Full type safety and modern JavaScript features
- 🔄 **Dependency Injection** - Loose coupling and better testability
- 📚 **Swagger Documentation** - Auto-generated API documentation
- 🔒 **User Management** - Complete user CRUD operations
- ⚡ **Performance** - Optimized for speed and scalability
- 🧪 **Testing Ready** - Set up for unit and integration tests

## 🛠️ Tech Stack

- Node.js
- TypeScript
- Express.js
- Swagger/OpenAPI
- Jest (Testing)
- Clean Architecture

## 📁 Project Structure

```
src/
├── domain/          # Enterprise business rules
│   ├── entities/
│   └── repositories/
├── infrastructure/  # External concerns
│   ├── repositories/
│   └── swagger/
└── interfaces/      # Controllers & routes
    ├── controllers/
    └── routes/
```

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 📝 API Documentation

Once the server is running, access the Swagger documentation at:
```
http://localhost:3000/api-docs
```

## 🧪 Running Tests

```bash
# Run unit tests
npm test

# Run tests with coverage
npm run test:coverage
```

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm test` - Run tests
- `npm run lint` - Run linter
- `npm run format` - Format code

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Made with ❤️ using Node.js and TypeScript
