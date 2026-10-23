import { resolveLegacyAssets } from '../legacy/assets';
import { pageHtml } from '../legacy/fragments';
/** CIFT is a qualification pathway in development, not an accredited credential. */
export function CiftPage(){return <div dangerouslySetInnerHTML={{__html:resolveLegacyAssets(pageHtml.cift.replace('class="page"','class="page active"'))}}/>}
