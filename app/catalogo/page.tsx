"use client";

import Link from "next/link";
import Image from "next/image";

const catalogProducts = [
  {
    name: "Persianas rolô",
    description: "Soluções sob medida em diferentes tecidos e níveis de controle de luz.",
    image: "https://www.facilpersianas.com.br/cdn/shop/files/rolo-blackout_0000_IMG_3920.jpg?v=1723738978&width=1500",
  },
  {
    name: "Persiana Romana",
    description: "Dobras elegantes para projetos residenciais e comerciais.",
    image: "https://dukaan.b-cdn.net/1000x1000/webp/media/c24dca83-5f02-4932-a29c-942e1ba9b342.jpg",
  },
  {
    name: "Double Vision",
    description: "Controle de luminosidade e privacidade com visual contemporâneo.",
    image: "https://cdn.leroymerlin.com.br/products/persiana_double_vision_branca_2%2C20m_x_2%2C80m_1572108126_113a_600x600.jpg",
  },
  {
    name: "Cortinas de tecido",
    description: "Confeccionadas sob medida para combinar com o ambiente.",
    image: "https://d1z3kpk3b2dxg.cloudfront.net/tecidos/glam-areia-20230317260276.jpg?d=800x800",
  },
  {
    name: "Toldos",
    description: "Proteção solar para áreas externas com diferentes possibilidades de aplicação.",
    image: "https://www.globaltoldos.com.br/toldos-transparentes/imagens/orcamento-de-toldos-bracos-articulados.jpg",
  },
  {
    name: "Motorização",
    description: "Mais conforto e praticidade para persianas e cortinas.",
    image: "https://static.wixstatic.com/media/9594d8_0fe8f26f5c124714a1f9b60dbf4de214~mv2.jpg/v1/fill/w_480%2Ch_480%2Cal_c%2Cq_80%2Cusm_0.66_1.00_0.01%2Cenc_avif%2Cquality_auto/9594d8_0fe8f26f5c124714a1f9b60dbf4de214~mv2.jpg",
  },
];

export default function CatalogoPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-7">
        <Link href="/" className="text-sm font-bold tracking-[.25em] text-white/70 transition hover:text-white">
          PERSIART
        </Link>
        <Link href="/" className="text-sm text-white/50 transition hover:text-white">
          ← Voltar
        </Link>
      </header>

      <section className="mx-auto max-w-7xl px-6 pb-20 pt-14">
        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[.35em] text-white/40">Persiart</p>
          <h1 className="mt-4 text-5xl font-black tracking-[-.04em] sm:text-7xl">Catálogo.</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/50">
            Produtos, soluções e possibilidades para seu projeto sob medida.
          </p>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {catalogProducts.map((product) => (
            <article key={product.name} className="overflow-hidden rounded-3xl border border-white/10 bg-white/[.03]">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  unoptimized
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold">{product.name}</h2>
                <p className="mt-3 text-sm leading-6 text-white/50">{product.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-20 border-t border-white/10 pt-10">
          <p className="text-sm leading-7 text-white/40">
            Estrutura preparada para receber futuramente o catálogo completo da Persiart, com produtos, categorias, imagens, descrições e informações comerciais.
          </p>
        </div>
      </section>
    </main>
  );
}
