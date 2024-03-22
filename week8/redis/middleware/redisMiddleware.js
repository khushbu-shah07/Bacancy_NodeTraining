const redisClient = require("../config/redisdb");

exports.cacheMiddleware = (keyInitial) => {
  return async (req, res, next) => {
    try {
      // const key = `${keyInitial}:${req.OriginalUrl}`;
      // console.log(key);
      const key = `${keyInitial}`;

      let data = JSON.parse(await redisClient.get(key));
      if (data) {
        console.log("cache hitted");
        res.json({ response: true, user: data });
      } else {
        req.key = key;
        // console.log(req.key);
        console.log("cache not hitted");
        next();
      }
    } catch (error) {
      console.log("Error in Cache Middleware: ", error);
      next(error);
    }
  };
};
