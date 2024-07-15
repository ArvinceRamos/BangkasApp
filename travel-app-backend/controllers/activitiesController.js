const getActivities = (req, res) => {
  const activities = [
    { id: 1, name: 'Activity 1' },
    { id: 2, name: 'Activity 2' },
    // Add more activities
  ];

  res.json(activities);
};

module.exports = { getActivities };
