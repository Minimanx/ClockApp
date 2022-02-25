const express = require("express");
const app = express();

app.use(express.json());

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/clock.html");
});

app.get("/time", (req, res) => {
    const currentDate = new Date();
    const hour = currentDate.getHours() - 1 == -1 ? 23 : currentDate.getHours() - 1;
    const amPm = hour >= 12 ? "PM" : "AM";
    currentDate.toLocaleTimeString('da-DK', { hour: 'numeric', hour12: true});
    res.send({timeInSeconds: currentDate.getSeconds(), timeInMinutes: currentDate.getMinutes(), timeInHours: currentDate.getHours(), pmAm: amPm});
});

app.listen(process.env.PORT || 8080, () => {
    console.log("Server running on Heroku or on port: ", 8080);
});