const { test, expect } = require('@playwright/test');

test('API - Health check', async ({ request }) => {
  const response = await request.get('https://automationintesting.online/api/health');

  expect(response.status()).toBe(200);

  const body = await response.json();
  expect(body.status).toBe('UP');
});
