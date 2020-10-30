const app = require("express")();

const app2 = require("express")();

const app3 = require("express")();

const app4 = require("express")();
const app5 = require("express")();
const app6 = require("express")();
const app7 = require("express")();
const app8 = require("express")();
app.get("/", (req, res) => {

    res.sendFile(__dirname + "/Views/csk.html ");
})

app.listen(1235, () => {
    console.log("7");
})

app2.get("/", (req, res) => {

    res.sendFile(__dirname + "/Views/mi.html");
})

app2.listen(1236, () => {
    console.log("6");
})


app3.get("/", (req, res) => {

    res.sendFile(__dirname + "/Views/rcb.html");
})

app3.listen(1237, () => {
    console.log("5");
})

app4.get("/", (req, res) => {

    res.sendFile(__dirname + "/Views/kep.html");
})

app4.listen(1238, () => {
    console.log("4");
})

app5.get("/", (req, res) => {

    res.sendFile(__dirname + "/Views/kkr.html");
})

app5.listen(1239, () => {
    console.log("3");
})


app6.get("/", (req, res) => {

    res.sendFile(__dirname + "/Views/dc.html");
})

app6.listen(1240, () => {
    console.log("2");
})

app7.get("/", (req, res) => {

    res.sendFile(__dirname + "/Views/rr.html");
})

app7.listen(1241, () => {
    console.log("1");
})

app8.get("/", (req, res) => {

    res.sendFile(__dirname + "/Views/srh.html");
})

app8.listen(1242, () => {
    console.log("Let's go..");
})