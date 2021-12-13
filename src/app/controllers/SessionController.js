const bcrypt =  require('bcryptjs')
const jwt = require('jsonwebtoken');
const User = require('../models/User');
require('dotenv/config');

module.exports = {
  async get_session(req, res) {
    const { email, password } = req.body;

    const user = await User.findOne({email});        
    if (!user) {
      return res.status(401).json({ error: 'User not found' });
    }
    
    if (!(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ error: 'Password does not match' });
    }
    const { id, unity_id } = user;

    return res.json({
      user: {
          email,
          unity_id
      },
      token: jwt.sign({ id }, process.env.APP_SECRET, {
        expiresIn: '7d',
      }),
    });
  }
}
