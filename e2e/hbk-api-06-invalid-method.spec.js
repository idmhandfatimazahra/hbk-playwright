import { test, expect } from '@playwright/test';

test('HBK-API-06 Invalid HTTP method on get rooms endpoint', async ({ request }) => {
  const response = await request.post(
    'https://automationintesting.online/api/room'
  );

  expect([400, 404, 405]).toContain(response.status());
});
