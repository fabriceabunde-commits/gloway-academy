import { useCallback, useEffect, useState } from 'react';
import { LegacyPage } from './components/LegacyPage';
import { SiteHeader, type AcademyPage } from './components/SiteHeader';
import { SimulationDemo } from './components/SimulationDemo';
import { footerHtml } from './legacy/fragments';
import './legacy/legacy.css';
const pages:AcademyPage[]=['home','cift','compliance','dashboard','lab'];
function fromHash():AcademyPage{const hash=window.location.hash.slice(1);return pages.includes(hash as AcademyPage)?hash as AcademyPage:'home'}
declare global {interface Window {show:(page:AcademyPage)=>void}}
export function App(){const [page,setPage]=useState<AcademyPage>(fromHash);
 const navigate=useCallback((id:AcademyPage)=>{if(!pages.includes(id))return;setPage(id);history.replaceState(null,'','#'+id);window.scrollTo({top:0,behavior:'instant'})},[]);
 useEffect(()=>{window.show=navigate;const onHash=()=>setPage(fromHash());window.addEventListener('hashchange',onHash);return ()=>window.removeEventListener('hashchange',onHash)},[navigate]);
 useEffect(()=>{const script=document.createElement('script');script.src='/readiness-and-motion.js';script.dataset.academyLegacy='true';document.body.appendChild(script);return ()=>script.remove()},[]);
 return <><SiteHeader page={page} navigate={navigate}/>{page==='lab'?<SimulationDemo/>:<LegacyPage name={page}/>}<div dangerouslySetInnerHTML={{__html:footerHtml}}/></>;
}
