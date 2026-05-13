export default function WDTechSolutions() {
  const services = [
    {
      icon: "🛠️",
      title: "Mantenimiento Preventivo",
      desc: "Limpieza interna, optimización y prevención de fallos.",
    },
    {
      icon: "⚡",
      title: "Formateo + Optimización",
      desc: "Instalación limpia y máximo rendimiento.",
    },
    {
      icon: "❄️",
      title: "Cambio de Pasta Térmica",
      desc: "Mejora de temperatura y potencia.",
    },
    {
      icon: "💻",
      title: "Reparación de Pantallas",
      desc: "Cambio y reparación profesional de displays.",
    },
    {
      icon: "📀",
      title: "Instalación de Software",
      desc: "Windows, Office, drivers y programas.",
    },
    {
      icon: "🚗",
      title: "Servicio a Domicilio",
      desc: "Atención rápida y personalizada.",
    },
  ];

  const works = [
    "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?q=80&w=1200&auto=format&fit=crop",
  ];

  return (
    <div className="bg-black text-white overflow-x-hidden font-sans scroll-smooth">

      {/* BACKGROUND */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-black via-slate-950 to-blue-950">
        <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-500/20 blur-3xl rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-600/20 blur-3xl rounded-full animate-pulse"></div>
      </div>

      {/* NAVBAR */}
      <nav className="fixed top-0 w-full bg-black/30 backdrop-blur-xl border-b border-cyan-500/20 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          <h1 className="text-2xl md:text-3xl font-black tracking-wider text-cyan-400">
            WD TECH SOLUTIONS
          </h1>

          <div className="hidden md:flex gap-8 text-sm font-semibold">
            <a href="#inicio" className="hover:text-cyan-400 transition">Inicio</a>
            <a href="#servicios" className="hover:text-cyan-400 transition">Servicios</a>
            <a href="#trabajos" className="hover:text-cyan-400 transition">Trabajos</a>
            <a href="#contacto" className="hover:text-cyan-400 transition">Contacto</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section id="inicio" className="min-h-screen flex items-center px-6 pt-24">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          <div className="animate-[fadeIn_1s_ease-in-out]">
            <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 px-5 py-2 rounded-full mb-8">
              <div className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></div>
              <span className="text-cyan-300 text-sm">
                Servicio técnico profesional
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
              Reparación y
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                mantenimiento
              </span>
              de computadores
            </h1>

            <p className="text-slate-300 text-lg leading-relaxed mb-10 max-w-2xl">
              Soluciones tecnológicas rápidas, modernas y profesionales.
              Potenciamos tu computador con mantenimiento, optimización y reparación especializada.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://wa.me/573106651744"
                className="px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 font-bold hover:scale-105 transition-all duration-300 shadow-2xl shadow-cyan-500/30"
              >
                WhatsApp
              </a>

              <a
                href="#servicios"
                className="px-8 py-4 rounded-2xl border border-cyan-500/30 bg-white/5 hover:bg-cyan-500/10 transition-all duration-300"
              >
                Ver servicios
              </a>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-cyan-500/20 blur-3xl rounded-full"></div>

            <img
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop"
              alt="Computador"
              className="relative rounded-[2rem] border border-cyan-500/20 shadow-2xl shadow-cyan-500/20 hover:scale-[1.02] transition-all duration-500"
            />

            <div className="absolute -bottom-5 -left-5 bg-black/70 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-5">
              <p className="text-4xl font-black text-cyan-400">+500</p>
              <p className="text-slate-300">Equipos reparados</p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="servicios" className="py-28 px-6">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-20">
            <p className="text-cyan-400 uppercase tracking-[0.3em] mb-4">
              Servicios
            </p>

            <h2 className="text-5xl font-black mb-6">
              Soluciones Premium
            </h2>

            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              Servicio técnico especializado para computadores de escritorio, laptops y equipos gamer.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white/5 border border-white/10 rounded-[2rem] p-8 hover:-translate-y-4 hover:border-cyan-400/40 hover:bg-cyan-500/5 transition-all duration-500 backdrop-blur-xl"
              >
                <div className="text-5xl mb-6 group-hover:scale-110 transition-all duration-300">
                  {service.icon}
                </div>

                <h3 className="text-2xl font-bold text-cyan-300 mb-4">
                  {service.title}
                </h3>

                <p className="text-slate-300 leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WORKS */}
      <section id="trabajos" className="py-28 px-6">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-20">
            <p className="text-cyan-400 uppercase tracking-[0.3em] mb-4">
              Trabajos Realizados
            </p>

            <h2 className="text-5xl font-black">
              Resultados Profesionales
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {works.map((img, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-[2rem] border border-cyan-500/20 bg-white/5 group"
              >
                <img
                  src={img}
                  alt="trabajo"
                  className="h-[350px] w-full object-cover group-hover:scale-110 transition-all duration-700"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section className="py-28 px-6">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-20">
            <p className="text-cyan-400 uppercase tracking-[0.3em] mb-4">
              Clientes
            </p>

            <h2 className="text-5xl font-black">
              Opiniones
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">

            {[1,2,3].map((item) => (
              <div
                key={item}
                className="bg-white/5 border border-cyan-500/10 rounded-[2rem] p-8 backdrop-blur-xl"
              >
                <div className="text-yellow-400 text-2xl mb-4">★★★★★</div>

                <p className="text-slate-300 leading-relaxed mb-6">
                  Excelente servicio, rápido y profesional. Mi computador quedó funcionando perfectamente.
                </p>

                <h3 className="text-cyan-300 font-bold">
                  Cliente Satisfecho
                </h3>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contacto" className="py-28 px-6">
        <div className="max-w-5xl mx-auto bg-white/5 border border-cyan-500/20 rounded-[3rem] p-12 text-center backdrop-blur-2xl relative overflow-hidden">

          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10"></div>

          <div className="relative z-10">
            <p className="text-cyan-400 uppercase tracking-[0.3em] mb-4">
              Contacto
            </p>

            <h2 className="text-5xl font-black mb-6">
              ¿Necesitas ayuda?
            </h2>

            <p className="text-slate-300 text-lg mb-10 max-w-2xl mx-auto">
              Atención rápida y profesional para computadores y laptops.
            </p>

            <div className="flex flex-wrap justify-center gap-6 mb-10">

              <div className="px-6 py-4 rounded-2xl bg-black/40 border border-cyan-500/20">
                <p className="text-slate-400 text-sm">WhatsApp</p>
                <p className="text-xl font-bold text-cyan-300">310 665 1744</p>
              </div>

              <div className="px-6 py-4 rounded-2xl bg-black/40 border border-cyan-500/20">
                <p className="text-slate-400 text-sm">Servicio</p>
                <p className="text-xl font-bold text-cyan-300">A domicilio</p>
              </div>

            </div>

            <a
              href="https://wa.me/573106651744"
              className="inline-block px-10 py-5 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 font-black text-lg hover:scale-105 transition-all duration-300 shadow-2xl shadow-cyan-500/30"
            >
              Contactar por WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-cyan-500/10 py-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">

          <div>
            <h2 className="text-2xl font-black text-cyan-400">
              WD TECH SOLUTIONS
            </h2>

            <p className="text-slate-400 mt-2">
              Soluciones tecnológicas profesionales.
            </p>
          </div>

          <p className="text-slate-500 text-sm">
            © 2026 WD Tech Solutions - Todos los derechos reservados.
          </p>
        </div>
      </footer>

      {/* FLOATING BUTTON */}
      <a
        href="https://wa.me/573106651744"
        className="fixed bottom-6 right-6 w-16 h-16 rounded-full bg-green-500 flex items-center justify-center text-3xl shadow-2xl hover:scale-110 transition-all duration-300 z-50"
      >
        💬
      </a>

    </div>
  )
}
