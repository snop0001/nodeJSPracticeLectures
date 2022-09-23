import express from 'express';
import { getAllAppointmentsFromSupaBaseRightNow } from '../controllers/appointmentController.js';
const router = express.Router();

import { myLogger, sayMyName } from '../middleware/logger.js';

// routes
router.get('/', (req, res, next) => {
  res.json('hi');
});
//we are changing the previous function to the controller
router.get('/appointments',getAllAppointmentsFromSupaBaseRightNow);

// router.get('/appointments', myLogger, (req, res, next) => {
//   res.json({
//     title: 'All The Appointments',
//     url: req.originalUrl,
//     query: req.query,
//     appointments: [
//       {
//         url: 'http://localhost:3010/appointments/1',
//         title: 'some random title for the appointment',
//         date: '2022-11-01',
//         time: '10:00'
//       },
//       {
//         url: 'http://localhost:3010/appointments/2',
//         title: 'my pet is injured',
//         date: '2022-11-01',
//         time: '12:00'
//       }
//     ]
//   })
// });

router.post('/appointments', (req, res, next) => {
const client = req.body.client;
const date =  req.body.date;
const time =  req.body.time;

if(client != undefined && date != undefined && time != undefined) {
  res.json({
    title:'appointment added ✨',
    message:`Appointment for ${client} s made on ${date} at ${time}`,
  });
} else {
  res.status(422);
  res.json({
    title:'cannot add apointment',
    message:'You need to set client, date and time'
  });
}
});


export default router;
