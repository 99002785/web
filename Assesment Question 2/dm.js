app.get("/srhPlayers/:id", (req, res) => {
    const srhPlayerid = req.params.id;
    if (srhPlayers.length == 0) {
        readData();
    }
    let foundRec = srhPlayers.find((e) => e.srhPlayerId == srhPlayerid);
    if (foundRec == null)
        throw "Player not found";
    res.send(JSON.stringify(foundRec))
})

app.put("/srhPlayers", (req, res) => {
    if (srhPlayers.length == 0)
        readData();
    let body = req.body;

    for (let index = 0; index < srhPlayers.length; index++) {
        let element = srhPlayers[index];
        if (element.srhPlayerId == body.srhPlayerId) {
            element.srhPlayerName = body.srhPlayerName;
            element.srhPlayerAddress = body.srhPlayerAddress;
            element.srhPlayerSalary = body.srhPlayerSalary;
            saveData();
            res.send("Player updated successfully");
        }
    }

})

app.post('/srhPlayers', (req, res) => {
    if (srhPlayers.length == 0)
        readData();
    let body = req.body;



    for (let index = 0; index < srhPlayers.length; index++) {
        let element = srhPlayers[index];
        if (element.srhPlayerName == body.srhPlayerName) {
            res.send("Player name already exists");
            flag = 0;
        }

    }


    if (flag >= 1) {
        srhPlayers.push(body);
        saveData();
        res.send("Player added successfully");
    }

})