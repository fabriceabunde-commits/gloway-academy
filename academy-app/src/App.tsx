import { useEffect } from 'react';
import { LegacyPage } from './components/LegacyPage';
import { footerHtml, headerHtml } from './legacy/fragments';
import './legacy/legacy.css';
/** Transitional compatibility layer: keeps original pages, styles and interactions intact
 * while their content is converted into native React components incrementally. */
export function App(){
  useEffect(()=>{
    const script=document.createElement('script');
    script.src='/legacy-behavior.js';
    script.dataset.academyLegacy='true';
    document.body.appendChild(script);
    return ()=>{script.remove()};
  },[]);
  return <><div dangerouslySetInnerHTML={{__html:headerHtml}}/><LegacyPage name="home"/><LegacyPage name="compliance"/><LegacyPage name="cift"/><LegacyPage name="dashboard"/><LegacyPage name="lab"/><div dangerouslySetInnerHTML={{__html:footerHtml}}/></>;
}
