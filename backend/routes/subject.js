const express = require('express');
const router = express.Router();

const subject = require('../data/contact_subject.json');

router.get('/', (req, res) => {
   // res.end('{"contactSubject": ["Software Developer","System Administrator","Data Analyst","Cybersecurity Specialist","Cloud Engineer","UX/UI Designer","Other","Thanathip"')
   res.json(subject);
});

module.exports = router;