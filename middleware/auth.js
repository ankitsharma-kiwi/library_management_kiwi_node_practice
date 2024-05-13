const jwt = require('jsonwebtoken');

const SECRET = 'chalo_suru_karte_hain';

const authenticate = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    res.sendStatus(401);
    return;
  }

  jwt.verify(token, SECRET, (err, user) => {
    if (err) {
      res.sendStatus(403);
      return;
    }

    req.user = user;
    next();
  });
};

const authorize = (role) => (req, res, next) => {
  if (req.user.role !== role) {
    res.sendStatus(403);
    return;
  }

  next();
};

module.exports = { authenticate, authorize };
