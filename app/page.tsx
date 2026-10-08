"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, ChevronDown, Instagram, MapPin, MessageCircle, Phone, Ruler, ShieldCheck, Factory, Sparkles, X } from "lucide-react";
import ScrollBaseAnimation from "@/components/ui/scroll-text-marquee";

const WHATSAPP = "5562993543196";

const products = [
  ["Motorização para persiana", "Persianas com acionamento motorizado para abrir, fechar e controlar a entrada de luz com mais conforto e praticidade.", "https://static.wixstatic.com/media/9594d8_0fe8f26f5c124714a1f9b60dbf4de214~mv2.jpg/v1/fill/w_480%2Ch_480%2Cal_c%2Cq_80%2Cusm_0.66_1.00_0.01%2Cenc_avif%2Cquality_auto/9594d8_0fe8f26f5c124714a1f9b60dbf4de214~mv2.jpg"],
  ["Persianas rolô", "Modelo de tecido enrolável, disponível em opções translúcidas, tela solar e blackout para diferentes necessidades.", "https://www.facilpersianas.com.br/cdn/shop/files/rolo-blackout_0000_IMG_3920.jpg?v=1723738978&width=1500"],
  ["Romana", "Persiana com painéis horizontais de tecido que se recolhem em dobras, combinando controle de luz e acabamento elegante.", "https://dukaan.b-cdn.net/1000x1000/webp/media/c24dca83-5f02-4932-a29c-942e1ba9b342.jpg"],
  ["Double Vision", "Persiana rolô com faixas translúcidas e opacas que permitem alternar iluminação e privacidade sem abrir totalmente a persiana.", "https://cdn.leroymerlin.com.br/products/persiana_double_vision_branca_2%2C20m_x_2%2C80m_1572108126_113a_600x600.jpg"],
  ["Cortinas tradicionais de tecido", "Cortinas confeccionadas sob medida em tecidos como voil, linho e tecidos encorpados, com diferentes pregas e acabamentos.", "https://d1z3kpk3b2dxg.cloudfront.net/tecidos/glam-areia-20230317260276.jpg?d=800x800"],
  ["Toldos verticais", "Telas verticais para áreas externas, ajudando a filtrar o sol, reduzir o desconforto visual e ampliar a privacidade.", "https://images.homify.com/c_fill%2Cf_auto%2Ch_700%2Cq_auto/v1573858643/p/photo/image/3263197/outdoor-decor-ideas_800x600.jpg"],
  ["Toldo vertical braço pivotante", "Toldo articulado com braços que projetam a cobertura para frente, criando sombra em varandas, fachadas e áreas de convivência.", "https://www.globaltoldos.com.br/toldos-transparentes/imagens/orcamento-de-toldos-bracos-articulados.jpg"],
  ["Persianas horizontais em alumínio", "Lâminas de alumínio que permitem ajustar a direção da luz e o nível de privacidade com acionamento simples.", "https://product-hub-prd.madeiramadeira.com.br/286424942/images/f29dd6ed-5b3e-4797-b083-2b0ca03bff8ca9352e9bc8651747419407934.jpeg?bg-color=FFF&canvas=1%3A1&width=620"],
] as const;

const productDetails = [
  ["Motorização para persiana", "A motorização permite abrir, fechar e posicionar a persiana com acionamento remoto, trazendo mais conforto para o dia a dia e praticidade para janelas maiores ou de difícil acesso.", "Motor tubular, tubo/perfil da persiana e componentes de acionamento. Benefícios: conforto, praticidade, controle da luz e possibilidade de automação."],
  ["Persianas rolô", "Solução moderna e versátil para controlar a entrada de luz e aumentar a privacidade. Disponível em diferentes tecidos, níveis de transparência e acabamentos.", "Controle de luminosidade, privacidade, visual minimalista e fabricação sob medida."],
  ["Romana", "Modelo com dobras horizontais que cria um visual elegante e sofisticado. Combina com projetos residenciais e comerciais e pode receber diferentes tipos de tecido.", "Elegância, acabamento sofisticado, controle de luz e opções de tecido."],
  ["Double Vision", "Alterna faixas translúcidas e opacas, permitindo regular a luminosidade e a privacidade sem precisar abrir completamente a persiana.", "Regulagem de luz, privacidade, design contemporâneo e praticidade."],
  ["Cortinas tradicionais de tecido", "Uma solução clássica para trazer aconchego e personalidade ao ambiente. Pode ser produzida em diferentes tecidos, cores, forros e acabamentos.", "Conforto visual, variedade de tecidos, acabamento personalizado e elegância."],
  ["Toldos verticais", "Indicados para proteção solar e privacidade em áreas externas ou ambientes que recebem muita incidência de luz. O projeto é definido de acordo com o espaço.", "Proteção solar, privacidade, aplicação externa e fabricação sob medida."],
  ["Toldo vertical braço pivotante", "Sistema com braços articulados que permite posicionar a proteção de acordo com a necessidade do ambiente, unindo funcionalidade e acabamento.", "Proteção solar, braços articulados, praticidade e acabamento."],
  ["Persianas horizontais em alumínio", "Modelo resistente e prático, com lâminas que permitem ajustar a entrada de luz e a privacidade com precisão.", "Resistência, fácil limpeza, controle de luz e ajuste de privacidade."]
] as const;

const faqs = [
  ["Vocês fazem produtos sob medida?", "Sim. O orçamento é calculado de acordo com as medidas e características do seu ambiente."],
  ["Como peço um orçamento?", "Escolha o produto, informe largura e altura aproximadas e fale com a equipe pelo WhatsApp."],
  ["Vocês fazem instalação?", "Sim. A Persiart trabalha com fabricação e instalação para entregar o projeto completo."],
  ["Posso automatizar minha cortina?", "Sim. Temos soluções de motorização para trazer mais praticidade ao dia a dia."]
];

function quote(product: string) {
  const message = product === "um produto"
    ? "Olá! Gostaria de solicitar um orçamento para a Persiart. Poderiam me passar mais informações, valores e condições?"
    : `Olá! Gostaria de solicitar um orçamento para ${product}. Poderiam me passar mais informações, valores e condições?`;
  return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`;
}

export default function Home() {
  const [open, setOpen] = useState<number | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);
  const [quoteModel, setQuoteModel] = useState("Persiana Rolô");
  const [quoteOtherModel, setQuoteOtherModel] = useState("");
  const [quoteWidth, setQuoteWidth] = useState("");
  const [quoteHeight, setQuoteHeight] = useState("");
  const [quoteFabric, setQuoteFabric] = useState("Tela solar");
  const [quoteColor, setQuoteColor] = useState("");
  const [quoteSolar, setQuoteSolar] = useState("3%");

  const brandMark = (className = "") => (
    <span aria-hidden="true" className={`pointer-events-none absolute ${className}`}>
      <span className="absolute left-1/2 top-0 h-px w-full -translate-x-1/2 bg-white/20" />
      <span className="absolute left-1/2 top-0 h-10 w-px -translate-x-1/2 bg-white/20" />
    </span>
  );

  return <main className="min-h-screen bg-[#050505] text-white">
    <section className="relative min-h-[92vh] overflow-hidden border-b border-white/10">
      <div className="min-h-[92vh]">
        <nav className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
          <div className="mx-auto flex max-w-7xl items-center gap-2 rounded-2xl border border-white/10 bg-black/45 px-3 py-2.5 backdrop-blur-2xl shadow-[inset_0_1px_0_rgba(255,255,255,.12),0_12px_40px_rgba(0,0,0,.25)] sm:gap-3 sm:px-4">
            <div className="relative h-10 w-[180px] shrink-0 sm:h-12 sm:w-[205px]">
              <Image src="https://raw.githubusercontent.com/joaovitorsouzaoficial299-stack/PERSIART/main/persiart_logo_transparente.svg" alt="Persiart" fill priority sizes="205px" className="object-contain object-left"/>
            </div>
            <a href={quote("um produto")} className="ml-auto rounded-full border border-emerald-300/30 bg-emerald-500/80 px-3.5 py-2 text-xs font-bold text-white backdrop-blur-xl shadow-[inset_0_1px_0_rgba(255,255,255,.25),0_6px_20px_rgba(16,185,129,.16)] transition hover:bg-emerald-500 sm:px-5 sm:py-2.5 sm:text-sm">Solicitar orçamento</a>
          </div>
        </nav>
        <div className="relative z-10 mx-auto flex min-h-[76vh] max-w-7xl items-center px-6 pb-20 pt-32">
          <div className="max-w-4xl">
            <p className="mb-5 text-sm font-medium uppercase tracking-[.25em] text-white/55">Anápolis • Goiás</p>
            <h1 className="text-5xl font-black leading-[.92] tracking-[-.06em] sm:text-7xl lg:text-[7.5rem]">Cortinas e<br/><span className="text-white/35">persianas</span><br/>sob medida.</h1>
            <p className="mt-8 max-w-xl text-lg leading-7 text-white/60">Conforto, proteção solar e acabamento para transformar seu ambiente. Escolha sua solução e solicite um orçamento personalizado.</p>
          </div>
        </div>
      </div>
    </section>

    <section className="border-b border-white/10 py-7 text-white/20"><ScrollBaseAnimation baseVelocity={-3}>CORTINAS • PERSIANAS • TOLDOS • AUTOMAÇÃO • CONFORTO • DESIGN • </ScrollBaseAnimation></section>

    <section id="produtos" className="mx-auto max-w-7xl px-6 py-24">
      <div className="mx-auto mb-12 max-w-3xl text-center"><div className="relative mx-auto mb-8 h-12 w-72">{brandMark("inset-0")}<span className="absolute left-1/2 top-6 -translate-x-1/2 bg-[#050505] px-4 text-[10px] font-bold uppercase tracking-[.35em] text-white/35">Soluções</span></div><h2 className="text-4xl font-black tracking-tight sm:text-6xl">Produtos para cada ambiente.</h2><p className="mx-auto mt-5 max-w-2xl text-white/50">Fale com a equipe e envie as medidas do espaço para receber seu orçamento.</p></div>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {products.map(([name, desc, image], i) => <article key={name} className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[.03]">
          <div className="relative aspect-square overflow-hidden"><Image src={image} alt={name} fill sizes="(max-width: 768px) 100vw, 33vw" className="product-image-pan object-cover transition duration-700 group-hover:scale-105"/></div>
          <div className="p-6"><p className="mb-2 text-xs text-white/35">0{i+1}</p><h3 className="text-2xl font-bold">{name}</h3><p className="mt-3 min-h-14 text-sm leading-6 text-white/50">{desc}</p><button type="button" onClick={() => setSelectedProduct(i)} className="mt-6 inline-flex items-center gap-2 rounded-full px-0 py-2.5 text-sm font-bold text-white transition hover:text-white/70">Descrição <ArrowUpRight size={16}/></button></div>
        </article>)}
      </div>


      <section className="mt-24 border-y border-white/10 py-24">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="text-4xl font-black tracking-tight sm:text-6xl">Persiart.</h2>
          <p className="mx-auto mt-5 max-w-2xl text-white/50">Conheça alguns trabalhos realizados pela Persiart em diferentes ambientes.</p>
        </div>
        <div className="grid auto-rows-[220px] grid-cols-2 gap-3 sm:gap-5 md:grid-cols-4 md:auto-rows-[260px]">
          {["IMGFEITOS.jpg","IMGFEITOS01.jpg","IMGFEITOS02.jpg","IMGFEITOS03.jpg","IMGFEITOS04.jpg"].map((file, i) => (
            <button key={file} type="button" onClick={() => setSelectedProduct(i + 100)} className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[.03] text-left ${i === 0 || i === 3 ? "col-span-2 row-span-2" : ""}`}>
              <Image src={`https://raw.githubusercontent.com/joaovitorsouzaoficial299-stack/PERSIART/main/${file}`} alt={`Persiart ${i + 1}`} fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover transition duration-700 group-hover:scale-105" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 pt-12"><span className="text-[10px] font-bold uppercase tracking-[.25em] text-white/55">Persiart</span></div>
            </button>
          ))}
        </div>
      </section>

      <section className="mt-24 border-y border-white/10 bg-white/[.03] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-3 text-xs font-bold uppercase tracking-[.3em] text-white/40">Detalhes técnicos</p>
            <h2 className="text-4xl font-black tracking-tight sm:text-6xl">Qualidade nos componentes.</h2>
            <p className="mx-auto mt-5 max-w-2xl text-white/50">Materiais, acabamento e tecnologia que fazem parte das soluções Persiart.</p>
          </div>
          <div className="grid gap-5 lg:grid-cols-2">
            <button type="button" onClick={() => setSelectedProduct(200)} className="group overflow-hidden rounded-3xl border border-white/10 bg-black/30 text-left">
              <div className="relative aspect-[16/10]"><Image src="https://raw.githubusercontent.com/joaovitorsouzaoficial299-stack/PERSIART/main/Componentes%20.jpg" alt="Componentes das soluções Persiart" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover transition duration-700 group-hover:scale-105"/></div>
              <div className="p-7"><p className="text-xs font-bold uppercase tracking-[.25em] text-white/35">Persiart</p><h3 className="mt-3 text-2xl font-black">Acabamento e construção.</h3><p className="mt-3 leading-7 text-white/55">Tecidos PVC e Screen soldados, braços articulados em alumínio, manivela com gancho de inox, tampas de acabamento e parafusos em inox.</p><p className="mt-5 text-sm font-bold text-white/70">Clique para ampliar →</p></div>
            </button>
            <button type="button" onClick={() => setSelectedProduct(201)} className="group overflow-hidden rounded-3xl border border-white/10 bg-black/30 text-left">
              <div className="relative aspect-[16/10]"><Image src="https://raw.githubusercontent.com/joaovitorsouzaoficial299-stack/PERSIART/main/Motorizac%CC%A7a%CC%83o%20.jpg" alt="Motorização Persiart" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover transition duration-700 group-hover:scale-105"/></div>
              <div className="p-7"><p className="text-xs font-bold uppercase tracking-[.25em] text-white/35">Persiart</p><h3 className="mt-3 text-2xl font-black">Conforto com tecnologia.</h3><p className="mt-3 leading-7 text-white/55">Motor tubular com receptor embutido, ajuste eletrônico, sensor de vento e emissores de 1 e 15 canais.</p><p className="mt-5 text-sm font-bold text-white/70">Clique para ampliar →</p></div>
            </button>
          </div>
        </div>
      </section>

      <section className="mt-24 border-y border-white/10 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-3 text-xs font-bold uppercase tracking-[.3em] text-white/40">Linha de toldos</p>
            <h2 className="text-4xl font-black tracking-tight sm:text-6xl">Proteção que se adapta.</h2>
            <p className="mx-auto mt-5 max-w-2xl text-white/50">Conheça algumas das configurações de toldos apresentadas pela Persiart.</p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {[
              ["Toldos", "Toldo Basic e Toldo Balcone: soluções práticas para diferentes alturas, passagens, varandas e áreas de lazer.", "Toldo.jpg"],
              ["Toldo Bip Screen", "Guias laterais e sistema de corrente com acabamento box para mais segurança, praticidade e conforto.", "Toldo bip screen.jpg"],
              ["Qualidade em toldos", "Soluções manuais e motorizadas para proteção solar com diferentes possibilidades de aplicação.", "Qualidade em toldos manuais e motorizados.jpg"]
            ].map(([title, desc, file]) => (
              <article key={title} className="overflow-hidden rounded-3xl border border-white/10 bg-white/[.03]">
                <div className="relative aspect-[4/3]"><Image src={`https://raw.githubusercontent.com/joaovitorsouzaoficial299-stack/PERSIART/main/${encodeURIComponent(file).replace(/%2F/g, "/")}`} alt={title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover"/></div>
                <div className="p-6"><h3 className="text-2xl font-bold">{title}</h3><p className="mt-3 text-sm leading-6 text-white/50">{desc}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div className="mx-auto mt-10 max-w-5xl rounded-3xl border border-white/10 bg-white/[.03] p-6 sm:p-8">
        <div className="mb-7"><div className="relative mb-5 h-10 w-64">{brandMark("inset-0")}<span className="absolute left-1/2 top-5 -translate-x-1/2 bg-[#0b0b0b] px-3 text-[9px] font-bold uppercase tracking-[.3em] text-white/35">Orçamento rápido</span></div><h3 className="mt-2 text-2xl font-black sm:text-3xl">Tem a medida? Faça o orçamento rápido.</h3><p className="mt-2 text-sm text-white/45">Preencha os dados abaixo e envie direto para a equipe da Persiart.</p></div>

        <div className="grid gap-5 sm:grid-cols-2">
          <label className="block"><span className="mb-2 block text-sm font-semibold text-white/75">Largura</span><input value={quoteWidth} onChange={(e) => setQuoteWidth(e.target.value)} placeholder="Ex.: 2,00 m" className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none placeholder:text-white/25 focus:border-white/30" /></label>
          <label className="block"><span className="mb-2 block text-sm font-semibold text-white/75">Altura</span><input value={quoteHeight} onChange={(e) => setQuoteHeight(e.target.value)} placeholder="Ex.: 1,50 m" className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none placeholder:text-white/25 focus:border-white/30" /></label>
          <label className="block sm:col-span-2"><span className="mb-2 block text-sm font-semibold text-white/75">Modelo</span><select value={quoteModel} onChange={(e) => setQuoteModel(e.target.value)} className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none focus:border-white/30"><option>Persiana Rolô</option><option>Persiana Romana</option><option>Double Vision</option><option>Persiana Horizontal</option><option>Sun Sheer / Tela Solar</option><option>Toldo</option><option>Cortina de tecido</option><option>Motorização</option><option>Outros</option></select></label>
          {quoteModel === "Outros" && <label className="block sm:col-span-2"><span className="mb-2 block text-sm font-semibold text-white/75">Qual modelo?</span><input value={quoteOtherModel} onChange={(e) => setQuoteOtherModel(e.target.value)} placeholder="Digite o modelo que você procura" className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none placeholder:text-white/25" /></label>}
          <div className="sm:col-span-2 rounded-2xl border border-white/10 bg-black/25 p-5"><p className="mb-4 text-sm font-semibold text-white/75">Cor e tecido</p><div className="grid gap-4 sm:grid-cols-3"><label className="block"><span className="mb-2 block text-xs text-white/40">Tecido</span><select value={quoteFabric} onChange={(e) => setQuoteFabric(e.target.value)} className="w-full rounded-xl border border-white/10 bg-black/50 px-3 py-2.5 text-sm text-white outline-none"><option>Tela solar</option><option>Blackout</option><option>Translúcido</option><option>Voil</option><option>Linho</option><option>Outro</option></select></label><label className="block"><span className="mb-2 block text-xs text-white/40">Cor</span><input value={quoteColor} onChange={(e) => setQuoteColor(e.target.value)} placeholder="Ex.: cinza" className="w-full rounded-xl border border-white/10 bg-black/50 px-3 py-2.5 text-sm text-white outline-none placeholder:text-white/25" /></label>{quoteFabric === "Tela solar" && <label className="block"><span className="mb-2 block text-xs text-white/40">Porcentagem da tela solar</span><select value={quoteSolar} onChange={(e) => setQuoteSolar(e.target.value)} className="w-full rounded-xl border border-white/10 bg-black/50 px-3 py-2.5 text-sm text-white outline-none"><option>1%</option><option>3%</option><option>5%</option><option>10%</option></select></label>}</div></div>
        </div>

        <a href={quote("um produto")} onClick={(e) => { const model = quoteModel === "Outros" ? (quoteOtherModel || "Outros") : quoteModel; const text = `Olá! Quero fazer um orçamento rápido na Persiart.\n\nMedidas:\nLargura: ${quoteWidth || "não informada"}\nAltura: ${quoteHeight || "não informada"}\n\nModelo: ${model}\nTecido: ${quoteFabric}\nCor: ${quoteColor || "não informada"}${quoteFabric === "Tela solar" ? `\nTela solar: ${quoteSolar}` : ""}`; e.currentTarget.href = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`; }} className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full border border-emerald-300/30 bg-emerald-500/80 px-6 py-3.5 font-bold text-white shadow-[inset_0_1px_0_rgba(255,255,255,.35),0_10px_35px_rgba(16,185,129,.2)] transition hover:bg-emerald-500 sm:w-auto">Enviar <MessageCircle size={18}/></a>
      </div>
    </section>

    {selectedProduct !== null && selectedProduct >= 200 && <div className="fixed inset-0 z-[100] overflow-y-auto bg-black/90 px-4 py-8 backdrop-blur-sm" onMouseDown={(e) => { if (e.target === e.currentTarget) setSelectedProduct(null); }}>
      <div role="dialog" aria-modal="true" className="mx-auto w-full max-w-5xl overflow-hidden rounded-[2rem] border border-white/10 bg-[#0b0b0b] shadow-2xl">
        <div className="flex items-center justify-between border-b border-white/10 px-6 py-5"><div><p className="text-xs uppercase tracking-[.25em] text-white/35">Persiart</p><h2 className="mt-1 text-2xl font-black sm:text-3xl">{selectedProduct === 200 ? "Componentes" : selectedProduct === 201 ? "Motorização" : ["Toldo Basic e Balcone","Toldo Bip Screen","Qualidade em toldos"][selectedProduct - 210]}</h2></div><button type="button" onClick={() => setSelectedProduct(null)} className="grid h-11 w-11 place-items-center rounded-full border border-white/10 text-white/70 hover:bg-white hover:text-black"><X size={20}/></button></div>
        <div className="relative min-h-[55vh] bg-black"><Image src={selectedProduct === 200 ? "https://raw.githubusercontent.com/joaovitorsouzaoficial299-stack/PERSIART/main/Componentes%20.jpg" : selectedProduct === 201 ? "https://raw.githubusercontent.com/joaovitorsouzaoficial299-stack/PERSIART/main/Motorizac%CC%A7a%CC%83o%20.jpg" : `https://raw.githubusercontent.com/joaovitorsouzaoficial299-stack/PERSIART/main/${["Toldo.jpg","Toldo bip screen.jpg","Qualidade em toldos manuais e motorizados.jpg"][selectedProduct - 210]}`} alt="Persiart" fill sizes="100vw" className="object-contain p-4 sm:p-8"/></div>
        <div className="border-t border-white/10 p-7 sm:p-10"><p className="text-xs font-bold uppercase tracking-[.25em] text-white/35">Persiart</p><h3 className="mt-3 text-3xl font-black">Informações</h3><p className="mt-3 max-w-3xl leading-7 text-white/55">{selectedProduct === 200 ? "Tecidos PVC e Screen soldados com acabamento fosco, braços articulados em alumínio, manivela com gancho de inox, tampa de acabamento em alumínio e parafusos em inox." : selectedProduct === 201 ? "Motor tubular com receptor embutido, ajuste eletrônico, sensor de vento e emissores de 1 e 15 canais." : ["Toldo Basic e Balcone para diferentes alturas, passagens, varandas e áreas de lazer.","Toldo Bip Screen com guias laterais e sistema de corrente para mais segurança, praticidade e conforto.","Soluções de toldos manuais e motorizados para proteção solar e diferentes aplicações."][selectedProduct - 210]}</p></div>
      </div>
    </div>}

    {selectedProduct !== null && selectedProduct >= 100 && <div className="fixed inset-0 z-[100] overflow-y-auto bg-black/90 px-4 py-8 backdrop-blur-sm" onMouseDown={(e) => { if (e.target === e.currentTarget) setSelectedProduct(null); }}>
      <div role="dialog" aria-modal="true" className="mx-auto w-full max-w-5xl overflow-hidden rounded-[2rem] border border-white/10 bg-[#0b0b0b] shadow-2xl">
        <div className="flex items-center justify-between border-b border-white/10 px-6 py-5"><div><p className="text-xs uppercase tracking-[.25em] text-white/35">Persiart</p><h2 className="mt-1 text-2xl font-black sm:text-3xl">Projeto sob medida</h2></div><button type="button" aria-label="Fechar imagem" onClick={() => setSelectedProduct(null)} className="grid h-11 w-11 place-items-center rounded-full border border-white/10 text-white/70 transition hover:bg-white hover:text-black"><X size={20}/></button></div>
        <div className="relative min-h-[55vh] bg-black"><Image src={`https://raw.githubusercontent.com/joaovitorsouzaoficial299-stack/PERSIART/main/${["IMGFEITOS.jpg","IMGFEITOS01.jpg","IMGFEITOS02.jpg","IMGFEITOS03.jpg","IMGFEITOS04.jpg"][selectedProduct - 100]}`} alt="Projeto Persiart" fill sizes="100vw" className="object-contain p-4 sm:p-8"/></div>
        <div className="border-t border-white/10 p-7 sm:p-10"><p className="text-xs font-bold uppercase tracking-[.25em] text-white/35">Persiart</p><h3 className="mt-3 text-3xl font-black">Fabricação e instalação sob medida</h3><p className="mt-3 max-w-3xl leading-7 text-white/55">Projeto realizado pela Persiart, com solução pensada para o ambiente, medidas e acabamento desejado.</p></div>
      </div>
    </div>}
    {selectedProduct !== null && selectedProduct < products.length && <div className="fixed inset-0 z-[100] overflow-y-auto bg-black/80 px-4 py-8 backdrop-blur-sm" onMouseDown={(e) => { if (e.target === e.currentTarget) setSelectedProduct(null); }}>
      <div role="dialog" aria-modal="true" aria-label={products[selectedProduct][0]} className="mx-auto w-full max-w-5xl overflow-hidden rounded-[2rem] border border-white/10 bg-[#0b0b0b] shadow-2xl">
        <div className="flex items-center justify-between border-b border-white/10 px-6 py-5"><div><p className="text-xs uppercase tracking-[.25em] text-white/35">Detalhes do produto</p><h2 className="mt-1 text-2xl font-black sm:text-3xl">{products[selectedProduct][0]}</h2></div><button type="button" aria-label="Fechar descrição" onClick={() => setSelectedProduct(null)} className="grid h-11 w-11 place-items-center rounded-full border border-white/10 text-white/70 transition hover:bg-white hover:text-black"><X size={20}/></button></div>
        <div className="grid lg:grid-cols-2"><div className="relative min-h-[320px] bg-black sm:min-h-[480px]"><Image src={products[selectedProduct][2]} alt={products[selectedProduct][0]} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-contain p-5"/></div><div className="p-7 sm:p-10"><p className="text-sm leading-7 text-white/60">{productDetails[selectedProduct][1]}</p><div className="mt-8 rounded-2xl border border-white/10 bg-white/[.03] p-5"><p className="text-xs font-bold uppercase tracking-[.2em] text-white/35">Informações</p><p className="mt-3 text-sm leading-6 text-white/65">{productDetails[selectedProduct][2]}</p></div><a href={quote(products[selectedProduct][0])} className="mt-8 inline-flex items-center gap-2 rounded-full border border-emerald-300/30 bg-emerald-500/80 px-6 py-3 font-bold text-white backdrop-blur-xl shadow-[inset_0_1px_0_rgba(255,255,255,.35),0_10px_35px_rgba(16,185,129,.2)]">Solicitar orçamento <MessageCircle size={18}/></a></div></div>
      </div>
    </div>}

    <section className="border-y border-white/10 bg-white/[.03]"><div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 lg:grid-cols-2"><div><div className="relative mb-8 h-12 w-64"><span className="absolute left-1/2 top-0 h-px w-full -translate-x-1/2 bg-white/20"/><span className="absolute left-1/2 top-0 h-8 w-px -translate-x-1/2 bg-white/20"/><span className="absolute left-1/2 top-4 -translate-x-1/2 bg-[#0b0b0b] px-3 text-[9px] font-bold uppercase tracking-[.3em] text-white/30">Persiart</span></div><p className="mb-3 text-xs font-bold uppercase tracking-[.3em] text-white/40">Persiart</p><h2 className="text-4xl font-black tracking-tight sm:text-6xl">Estrutura real.<br/>Resultado cuidadoso.</h2><p className="mt-6 max-w-xl leading-7 text-white/55">Uma empresa estruturada para atender projetos sob medida, com fabricação, materiais selecionados e instalação profissional.</p><div className="mt-8 grid gap-4 sm:grid-cols-3"><div><Factory size={20}/><p className="mt-3 text-sm font-semibold">Produção organizada</p></div><div><Ruler size={20}/><p className="mt-3 text-sm font-semibold">Sob medida</p></div><div><ShieldCheck size={20}/><p className="mt-3 text-sm font-semibold">Instalação</p></div></div></div><div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/10"><Image src="https://raw.githubusercontent.com/joaovitorsouzaoficial299-stack/PERSIART/main/Frente%20da%20loja.jpg" alt="Frente da loja Persiart" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover"/></div></div></section>

    <section className="mx-auto max-w-7xl px-6 py-24"><div className="mx-auto mb-10 max-w-3xl text-center"><div className="relative mx-auto mb-8 h-12 w-72"><span className="absolute left-1/2 top-0 h-px w-full -translate-x-1/2 bg-white/20"/><span className="absolute left-1/2 top-0 h-8 w-px -translate-x-1/2 bg-white/20"/><span className="absolute left-1/2 top-4 -translate-x-1/2 bg-[#050505] px-4 text-[9px] font-bold uppercase tracking-[.3em] text-white/30">Persiart</span></div><p className="mb-3 text-xs font-bold uppercase tracking-[.3em] text-white/40">Confiança</p><h2 className="text-4xl font-black sm:text-5xl">Seu projeto, do jeito certo.</h2></div><div className="grid gap-4 md:grid-cols-3"><div className="rounded-3xl border border-white/10 p-7"><Ruler/><h3 className="mt-6 text-xl font-bold">Sob medida</h3><p className="mt-2 text-white/45">A solução é pensada para as dimensões e necessidades do seu ambiente.</p></div><div className="rounded-3xl border border-white/10 p-7"><ShieldCheck/><h3 className="mt-6 text-xl font-bold">Instalação profissional</h3><p className="mt-2 text-white/45">Mais segurança no processo e melhor acabamento na entrega.</p></div><div className="rounded-3xl border border-white/10 p-7"><Sparkles/><h3 className="mt-6 text-xl font-bold">Atendimento personalizado</h3><p className="mt-2 text-white/45">Você fala com a equipe para encontrar a opção ideal.</p></div></div></section>

    <section className="border-y border-white/10 bg-white/[.03]"><div className="mx-auto max-w-4xl px-6 py-24"><div className="relative mb-8 h-12 w-72"><span className="absolute left-1/2 top-0 h-px w-full -translate-x-1/2 bg-white/20"/><span className="absolute left-1/2 top-0 h-8 w-px -translate-x-1/2 bg-white/20"/><span className="absolute left-1/2 top-4 -translate-x-1/2 bg-[#0b0b0b] px-4 text-[9px] font-bold uppercase tracking-[.3em] text-white/30">Persiart</span></div><p className="mb-3 text-xs font-bold uppercase tracking-[.3em] text-white/40">Dúvidas</p><h2 className="mb-10 text-4xl font-black sm:text-5xl">Perguntas frequentes.</h2>{faqs.map(([q,a],i)=><div key={q} className="border-t border-white/10"><button onClick={()=>setOpen(open===i?null:i)} className="flex w-full items-center justify-between py-6 text-left text-lg font-semibold">{q}<ChevronDown className={open===i?"rotate-180 transition":"transition"} size={20}/></button>{open===i&&<p className="pb-6 pr-10 leading-7 text-white/50">{a}</p>}</div>)}</div></section>

    <section className="mx-auto max-w-7xl px-6 py-24"><div className="rounded-[2rem] border border-white/10 bg-white px-7 py-12 text-black sm:px-12"><div className="flex flex-col justify-between gap-8 md:flex-row md:items-end"><div><p className="mb-3 text-xs font-bold uppercase tracking-[.3em] text-black/40">Vamos conversar</p><h2 className="max-w-2xl text-4xl font-black tracking-tight sm:text-6xl">Tem uma janela esperando por uma solução?</h2></div><a href={quote("um produto")} className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full border border-emerald-300/30 bg-emerald-500/80 px-6 py-3 font-bold text-white backdrop-blur-xl shadow-[inset_0_1px_0_rgba(255,255,255,.35),0_10px_35px_rgba(16,185,129,.2)]">Falar no WhatsApp <MessageCircle size={18}/></a></div></div></section>

    <footer className="border-t border-white/10"><div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-3"><div><div className="relative h-20 w-64"><Image src="https://raw.githubusercontent.com/joaovitorsouzaoficial299-stack/PERSIART/main/persiart_logo_transparente.svg" alt="Persiart" fill sizes="256px" className="object-contain object-left"/></div><p className="mt-4 max-w-sm text-sm leading-6 text-white/40">Cortinas, persianas, toldos e automação sob medida em Anápolis-GO.</p></div><div><h3 className="font-bold">Contato</h3><div className="mt-5 space-y-4 text-sm text-white/55"><a href={`https://wa.me/${WHATSAPP}`} className="flex items-center gap-3"><MessageCircle size={17}/> WhatsApp</a><a href="tel:+556233243515" className="flex items-center gap-3"><Phone size={17}/> (62) 3324-3515</a><a href="https://www.instagram.com/persiartanapolis" className="flex items-center gap-3"><Instagram size={17}/> @persiartanapolis</a></div></div><div><h3 className="font-bold">Endereço</h3><p className="mt-5 flex gap-3 text-sm leading-6 text-white/55"><MapPin size={17} className="mt-1 shrink-0"/>Av. Sen. José L. Dias Q G, 2056<br/>Setor Central, Anápolis-GO<br/>75024-970</p><a href="https://www.google.com/maps/search/?api=1&query=Persiart+Cortinas+e+Persianas+Anápolis+GO" className="mt-4 inline-flex items-center gap-2 text-sm font-bold underline underline-offset-4">Abrir no mapa <ArrowUpRight size={15}/></a></div></div><div className="border-t border-white/10 py-6 text-center text-xs text-white/25">© 2026 Persiart. Todos os direitos reservados.</div></footer>
    <a aria-label="Falar no WhatsApp" href={`https://wa.me/${WHATSAPP}`} className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full border border-white/30 bg-[#25D366]/80 text-white shadow-[inset_0_1px_0_rgba(255,255,255,.45),0_10px_35px_rgba(37,211,102,.3)] backdrop-blur-xl transition hover:scale-105" title="+55 (62) 99354-3196"><svg viewBox="0 0 32 32" className="h-7 w-7 fill-current" aria-hidden="true"><path d="M19.11 17.21c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.12-.41-2.13-1.31-.79-.7-1.32-1.56-1.48-1.83-.16-.27-.02-.42.12-.56.12-.12.27-.32.41-.45.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.02-.22-.53-.45-.46-.61-.47h-.52c-.18 0-.48.07-.73.34-.25.27-.96.94-.96 2.29s.98 2.66 1.12 2.84c.14.18 1.93 2.95 4.68 4.14.65.28 1.16.45 1.73.11.53-.08 1.6-.66 1.82-1.3.23-.64.23-1.19.16-1.3-.07-.11-.25-.18-.52-.32zM16.02 4.04c-6.61 0-11.97 5.37-11.97 11.97 0 2.11.55 4.08 1.51 5.8L4 27.96l6.31-1.52a11.94 11.94 0 0 0 5.71 1.45h.01c6.61 0 11.97-5.37 11.97-11.97S22.64 4.04 16.02 4.04zm0 21.88h-.01a9.87 9.87 0 0 1-5.03-1.39l-.36-.21-3.74.9.91-3.65-.23-.37c-.23-.27-.61-.68-.61-1.21 0-5.47 4.49-9.92 10.01-9.92 5.51 0 9.99 4.46 9.99 9.96 0 5.47-4.47 9.93-10.03 9.93z"/></svg></a>
  </main>;
}
