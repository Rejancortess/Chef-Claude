import logo from '../assets/Chef Claude Icon.svg';

function Header() {
  return (
    <header className="w-full">
      <div className="relative overflow-hidden bg-gradient-to-r from-[#D17557] via-[#E8956F] to-[#D17557] rounded-t-3xl">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-4 left-8 w-2 h-2 bg-white rounded-full"></div>
          <div className="absolute top-8 left-20 w-1 h-1 bg-white rounded-full"></div>
          <div className="absolute top-6 right-16 w-2 h-2 bg-white rounded-full"></div>
          <div className="absolute top-12 right-32 w-1 h-1 bg-white rounded-full"></div>
        </div>

        <div className="relative flex items-center justify-between px-8 py-6">
          <div className="flex items-center gap-5">
            <div className="relative group">
              <div className="absolute -inset-2 bg-white/20 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative">
                <img
                  className="w-16 h-16 drop-shadow-lg transition-transform duration-300 group-hover:scale-110"
                  src={logo}
                  alt="Chef Claude Logo"
                />
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-[#D17557] text-sm animate-pulse">
                    🤖
                  </span>
                </div>
              </div>
            </div>

            <div className="text-white">
              <h1 className="font-bold text-4xl tracking-tight drop-shadow-md">
                Chef Claude
              </h1>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-white/90 text-lg font-medium">
                  AI-Powered Recipe Generator
                </span>
                <div className="flex gap-1">
                  <span className="w-2 h-2 bg-white/60 rounded-full animate-pulse"></span>
                  <span
                    className="w-2 h-2 bg-white/40 rounded-full animate-pulse"
                    style={{ animationDelay: '0.2s' }}
                  ></span>
                  <span
                    className="w-2 h-2 bg-white/60 rounded-full animate-pulse"
                    style={{ animationDelay: '0.4s' }}
                  ></span>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 border border-white/30">
              <div className="flex items-center gap-2 text-white">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">AI Ready</span>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-full p-3 border border-white/20 hover:bg-white/20 transition-all duration-200 cursor-pointer group">
              <span className="text-2xl group-hover:animate-bounce">⚡</span>
            </div>
          </div>
        </div>

        <div className="absolute top-0 left-0 w-32 h-32 bg-white/5 rounded-full -translate-x-16 -translate-y-16"></div>
        <div className="absolute bottom-0 right-0 w-24 h-24 bg-white/5 rounded-full translate-x-12 translate-y-12"></div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 20" className="w-full h-5 text-white/10">
            <path
              d="M0,10 Q300,0 600,10 T1200,10 L1200,20 L0,20 Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </div>

      <div className="bg-white/80 backdrop-blur-sm border-b border-[#F0EFEB] px-8 py-3">
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-2 text-[#6B7280]">
            <span>🏠</span>
            <span>Home</span>
            <span>→</span>
            <span className="text-[#D17557] font-medium">Recipe Generator</span>
          </div>

          <div className="flex items-center gap-4 text-[#6B7280]">
            <div className="flex items-center gap-2">
              <span>🍳</span>
              <span>Recipes Created: </span>
              <span className="font-bold text-[#D17557]">∞</span>
            </div>
            <div className="w-px h-4 bg-[#D1D5DB]"></div>
            <div className="flex items-center gap-2">
              <span>✨</span>
              <span>AI Status: </span>
              <span className="font-bold text-green-600">Online</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
