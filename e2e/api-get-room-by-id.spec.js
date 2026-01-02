const { test, expect } = require('@playwright/test');

test('API - Get room by ID', async ({ request }) => {
  const response = await request.get(
    'https://automationintesting.online/api/room/1'
  );

  expect(response.status()).toBe(200);

  const body = await response.json();

  expect(body).toHaveProperty('roomid');
  expect(body.roomid).toBe(1);
  expect(body).toHaveProperty('roomName');
});
