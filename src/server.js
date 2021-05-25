import express from "express";

const PORT = 4000;

const app = express();

const handleHome = () => console.log("Somebody is tring to go home.");

app.get("/", handleHome);

const handleListening = () =>
  console.log(`✅ Server Listening on port  http://localhost/${PORT}`);

app.listen(PORT, handleListening);
