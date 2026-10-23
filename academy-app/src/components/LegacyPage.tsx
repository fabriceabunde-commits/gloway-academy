import { pageHtml } from '../legacy/fragments';
type PageName = keyof typeof pageHtml;
export function LegacyPage({name}:{name:PageName}) { return <div dangerouslySetInnerHTML={{__html:pageHtml[name]}}/>; }
