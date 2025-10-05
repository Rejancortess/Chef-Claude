# 🤖👨‍🍳 Chef Claude AI

An intelligent recipe generator powered by AI that creates personalized recipes based on your available ingredients.

![Chef Claude AI](https://img.shields.io/badge/AI-Powered-orange) ![React](https://img.shields.io/badge/React-19.1.1-blue) ![Vite](https://img.shields.io/badge/Vite-7.1.14-green) ![Tailwind](https://img.shields.io/badge/Tailwind-4.1.14-cyan)

## ✨ Features

- 🥬 **Smart Ingredient Management**: Add, remove, and organize your ingredients
- 🤖 **AI Recipe Generation**: Powered by Hugging Face's advanced language models
- 📱 **Responsive Design**: Beautiful interface that works on all devices
- 🎨 **Modern UI**: Clean, intuitive design with smooth animations
- ⚡ **Real-time Processing**: Instant recipe generation with loading feedback
- 📝 **Formatted Recipes**: Well-structured recipes with ingredients, instructions, and tips

## 🚀 Quick Start

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Hugging Face API key (free)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Rejancortess/Chef-Claude.git
   cd Chef-Claude
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   ```bash
   cp .env.example .env
   ```

4. **Configure your API key**
   - Get a free API key from [Hugging Face](https://huggingface.co/settings/tokens)
   - Open `.env` and replace `your_hugging_face_token_here` with your actual API key:

   ```env
   VITE_HUGGINGFACE_API_KEY=hf_your_actual_token_here
   ```

5. **Start the development server**

   ```bash
   npm run dev
   ```

6. **Open your browser** and navigate to `http://localhost:5173`

## 🎯 How to Use

1. **Add Ingredients**: Type ingredients you have available (e.g., "chicken", "tomatoes", "garlic")
2. **Build Your List**: Add at least 3 ingredients to unlock recipe generation
3. **Generate Recipe**: Click "Generate Recipe" to let AI create a personalized recipe
4. **Enjoy Cooking**: Follow the AI-generated recipe with ingredients, instructions, and tips!

## 🛠️ Tech Stack

- **Frontend**: React 19.1.1 with Vite
- **Styling**: Tailwind CSS 4.1.14
- **AI**: Hugging Face Inference API
- **Icons**: React Icons
- **Markdown**: React Markdown for recipe formatting

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Project Structure

```
src/
├── components/
│   ├── Header.jsx      # App header with branding
│   ├── Main.jsx        # Main ingredient management
│   └── ChefAi.jsx      # AI recipe display
├── ai.js               # Hugging Face API integration
├── App.jsx             # Main application component
└── main.jsx            # Application entry point
```

## 🔒 Security

- ✅ Environment variables are properly configured
- ✅ API keys are excluded from version control
- ✅ `.env` files are ignored by git
- ✅ Example configuration provided for setup

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Hugging Face](https://huggingface.co/) for providing the AI inference API
- [React](https://reactjs.org/) for the amazing framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Vite](https://vitejs.dev/) for the lightning-fast build tool

---

**Made with ❤️ by [Rejancortess](https://github.com/Rejancortess)**
