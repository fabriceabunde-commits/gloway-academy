/** Temporary asset bridge for the isolated Vite preview; bundle assets before production. */
const base='https://raw.githubusercontent.com/fabriceabunde-commits/gloway-academy/main/';
export function resolveLegacyAssets(html:string):string { return html.replaceAll('src="images/', 'src="'+base+'images/'); }
