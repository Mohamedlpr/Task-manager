const errorHandling = async (err, req, res, next) => {
  let statusCode;
  if (res.statusCode !== 200) {
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