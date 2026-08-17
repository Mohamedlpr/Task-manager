const errorHandling = (err, req, res, next) => {
  let statusCode;
  if (err.name === "ValidationError" || err.name === "CastError") {
    statusCode = 400;
  } else if (res.statusCode !== 200) {
    statusCode = res.statusCode;
  } else {
    statusCode = 500;
  }
  res.status(statusCode).json({
    success: false,
    message: err.message || "server error"
  });
};

module.exports = errorHandling;