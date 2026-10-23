/** Temporary image resolution for the isolated Vite preview.
 * Original files remain in the root site's images directory.
 * This public GitHub URL is a migration bridge, not the final asset strategy.
 */
const origin='https://raw.githubusercontent.com/fabriceabunde-commits/gloway-academy/main/';
export function resolveLegacyAssets(html:string):string{return html.replace(/(src=\"|src=\\\")(images\/)/g,(_all,prefix:string,dir:string)=>prefix+origin+dir)}
