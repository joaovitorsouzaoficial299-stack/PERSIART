"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, ChevronDown, Instagram, MapPin, MessageCircle, Phone, Mail, Star, Ruler, ShieldCheck, Factory, Sparkles } from "lucide-react";
import { FloatingPathsBackground } from "@/components/ui/floating-paths";
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
  return <main className="min-h-screen bg-[#050505] text-white">
    <section className="relative min-h-[92vh] overflow-hidden border-b border-white/10">
      <FloatingPathsBackground position={-1} className="min-h-[92vh]">
        <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
          <div className="text-xl font-black tracking-[.18em]">PERSIART</div>
          <a href={quote("um produto")} className="rounded-full border border-white/30 px-5 py-2 text-sm font-semibold transition hover:bg-white hover:text-black">Orçamento</a>
        </nav>
        <div className="relative z-10 mx-auto flex min-h-[76vh] max-w-7xl items-center px-6 pb-20 pt-12">
          <div className="max-w-4xl">
            <p className="mb-5 flex items-center gap-2 text-sm font-medium uppercase tracking-[.25em] text-white/55"><Sparkles size={15}/> Anápolis • Goiás</p>
            <h1 className="text-5xl font-black leading-[.92] tracking-[-.06em] sm:text-7xl lg:text-[7.5rem]">Cortinas e<br/><span className="text-white/35">persianas</span><br/>sob medida.</h1>
            <p className="mt-8 max-w-xl text-lg leading-7 text-white/60">Conforto, proteção solar e acabamento para transformar seu ambiente. Escolha sua solução e solicite um orçamento personalizado.</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href={quote("um produto")} className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-bold text-black transition hover:scale-[1.02]">Solicitar orçamento <ArrowUpRight size={18}/></a>
              <a href="#produtos" className="rounded-full border border-white/20 px-6 py-3 font-semibold text-white transition hover:bg-white/10">Ver produtos</a>
            </div>
          </div>
        </div>
      </FloatingPathsBackground>
    </section>

    <section className="border-b border-white/10 py-7 text-white/20"><ScrollBaseAnimation baseVelocity={-3}>CORTINAS • PERSIANAS • TOLDOS • AUTOMAÇÃO • CONFORTO • DESIGN • </ScrollBaseAnimation></section>

    <section id="produtos" className="mx-auto max-w-7xl px-6 py-24">
      <div className="mb-12 max-w-2xl"><p className="mb-3 text-xs font-bold uppercase tracking-[.3em] text-white/40">Soluções</p><h2 className="text-4xl font-black tracking-tight sm:text-6xl">Produtos para cada ambiente.</h2><p className="mt-5 text-white/50">Fale com a equipe e envie as medidas do espaço para receber seu orçamento.</p></div>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {products.map(([name, desc, image], i) => <article key={name} className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[.03]">
          <div className="relative aspect-[4/3] overflow-hidden"><Image src={image} alt={name} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition duration-700 group-hover:scale-105"/></div>
          <div className="p-6"><p className="mb-2 text-xs text-white/35">0{i+1}</p><h3 className="text-2xl font-bold">{name}</h3><p className="mt-3 min-h-14 text-sm leading-6 text-white/50">{desc}</p><a href={quote(name)} className="mt-6 inline-flex items-center gap-2 font-bold underline decoration-white/20 underline-offset-4">Pedir orçamento <ArrowUpRight size={16}/></a></div>
        </article>)}
      </div>
    </section>

    <section className="border-y border-white/10 bg-white/[.03]">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 lg:grid-cols-2">
        <div><p className="mb-3 text-xs font-bold uppercase tracking-[.3em] text-white/40">Por trás do resultado</p><h2 className="text-4xl font-black tracking-tight sm:text-6xl">Fábrica estruturada.<br/>Acabamento cuidadoso.</h2><p className="mt-6 max-w-xl leading-7 text-white/55">Produção organizada, atenção aos detalhes e instalação profissional para que cada solução chegue ao ambiente com o acabamento que o projeto merece.</p><div className="mt-8 grid gap-4 sm:grid-cols-3"><div><Factory size={20}/><p className="mt-3 text-sm font-semibold">Produção organizada</p></div><div><Ruler size={20}/><p className="mt-3 text-sm font-semibold">Sob medida</p></div><div><ShieldCheck size={20}/><p className="mt-3 text-sm font-semibold">Instalação</p></div></div></div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/10"><Image src="https://static.wixstatic.com/media/668363_82520cbf1a8943599d926494b9eaf02b~mv2.jpg/v1/fill/w_980%2Ch_653%2Cal_c%2Cq_85%2Cusm_0.66_1.00_0.01%2Cenc_avif%2Cquality_auto/Decortini_02---02.jpg" alt="Ambiente de produção" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover"/></div>
      </div>
    </section>

    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="mb-10"><p className="mb-3 text-xs font-bold uppercase tracking-[.3em] text-white/40">Confiança</p><h2 className="text-4xl font-black sm:text-5xl">Seu projeto, do jeito certo.</h2></div>
      <div className="grid gap-4 md:grid-cols-3"><div className="rounded-3xl border border-white/10 p-7"><Ruler/><h3 className="mt-6 text-xl font-bold">Sob medida</h3><p className="mt-2 text-white/45">A solução é pensada para as dimensões e necessidades do seu ambiente.</p></div><div className="rounded-3xl border border-white/10 p-7"><ShieldCheck/><h3 className="mt-6 text-xl font-bold">Instalação profissional</h3><p className="mt-2 text-white/45">Mais segurança no processo e melhor acabamento na entrega.</p></div><div className="rounded-3xl border border-white/10 p-7"><Sparkles/><h3 className="mt-6 text-xl font-bold">Atendimento personalizado</h3><p className="mt-2 text-white/45">Você fala com a equipe para encontrar a opção ideal.</p></div></div>
    </section>

    <section className="border-y border-white/10 bg-white/[.03]"><div className="mx-auto max-w-4xl px-6 py-24"><p className="mb-3 text-xs font-bold uppercase tracking-[.3em] text-white/40">Dúvidas</p><h2 className="mb-10 text-4xl font-black sm:text-5xl">Perguntas frequentes.</h2>{faqs.map(([q,a],i)=><div key={q} className="border-t border-white/10"><button onClick={()=>setOpen(open===i?null:i)} className="flex w-full items-center justify-between py-6 text-left text-lg font-semibold">{q}<ChevronDown className={open===i?"rotate-180 transition":"transition"} size={20}/></button>{open===i&&<p className="pb-6 pr-10 leading-7 text-white/50">{a}</p>}</div>)}</div></section>

    <section className="mx-auto max-w-7xl px-6 py-24"><div className="rounded-[2rem] border border-white/10 bg-white px-7 py-12 text-black sm:px-12"><div className="flex flex-col justify-between gap-8 md:flex-row md:items-end"><div><p className="mb-3 text-xs font-bold uppercase tracking-[.3em] text-black/40">Vamos conversar</p><h2 className="max-w-2xl text-4xl font-black tracking-tight sm:text-6xl">Tem uma janela esperando por uma solução?</h2></div><a href={quote("um produto")} className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-black px-6 py-3 font-bold text-white">Falar no WhatsApp <MessageCircle size={18}/></a></div></div></section>

    <footer className="border-t border-white/10"><div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-3"><div><div className="text-2xl font-black tracking-[.18em]">PERSIART</div><p className="mt-4 max-w-sm text-sm leading-6 text-white/40">Cortinas, persianas, toldos e automação sob medida em Anápolis-GO.</p></div><div><h3 className="font-bold">Contato</h3><div className="mt-5 space-y-4 text-sm text-white/55"><a href={`https://wa.me/${WHATSAPP}`} className="flex items-center gap-3"><MessageCircle size={17}/> WhatsApp</a><a href="tel:+556233243515" className="flex items-center gap-3"><Phone size={17}/> (62) 3324-3515</a><a href="https://www.instagram.com/persiartanapolis" className="flex items-center gap-3"><Instagram size={17}/> @persiartanapolis</a></div></div><div><h3 className="font-bold">Endereço</h3><p className="mt-5 flex gap-3 text-sm leading-6 text-white/55"><MapPin size={17} className="mt-1 shrink-0"/>Av. Sen. José L. Dias Q G, 2056<br/>Setor Central, Anápolis-GO<br/>75024-970</p><a href="https://www.google.com/maps/search/?api=1&query=Persiart+Cortinas+e+Persianas+Anápolis+GO" className="mt-4 inline-flex items-center gap-2 text-sm font-bold underline underline-offset-4">Abrir no mapa <ArrowUpRight size={15}/></a></div></div><div className="border-t border-white/10 py-6 text-center text-xs text-white/25">© 2026 Persiart. Todos os direitos reservados.</div></footer>
    <a aria-label="Falar no WhatsApp" href={`https://wa.me/${WHATSAPP}`} className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-white text-black shadow-2xl transition hover:scale-105"><MessageCircle/></a>
  </main>;
}