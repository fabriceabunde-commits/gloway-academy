import { pageHtml } from '../legacy/fragments';
import type { AcademyPage } from './SiteHeader';
export function LegacyPage({name}:{name:Exclude<AcademyPage,'lab'>}) { return <div dangerouslySetInnerHTML={{__html:pageHtml[name].replace('class="page"','class="page active"')}}/>; }
