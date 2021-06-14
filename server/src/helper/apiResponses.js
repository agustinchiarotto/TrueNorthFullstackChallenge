const successResponse = (data, res) => {
  return res.status(200).json(data);
};

module.exports = { successResponse };
