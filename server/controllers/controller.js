const user = require('../models/usermodel');
const jwt =  require('jsonwebtoken');
const JWT_SECRET ='G4d2$5e^3j@!7oJbN7q$1#bV!R&2w0a7T%8mJ3*';

exports.register = async (req, res)=>{

    console.log(req.body);

    if (!req.body.name || !req.body.email || !req.body.password) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    const existingUser = await user.findOne({ name: req.body.name });
    if (existingUser) {
    return res.status(400).json({ message: 'User phle se register hai' });
    }

    try {
        const newUser = new user(req.body);
        await newUser.save();
        res.status(201).json({ message: 'User register ho gaya' });
      } catch (error) {
        if (error.code === 11000) {
            return res.status(400).json({ message: 'Duplicate key error: ' + JSON.stringify(error.keyValue) });
        }
        console.error(error);
        res.status(500).json({ message: 'Registration fail hoe gache' });
      }
};

exports.login = async (req, res) => {
    try {
      const { email, password } = req.body;
  
      const User = await user.findOne({ email });
      if (!User) {
        return res.status(400).json({ error: 'Invalid email or password' });
      }
  
      // Check if the password is correct
      if (User.password !== password) {
        return res.status(400).json({ error: 'Invalid email or password' });
      }
  
      // Generate a token
      const token = jwt.sign(
        { id: User._id, email: User.email }, // Payload
        JWT_SECRET, // Secret key
        { expiresIn: '1h' } // Options
      );
  
      res.status(200).json({ message: 'Login successful', token ,name: User.name });
    } catch (error) {
      console.error('Error during login:', error);
      res.status(500).json({ error: 'Server error. Please try again later.' });
    }
  };