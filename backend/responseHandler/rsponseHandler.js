exports.successHandler = (data, res, code = 200) => {
  res.status(code).json({
    success: true,
    user: data,
  });
};

exports.errorHandler = (data, res, code = 400) => {
  res.status(code).json({
    errorType: true,
    errorMessage: data,
  });
};

exports.validHandler = (fields) => {
  for (let key in fields) {
    if (fields[key].trim() === "") {
      throw `Enter your ${key}`;
    }
  }
};
