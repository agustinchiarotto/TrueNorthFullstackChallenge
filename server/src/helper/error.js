const internalError = (res, error) => {
  return res.status(500).json({
    title: 'Internal Error',
    message: error,
  });
};

module.exports = { internalError };
