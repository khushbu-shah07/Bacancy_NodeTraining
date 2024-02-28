const jwt = require("jsonwebtoken");
const secretKey = "API";

exports.authMiddleware = (req, res, next) => {
  const excludedPaths = ["/api/v1/auth/signup", "/api/v1/auth/login"];

  if (excludedPaths.includes(req.path)) {
    next();
    return;
  }
  let token = req.header("Authorization");
  if (!token) {
    return res.status(400).json({ auth: false, message: "Token not provided" });
  }

  try {
    const decoded = jwt.verify(token, secretKey);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ message: "Invalid Token" });
  }
};
