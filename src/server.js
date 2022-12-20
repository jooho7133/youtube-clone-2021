import express from "express";

const PORT = 4000;

const app = express();

const handleHome = (req, res) => {
  res.end();
};
const handleLogin = (req, res) => {
  res.send("Login here.");
};
app.get("/", handleHome);
app.get("/login", handleLogin);

const handleListening = () =>
  console.log(`✅ Server listening on http://localhost:${PORT}`);

app.listen(PORT, handleListening);
