"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, ChevronDown, Instagram, MapPin, MessageCircle, Phone, Ruler, ShieldCheck, Factory, Sparkles, X } from "lucide-react";
import ScrollBaseAnimation from "@/components/ui/scroll-text-marquee";

const WHATSAPP = "5562993543196";

const products = [
  ["Motorização para cortina", "Automação para abrir, fechar e controlar suas cortinas com mais conforto.", "https://www.vanewijkzonwering.nl/wp-content/uploads/2021/04/Gordijnen-op-maat-bij-Van-Ewijk-Zonwering-in-Lelystad-Dronten-Swifterbant-en-Almere-06-800x535.jpg"],
  ["Persianas rolô", "Visual limpo, controle de luz e acabamento sob medida para qualquer ambiente.", "https://3325.cdn.simplo7.net/static/3325/sku/por-cor-branco-cortina-rolo-branca-tecido-blackout-colecao-napoles-cor-white--p-1749843149174.jpg"],
  ["Romana", "Elegância e conforto com tecidos e caimento que valorizam o ambiente.", "https://3325.cdn.simplo7.net/static/3325/sku/romana-tecido-blackout-cortina-romana-blackout-tecido-tj5661--p-1751291816283.jpg"],
  ["Double Vision", "Faixas translúcidas e opacas para equilibrar privacidade e iluminação.", "https://images.tcdn.com.br/img/img_prod/1175294/persiana_rolo_double_vision_1_80m_x_2_60m_bege_bella_janela_6659_variacao_8323_3_59192d4c8f7e3df58db897b910178e85.jpg"],
  ["Cortinas tradicionais de tecido", "Soluções clássicas e sofisticadas para projetos residenciais e comerciais.", "https://acdn-us.mitiendanube.com/stores/003/541/884/products/linho-natural-4-adae2f1b01bff2d03b17120553233821-1024-1024.webp"],
  ["Toldos verticais", "Proteção solar e privacidade com instalação pensada para seu espaço.", "https://media.hornbach.de/mp/packshot/5f1df4b3-87da-4ac3-8d0c-88cf1720ee8d?size=400"],
  ["Toldo vertical braço pivotante", "Proteção funcional com estrutura e abertura que se adaptam ao ambiente.", "https://shop0662.sfstatic.io/upload_dir/shop/markise-250-x-100-cm-sort-antracit-laeskaerm-laesejl-vertikalmarkise_2.jpg"],
  ["Sun Sheer", "Leveza, proteção solar e acabamento contemporâneo.", "https://3325.cdn.simplo7.net/static/3325/sku/por-cor-off-white-cortina-rolo-off-white-tecido-tela-solar-colecao-screen-1-cor-white-p-1760731161939.jpg"],
  ["Persianas horizontais em alumínio", "Praticidade, resistência e controle preciso da entrada de luz.", "https://product-hub-prd.madeiramadeira.com.br/241543530/images/0b4ac784-21cb-40f0-82b5-c81ea75f35306b7ed4ffff4c1747340302649.jpeg"]
] as const;

const productDetails = [
  ["Motorização para cortina", "Mais conforto e praticidade para abrir e fechar suas cortinas. Pode ser uma ótima solução para janelas maiores, ambientes de difícil acesso e projetos que buscam automação.", "Controle motorizado, praticidade, conforto e integração ao ambiente."],
  ["Persianas rolô", "Solução moderna e versátil para controlar a entrada de luz e aumentar a privacidade. Disponível em diferentes tecidos, níveis de transparência e acabamentos.", "Controle de luminosidade, privacidade, visual minimalista e fabricação sob medida."],
  ["Romana", "Modelo com dobras horizontais que cria um visual elegante e sofisticado. Combina com projetos residenciais e comerciais e pode receber diferentes tipos de tecido.", "Elegância, acabamento sofisticado, controle de luz e opções de tecido."],
  ["Double Vision", "Alterna faixas translúcidas e opacas, permitindo regular a luminosidade e a privacidade sem precisar abrir completamente a persiana.", "Regulagem de luz, privacidade, design contemporâneo e praticidade."],
  ["Cortinas tradicionais de tecido", "Uma solução clássica para trazer aconchego e personalidade ao ambiente. Pode ser produzida em diferentes tecidos, cores, forros e acabamentos.", "Conforto visual, variedade de tecidos, acabamento personalizado e elegância."],
  ["Toldos verticais", "Indicados para proteção solar e privacidade em áreas externas ou ambientes que recebem muita incidência de luz. O projeto é definido de acordo com o espaço.", "Proteção solar, privacidade, aplicação externa e fabricação sob medida."],
  ["Toldo vertical braço pivotante", "Sistema com braços articulados que permite posicionar a proteção de acordo com a necessidade do ambiente, unindo funcionalidade e acabamento.", "Proteção solar, braços articulados, praticidade e acabamento."],
  ["Sun Sheer", "Tecido técnico que ajuda a controlar a incidência solar mantendo uma aparência leve e contemporânea. Uma opção para quem busca equilíbrio entre iluminação e proteção.", "Proteção solar, luminosidade controlada, leveza e design moderno."],
  ["Persianas horizontais em alumínio", "Modelo resistente e prático, com lâminas que permitem ajustar a entrada de luz e a privacidade com precisão.", "Resistência, fácil limpeza, controle de luz e ajuste de privacidade."]
] as const;

const faqs = [
  ["Vocês fazem produtos sob medida?", "Sim. O orçamento é calculado de acordo com as medidas e características do seu ambiente."],
  ["Como peço um orçamento?", "Escolha o produto, informe largura e altura aproximadas e fale com a equipe pelo WhatsApp."],
  ["Vocês fazem instalação?", "Sim. A Persiart trabalha com fabricação e instalação para entregar o projeto completo."],
  ["Posso automatizar minha cortina?", "Sim. Temos soluções de motorização para trazer mais praticidade ao dia a dia."]
];

function quote(product: string) {
  return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(`Olá! Quero um orçamento de ${product}. Gostaria de saber valores. Posso enviar as medidas (largura x altura) e fotos do ambiente.`)}`;
}

export default function Home() {
  const [open, setOpen] = useState<number | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);

  return <main className="min-h-screen bg-[#050505] text-white">
    <section className="relative min-h-[92vh] overflow-hidden border-b border-white/10">
      <div className="min-h-[92vh]">
        <nav className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
          <div className="mx-auto flex max-w-7xl items-center gap-2 rounded-2xl border border-white/10 bg-black/45 px-3 py-2.5 backdrop-blur-2xl shadow-[inset_0_1px_0_rgba(255,255,255,.12),0_12px_40px_rgba(0,0,0,.25)] sm:gap-3 sm:px-4">
            <div className="shrink-0 px-2 text-lg font-black tracking-[.18em] sm:text-xl">PERSIART</div>
            <a href={quote("um produto")} className="rounded-full border border-emerald-300/30 bg-emerald-500/80 px-3.5 py-2 text-xs font-bold text-white backdrop-blur-xl shadow-[inset_0_1px_0_rgba(255,255,255,.25),0_6px_20px_rgba(16,185,129,.16)] transition hover:bg-emerald-500 sm:px-5 sm:py-2.5 sm:text-sm">Solicitar orçamento</a>
            <a href="#produtos" className="rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3.5 py-2 text-xs font-semibold text-emerald-200 backdrop-blur-xl transition hover:bg-emerald-500/20 sm:px-5 sm:py-2.5 sm:text-sm">Ver produtos</a>
          </div>
        </nav>
        <div className="relative z-10 mx-auto flex min-h-[76vh] max-w-7xl items-center px-6 pb-20 pt-12">
          <div className="max-w-4xl">
            <p className="mb-5 text-sm font-medium uppercase tracking-[.25em] text-white/55">Anápolis • Goiás</p>
            <h1 className="text-5xl font-black leading-[.92] tracking-[-.06em] sm:text-7xl lg:text-[7.5rem]">Cortinas e<br/><span className="text-white/35">persianas</span><br/>sob medida.</h1>
            <p className="mt-8 max-w-xl text-lg leading-7 text-white/60">Conforto, proteção solar e acabamento para transformar seu ambiente. Escolha sua solução e solicite um orçamento personalizado.</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href={quote("um produto")} className="inline-flex items-center gap-2 rounded-full border border-emerald-300/30 bg-emerald-500/80 px-6 py-3 font-bold text-white backdrop-blur-xl shadow-[inset_0_1px_0_rgba(255,255,255,.35),0_10px_35px_rgba(16,185,129,.2)] transition hover:bg-emerald-500">Solicitar orçamento <ArrowUpRight size={18}/></a>
              <a href="#produtos" className="rounded-full border border-emerald-400/30 bg-emerald-500/10 px-6 py-3 font-semibold text-emerald-200 backdrop-blur-xl transition hover:bg-emerald-500/20">Ver produtos</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="border-b border-white/10 py-7 text-white/20"><ScrollBaseAnimation baseVelocity={-3}>CORTINAS • PERSIANAS • TOLDOS • AUTOMAÇÃO • CONFORTO • DESIGN • </ScrollBaseAnimation></section>

    <section id="produtos" className="mx-auto max-w-7xl px-6 py-24">
      <div className="mx-auto mb-12 max-w-3xl text-center"><p className="mb-3 text-xs font-bold uppercase tracking-[.3em] text-white/40">Soluções</p><h2 className="text-4xl font-black tracking-tight sm:text-6xl">Produtos para cada ambiente.</h2><p className="mx-auto mt-5 max-w-2xl text-white/50">Fale com a equipe e envie as medidas do espaço para receber seu orçamento.</p></div>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {products.map(([name, desc, image], i) => <article key={name} className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[.03]">
          <div className="relative aspect-square overflow-hidden"><Image src={image} alt={name} fill sizes="(max-width: 768px) 100vw, 33vw" className="product-image-pan object-cover transition duration-700 group-hover:scale-105"/></div>
          <div className="p-6"><p className="mb-2 text-xs text-white/35">0{i+1}</p><h3 className="text-2xl font-bold">{name}</h3><p className="mt-3 min-h-14 text-sm leading-6 text-white/50">{desc}</p><button type="button" onClick={() => setSelectedProduct(i)} className="mt-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-5 py-2.5 text-sm font-bold text-emerald-200 backdrop-blur-xl transition hover:bg-emerald-500/20">Descrição <ArrowUpRight size={16}/></button><a href={quote(name)} className="ml-2 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-4 py-2 text-sm font-bold text-emerald-200 backdrop-blur-xl transition hover:bg-emerald-500/20">Orçamento <ArrowUpRight size={16}/></a></div>
        </article>)}
      </div>
    </section>

    {selectedProduct !== null && <div className="fixed inset-0 z-[100] overflow-y-auto bg-black/80 px-4 py-8 backdrop-blur-sm" onMouseDown={(e) => { if (e.target === e.currentTarget) setSelectedProduct(null); }}>
      <div role="dialog" aria-modal="true" aria-label={products[selectedProduct][0]} className="mx-auto w-full max-w-5xl overflow-hidden rounded-[2rem] border border-white/10 bg-[#0b0b0b] shadow-2xl">
        <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
          <div><p className="text-xs uppercase tracking-[.25em] text-white/35">Detalhes do produto</p><h2 className="mt-1 text-2xl font-black sm:text-3xl">{products[selectedProduct][0]}</h2></div>
          <button type="button" aria-label="Fechar descrição" onClick={() => setSelectedProduct(null)} className="grid h-11 w-11 place-items-center rounded-full border border-white/10 text-white/70 transition hover:bg-white hover:text-black"><X size={20}/></button>
        </div>
        <div className="grid lg:grid-cols-2">
          <div className="relative min-h-[320px] bg-black sm:min-h-[480px]"><Image src={products[selectedProduct][2]} alt={products[selectedProduct][0]} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-contain p-5"/></div>
          <div className="p-7 sm:p-10">
            <p className="text-sm leading-7 text-white/60">{productDetails[selectedProduct][1]}</p>
            <div className="mt-8 rounded-2xl border border-white/10 bg-white/[.03] p-5">
              <p className="text-xs font-bold uppercase tracking-[.2em] text-white/35">Informações</p>
              <p className="mt-3 text-sm leading-6 text-white/65">{productDetails[selectedProduct][2]}</p>
            </div>
            <a href={quote(products[selectedProduct][0])} className="mt-8 inline-flex items-center gap-2 rounded-full border border-emerald-300/30 bg-emerald-500/80 px-6 py-3 font-bold text-white backdrop-blur-xl shadow-[inset_0_1px_0_rgba(255,255,255,.35),0_10px_35px_rgba(16,185,129,.2)]">Solicitar orçamento <MessageCircle size={18}/></a>
          </div>
        </div>
      </div>
    </div>}

    <section className="border-y border-white/10 bg-white/[.03]">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 lg:grid-cols-2">
        <div><p className="mb-3 text-xs font-bold uppercase tracking-[.3em] text-white/40">Por trás do resultado</p><h2 className="text-4xl font-black tracking-tight sm:text-6xl">Fábrica estruturada.<br/>Acabamento cuidadoso.</h2><p className="mt-6 max-w-xl leading-7 text-white/55">Produção organizada, atenção aos detalhes e instalação profissional para que cada solução chegue ao ambiente com o acabamento que o projeto merece.</p><div className="mt-8 grid gap-4 sm:grid-cols-3"><div><Factory size={20}/><p className="mt-3 text-sm font-semibold">Produção organizada</p></div><div><Ruler size={20}/><p className="mt-3 text-sm font-semibold">Sob medida</p></div><div><ShieldCheck size={20}/><p className="mt-3 text-sm font-semibold">Instalação</p></div></div></div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/10"><Image src="https://static.wixstatic.com/media/668363_82520cbf1a8943599d926494b9eaf02b~mv2.jpg/v1/fill/w_980%2Ch_653%2Cal_c%2Cq_85%2Cusm_0.66_1.00_0.01%2Cenc_avif%2Cquality_auto/Decortini_02---02.jpg" alt="Ambiente de produção" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover"/></div>
      </div>
    </section>

    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="mx-auto mb-10 max-w-3xl text-center"><p className="mb-3 text-xs font-bold uppercase tracking-[.3em] text-white/40">Confiança</p><h2 className="text-4xl font-black sm:text-5xl">Seu projeto, do jeito certo.</h2></div>
      <div className="grid gap-4 md:grid-cols-3"><div className="rounded-3xl border border-white/10 p-7"><Ruler/><h3 className="mt-6 text-xl font-bold">Sob medida</h3><p className="mt-2 text-white/45">A solução é pensada para as dimensões e necessidades do seu ambiente.</p></div><div className="rounded-3xl border border-white/10 p-7"><ShieldCheck/><h3 className="mt-6 text-xl font-bold">Instalação profissional</h3><p className="mt-2 text-white/45">Mais segurança no processo e melhor acabamento na entrega.</p></div><div className="rounded-3xl border border-white/10 p-7"><Sparkles/><h3 className="mt-6 text-xl font-bold">Atendimento personalizado</h3><p className="mt-2 text-white/45">Você fala com a equipe para encontrar a opção ideal.</p></div></div>
    </section>

    <section className="border-y border-white/10 bg-white/[.03]"><div className="mx-auto max-w-4xl px-6 py-24"><p className="mb-3 text-xs font-bold uppercase tracking-[.3em] text-white/40">Dúvidas</p><h2 className="mb-10 text-4xl font-black sm:text-5xl">Perguntas frequentes.</h2>{faqs.map(([q,a],i)=><div key={q} className="border-t border-white/10"><button onClick={()=>setOpen(open===i?null:i)} className="flex w-full items-center justify-between py-6 text-left text-lg font-semibold">{q}<ChevronDown className={open===i?"rotate-180 transition":"transition"} size={20}/></button>{open===i&&<p className="pb-6 pr-10 leading-7 text-white/50">{a}</p>}</div>)}</div></section>

    <section className="mx-auto max-w-7xl px-6 py-24"><div className="rounded-[2rem] border border-white/10 bg-white px-7 py-12 text-black sm:px-12"><div className="flex flex-col justify-between gap-8 md:flex-row md:items-end"><div><p className="mb-3 text-xs font-bold uppercase tracking-[.3em] text-black/40">Vamos conversar</p><h2 className="max-w-2xl text-4xl font-black tracking-tight sm:text-6xl">Tem uma janela esperando por uma solução?</h2></div><a href={quote("um produto")} className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full border border-emerald-300/30 bg-emerald-500/80 px-6 py-3 font-bold text-white backdrop-blur-xl shadow-[inset_0_1px_0_rgba(255,255,255,.35),0_10px_35px_rgba(16,185,129,.2)]">Falar no WhatsApp <MessageCircle size={18}/></a></div></div></section>

    <footer className="border-t border-white/10"><div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-3"><div><div className="text-2xl font-black tracking-[.18em]">PERSIART</div><p className="mt-4 max-w-sm text-sm leading-6 text-white/40">Cortinas, persianas, toldos e automação sob medida em Anápolis-GO.</p></div><div><h3 className="font-bold">Contato</h3><div className="mt-5 space-y-4 text-sm text-white/55"><a href={`https://wa.me/${WHATSAPP}`} className="flex items-center gap-3"><MessageCircle size={17}/> WhatsApp</a><a href="tel:+556233243515" className="flex items-center gap-3"><Phone size={17}/> (62) 3324-3515</a><a href="https://www.instagram.com/persiartanapolis" className="flex items-center gap-3"><Instagram size={17}/> @persiartanapolis</a></div></div><div><h3 className="font-bold">Endereço</h3><p className="mt-5 flex gap-3 text-sm leading-6 text-white/55"><MapPin size={17} className="mt-1 shrink-0"/>Av. Sen. José L. Dias Q G, 2056<br/>Setor Central, Anápolis-GO<br/>75024-970</p><a href="https://www.google.com/maps/search/?api=1&query=Persiart+Cortinas+e+Persianas+Anápolis+GO" className="mt-4 inline-flex items-center gap-2 text-sm font-bold underline underline-offset-4">Abrir no mapa <ArrowUpRight size={15}/></a></div></div><div className="border-t border-white/10 py-6 text-center text-xs text-white/25">© 2026 Persiart. Todos os direitos reservados.</div></footer>
    <a aria-label="Falar no WhatsApp" href={`https://wa.me/${WHATSAPP}`} className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full border border-white/30 bg-[#25D366]/80 text-white shadow-[inset_0_1px_0_rgba(255,255,255,.45),0_10px_35px_rgba(37,211,102,.3)] backdrop-blur-xl transition hover:scale-105" title="+55 (62) 99354-3196"><svg viewBox="0 0 32 32" className="h-7 w-7 fill-current" aria-hidden="true"><path d="M19.11 17.21c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.12-.41-2.13-1.31-.79-.7-1.32-1.56-1.48-1.83-.16-.27-.02-.42.12-.56.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.02-.22-.53-.45-.46-.61-.47h-.52c-.18 0-.48.07-.73.34-.25.27-.96.94-.96 2.29s.98 2.66 1.12 2.84c.14.18 1.93 2.95 4.68 4.14.65.28 1.16.45 1.56.58.66.21 1.26.18 1.73.11.53-.08 1.6-.66 1.82-1.3.23-.64.23-1.19.16-1.3-.07-.11-.25-.18-.52-.32zM16.02 4.04c-6.61 0-11.97 5.37-11.97 11.97 0 2.11.55 4.08 1.51 5.8L4 27.96l6.31-1.52a11.94 11.94 0 0 0 5.71 1.45h.01c6.61 0 11.97-5.37 11.97-11.97S22.64 4.04 16.02 4.04zm0 21.88h-.01a9.87 9.87 0 0 1-5.03-1.39l-.36-.21-3.74.9.91-3.65-.23-.37a9.9 9.9 0 0 1-1.51-5.19c0-5.47 4.49-9.92 10.01-9.92 5.51 0 9.99 4.46 9.99 9.96 0 5.47-4.47 9.93-10.03 9.93z"/></svg></a>
  </main>;
}
