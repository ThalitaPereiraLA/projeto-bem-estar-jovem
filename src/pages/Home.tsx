export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 dark:from-[#0a0a0a] dark:to-[#1b1b18] text-[#1b1b18] dark:text-[#EDEDEC]">
      {/* NAVBAR */}
      <header className="flex justify-between items-center px-8 py-2 max-w-7xl mx-auto">
        <img src="/logobranco.png" alt="Logo" className="h-13 w-auto" />
        {/* Adicione navegação se quiser */}
      </header>

      {/* MAIN SECTION */}
      <div
        className="flex justify-center items-center h-screen px-4 bg-cover bg-center"
        style={{ backgroundImage: "url('/image.gif')", backgroundPosition: "center bottom" }}
      >
        <main className="bg-white dark:bg-[#161615] shadow-lg rounded-md p-12 max-w-3xl w-full flex flex-col justify-center items-center">
          <div className="space-y-6 text-center">
            <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-800 to-purple-400 font-serif">
              Bem Estar Jovem
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Um espaço para entender a ansiedade, aprender estratégias simples e saber onde buscar ajuda.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}
