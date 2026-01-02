import { test, expect } from '@playwright/test';

test('HBK-API-02 Get room by invalid ID', async ({ request }) => {
  test.setTimeout(90000);

  const start = Date.now();

  const response = await request.get(
    'https://automationintesting.online/api/room/999999',
    { timeout: 60000 }
  );

  const durationMs = Date.now() - start;
  console.log('Response time (ms):', durationMs);

  expect([400, 404, 500]).toContain(response.status());
});
