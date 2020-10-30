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