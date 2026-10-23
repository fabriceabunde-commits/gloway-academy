import { describe, expect, it } from 'vitest';
import { getReadinessTasks } from './FacilityReadiness';
describe('facility readiness checklist',()=>{
 it('provides USA facility, importer and prior notice topics',()=>{const names=getReadinessTasks('us','packaged').map(x=>x[0]);expect(names).toContain('FDA facility registration applicability');expect(names).toContain('Prior notice and entry planning')});
 it('provides Canada-specific topics',()=>{const names=getReadinessTasks('ca','packaged').map(x=>x[0]);expect(names).toContain('Canadian importer and licensing review');expect(names).not.toContain('FDA facility registration applicability')});
 it('includes special product checks',()=>{expect(getReadinessTasks('us','seafood').some(x=>x[0]==='Seafood-specific requirements')).toBe(true);expect(getReadinessTasks('ca','fresh').some(x=>x[0]==='Fresh produce controls')).toBe(true)});
});
