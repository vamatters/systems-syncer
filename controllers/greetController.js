const greetUser = (req, res) => {
  const { myName } = req.params;

  if (!myName || myName === undefined) {
    return res.status(404).json({ error: "Invalid name provided" });
  }

  console.log(`Received name: ${myName}`);

  res.status(200).json({ message: `Hello, ${myName}!` });
};

module.exports = { greetUser };
