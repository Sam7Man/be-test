const axios = require('axios');

const registrationData = {
  email: 'admin@insignia.com',
  password: 'admin123',
};

axios.post('http://localhost:3000/user/create', registrationData)
  .then(response => {
    console.log('Registration successful:', response.data);
  })
  .catch(error => {
    console.error('Registration failed:', error.response.data.message);
  });
