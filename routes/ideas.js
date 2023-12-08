const express = require('express');
const router = express.Router();

const ideas = [
  {
    id: 1,
    text: 'Positive NewsLetter, a newsletter that only shares positive, uplifting news.',
    tag: 'Technology',
    username: 'TonyStark',
    date: '2022-01-02',
  },
  {
    id: 2,
    text: 'Milk cartons that turn a different color the older your milk gets.',
    tag: 'Inventions',
    username: 'SteveRogers',
    date: '2022-01-02',
  },
  {
    id: 3,
    text: 'ATM location app which lets you know where the closest ATM is and if it is in service.',
    tag: 'Software',
    username: 'BruceBanner',
    date: '2022-01-02',
  },
];

// get all ideas
router.get('/', (req, res) => {
  res.json({ success: true, data: ideas });
});

// get a specific idea by ID
router.get('/:id', (req, res) => {
  const idea = ideas.find((idea) => idea.id === +req.params.id); 
  // + added to make it into a number, because IDs are numbers

  if (!idea) {
    return res.status(404).json({ success: false, error: 'Resource not fund' });
  }

  res.json({ success: true, data: idea });
});

module.exports = router;