# Quboo - Client-Server Architecture

Professional fullstack application with separated client and server architecture.

## 🏗️ Project Structure

```
Quboo/
├── client/              # React frontend (Vite)
│   ├── src/
│   ├── public/
│   ├── .env.example
│   └── package.json
├── server/              # Express backend
│   ├── routes/
│   ├── controllers/
│   ├── .env.example
│   └── package.json
├── vercel.json          # Vercel deployment config
└── package.json         # Root package for scripts
```

## 🚀 Getting Started

### Install Dependencies
```bash
npm run install:all
```

### Development
```bash
npm run dev
```
This runs both client (port 3000) and server (port 5000) concurrently.

Or run separately:
```bash
npm run client  # Frontend only
npm run server  # Backend only
```

## 🔧 Environment Setup

### Client (.env.local)
```
VITE_API_URL=http://localhost:5000
```

### Server (.env)
```
PORT=5000
CLIENT_URL=http://localhost:3000
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

## 📦 Deployment

### Vercel (Recommended)
1. Connect your GitHub repo to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push

## 🎯 Features
- ✅ Client-Server separation
- ✅ Environment-based configuration
- ✅ OTP email functionality
- ✅ Vercel deployment ready
- ✅ CORS configured
- ✅ API proxy setup

## 📝 License
MIT
