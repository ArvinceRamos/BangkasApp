const mongoose = require('mongoose');

const uri = 'mongodb+srv://arvinceramos:2019028512@sysarch.rsjhgni.mongodb.net/sysarch?retryWrites=true&w=majority';

mongoose.connect(uri)
  .then(() => {
    console.log('MongoDB connected successfully');
    mongoose.connection.close();  // Close connection after testing
  })
  .catch(err => {
    console.error('MongoDB connection error:', err);
  });
