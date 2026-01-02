const { test, expect } = require('@playwright/test');

test('API - Get rooms list', async ({ request }) => {
  const response = await request.get(
    'https://automationintesting.online/api/room'
  );

  expect(response.status()).toBe(200);

  const body = await response.json();

  expect(body).toHaveProperty('rooms');
  expect(Array.isArray(body.rooms)).toBe(true);
});
