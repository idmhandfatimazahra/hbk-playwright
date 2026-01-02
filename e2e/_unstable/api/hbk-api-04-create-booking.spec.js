import { test, expect } from '@playwright/test';

test('HBK-API-04 Create booking (POST)', async ({ request }) => {
  test.setTimeout(90000);

  const createRoomRes = await request.post('https://automationintesting.online/api/room', {
    data: {
      roomName: 'QA Room API',
      type: 'Single',
      accessible: true,
      roomPrice: 120,
      features: ['WiFi'],
      description: 'Room created by API test for booking flow'
    }
  });

  expect([200, 201]).toContain(createRoomRes.status());

  const createdRoom = await createRoomRes.json();
  const roomId = createdRoom.roomid || createdRoom.roomId || createdRoom.room?.roomid;

  expect(roomId).toBeTruthy();

  const bookingRes = await request.post(`https://automationintesting.online/api/booking`, {
    data: {
      roomid: roomId,
      firstname: 'Fatima',
      lastname: 'Zahra',
      depositpaid: true,
      bookingdates: {
        checkin: '2026-03-20',
        checkout: '2026-03-22'
      },
      email: 'fatima.qa+api@gmail.com',
      phone: '06123456789'
    }
  });

  expect([200, 201]).toContain(bookingRes.status());
});
