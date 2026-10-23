import { useState } from 'react';
export type AcademyPage = 'home'|'cift'|'compliance'|'dashboard'|'lab';
const links: {id:AcademyPage;label:string}[]=[{id:'home',label:'Home'},{id:'cift',label:'CIFT Qualification'},{id:'compliance',label:'Facility Compliance'},{id:'dashboard',label:'Learner Portal'},{id:'lab',label:'Simulation Lab'}];
export function SiteHeader({page,navigate}:{page:AcademyPage;navigate:(page:AcademyPage)=>void}){
 const [open,setOpen]=useState(false);
 const go=(id:AcademyPage)=>{navigate(id);setOpen(false)};
 return <><div className="academy-scroll-progress" aria-hidden="true"/><header><div className="topbar"><a href="#home" className="brand academy-brand-lockup" aria-label="Gloway Academy home" onClick={e=>{e.preventDefault();go('home')}}><span className="academy-brand-symbol"><img src="https://gloway.trade/assets/logo.png" alt="Gloway" onError={e=>{e.currentTarget.style.display='none'}}/></span><span className="academy-brand-divider" aria-hidden="true"/><span className="academy-brand-name">ACADEMY</span></a><button className="mobile-nav-toggle" type="button" aria-expanded={open} aria-controls="site-navigation" aria-label={open?'Close navigation':'Open navigation'} onClick={()=>setOpen(x=>!x)}><span/><span/><span/></button><nav className={open?'nav open':'nav'} id="site-navigation" aria-label="Main navigation">{links.map(x=><button key={x.id} data-page={x.id} className={page===x.id?'active':''} onClick={()=>go(x.id)}>{x.label}</button>)}<button className="cta" onClick={()=>go('cift')}>Explore CIFT ↗</button></nav></div></header></>;
}
