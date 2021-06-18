const { default: fetch } = require("node-fetch");

const hello = async () => {
  alert("Hi! ists working");
  const x = await fetch("");
};

hello();
