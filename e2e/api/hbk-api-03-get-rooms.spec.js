import { test, expect } from '@playwright/test';

test('HBK-API-03 Get rooms list', async ({ request }) => {
  const response = await request.get('https://automationintesting.online/api/room');
  expect(response.status()).toBe(200);

  const body = await response.json();
  expect(Array.isArray(body.rooms)).toBeTruthy();
});
