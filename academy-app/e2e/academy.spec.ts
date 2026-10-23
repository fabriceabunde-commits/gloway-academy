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
test('Container simulator completes seven decisions and reports outcomes',async({page})=>{
 await page.goto('/#lab');
 await expect(page.getByRole('heading',{name:'Container Export Simulator™'})).toBeVisible();
 await page.getByRole('button',{name:/Start shipment simulation/}).click();
 for(let i=0;i<7;i++){
  await expect(page.getByText(new RegExp('Stage '+(i+1)+' of 7'))).toBeVisible();
  await page.locator('.ces-choice').first().click();
  await page.getByRole('button',{name:/Confirm decision/}).click();
 }
 await expect(page.getByRole('heading',{name:/Well-managed shipment/})).toBeVisible();
 await expect(page.getByText(/Decision score/i).first()).toBeVisible();
 await page.getByRole('button',{name:/Restart simulation/}).click();
 await expect(page.getByRole('button',{name:/Start shipment simulation/})).toBeVisible();
});
test('No horizontal overflow at mobile width',async({page,isMobile})=>{
 test.skip(!isMobile,'mobile-only');
 await page.goto('/');
 const widths=await page.evaluate(()=>({body:document.documentElement.scrollWidth,viewport:window.innerWidth}));
 expect(widths.body).toBeLessThanOrEqual(widths.viewport+2);
});
