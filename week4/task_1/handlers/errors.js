exports.internalServerError = (res, err) => {
  if (!res || !err) return;
  return res.status(500).json({
    message: "Internal server error",
    error: err,
  });
};

exports.InvalidBookId = (res) => {
  if (!res)
    return res.status(400).json({
      error: "Invalid ID! Please provide a valid BookId",
    });
};

exports.InvalidBookData = (res) => {
  if (!res)
    return res.status(400).json({
      error: "Invalid book data! Please provide a valid Bookdata",
    });
};
