const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = 'mongodb+srv://arvinceramos:2019028512@sysarch.rsjhgni.mongodb.net/?retryWrites=true&w=majority&appName=sysarch';
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

const activitySchema = new mongoose.Schema({
  bangkasName: String,
  destination: String,
  date: Date,
  totalPrice: Number
}, { collection: 'activities' });

const Activity = mongoose.model('Activity', activitySchema);

app.post('/api/activities', async (req, res) => {
  const { bangkasName, destination, date, totalPrice } = req.body;
  const newActivity = new Activity({ bangkasName, destination, date, totalPrice });

  try {
    await newActivity.save();
    res.status(201).json(newActivity);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

app.get('/api/activities', async (req, res) => {
  try {
    const activities = await Activity.find();
    res.json(activities);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
