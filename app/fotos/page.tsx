"use client";

const media = [
  "IMG_1205.png",
  "IMG_1244.jpeg",
  "IMG_1245.jpeg",
  "IMG_1246.jpeg",
  "IMG_1247.jpeg",
  "IMG_1248.jpeg",
  "IMG_1249.jpeg",
  "IMG_1250.jpeg",
  "IMG_1251.jpeg",
  "IMG_1252.jpeg",
  "IMG_1253.jpeg",
  "IMG_1254.jpeg",
];

const base = "https://raw.githubusercontent.com/joaovitorsouzaoficial299-stack/PERSIART/main/";

export default function Fotos() {
  return (
    <main style={{minHeight:"100vh",background:"#050505",color:"#fff",padding:"32px",fontFamily:"Arial, sans-serif"}}>
      <header style={{maxWidth:1200,margin:"0 auto 28px"}}>
        <p style={{fontSize:12,letterSpacing:4,opacity:.45,textTransform:"uppercase"}}>Persiart • galeria temporária</p>
        <h1 style={{fontSize:"clamp(32px,5vw,64px)",margin:"8px 0",letterSpacing:"-.04em"}}>Fotos e materiais reais</h1>
        <p style={{opacity:.55}}>Página temporária para avaliação visual dos materiais enviados ao GitHub.</p>
      </header>
      <section style={{maxWidth:1200,margin:"0 auto",display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",gap:18}}>
        {media.map((file,i)=>(
          <figure key={file} style={{margin:0,border:"1px solid rgba(255,255,255,.1)",borderRadius:18,overflow:"hidden",background:"#0b0b0b"}}>
            <img src={base+file} alt={file} style={{display:"block",width:"100%",height:360,objectFit:"contain",background:"#111"}} />
            <figcaption style={{padding:"12px 14px",fontSize:13,opacity:.65}}>{String(i+1).padStart(2,"0")} • {file}</figcaption>
          </figure>
        ))}
      </section>
    </main>
  );
}
