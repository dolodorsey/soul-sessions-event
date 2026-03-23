'use client';
import { useEffect, useRef } from 'react';
export default function Page() {
  const h = useRef(null);
  useEffect(() => {
    const o = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) e.target.classList.add('rv'); }), { threshold: 0.08, rootMargin: '60px' });
    document.querySelectorAll('.r').forEach(el => o.observe(el));
    setTimeout(() => { if (h.current) h.current.classList.add('on'); }, 200);
    return () => o.disconnect();
  }, []);
  const C = { bg: '#0A0A08', light: '#F2EBDD', gold: '#C8A348' };
  return (
    <div style={{background:C.bg,color:C.light,fontFamily:"'DM Sans',sans-serif",overflowX:'hidden'}}>
      <style dangerouslySetInnerHTML={{__html:`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&family=DM+Sans:wght@300;400;500;600;700&family=DM+Mono:wght@400;500&display=swap');
        *{margin:0;padding:0;box-sizing:border-box}
        .r{opacity:0;transform:translateY(48px);transition:all 1.1s cubic-bezier(0.16,1,0.3,1)}.r.rv{opacity:1;transform:translateY(0)}
        .d1{transition-delay:.15s}.d2{transition-delay:.3s}.d3{transition-delay:.45s}
        .hw{opacity:0;transition:opacity 1.8s ease}.hw.on{opacity:1}
        .hw.on .hl{transform:scale(1);opacity:1}.hl{transform:scale(1.08);opacity:0;transition:all 2.2s cubic-bezier(0.16,1,0.3,1) .4s}
        .hw.on .ht{opacity:1;transform:translateY(0)}.ht{opacity:0;transform:translateY(30px);transition:all 1.4s cubic-bezier(0.16,1,0.3,1) 1s}
        .hw.on .hc{opacity:1;transform:translateY(0)}.hc{opacity:0;transform:translateY(20px);transition:all 1s cubic-bezier(0.16,1,0.3,1) 1.5s}
        .grain{position:fixed;inset:0;pointer-events:none;z-index:9999;opacity:.14;background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence baseFrequency='0.65' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")}
        .bp{font-family:'DM Sans',sans-serif;font-size:10px;font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:#0A0A08;background:linear-gradient(135deg,#C8A348,#8B7B3A);padding:18px 56px;border:none;cursor:pointer;text-decoration:none;display:inline-block;transition:all .4s cubic-bezier(0.16,1,0.3,1)}.bp:hover{transform:translateY(-2px);box-shadow:0 16px 48px rgba(200,163,72,.25)}
        .sbg{position:absolute;inset:0;z-index:0;background-size:contain;background-repeat:no-repeat;pointer-events:none}
        @media(max-width:768px){.dg{grid-template-columns:1fr!important}.nl{display:none!important}.fg{grid-template-columns:1fr!important}.eg{grid-template-columns:1fr!important}}
      `}}/>
      <div className="grain"/>
      <nav style={{position:'fixed',top:0,left:0,right:0,zIndex:200,padding:'24px clamp(20px,4vw,60px)',display:'flex',justifyContent:'space-between',alignItems:'center',background:'linear-gradient(180deg,rgba(10,10,8,.92) 0%,transparent 100%)'}}>
        <span style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'clamp(16px,1.8vw,24px)',fontWeight:500,letterSpacing:'.1em',color:C.gold}}>SOUL SESSIONS</span>
        <div className="nl" style={{display:'flex',gap:'clamp(16px,2vw,32px)',alignItems:'center'}}>
          {['Experience','Artists','Tickets'].map(l=><a key={l} href={`#${l.toLowerCase()}`} style={{fontFamily:"'DM Mono',monospace",fontSize:9,letterSpacing:'.25em',textTransform:'uppercase',color:'rgba(242,235,221,.35)',textDecoration:'none'}}>{l}</a>)}
          <a href="#tickets" className="bp" style={{padding:'10px 24px',fontSize:9}}>TICKETS →</a>
        </div>
      </nav>

      {/* HERO */}
      <section ref={h} className="hw" style={{position:'relative',width:'100%',height:'100vh',overflow:'hidden',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',background:C.bg}}>
        <img src="/images/jazz-stage.jpg" alt="" style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'cover',opacity:0.2,filter:'brightness(0.5) saturate(0.6)',zIndex:0}}/>
        <div style={{position:'absolute',inset:0,background:`radial-gradient(ellipse at 50% 40%,rgba(200,163,72,.15) 0%,rgba(10,10,8,.9) 55%)`,zIndex:1}}/>
        <div className="hl" style={{position:'relative',zIndex:2}}><img src="/logo.png" alt="Soul Sessions" style={{width:'min(55vw,480px)',height:'auto',filter:'drop-shadow(0 0 80px rgba(200,163,72,.2))'}}/></div>
        <div className="ht" style={{position:'relative',zIndex:2,textAlign:'center',marginTop:24}}>
          <p style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'clamp(18px,2.5vw,32px)',fontWeight:300,letterSpacing:'.08em',color:C.light}}>Luxury Soul Music Series</p>
          <p style={{fontFamily:"'DM Mono',monospace",fontSize:10,letterSpacing:'.5em',textTransform:'uppercase',color:'rgba(200,163,72,.5)',marginTop:12}}>Live · Timeless · Intimate</p>
        </div>
        <div className="hc" style={{position:'relative',zIndex:2,marginTop:48}}><a href="#tickets" className="bp">Reserve Your Seat</a></div>
      </section>

      {/* THESIS — logo BG right */}
      <section id="experience" style={{position:'relative',padding:'140px clamp(24px,5vw,80px)',overflow:'hidden'}}>
        <div className="sbg" style={{backgroundImage:'url(/logo.png)',backgroundPosition:'80% center',backgroundSize:'35%',opacity:.14,filter:'brightness(.4)'}}/>
        <div style={{position:'absolute',inset:0,background:`radial-gradient(ellipse at 30% 50%,rgba(200,163,72,.08) 0%,transparent 50%)`}}/>
        <div className="dg" style={{maxWidth:1400,margin:'0 auto',display:'grid',gridTemplateColumns:'1.2fr .8fr',gap:100,alignItems:'center',position:'relative',zIndex:1}}>
          <div className="r">
            <div style={{fontFamily:"'DM Mono',monospace",fontSize:9,letterSpacing:'.4em',textTransform:'uppercase',color:C.gold,marginBottom:24}}>The Concept</div>
            <h2 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'clamp(40px,6vw,80px)',lineHeight:.9,fontWeight:300,color:C.light,marginBottom:28}}>WHERE MUSIC<br/>BECOMES <span style={{fontWeight:600,color:C.gold}}>SACRED</span></h2>
            <p style={{fontSize:'clamp(14px,1.2vw,17px)',lineHeight:1.9,color:'rgba(242,235,221,.42)',maxWidth:520,marginBottom:40}}>SOUL SESSIONS is an intimate, curated live music experience celebrating the timeless power of soul, R&B, jazz, and neo-soul. Small venue. Big sound. No phones. Just presence.</p>
            <div style={{display:'flex',gap:48,flexWrap:'wrap'}}>
              {[['INTIMATE','Venue'],['LIVE','Band'],['CURATED','Setlist']].map(([n,l])=><div key={l}><div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'clamp(28px,4vw,44px)',fontWeight:600,color:C.gold,lineHeight:1}}>{n}</div><div style={{fontFamily:"'DM Mono',monospace",fontSize:9,letterSpacing:'.35em',textTransform:'uppercase',color:'rgba(200,163,72,.45)',marginTop:6}}>{l}</div></div>)}
            </div>
          </div>
          <div className="r d2" style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
            <div style={{width:'100%',aspectRatio:'1',background:`radial-gradient(circle at center,rgba(200,163,72,.06) 0%,transparent 70%)`,display:'flex',alignItems:'center',justifyContent:'center'}}>
              <img src="/logo.png" alt="" style={{width:'80%',objectFit:'contain',filter:'brightness(.7) drop-shadow(0 0 40px rgba(200,163,72,.15))'}}/>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE — logo BG left */}
      <section style={{position:'relative',background:'#0D0D0A',padding:'120px clamp(24px,5vw,80px)',overflow:'hidden'}}>
        <div className="sbg" style={{backgroundImage:'url(/logo.png)',backgroundPosition:'10% center',backgroundSize:'28%',opacity:.03,filter:'brightness(.4)'}}/>
        <div style={{maxWidth:1400,margin:'0 auto',position:'relative',zIndex:1}}>
          <div className="r"><h2 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'clamp(36px,6vw,80px)',lineHeight:.9,fontWeight:300,color:C.light,marginBottom:64}}>THE <span style={{fontWeight:600,color:C.gold}}>EVENING</span></h2></div>
          <div className="dg eg" style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:2,background:'rgba(200,163,72,.06)'}}>
            {[['LIVE BAND','Full ensemble — keys, bass, drums, horns, vocals'],['FEATURED VOCALISTS','Rotating lineup of Atlanta\'s finest soul voices'],['CRAFT COCKTAILS','Signature pours crafted for the listening experience'],['CANDLELIT ATMOSPHERE','Low light, warm tones, intentional ambiance'],['NO PHONES POLICY','Be present. Experience the music without screens.'],['LIMITED SEATING','Intimate capacity. Every seat is front row.']].map(([t,d],i)=>
              <div key={i} className={`r d${i%3+1}`} style={{background:C.bg,padding:'40px 36px',borderLeft:'2px solid transparent',transition:'all .3s'}} onMouseEnter={e=>{e.currentTarget.style.borderLeftColor=C.gold;e.currentTarget.style.background='#0D0D0A'}} onMouseLeave={e=>{e.currentTarget.style.borderLeftColor='transparent';e.currentTarget.style.background=C.bg}}>
                <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'clamp(18px,2vw,26px)',fontWeight:600,color:C.light,marginBottom:10}}>{t}</div>
                <div style={{fontSize:13,color:'rgba(242,235,221,.32)',lineHeight:1.7}}>{d}</div>
              </div>)}
          </div>
        </div>
      </section>

      {/* TICKETS — logo BG center */}
      <section id="tickets" style={{position:'relative',padding:'160px clamp(24px,5vw,80px)',overflow:'hidden'}}>
        <div className="sbg" style={{backgroundImage:'url(/logo.png)',backgroundPosition:'center',backgroundSize:'30%',opacity:.14,filter:'brightness(.4)'}}/>
        <div style={{position:'absolute',inset:0,background:`radial-gradient(ellipse at 50% 50%,rgba(200,163,72,.1) 0%,transparent 55%)`}}/>
        <div className="r" style={{maxWidth:720,margin:'0 auto',textAlign:'center',position:'relative',zIndex:1}}>
          <h2 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'clamp(40px,7vw,100px)',lineHeight:.9,fontWeight:300,color:C.light,marginBottom:28}}>RESERVE<br/>YOUR <span style={{fontWeight:600,color:C.gold}}>SEAT</span></h2>
          <p style={{fontSize:15,lineHeight:1.9,color:'rgba(242,235,221,.42)',maxWidth:460,margin:'0 auto 48px'}}>Seating is extremely limited. Each session is a one-night-only experience.</p>
          <a href="https://huglife.vercel.app/tickets" target="_blank" rel="noopener noreferrer" className="bp" style={{padding:'20px 64px',fontSize:11}}>TICKETS →</a>
        </div>
      </section>

      <footer style={{background:'#070706',borderTop:'1px solid rgba(200,163,72,.06)',padding:'56px clamp(24px,5vw,80px) 36px'}}>
        <div className="dg fg" style={{maxWidth:1400,margin:'0 auto',display:'grid',gridTemplateColumns:'2fr 1fr 1fr',gap:40}}>
          <div><div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:28,fontWeight:500,color:C.gold}}>SOUL SESSIONS</div><div style={{fontFamily:"'DM Mono',monospace",fontSize:9,letterSpacing:'.3em',color:'rgba(200,163,72,.45)',marginTop:4}}>LUXURY SOUL MUSIC SERIES</div><p style={{fontSize:12,color:'rgba(242,235,221,.3)',marginTop:12,lineHeight:1.7}}>A KHG HugLife Event.</p></div>
          <div><div style={{fontFamily:"'DM Mono',monospace",fontSize:8,letterSpacing:'.4em',color:C.gold,marginBottom:16}}>EVENT</div>{['Experience','Artists','Tickets'].map(l=><div key={l} style={{fontSize:12,color:'rgba(242,235,221,.3)',marginBottom:8}}>{l}</div>)}</div>
          <div><div style={{fontFamily:"'DM Mono',monospace",fontSize:8,letterSpacing:'.4em',color:C.gold,marginBottom:16}}>CONNECT</div>{['@just.huglife','404.819.9609'].map(l=><div key={l} style={{fontSize:12,color:'rgba(242,235,221,.3)',marginBottom:8}}>{l}</div>)}</div>
        </div>
        <div style={{maxWidth:1400,margin:'24px auto 0',paddingTop:20,borderTop:'1px solid rgba(200,163,72,.05)',fontSize:10,fontFamily:"'DM Mono',monospace",color:'rgba(242,235,221,.12)'}}>© 2026 Soul Sessions. A KHG Enterprise.</div>
      </footer>
    

      {/* VENUE */}
      <div style={{padding:"48px 24px", textAlign:"center", borderTop:"1px solid rgba(255,255,255,0.07)"}}>
        <p style={{fontSize:"10px", letterSpacing:"4px", color:"#C9A84C", textTransform:"uppercase", marginBottom:"12px", fontFamily:"'DM Sans',system-ui,sans-serif"}}>Location</p>
        <h3 style={{fontFamily:"'Cormorant Garamond',Georgia,serif", fontSize:"clamp(22px,4vw,38px)", fontWeight:300, color:"#fff", marginBottom:"8px"}}>
          The Gallery Complex
        </h3>
        <p style={{color:"#666", fontSize:"13px", letterSpacing:"1px", marginBottom:"20px", fontFamily:"'DM Sans',system-ui,sans-serif"}}>
          245 Ted Turner Drive SW, Atlanta, GA 30303
        </p>
        <a href="https://maps.google.com/?q=245+Ted+Turner+Drive+SW+Atlanta+GA+30303" target="_blank" rel="noopener noreferrer"
          style={{display:"inline-block", padding:"11px 26px", border:"1px solid rgba(201,168,76,0.35)", color:"#C9A84C", fontSize:"11px", letterSpacing:"3px", textTransform:"uppercase", textDecoration:"none", fontFamily:"'DM Sans',system-ui,sans-serif"}}>
          Get Directions →
        </a>
      </div>
</div>
  );
}
