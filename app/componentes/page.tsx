import Image from "next/image";
import Link from "next/link";

const gallery = [
  {
    title: "Componentes Persiart",
    description: "Materiais e detalhes de acabamento utilizados nas soluções Persiart.",
    image: "https://raw.githubusercontent.com/joaovitorsouzaoficial299-stack/PERSIART/main/Componentes%20.jpg",
  },
];

const details = [
  ["Tecidos soldados", "PVC e Screen soldados com máquina de impulso eletromagnético e acabamento fosco. Solda sem brilho."],
  ["Braços articulados", "Corpo em alumínio, pintura eletrostática e tração através de cinta flexível."],
  ["Manivela em alumínio", "Manivela em alumínio com gancho de inox."],
  ["Tampa de acabamento", "Tampa de acabamento do toldo box em alumínio com pintura eletrostática."],
  ["Parafusos", "Parafusos em inox para maior resistência à ferrugem e corrosão."],
];

export default function ComponentesPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-7">
        <Link href="/" className="text-sm font-bold tracking-[.25em] text-white/70 transition hover:text-white">PERSIART</Link>
        <Link href="/" className="text-sm text-white/50 transition hover:text-white">← Voltar</Link>
      </header>

      <section className="mx-auto max-w-7xl px-6 pb-20 pt-14">
        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[.35em] text-white/40">Persiart</p>
          <h1 className="mt-4 text-5xl font-black tracking-[-.04em] sm:text-7xl">Componentes.</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/50">
            Uma galeria dedicada aos materiais, componentes e acabamentos que fazem parte das soluções Persiart.
          </p>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2">
          {gallery.map((item) => (
            <figure key={item.title} className="group">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[.03]">
                <Image src={item.image} alt={item.title} fill unoptimized sizes="(max-width: 640px) 100vw, 50vw" className="object-cover transition duration-700 group-hover:scale-[1.02]" />
              </div>
              <figcaption className="pt-5">
                <h2 className="text-2xl font-black">{item.title}</h2>
                <p className="mt-2 text-sm leading-6 text-white/45">{item.description}</p>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-20 border-t border-white/10 pt-12">
          <p className="text-xs font-bold uppercase tracking-[.3em] text-white/40">Detalhes</p>
          <div className="mt-8 divide-y divide-white/10">
            {details.map(([title, description]) => (
              <div key={title} className="grid gap-3 py-7 sm:grid-cols-[.35fr_1fr]">
                <h3 className="text-xl font-bold">{title}</h3>
                <p className="max-w-2xl text-sm leading-7 text-white/50">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
