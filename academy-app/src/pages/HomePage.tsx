import { resolveLegacyAssets } from '../legacy/assets';
import { pageHtml } from '../legacy/fragments';
/** Production editorial markup preserved until section-by-section JSX conversion. */
export function HomePage(){return <div dangerouslySetInnerHTML={{__html:resolveLegacyAssets(pageHtml.home.replace('class="page active"','class="page active"'))}}/>}
