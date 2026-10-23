import { resolveLegacyAssets } from '../legacy/assets';
import { pageHtml } from '../legacy/fragments';
/** Illustrative learner portal only; no real enrollment or progress persistence. */
export function LearnerPreviewPage(){return <div dangerouslySetInnerHTML={{__html:resolveLegacyAssets(pageHtml.dashboard.replace('class="page"','class="page active"'))}}/>}
