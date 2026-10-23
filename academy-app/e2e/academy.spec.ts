import { test, expect } from '@playwright/test';
test('Academy home and page navigation',async({page})=>{
 await page.goto('/');await expect(page.getByRole('heading',{name:/build the skills to succeed in international food trade/i})).toBeVisible();
 const nav=page.getByRole('navigation',{name:'Main navigation'});
 const toggle=page.getByRole('button',{name:'Open navigation'});
 if(await toggle.isVisible())await toggle.click();
 await nav.getByRole('button',{name:'CIFT Qualification'}).click();
 await expect(page.locator('#cift')).toBeVisible();
});
test('Compliance readiness responds to market and checks',async({page})=>{
 await page.goto('/#compliance');
 await expect(page.getByRole('heading',{name:'Facility Readiness Workspace'})).toBeVisible();
 await page.locator('#wc-market').selectOption('ca');
 await expect(page.getByText('Canadian importer and licensing review')).toBeVisible();
 await page.locator('#wc-tasks input').first().check();
 await expect(page.locator('#wc-count')).toContainText('1 /');
});
test('Simulation demonstration evaluates correct choice',async({page})=>{
 await page.goto('/#lab');
 await page.getByRole('button',{name:/B\. Hold dispatch/}).click();
 await page.getByRole('button',{name:/Submit decision/}).click();
 await expect(page.locator('#feedback')).toContainText('Correct.');
});
test('No horizontal overflow at mobile width',async({page,isMobile})=>{
 test.skip(!isMobile,'mobile-only');
 await page.goto('/');
 const widths=await page.evaluate(()=>({body:document.documentElement.scrollWidth,viewport:window.innerWidth}));
 expect(widths.body).toBeLessThanOrEqual(widths.viewport+2);
});
