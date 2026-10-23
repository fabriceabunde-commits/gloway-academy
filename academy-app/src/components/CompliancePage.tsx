import { pageHtml } from '../legacy/fragments';
import { FacilityReadiness } from './FacilityReadiness';
// Static editorial sections remain repository-controlled until their native conversion.
const html=pageHtml.compliance;
const start=html.indexOf('<section class="workspace-section"');
const end=html.indexOf('<section class="airy-section"',start);
const opening='<div id="compliance" class="page">';
const before=html.slice(opening.length,start);
const after=html.slice(end,html.lastIndexOf('</div>'));
export function CompliancePage(){return <div id="compliance" className="page active"><div dangerouslySetInnerHTML={{__html:before}}/><FacilityReadiness/><div dangerouslySetInnerHTML={{__html:after}}/></div>}
