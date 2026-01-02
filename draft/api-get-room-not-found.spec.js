const { test, expect } = require('@playwright/test');

test('API - Invalid room ID should respond within 5s', async ({ request }) => {
  test.setTimeout(60000);

  const start = Date.now();

  const response = await request.get(
    'https://automationintesting.online/api/room/999999',
    { timeout: 45000 }
  );

  const durationMs = Date.now() - start;

  console.log(`Response time (ms): ${durationMs}`);

  expect([400, 404, 500]).toContain(response.status());
  expect(durationMs).toBeLessThan(5000);
});
