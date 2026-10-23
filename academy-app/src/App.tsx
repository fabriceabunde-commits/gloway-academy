import { useCallback, useEffect, useState } from 'react';
import { SiteHeader, type AcademyPage } from './components/SiteHeader';
import { SimulationDemo } from './components/SimulationDemo';
import { CompliancePage } from './components/CompliancePage';
import { HomePage } from './pages/HomePage';
import { CiftPage } from './pages/CiftPage';
import { LearnerPreviewPage } from './pages/LearnerPreviewPage';
import { footerHtml } from './legacy/fragments';
import './legacy/legacy.css';
const pages:AcademyPage[]=['home','cift','compliance','dashboard','lab'];
function fromHash():AcademyPage{const hash=window.location.hash.slice(1);return pages.includes(hash as AcademyPage)?hash as AcademyPage:'home'}
declare global {interface Window {show:(page:AcademyPage)=>void}}
export function App(){const [page,setPage]=useState<AcademyPage>(fromHash);
 const navigate=useCallback((id:AcademyPage)=>{if(!pages.includes(id))return;setPage(id);history.replaceState(null,'','#'+id);window.scrollTo({top:0,behavior:'instant'})},[]);
 useEffect(()=>{window.show=navigate;const onHash=()=>setPage(fromHash());window.addEventListener('hashchange',onHash);return ()=>window.removeEventListener('hashchange',onHash)},[navigate]);
 return <><SiteHeader page={page} navigate={navigate}/><main id="main-content">{page==='home'?<HomePage/>:page==='cift'?<CiftPage/>:page==='compliance'?<CompliancePage/>:page==='dashboard'?<LearnerPreviewPage/>:<SimulationDemo/>}</main><div dangerouslySetInnerHTML={{__html:footerHtml}}/></>;
}
