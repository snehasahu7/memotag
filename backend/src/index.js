require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { body, validationResult } = require('express-validator');

const app = express();
const port = process.env.PORT || 3001;


const waitlist = new Set();


const logWaitlist = () => {
  console.log('\nCurrent Waitlist');
  console.log('Total Subscribers:', waitlist.size);
  console.log('Emails:');
  [...waitlist].forEach((email, index) => {
    console.log(`${index + 1}. ${email}`);
  });
  console.log('-----------------\n');
};


app.use(cors());


app.use(express.json());


app.use((req, res, next) => {
  console.log(`\n${new Date().toISOString()} - ${req.method} ${req.path}`);
  next();
});


app.post('/api/waitlist', 
  body('email').isEmail().withMessage('Valid email is required'),
  async (req, res) => {
    console.log('Received waitlist signup request:', req.body); // Debug log

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log('Validation errors:', errors.array()); // Debug log
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const { email } = req.body;

      
      if (waitlist.has(email)) {
        console.log('\n Duplicate signup attempt:', email);
        return res.status(400).json({
          error: 'Email already registered',
          details: 'This email is already on the waitlist'
        });
      }

      
      waitlist.add(email);
      
     
      console.log('\n New waitlist signup:', email);
      logWaitlist();

      res.status(201).json({
        message: 'Successfully added to waitlist',
        data: {
          email,
          signup_date: new Date().toISOString()
        }
      });
    } catch (error) {
      console.error('\n Error adding to waitlist:', error);
      res.status(500).json({
        error: 'Failed to add to waitlist',
        details: error.message
      });
    }
});


app.get('/api/waitlist/count', (req, res) => {
  res.json({
    count: waitlist.size
  });
});


app.get('/api/waitlist', (req, res) => {
  res.json({
    emails: [...waitlist]
  });
});


app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});


console.log(`
Server starting...
 Waitlist API endpoints:
   POST /api/waitlist - Add email to waitlist
   GET  /api/waitlist/count - Get total count
   GET  /api/waitlist - Get all emails
   GET  /api/health - Health check
`);

app.listen(port, () => {
  console.log(` Server running on port ${port}`);
}); 
