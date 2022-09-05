const HashStore = require("../models/hashStore");

const hashes = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  try {
    const data = await HashStore.find()
      .limit(25)
      .skip(25 * (page - 1))
      .exec();

    const count = await HashStore.countDocuments();
    res.status(200).json({
      data: data,
      totalPages: Math.ceil(count / 25),
      currentPage: page,
    });
  } catch (err) {
    res.status(500).json({
      message: "error retrieving hashes",
      data: err,
    });
  }
};

module.exports = {
  hashes,
};
