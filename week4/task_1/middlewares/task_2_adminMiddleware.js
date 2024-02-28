exports.adminMiddleware = (req, res, next) => {
  const role = req.headers.role;
  if (role && role === "admin") return next();
  else res.status(403).send({ error: "Access denied! You are not an admin" });
};
