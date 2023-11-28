const getAllContactsCTRL = (req, res) => {
  res.json([
    {
      name: 'IPhone5',
      price: 10000,
    },
  ]);
};

module.exports = getAllContactsCTRL;
