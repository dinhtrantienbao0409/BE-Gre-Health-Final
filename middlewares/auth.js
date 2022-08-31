const jwt = require("jsonwebtoken");

const isLoggedIn = (req, res, next) => {
  try {
    const token = req.headers.access_token || req.headers.token;

    if (!token) return res.status(401).send("NOT_LOGIN_YET");

    const verifiedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);

    if (!verifiedToken) return res.status(401).send("NOT_LOGIN_YET");

    req.userId = verifiedToken.id;
    req.userEmail = verifiedToken.email;
    req.userRole = verifiedToken.role;

    return next();
  } catch (error) {
    console.log("🚀 ~ file: Auth.js ~ line 20 ~ isLoggedIn ~ error", error);
    next(error);
  }
};

module.exports = { isLoggedIn };
