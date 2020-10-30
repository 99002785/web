const app = require('express')();
const parser = require("body-parser");
const fs = require("fs");
const dir = __dirname;


app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());


let cskPlayers = [];
let miPlayers = [];
let rcbPlayers = [];
let flag = 1;

function readData() {
    const filename = "Data/data.json";
    const filename2 = "Data/data2.json";
    const filename3 = "Data/rcb.json";
    const filename4 = "Data/kep.json";
    const jsonContent = fs.readFileSync(filename, 'utf-8');
    const jsonContent2 = fs.readFileSync(filename2, 'utf-8');
    const jsonContent3 = fs.readFileSync(filename3, 'utf-8');
    const jsonContent4 = fs.readFileSync(filename4, 'utf-8');
    // const jsonContent5 = fs.readFileSync(filename5, 'utf-8');
    cskPlayers = JSON.parse(jsonContent);
    miPlayers = JSON.parse(jsonContent2);
    rcbPlayers = JSON.parse(jsonContent3);
    kepPlayers = JSON.parse(jsonContent4);
    //  kkrPlayers = JSON.parse(jsonContent5);

}

function saveData() {
    const filename = "Data/data.json";
    const filename2 = "Data/data2.json";
    const filename3 = "Data/rcb.json";
    const filename4 = "Data/kep.json";
    const jsonData = JSON.stringify(cskPlayers);
    const jsonData2 = JSON.stringify(miPlayers);
    const jsonData3 = JSON.stringify(rcbPlayers);
    const jsonData4 = JSON.stringify(kepPlayers);
    fs.writeFileSync(filename, jsonData, 'utf-8');
    fs.writeFileSync(filename2, jsonData2, 'utf-8');
    fs.writeFileSync(filename3, jsonData3, 'utf-8');
    fs.writeFileSync(filename4, jsonData4, 'utf-8');
}
app.get("/cskPlayers", (req, res) => {
    readData();
    res.send(JSON.stringify(cskPlayers));
})


app.get("/miPlayers", (req, res) => {
    readData();
    res.send(JSON.stringify(miPlayers));
})



app.get("/rcbPlayers", (req, res) => {
    readData();
    res.send(JSON.stringify(rcbPlayers));
})


app.get("/kepPlayers", (req, res) => {
    readData();
    res.send(JSON.stringify(kepPlayers));
})

app.get("/cskPlayers/:id", (req, res) => {
    const cskPlayerid = req.params.id;
    if (cskPlayers.length == 0) {
        readData();
    }
    let foundRec = cskPlayers.find((e) => e.cskPlayerId == cskPlayerid);
    if (foundRec == null)
        throw "Player not found";
    res.send(JSON.stringify(foundRec))
})


app.get("/miPlayers/:id", (req, res) => {
    const miPlayerid = req.params.id;
    if (miPlayers.length == 0) {
        readData();
    }
    let foundRec = miPlayers.find((e) => e.miPlayerId == miPlayerid);
    if (foundRec == null)
        throw "Player not found";
    res.send(JSON.stringify(foundRec))
})



app.get("/rcbPlayers/:id", (req, res) => {
    const rcbPlayerid = req.params.id;
    if (rcbPlayers.length == 0) {
        readData();
    }
    let foundRec = rcbPlayers.find((e) => e.rcbPlayerId == rcbPlayerid);
    if (foundRec == null)
        throw "Player not found";
    res.send(JSON.stringify(foundRec))
})


app.get("/kepPlayers/:id", (req, res) => {
    const kepPlayerid = req.params.id;
    if (kepPlayers.length == 0) {
        readData();
    }
    let foundRec = kepPlayers.find((e) => e.kepPlayerId == kepPlayerid);
    if (foundRec == null)
        throw "Player not found";
    res.send(JSON.stringify(foundRec))
})

app.put("/cskPlayers", (req, res) => {
    if (cskPlayers.length == 0)
        readData();
    let body = req.body;

    for (let index = 0; index < cskPlayers.length; index++) {
        let element = cskPlayers[index];
        if (element.cskPlayerId == body.cskPlayerId) {
            element.cskPlayerName = body.cskPlayerName;
            element.cskPlayerAddress = body.cskPlayerAddress;
            element.cskPlayerSalary = body.cskPlayerSalary;
            saveData();
            res.send("Player updated successfully");
        }
    }

})

app.put("/miPlayers", (req, res) => {
    if (miPlayers.length == 0)
        readData();
    let body = req.body;

    for (let index = 0; index < miPlayers.length; index++) {
        let element = miPlayers[index];
        if (element.miPlayerId == body.miPlayerId) {
            element.miPlayerName = body.miPlayerName;
            element.miPlayerAddress = body.miPlayerAddress;
            element.miPlayerSalary = body.miPlayerSalary;
            saveData();
            res.send("Player updated successfully");
        }
    }

})

app.put("/rcbPlayers", (req, res) => {
    if (rcbPlayers.length == 0)
        readData();
    let body = req.body;

    for (let index = 0; index < rcbPlayers.length; index++) {
        let element = rcbPlayers[index];
        if (element.rcbPlayerId == body.rcbPlayerId) {
            element.rcbPlayerName = body.rcbPlayerName;
            element.rcbPlayerAddress = body.rcbPlayerAddress;
            element.rcbPlayerSalary = body.rcbPlayerSalary;
            saveData();
            res.send("Player updated successfully");
        }
    }

})


app.put("/kepPlayers", (req, res) => {
    if (kepPlayers.length == 0)
        readData();
    let body = req.body;

    for (let index = 0; index < kepPlayers.length; index++) {
        let element = kepPlayers[index];
        if (element.kepPlayerId == body.kepPlayerId) {
            element.kepPlayerName = body.kepPlayerName;
            element.kepPlayerAddress = body.kepPlayerAddress;
            element.kepPlayerSalary = body.kepPlayerSalary;
            saveData();
            res.send("Player updated successfully");
        }
    }

})



app.post('/cskPlayers', (req, res) => {
    if (cskPlayers.length == 0)
        readData();
    let body = req.body;



    for (let index = 0; index < cskPlayers.length; index++) {
        let element = cskPlayers[index];
        if (element.cskPlayerName == body.cskPlayerName) {
            res.send("Player name already exists");
            flag = 0;
        }

    }


    if (flag >= 1) {
        cskPlayers.push(body);
        saveData();
        res.send("Player added successfully");
    }

})


app.post('/miPlayers', (req, res) => {
    if (miPlayers.length == 0)
        readData();
    let body = req.body;



    for (let index = 0; index < miPlayers.length; index++) {
        let element = miPlayers[index];
        if (element.miPlayerName == body.miPlayerName) {
            res.send("Player name already exists");
            flag = 0;
        }

    }


    if (flag >= 1) {
        miPlayers.push(body);
        saveData();
        res.send("Player added successfully");
    }

})


app.post('/rcbPlayers', (req, res) => {
    if (rcbPlayers.length == 0)
        readData();
    let body = req.body;



    for (let index = 0; index < rcbPlayers.length; index++) {
        let element = rcbPlayers[index];
        if (element.rcbPlayerName == body.rcbPlayerName) {
            res.send("Player name already exists");
            flag = 0;
        }

    }


    if (flag >= 1) {
        rcbPlayers.push(body);
        saveData();
        res.send("Player added successfully");
    }

})




app.post('/kepPlayers', (req, res) => {
    if (kepPlayers.length == 0)
        readData();
    let body = req.body;



    for (let index = 0; index < kepPlayers.length; index++) {
        let element = kepPlayers[index];
        if (element.kepPlayerName == body.kepPlayerName) {
            res.send("Player name already exists");
            flag = 0;
        }

    }


    if (flag >= 1) {
        kepPlayers.push(body);
        saveData();
        res.send("Player added successfully");
    }

})


app.delete("/cskPlayers/:id", (req, res) => {


})

app.listen(1234, () => {
    console.log("Server available at 1234");
})