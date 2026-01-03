import { test, expect } from '@playwright/test';

test('HBK-16 Admin login with valid credentials', async ({ page }) => {
  await page.goto('https://automationintesting.online/admin');

  await page.fill('#username', 'admin');
  await page.fill('#password', 'password');
  await page.click('#doLogin');

  // Vérification réaliste après login réussi
  await expect(page.getByRole('button', { name: /logout/i })).toBeVisible();
});
