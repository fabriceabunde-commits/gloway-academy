import { pageHtml } from '../legacy/fragments';
import { FacilityReadiness } from './FacilityReadiness';
// Preserve the existing editorial content around the native React readiness workspace.
const html=pageHtml.compliance;
const start=html.indexOf('<section class="workspace-section"');
const end=html.indexOf('<section class="airy-section"',start);
const before=html.slice(0,start).replace('class="page"','class="page active"');
const after=html.slice(end);
export function CompliancePage(){return <><div dangerouslySetInnerHTML={{__html:before}}/><FacilityReadiness/><div dangerouslySetInnerHTML={{__html:after}}/></>}
