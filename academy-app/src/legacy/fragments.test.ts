import { describe, expect, it } from 'vitest';
import { headerHtml, footerHtml, pageHtml } from './fragments';
describe('production content migration',()=>{
  it('retains all five public page modules',()=>{
    expect(Object.keys(pageHtml)).toEqual(['home','compliance','cift','dashboard','lab']);
    for(const [id,html] of Object.entries(pageHtml)) expect(html).toContain('id="'+id+'"');
  });
  it('retains main navigation and footer',()=>{
    expect(headerHtml).toContain('site-navigation');
    expect(footerHtml).toContain('<footer>');
  });
  it('retains real scenario demo and compliance workspace',()=>{
    expect(pageHtml.lab).toContain('Missing allergen declaration');
    expect(pageHtml.compliance).toContain('facility-workspace');
  });
});
