const express = require("express");
const app = express();

app.use(express.json());

app.use(express.static(__dirname + "/public"));

app.get("/clock", (req, res) => {
    res.sendFile(__dirname + "/public/clock.html");
});

app.get("/clock/time", (req, res) => {
    const currentDate = new Date();
    const amPm = currentDate.getHours() > 12 ? "PM" : "AM";
    currentDate.toLocaleTimeString('da-DK', { hour: 'numeric', hour12: true});
    res.send({timeInSeconds: currentDate.getSeconds(), timeInMinutes: currentDate.getMinutes(), timeInHours: currentDate.getHours(), pmAm: amPm});
});

app.listen(8080, () => {
    console.log("Server running on port: ", 8080);
});