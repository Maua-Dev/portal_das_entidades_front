export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">

      {/* Main Content */}
      <main className="flex flex-col md:flex-row h-screen bg-amber-500">
        {/* Left Section - Logo Placeholder */}
        <div className="w-full md:w-1/2 h-full bg-gray-100 flex items-center justify-center p-8">
          <div className="text-center">
            <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center mb-4">
              <span className="text-gray-400">Logo</span>
            </div>
            <p className="text-gray-500 text-sm">Aq viria o logo do PE na frente daquele fundo roxo</p>
          </div>
        </div>
        
        {/* Right Section - Microsoft Login Area */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-8 bg-white">
          <div className="w-full max-w-md text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Microsoft Login</h2>
            <p className="text-gray-600 mb-6">Ao clicar no botão abaixo, você será redirecionado para a página de login da Microsoft</p>
            <div className="bg-gray-100 p-8 rounded-lg border border-gray-200">
              <span className="text-gray-400">Microsoft login</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
