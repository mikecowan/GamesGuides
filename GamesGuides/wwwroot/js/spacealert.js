var training1 = [
    {
        "clock": 15,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 1,
            "severity": 1,
            "zone": "Blue",
            "zoneId": 3
        }
    },
    {
        "clock": 60,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 2,
            "severity": 1,
            "zone": "White",
            "zoneId": 2
        }
    },
    {
        "clock": 90,
        "event": "transfer",
        "eventType": 3,
    },
    {
        "clock": 135,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 3,
            "severity": 1,
            "zone": "Red",
            "zoneId": 1
        }
    },
    {
        "clock": 200,
        "event": "transfer",
        "eventType": 3,
    },
    {
        "clock": 245,
        "event": "phase",
        "eventType": 4,
    },
    {
        "clock": 280,
        "event": "incoming",
        "eventType": 2,
    },
    {
        "clock": 310,
        "event": "transfer",
        "eventType": 3,
    },
    {
        "clock": 420,
        "event": "phase",
        "eventType": 4,
    },
]

var training2 = [
    {
        "clock": 10,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 1,
            "severity": 1,
            "zone": "White",
            "zoneId": 2
        }
    },
    {
        "clock": 50,
        "event": "incoming",
        "eventType": 2
    },
    {
        "clock": 80,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 2,
            "severity": 1,
            "zone": "Red",
            "zoneId": 1
        }
    },
    {
        "clock": 135,
        "event": "transfer",
        "eventType": 3
    },
    {
        "clock": 220,
        "event": "phase",
        "eventType": 4
    },
    {
        "clock": 225,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 4,
            "severity": 1,
            "zone": "Blue",
            "zoneId": 3
        }
    },
    {
        "clock": 290,
        "event": "transfer",
        "eventType": 3
    },
    {
        "clock": 330,
        "event": "incoming",
        "eventType": 2
    },
    {
        "clock": 420,
        "event": "phase",
        "eventType": 4
    }
]

var training3 = [
    {
        "clock": 10,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 2,
            "severity": 1,
            "zone": "Red",
            "zoneId": 1
        }
    },
    {
        "clock": 70,
        "event": "incoming",
        "eventType": 2
    },
    {
        "clock": 90,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 3,
            "severity": 2,
            "zone": "White",
            "zoneId": 2
        }
    },
    {
        "clock": 120,
        "event": "transfer",
        "eventType": 3
    },
    {
        "clock": 170,
        "event": "transfer",
        "eventType": 3
    },
    {
        "clock": 220,
        "event": "phase",
        "eventType": 4
    },
    {
        "clock": 230,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 5,
            "severity": 1,
            "zone": "Red",
            "zoneId": 1,
            "unconfirmed": true
        }
    },
    {
        "clock": 290,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 6,
            "severity": 2,
            "zone": "Blue",
            "zoneId": 3
        }
    },
    {
        "clock": 340,
        "event": "transfer",
        "eventType": 3
    },
    {
        "clock": 405,
        "event": "incoming",
        "eventType": 2
    },
    {
        "clock": 450,
        "event": "phase",
        "eventType": 4
    },
    {
        "clock": 505,
        "event": "transfer",
        "eventType": 3
    },
    {
        "clock": 600,
        "event": "phase",
        "eventType": 4
    }
]

var training4 = [
    {
        "clock": 10,
        "event": "incoming",
        "eventType": 2
    },
    {
        "clock": 20,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 2,
            "severity": 2,
            "zone": "Blue",
            "zoneId": 3
        }
    },
    {
        "clock": 70,
        "event": "transfer",
        "eventType": 3
    },
    {
        "clock": 100,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 4,
            "severity": 1,
            "zone": "White",
            "zoneId": 2
        }
    },
    {
        "clock": 180,
        "event": "transfer",
        "eventType": 3
    },
    {
        "clock": 220,
        "event": "phase",
        "eventType": 4
    },
    {
        "clock": 250,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 6,
            "severity": 2,
            "zone": "Red",
            "zoneId": 1
        }
    },
    {
        "clock": 285,
        "event": "incoming",
        "eventType": 2
    },
    {
        "clock": 330,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 7,
            "severity": 1,
            "zone": "White",
            "zoneId": 2,
            "unconfirmed": true
        }
    },
    {
        "clock": 360,
        "event": "transfer",
        "eventType": 3
    },
    {
        "clock": 450,
        "event": "phase",
        "eventType": 4
    },
    {
        "clock": 480,
        "event": "transfer",
        "eventType": 3
    },
    {
        "clock": 600,
        "event": "phase",
        "eventType": 4
    }
]

var training5 = [
    {
        "clock": 10,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 1,
            "severity": 1,
            "zone": "Blue",
            "zoneId": 3
        }
    },
    {
        "clock": 65,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 3,
            "severity": 1,
            "zone": "Red",
            "zoneId": 1
        }
    },
    {
        "clock": 100,
        "event": "incoming",
        "eventType": 2
    },
    {
        "clock": 150,
        "event": "transfer",
        "eventType": 3
    },
    {
        "clock": 185,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 4,
            "severity": 1,
            "zone": "Blue",
            "zoneId": 3,
            "unconfirmed": true
        }
    },
    {
        "clock": 240,
        "event": "phase",
        "eventType": 4
    },
    {
        "clock": 250,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 5,
            "severity": 2,
            "zone": "White",
            "zoneId": 2
        }
    },
    {
        "clock": 280,
        "event": "transfer",
        "eventType": 3
    },
    {
        "clock": 300,
        "event": "incoming",
        "eventType": 2
    },
    {
        "clock": 320,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 7,
            "severity": 1,
            "zone": "Red",
            "zoneId": 1
        }
    },
    {
        "clock": 355,
        "event": "transfer",
        "eventType": 3
    },
    {
        "clock": 450,
        "event": "phase",
        "eventType": 4
    },
    {
        "clock": 490,
        "event": "transfer",
        "eventType": 3
    },
    {
        "clock": 600,
        "event": "phase",
        "eventType": 4
    }
]

var training6 = [
    {
        "clock": 10,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 2,
            "severity": 1,
            "zone": "Internal",
            "zoneId": 4
        }
    },
    {
        "clock": 60,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 3,
            "severity": 1,
            "zone": "White",
            "zoneId": 2
        }
    },
    {
        "clock": 110,
        "event": "transfer",
        "eventType": 3
    },
    {
        "clock": 140,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 4,
            "severity": 1,
            "zone": "Red",
            "zoneId": 1,
            "unconfirmed": true
        }
    },
    {
        "clock": 190,
        "event": "incoming",
        "eventType": 2
    },
    {
        "clock": 240,
        "event": "phase",
        "eventType": 4
    },
    {
        "clock": 250,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 5,
            "severity": 1,
            "zone": "Internal",
            "zoneId": 4
        }
    },
    {
        "clock": 290,
        "event": "incoming",
        "eventType": 2
    },
    {
        "clock": 320,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 7,
            "severity": 2,
            "zone": "Blue",
            "zoneId": 3
        }
    },
    {
        "clock": 340,
        "event": "transfer",
        "eventType": 3
    },
    {
        "clock": 400,
        "event": "transfer",
        "eventType": 3
    },
    {
        "clock": 450,
        "event": "phase",
        "eventType": 4
    },
    {
        "clock": 500,
        "event": "transfer",
        "eventType": 3
    },
    {
        "clock": 600,
        "event": "phase",
        "eventType": 4
    }
]

var training7 = [
    {
        "clock": 10,
        "event": "incoming",
        "eventType": 2
    },
    {
        "clock": 20,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 2,
            "severity": 2,
            "zone": "White",
            "zoneId": 2
        }
    },
    {
        "clock": 75,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 3,
            "severity": 1,
            "zone": "Blue",
            "zoneId": 3,
            "unconfirmed": true
        }
    },
    {
        "clock": 155,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 4,
            "severity": 2,
            "zone": "Internal",
            "zoneId": 4
        }
    },
    {
        "clock": 200,
        "event": "transfer",
        "eventType": 3
    },
    {
        "clock": 250,
        "event": "phase",
        "eventType": 4
    },
    {
        "clock": 260,
        "event": "incoming",
        "eventType": 2
    },
    {
        "clock": 270,
        "event": "transfer",
        "eventType": 3
    },
    {
        "clock": 285,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 7,
            "severity": 1,
            "zone": "Red",
            "zoneId": 1
        }
    },
    {
        "clock": 450,
        "event": "phase",
        "eventType": 4
    },
    {
        "clock": 455,
        "event": "transfer",
        "eventType": 3
    },
    {
        "clock": 480,
        "event": "transfer",
        "eventType": 3
    },
    {
        "clock": 600,
        "event": "phase",
        "eventType": 4
    }
]

var training8 = [
    {
        "clock": 10,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 1,
            "severity": 1,
            "zone": "Red",
            "zoneId": 1
        }
    },
    {
        "clock": 70,
        "event": "incoming",
        "eventType": 2
    },
    {
        "clock": 100,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 3,
            "severity": 2,
            "zone": "Internal",
            "zoneId": 4
        }
    },
    {
        "clock": 150,
        "event": "transfer",
        "eventType": 3
    },
    {
        "clock": 200,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 4,
            "severity": 1,
            "zone": "Blue",
            "zoneId": 3
        }
    },
    {
        "clock": 250,
        "event": "phase",
        "eventType": 4
    },
    {
        "clock": 260,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 5,
            "severity": 1,
            "zone": "White",
            "zoneId": 2,
            "unconfirmed": true
        }
    },
    {
        "clock": 300,
        "event": "incoming",
        "eventType": 2
    },
    {
        "clock": 320,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 6,
            "severity": 1,
            "zone": "Internal",
            "zoneId": 4
        }
    },
    {
        "clock": 365,
        "event": "transfer",
        "eventType": 3
    },
    {
        "clock": 460,
        "event": "phase",
        "eventType": 4
    },
    {
        "clock": 545,
        "event": "transfer",
        "eventType": 3
    },
    {
        "clock": 600,
        "event": "phase",
        "eventType": 4
    }
]

var details1 = [
    {
        "clock": 10,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 2,
            "severity": 2,
            "zone": "White",
            "zoneId": 2
        }
    },
    {
        "clock": 55,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 3,
            "severity": 1,
            "zone": "Internal",
            "zoneId": 4,
            "unconfirmed": true
        }
    },
    {
        "clock": 110,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 4,
            "severity": 1,
            "zone": "Blue",
            "zoneId": 3
        }
    },
    {
        "clock": 140,
        "event": "incoming",
        "eventType": 2,
    },
    {
        "clock": 185,
        "event": "transfer",
        "eventType": 3,
    },
    {
        "clock": 225,
        "event": "phase",
        "eventType": 4,
    },
    {
        "clock": 230,
        "event": "incoming",
        "eventType": 2,
    },
    {
        "clock": 240,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 5,
            "severity": 1,
            "zone": "Internal",
            "zoneId": 4
        }
    },
    {
        "clock": 265,
        "event": "transfer",
        "eventType": 3,
    },
    {
        "clock": 290,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 6,
            "severity": 1,
            "zone": "Blue",
            "zoneId": 3
        }
    },
    {
        "clock": 350,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 7,
            "severity": 2,
            "zone": "Red",
            "zoneId": 1
        }
    },
    {
        "clock": 395,
        "event": "transfer",
        "eventType": 3,
    },
    {
        "clock": 450,
        "event": "phase",
        "eventType": 4,
    },
    {
        "clock": 500,
        "event": "transfer",
        "eventType": 3,
    },
    {
        "clock": 600,
        "event": "phase",
        "eventType": 4,
    },
]

var details2 = [
    {
        "clock": 10,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 1,
            "severity": 1,
            "zone": "Red",
            "zoneId": 1,
            "unconfirmed": true
        }
    },
    {
        "clock": 35,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 2,
            "severity": 1,
            "zone": "Internal",
            "zoneId": 4
        }
    },
    {
        "clock": 90,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 3,
            "severity": 1,
            "zone": "White",
            "zoneId": 2
        }
    },
    {
        "clock": 120,
        "event": "transfer",
        "eventType": 3
    },
    {
        "clock": 155,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 4,
            "severity": 1,
            "zone": "Red",
            "zoneId": 1
        }
    },
    {
        "clock": 190,
        "event": "incoming",
        "eventType": 2
    },
    {
        "clock": 240,
        "event": "phase",
        "eventType": 4
    },
    {
        "clock": 245,
        "event": "incoming",
        "eventType": 2
    },
    {
        "clock": 255,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 5,
            "severity": 1,
            "zone": "White",
            "zoneId": 2
        }
    },
    {
        "clock": 290,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 6,
            "severity": 2,
            "zone": "Internal",
            "zoneId": 4
        }
    },
    {
        "clock": 345,
        "event": "transfer",
        "eventType": 3
    },
    {
        "clock": 375,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 8,
            "severity": 1,
            "zone": "Blue",
            "zoneId": 3
        }
    },
    {
        "clock": 425,
        "event": "incoming",
        "eventType": 2
    },
    {
        "clock": 465,
        "event": "phase",
        "eventType": 4
    },
    {
        "clock": 480,
        "event": "transfer",
        "eventType": 3
    },
    {
        "clock": 565,
        "event": "transfer",
        "eventType": 3
    },
    {
        "clock": 620,
        "event": "phase",
        "eventType": 4
    }
]

var details3 = [
    {
        "clock": 10,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 2,
            "severity": 1,
            "zone": "Internal",
            "zoneId": 4
        }
    },
    {
        "clock": 50,
        "event": "incoming",
        "eventType": 2
    },
    {
        "clock": 75,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 3,
            "severity": 1,
            "zone": "Blue",
            "zoneId": 3
        }
    },
    {
        "clock": 135,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 4,
            "severity": 1,
            "zone": "Internal",
            "zoneId": 4
        }
    },
    {
        "clock": 185,
        "event": "transfer",
        "eventType": 3
    },
    {
        "clock": 230,
        "event": "phase",
        "eventType": 4
    },
    {
        "clock": 240,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 6,
            "severity": 2,
            "zone": "White",
            "zoneId": 2
        }
    },
    {
        "clock": 295,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 7,
            "severity": 2,
            "zone": "Blue",
            "zoneId": 3
        }
    },
    {
        "clock": 320,
        "event": "transfer",
        "eventType": 3
    },
    {
        "clock": 355,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 8,
            "severity": 1,
            "zone": "Red",
            "zoneId": 1,
            "unconfirmed": true
        }
    },
    {
        "clock": 410,
        "event": "transfer",
        "eventType": 3
    },
    {
        "clock": 450,
        "event": "phase",
        "eventType": 4
    },
    {
        "clock": 485,
        "event": "transfer",
        "eventType": 3
    },
    {
        "clock": 600,
        "event": "phase",
        "eventType": 4
    }
]

var details4 = [
    {
        "clock": 10,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 1,
            "severity": 1,
            "zone": "Red",
            "zoneId": 1
        }
    },
    {
        "clock": 60,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 3,
            "severity": 1,
            "zone": "White",
            "zoneId": 2,
            "unconfirmed": true
        }
    },
    {
        "clock": 90,
        "event": "incoming",
        "eventType": 2
    },
    {
        "clock": 115,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 4,
            "severity": 2,
            "zone": "Red",
            "zoneId": 1
        }
    },
    {
        "clock": 145,
        "event": "transfer",
        "eventType": 3
    },
    {
        "clock": 225,
        "event": "phase",
        "eventType": 4
    },
    {
        "clock": 235,
        "event": "transfer",
        "eventType": 3
    },
    {
        "clock": 250,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 5,
            "severity": 2,
            "zone": "Internal",
            "zoneId": 4
        }
    },
    {
        "clock": 275,
        "event": "incoming",
        "eventType": 2
    },
    {
        "clock": 300,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 6,
            "severity": 2,
            "zone": "Blue",
            "zoneId": 3
        }
    },
    {
        "clock": 385,
        "event": "incoming",
        "eventType": 2
    },
    {
        "clock": 440,
        "event": "phase",
        "eventType": 4
    },
    {
        "clock": 455,
        "event": "transfer",
        "eventType": 3
    },
    {
        "clock": 580,
        "event": "phase",
        "eventType": 4
    }
]

var details5 = [
    {
        "clock": 20,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 2,
            "severity": 2,
            "zone": "Blue",
            "zoneId": 3
        }
    },
    {
        "clock": 65,
        "event": "incoming",
        "eventType": 2
    },
    {
        "clock": 90,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 3,
            "severity": 2,
            "zone": "Internal",
            "zoneId": 4
        }
    },
    {
        "clock": 140,
        "event": "transfer",
        "eventType": 3
    },
    {
        "clock": 175,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 4,
            "severity": 1,
            "zone": "Red",
            "zoneId": 1
        }
    },
    {
        "clock": 230,
        "event": "phase",
        "eventType": 4
    },
    {
        "clock": 270,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 6,
            "severity": 1,
            "zone": "Red",
            "zoneId": 1
        }
    },
    {
        "clock": 305,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 7,
            "severity": 1,
            "zone": "Internal",
            "zoneId": 4,
            "unconfirmed": true
        }
    },
    {
        "clock": 360,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 8,
            "severity": 1,
            "zone": "White",
            "zoneId": 2
        }
    },
    {
        "clock": 395,
        "event": "transfer",
        "eventType": 3
    },
    {
        "clock": 410,
        "event": "transfer",
        "eventType": 3
    },
    {
        "clock": 450,
        "event": "phase",
        "eventType": 4
    },
    {
        "clock": 465,
        "event": "incoming",
        "eventType": 2
    },
    {
        "clock": 480,
        "event": "transfer",
        "eventType": 3
    },
    {
        "clock": 600,
        "event": "phase",
        "eventType": 4
    }
]

var details6 = [
    {
        "clock": 10,
        "event": "incoming",
        "eventType": 2
    },
    {
        "clock": 20,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 1,
            "severity": 1,
            "zone": "Blue",
            "zoneId": 3
        }
    },
    {
        "clock": 45,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 2,
            "severity": 1,
            "zone": "Internal",
            "zoneId": 4
        }
    },
    {
        "clock": 70,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 3,
            "severity": 2,
            "zone": "White",
            "zoneId": 2
        }
    },
    {
        "clock": 130,
        "event": "incoming",
        "eventType": 2
    },
    {
        "clock": 180,
        "event": "incoming",
        "eventType": 2
    },
    {
        "clock": 230,
        "event": "phase",
        "eventType": 4
    },
    {
        "clock": 235,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 5,
            "severity": 1,
            "zone": "Blue",
            "zoneId": 3
        }
    },
    {
        "clock": 265,
        "event": "transfer",
        "eventType": 3
    },
    {
        "clock": 285,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 6,
            "severity": 1,
            "zone": "Internal",
            "zoneId": 4
        }
    },
    {
        "clock": 320,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 7,
            "severity": 1,
            "zone": "White",
            "zoneId": 2,
            "unconfirmed": true
        }
    },
    {
        "clock": 365,
        "event": "transfer",
        "eventType": 3
    },
    {
        "clock": 410,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 8,
            "severity": 1,
            "zone": "Red",
            "zoneId": 1
        }
    },
    {
        "clock": 465,
        "event": "phase",
        "eventType": 4
    },
    {
        "clock": 580,
        "event": "transfer",
        "eventType": 3
    },
    {
        "clock": 620,
        "event": "phase",
        "eventType": 4
    }
]

var details7 = [
    {
        "clock": 10,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 1,
            "severity": 1,
            "zone": "Blue",
            "zoneId": 3,
            "unconfirmed": true
        }
    },
    {
        "clock": 35,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 3,
            "severity": 2,
            "zone": "Red",
            "zoneId": 1
        }
    },
    {
        "clock": 70,
        "event": "incoming",
        "eventType": 2
    },
    {
        "clock": 105,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 4,
            "severity": 2,
            "zone": "Internal",
            "zoneId": 4
        }
    },
    {
        "clock": 135,
        "event": "transfer",
        "eventType": 3
    },
    {
        "clock": 220,
        "event": "phase",
        "eventType": 4
    },
    {
        "clock": 225,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 5,
            "severity": 1,
            "zone": "White",
            "zoneId": 2
        }
    },
    {
        "clock": 245,
        "event": "incoming",
        "eventType": 2
    },
    {
        "clock": 265,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 7,
            "severity": 1,
            "zone": "Red",
            "zoneId": 1
        }
    },
    {
        "clock": 290,
        "event": "transfer",
        "eventType": 3
    },
    {
        "clock": 320,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 8,
            "severity": 1,
            "zone": "White",
            "zoneId": 2
        }
    },
    {
        "clock": 360,
        "event": "transfer",
        "eventType": 3
    },
    {
        "clock": 450,
        "event": "phase",
        "eventType": 4
    },
    {
        "clock": 455,
        "event": "incoming",
        "eventType": 2
    },
    {
        "clock": 600,
        "event": "phase",
        "eventType": 4
    }
]

var details8 = [
    {
        "clock": 10,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 3,
            "severity": 1,
            "zone": "Internal",
            "zoneId": 4
        }
    },
    {
        "clock": 70,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 4,
            "severity": 2,
            "zone": "Blue",
            "zoneId": 3
        }
    },
    {
        "clock": 150,
        "event": "incoming",
        "eventType": 2
    },
    {
        "clock": 160,
        "event": "incoming",
        "eventType": 2
    },
    {
        "clock": 205,
        "event": "phase",
        "eventType": 4
    },
    {
        "clock": 210,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 5,
            "severity": 2,
            "zone": "White",
            "zoneId": 2
        }
    },
    {
        "clock": 275,
        "event": "transfer",
        "eventType": 3
    },
    {
        "clock": 295,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 7,
            "severity": 2,
            "zone": "Red",
            "zoneId": 1
        }
    },
    {
        "clock": 320,
        "event": "transfer",
        "eventType": 3
    },
    {
        "clock": 380,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 8,
            "severity": 1,
            "zone": "Blue",
            "zoneId": 3,
            "unconfirmed": true
        }
    },
    {
        "clock": 435,
        "event": "phase",
        "eventType": 4
    },
    {
        "clock": 490,
        "event": "transfer",
        "eventType": 3
    },
    {
        "clock": 580,
        "event": "phase",
        "eventType": 4
    }
]

var doubleEasy1 = [
    {
        "clock": 10,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 2,
            "severity": 2,
            "zone": "White",
            "zoneId": 2
        }
    },
    {
        "clock": 45,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 3,
            "severity": 1,
            "zone": "Red",
            "zoneId": 1,
            "unconfirmed": true
        }
    },
    {
        "clock": 90,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 3,
            "severity": 2,
            "zone": "Internal",
            "zoneId": 4
        }
    },
    {
        "clock": 115,
        "event": "transfer",
        "eventType": 3
    },
    {
        "clock": 140,
        "event": "incoming",
        "eventType": 2
    },
    {
        "clock": 200,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 4,
            "severity": 1,
            "zone": "Blue",
            "zoneId": 3
        }
    },
    {
        "clock": 235,
        "event": "incoming",
        "eventType": 2
    },
    {
        "clock": 245,
        "event": "transfer",
        "eventType": 3
    },
    {
        "clock": 290,
        "event": "phase",
        "eventType": 4
    },
    {
        "clock": 355,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 6,
            "severity": 1,
            "zone": "Blue",
            "zoneId": 3
        }
    },
    {
        "clock": 375,
        "event": "incoming",
        "eventType": 2
    },
    {
        "clock": 385,
        "event": "transfer",
        "eventType": 3
    },
    {
        "clock": 405,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 7,
            "severity": 1,
            "zone": "White",
            "zoneId": 2,
            "unconfirmed": true
        }
    },
    {
        "clock": 435,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 8,
            "severity": 2,
            "zone": "Red",
            "zoneId": 1
        }
    },
    {
        "clock": 500,
        "event": "transfer",
        "eventType": 3
    },
    {
        "clock": 540,
        "event": "phase",
        "eventType": 4
    },
    {
        "clock": 590,
        "event": "transfer",
        "eventType": 3
    },
    {
        "clock": 630,
        "event": "transfer",
        "eventType": 3
    },
    {
        "clock": 750,
        "event": "phase",
        "eventType": 4
    }
]

var doubleEasy2 = [
    {
        "clock": 10,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 1,
            "severity": 1,
            "zone": "Red",
            "zoneId": 1
        }
    },
    {
        "clock": 60,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 2,
            "severity": 1,
            "zone": "Internal",
            "zoneId": 4
        }
    },
    {
        "clock": 95,
        "event": "incoming",
        "eventType": 2
    },
    {
        "clock": 120,
        "event": "transfer",
        "eventType": 3
    },
    {
        "clock": 150,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 3,
            "severity": 1,
            "zone": "White",
            "zoneId": 2
        }
    },
    {
        "clock": 210,
        "event": "transfer",
        "eventType": 3
    },
    {
        "clock": 235,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 4,
            "severity": 1,
            "zone": "Red",
            "zoneId": 1
        }
    },
    {
        "clock": 290,
        "event": "phase",
        "eventType": 4
    },
    {
        "clock": 300,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 5,
            "severity": 1,
            "zone": "White",
            "zoneId": 2
        }
    },
    {
        "clock": 345,
        "event": "transfer",
        "eventType": 3
    },
    {
        "clock": 365,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 7,
            "severity": 2,
            "zone": "Red",
            "zoneId": 1,
            "unconfirmed": true
        }
    },
    {
        "clock": 400,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 7,
            "severity": 1,
            "zone": "Internal",
            "zoneId": 4
        }
    },
    {
        "clock": 425,
        "event": "incoming",
        "eventType": 2
    },
    {
        "clock": 445,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 8,
            "severity": 2,
            "zone": "Blue",
            "zoneId": 3
        }
    },
    {
        "clock": 490,
        "event": "transfer",
        "eventType": 3
    },
    {
        "clock": 540,
        "event": "phase",
        "eventType": 4
    },
    {
        "clock": 595,
        "event": "transfer",
        "eventType": 3
    },
    {
        "clock": 730,
        "event": "transfer",
        "eventType": 3
    },
    {
        "clock": 780,
        "event": "phase",
        "eventType": 4
    }
]

var doubleEasy3 = [
    {
        "clock": 10,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 1,
            "severity": 1,
            "zone": "Blue",
            "zoneId": 3
        }
    },
    {
        "clock": 45,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 3,
            "severity": 1,
            "zone": "White",
            "zoneId": 2
        }
    },
    {
        "clock": 75,
        "event": "transfer",
        "eventType": 3
    },
    {
        "clock": 100,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 3,
            "severity": 2,
            "zone": "Internal",
            "zoneId": 4
        }
    },
    {
        "clock": 165,
        "event": "transfer",
        "eventType": 3
    },
    {
        "clock": 200,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 4,
            "severity": 1,
            "zone": "Blue",
            "zoneId": 3
        }
    },
    {
        "clock": 235,
        "event": "incoming",
        "eventType": 2
    },
    {
        "clock": 280,
        "event": "phase",
        "eventType": 4
    },
    {
        "clock": 295,
        "event": "incoming",
        "eventType": 2
    },
    {
        "clock": 310,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 5,
            "severity": 2,
            "zone": "White",
            "zoneId": 2,
            "unconfirmed": true
        }
    },
    {
        "clock": 335,
        "event": "transfer",
        "eventType": 3
    },
    {
        "clock": 380,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 6,
            "severity": 1,
            "zone": "Internal",
            "zoneId": 4
        }
    },
    {
        "clock": 415,
        "event": "transfer",
        "eventType": 3
    },
    {
        "clock": 435,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 7,
            "severity": 2,
            "zone": "Red",
            "zoneId": 1
        }
    },
    {
        "clock": 530,
        "event": "phase",
        "eventType": 4
    },
    {
        "clock": 595,
        "event": "transfer",
        "eventType": 3
    },
    {
        "clock": 695,
        "event": "transfer",
        "eventType": 3
    },
    {
        "clock": 750,
        "event": "phase",
        "eventType": 4
    }
]

var doubleEasy4 = [
    {
        "clock": 15,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 1,
            "severity": 1,
            "zone": "Red",
            "zoneId": 1
        }
    },
    {
        "clock": 50,
        "event": "incoming",
        "eventType": 2
    },
    {
        "clock": 70,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 2,
            "severity": 1,
            "zone": "Internal",
            "zoneId": 4
        }
    },
    {
        "clock": 115,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 3,
            "severity": 2,
            "zone": "Blue",
            "zoneId": 3
        }
    },
    {
        "clock": 140,
        "event": "transfer",
        "eventType": 3
    },
    {
        "clock": 180,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 4,
            "severity": 1,
            "zone": "Red",
            "zoneId": 1,
            "unconfirmed": true
        }
    },
    {
        "clock": 235,
        "event": "transfer",
        "eventType": 3
    },
    {
        "clock": 290,
        "event": "phase",
        "eventType": 4
    },
    {
        "clock": 310,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 5,
            "severity": 1,
            "zone": "Internal",
            "zoneId": 4
        }
    },
    {
        "clock": 330,
        "event": "incoming",
        "eventType": 2
    },
    {
        "clock": 370,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 6,
            "severity": 2,
            "zone": "White",
            "zoneId": 2
        }
    },
    {
        "clock": 405,
        "event": "transfer",
        "eventType": 3
    },
    {
        "clock": 430,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 7,
            "severity": 1,
            "zone": "Red",
            "zoneId": 1
        }
    },
    {
        "clock": 465,
        "event": "incoming",
        "eventType": 2
    },
    {
        "clock": 495,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 8,
            "severity": 1,
            "zone": "Blue",
            "zoneId": 3,
            "unconfirmed": true
        }
    },
    {
        "clock": 550,
        "event": "phase",
        "eventType": 4
    },
    {
        "clock": 590,
        "event": "transfer",
        "eventType": 3
    },
    {
        "clock": 655,
        "event": "transfer",
        "eventType": 3
    },
    {
        "clock": 780,
        "event": "phase",
        "eventType": 4
    }
]

var doubleEasy5 = [
    {
        "clock": 10,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 1,
            "severity": 1,
            "zone": "White",
            "zoneId": 2
        }
    },
    {
        "clock": 40,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 2,
            "severity": 1,
            "zone": "Red",
            "zoneId": 1
        }
    },
    {
        "clock": 70,
        "event": "incoming",
        "eventType": 2
    },
    {
        "clock": 90,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 2,
            "severity": 1,
            "zone": "Internal",
            "zoneId": 4,
            "unconfirmed": true
        }
    },
    {
        "clock": 130,
        "event": "transfer",
        "eventType": 3
    },
    {
        "clock": 145,
        "event": "transfer",
        "eventType": 3
    },
    {
        "clock": 165,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 3,
            "severity": 1,
            "zone": "Blue",
            "zoneId": 3
        }
    },
    {
        "clock": 250,
        "event": "incoming",
        "eventType": 2
    },
    {
        "clock": 300,
        "event": "phase",
        "eventType": 4
    },
    {
        "clock": 305,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 5,
            "severity": 1,
            "zone": "Red",
            "zoneId": 1
        }
    },
    {
        "clock": 330,
        "event": "transfer",
        "eventType": 3
    },
    {
        "clock": 350,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 5,
            "severity": 2,
            "zone": "Internal",
            "zoneId": 4
        }
    },
    {
        "clock": 400,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 6,
            "severity": 1,
            "zone": "Blue",
            "zoneId": 3,
            "unconfirmed": true
        }
    },
    {
        "clock": 430,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 7,
            "severity": 1,
            "zone": "White",
            "zoneId": 2
        }
    },
    {
        "clock": 485,
        "event": "transfer",
        "eventType": 3
    },
    {
        "clock": 515,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 8,
            "severity": 1,
            "zone": "Internal",
            "zoneId": 4
        }
    },
    {
        "clock": 570,
        "event": "phase",
        "eventType": 4
    },
    {
        "clock": 600,
        "event": "transfer",
        "eventType": 3
    },
    {
        "clock": 680,
        "event": "transfer",
        "eventType": 3
    },
    {
        "clock": 810,
        "event": "phase",
        "eventType": 4
    }
]

var doubleEasy6 = [
    {
        "clock": 15,
        "event": "incoming",
        "eventType": 2
    },
    {
        "clock": 25,
        "event": "incoming",
        "eventType": 2
    },
    {
        "clock": 40,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 3,
            "severity": 2,
            "zone": "Blue",
            "zoneId": 3
        }
    },
    {
        "clock": 65,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 3,
            "severity": 2,
            "zone": "Internal",
            "zoneId": 4
        }
    },
    {
        "clock": 135,
        "event": "transfer",
        "eventType": 3
    },
    {
        "clock": 180,
        "event": "transfer",
        "eventType": 3
    },
    {
        "clock": 245,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 4,
            "severity": 1,
            "zone": "Red",
            "zoneId": 1
        }
    },
    {
        "clock": 290,
        "event": "phase",
        "eventType": 4
    },
    {
        "clock": 320,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 6,
            "severity": 1,
            "zone": "White",
            "zoneId": 2
        }
    },
    {
        "clock": 345,
        "event": "incoming",
        "eventType": 2
    },
    {
        "clock": 360,
        "event": "transfer",
        "eventType": 3
    },
    {
        "clock": 380,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 7,
            "severity": 1,
            "zone": "Internal",
            "zoneId": 4
        }
    },
    {
        "clock": 415,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 7,
            "severity": 2,
            "zone": "White",
            "zoneId": 2,
            "unconfirmed": true
        }
    },
    {
        "clock": 455,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 8,
            "severity": 1,
            "zone": "Red",
            "zoneId": 1
        }
    },
    {
        "clock": 495,
        "event": "transfer",
        "eventType": 3
    },
    {
        "clock": 550,
        "event": "phase",
        "eventType": 4
    },
    {
        "clock": 595,
        "event": "transfer",
        "eventType": 3
    },
    {
        "clock": 725,
        "event": "transfer",
        "eventType": 3
    },
    {
        "clock": 780,
        "event": "phase",
        "eventType": 4
    }
]

var double1 = [
    {
        "clock": 15,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 2,
            "severity": 2,
            "zone": "White",
            "zoneId": 2
        }
    },
    {
        "clock": 60,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 2,
            "severity": 1,
            "zone": "Internal",
            "zoneId": 4
        }
    },
    {
        "clock": 90,
        "event": "incoming",
        "eventType": 2
    },
    {
        "clock": 115,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 3,
            "severity": 1,
            "zone": "Blue",
            "zoneId": 3
        }
    },
    {
        "clock": 185,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 4,
            "severity": 1,
            "zone": "Internal",
            "zoneId": 4
        }
    },
    {
        "clock": 240,
        "event": "transfer",
        "eventType": 3
    },
    {
        "clock": 290,
        "event": "phase",
        "eventType": 4
    },
    {
        "clock": 300,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 5,
            "severity": 1,
            "zone": "Red",
            "zoneId": 1
        }
    },
    {
        "clock": 320,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 6,
            "severity": 2,
            "zone": "White",
            "zoneId": 2,
            "unconfirmed": true
        }
    },
    {
        "clock": 390,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 7,
            "severity": 2,
            "zone": "Blue",
            "zoneId": 3
        }
    },
    {
        "clock": 415,
        "event": "transfer",
        "eventType": 3
    },
    {
        "clock": 435,
        "event": "incoming",
        "eventType": 2
    },
    {
        "clock": 450,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 8,
            "severity": 2,
            "zone": "Red",
            "zoneId": 1
        }
    },
    {
        "clock": 490,
        "event": "transfer",
        "eventType": 3
    },
    {
        "clock": 540,
        "event": "phase",
        "eventType": 4
    },
    {
        "clock": 600,
        "event": "transfer",
        "eventType": 3
    },
    {
        "clock": 810,
        "event": "phase",
        "eventType": 4
    }
]

var double2 = [
    {
        "clock": 15,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 1,
            "severity": 1,
            "zone": "Red",
            "zoneId": 1
        }
    },
    {
        "clock": 40,
        "event": "incoming",
        "eventType": 2
    },
    {
        "clock": 65,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 2,
            "severity": 2,
            "zone": "Blue",
            "zoneId": 3
        }
    },
    {
        "clock": 120,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 3,
            "severity": 1,
            "zone": "White",
            "zoneId": 2,
            "unconfirmed": true
        }
    },
    {
        "clock": 155,
        "event": "transfer",
        "eventType": 3
    },
    {
        "clock": 205,
        "event": "transfer",
        "eventType": 3
    },
    {
        "clock": 235,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 4,
            "severity": 2,
            "zone": "Internal",
            "zoneId": 4
        }
    },
    {
        "clock": 290,
        "event": "phase",
        "eventType": 4
    },
    {
        "clock": 305,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 5,
            "severity": 1,
            "zone": "Blue",
            "zoneId": 3
        }
    },
    {
        "clock": 330,
        "event": "transfer",
        "eventType": 3
    },
    {
        "clock": 345,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 6,
            "severity": 2,
            "zone": "Red",
            "zoneId": 1
        }
    },
    {
        "clock": 370,
        "event": "incoming",
        "eventType": 2
    },
    {
        "clock": 410,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 7,
            "severity": 1,
            "zone": "Internal",
            "zoneId": 4
        }
    },
    {
        "clock": 440,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 7,
            "severity": 1,
            "zone": "White",
            "zoneId": 2
        }
    },
    {
        "clock": 465,
        "event": "transfer",
        "eventType": 3
    },
    {
        "clock": 485,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 8,
            "severity": 1,
            "zone": "Blue",
            "zoneId": 3,
            "unconfirmed": true
        }
    },
    {
        "clock": 580,
        "event": "phase",
        "eventType": 4
    },
    {
        "clock": 650,
        "event": "transfer",
        "eventType": 3
    },
    {
        "clock": 755,
        "event": "transfer",
        "eventType": 3
    },
    {
        "clock": 810,
        "event": "phase",
        "eventType": 4
    }
]

var double3 = [
    {
        "clock": 15,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 2,
            "severity": 1,
            "zone": "Internal",
            "zoneId": 4
        }
    },
    {
        "clock": 40,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 2,
            "severity": 2,
            "zone": "Red",
            "zoneId": 1
        }
    },
    {
        "clock": 65,
        "event": "incoming",
        "eventType": 2
    },
    {
        "clock": 135,
        "event": "transfer",
        "eventType": 3
    },
    {
        "clock": 155,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 3,
            "severity": 2,
            "zone": "White",
            "zoneId": 2
        }
    },
    {
        "clock": 205,
        "event": "transfer",
        "eventType": 3
    },
    {
        "clock": 240,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 4,
            "severity": 1,
            "zone": "Red",
            "zoneId": 1
        }
    },
    {
        "clock": 295,
        "event": "phase",
        "eventType": 4
    },
    {
        "clock": 305,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 5,
            "severity": 2,
            "zone": "Internal",
            "zoneId": 4,
            "unconfirmed": true
        }
    },
    {
        "clock": 335,
        "event": "incoming",
        "eventType": 2
    },
    {
        "clock": 360,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 6,
            "severity": 2,
            "zone": "Blue",
            "zoneId": 3
        }
    },
    {
        "clock": 395,
        "event": "transfer",
        "eventType": 3
    },
    {
        "clock": 410,
        "event": "transfer",
        "eventType": 3
    },
    {
        "clock": 450,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 7,
            "severity": 1,
            "zone": "Internal",
            "zoneId": 4
        }
    },
    {
        "clock": 505,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 8,
            "severity": 1,
            "zone": "White",
            "zoneId": 2
        }
    },
    {
        "clock": 560,
        "event": "phase",
        "eventType": 4
    },
    {
        "clock": 570,
        "event": "transfer",
        "eventType": 3
    },
    {
        "clock": 660,
        "event": "transfer",
        "eventType": 3
    },
    {
        "clock": 780,
        "event": "phase",
        "eventType": 4
    }
]

var double4 = [
    {
        "clock": 10,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 1,
            "severity": 1,
            "zone": "Red",
            "zoneId": 1,
            "unconfirmed": true
        }
    },
    {
        "clock": 40,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 2,
            "severity": 1,
            "zone": "Internal",
            "zoneId": 4
        }
    },
    {
        "clock": 90,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 3,
            "severity": 2,
            "zone": "White",
            "zoneId": 2
        }
    },
    {
        "clock": 115,
        "event": "incoming",
        "eventType": 2
    },
    {
        "clock": 130,
        "event": "incoming",
        "eventType": 2
    },
    {
        "clock": 150,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 4,
            "severity": 1,
            "zone": "Blue",
            "zoneId": 3
        }
    },
    {
        "clock": 180,
        "event": "transfer",
        "eventType": 3
    },
    {
        "clock": 205,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 4,
            "severity": 1,
            "zone": "Internal",
            "zoneId": 4
        }
    },
    {
        "clock": 260,
        "event": "transfer",
        "eventType": 3
    },
    {
        "clock": 310,
        "event": "phase",
        "eventType": 4
    },
    {
        "clock": 325,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 5,
            "severity": 1,
            "zone": "Red",
            "zoneId": 1
        }
    },
    {
        "clock": 350,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 6,
            "severity": 2,
            "zone": "White",
            "zoneId": 2
        }
    },
    {
        "clock": 380,
        "event": "transfer",
        "eventType": 3
    },
    {
        "clock": 410,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 7,
            "severity": 1,
            "zone": "Blue",
            "zoneId": 3
        }
    },
    {
        "clock": 430,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 7,
            "severity": 1,
            "zone": "Internal",
            "zoneId": 4,
            "unconfirmed": true
        }
    },
    {
        "clock": 495,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 8,
            "severity": 1,
            "zone": "Red",
            "zoneId": 1
        }
    },
    {
        "clock": 520,
        "event": "transfer",
        "eventType": 3
    },
    {
        "clock": 600,
        "event": "phase",
        "eventType": 4
    },
    {
        "clock": 700,
        "event": "transfer",
        "eventType": 3
    },
    {
        "clock": 740,
        "event": "transfer",
        "eventType": 3
    },
    {
        "clock": 840,
        "event": "phase",
        "eventType": 4
    }
]

var double5 = [
    {
        "clock": 10,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 1,
            "severity": 1,
            "zone": "Blue",
            "zoneId": 3
        }
    },
    {
        "clock": 75,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 2,
            "severity": 2,
            "zone": "White",
            "zoneId": 2
        }
    },
    {
        "clock": 110,
        "event": "transfer",
        "eventType": 3
    },
    {
        "clock": 135,
        "event": "incoming",
        "eventType": 2
    },
    {
        "clock": 155,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 4,
            "severity": 2,
            "zone": "Internal",
            "zoneId": 4
        }
    },
    {
        "clock": 200,
        "event": "transfer",
        "eventType": 3
    },
    {
        "clock": 245,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 4,
            "severity": 1,
            "zone": "Blue",
            "zoneId": 3
        }
    },
    {
        "clock": 290,
        "event": "phase",
        "eventType": 4
    },
    {
        "clock": 300,
        "event": "incoming",
        "eventType": 2
    },
    {
        "clock": 310,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 5,
            "severity": 2,
            "zone": "Red",
            "zoneId": 1
        }
    },
    {
        "clock": 345,
        "event": "transfer",
        "eventType": 3
    },
    {
        "clock": 370,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 6,
            "severity": 1,
            "zone": "White",
            "zoneId": 2
        }
    },
    {
        "clock": 425,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 7,
            "severity": 2,
            "zone": "Internal",
            "zoneId": 4,
            "unconfirmed": true
        }
    },
    {
        "clock": 455,
        "event": "transfer",
        "eventType": 3
    },
    {
        "clock": 495,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 8,
            "severity": 1,
            "zone": "Red",
            "zoneId": 1
        }
    },
    {
        "clock": 550,
        "event": "phase",
        "eventType": 4
    },
    {
        "clock": 600,
        "event": "transfer",
        "eventType": 3
    },
    {
        "clock": 740,
        "event": "transfer",
        "eventType": 3
    },
    {
        "clock": 780,
        "event": "phase",
        "eventType": 4
    }
]

var double6 = [
    {
        "clock": 10,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 1,
            "severity": 1,
            "zone": "Blue",
            "zoneId": 3,
            "unconfirmed": true
        }
    },
    {
        "clock": 40,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 2,
            "severity": 1,
            "zone": "Red",
            "zoneId": 1
        }
    },
    {
        "clock": 100,
        "event": "incoming",
        "eventType": 2
    },
    {
        "clock": 120,
        "event": "transfer",
        "eventType": 3
    },
    {
        "clock": 145,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 3,
            "severity": 2,
            "zone": "Internal",
            "zoneId": 4
        }
    },
    {
        "clock": 170,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 3,
            "severity": 1,
            "zone": "Blue",
            "zoneId": 3
        }
    },
    {
        "clock": 215,
        "event": "transfer",
        "eventType": 3
    },
    {
        "clock": 245,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 4,
            "severity": 2,
            "zone": "Red",
            "zoneId": 1
        }
    },
    {
        "clock": 300,
        "event": "phase",
        "eventType": 4
    },
    {
        "clock": 325,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 5,
            "severity": 1,
            "zone": "White",
            "zoneId": 2,
            "unconfirmed": true
        }
    },
    {
        "clock": 385,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 6,
            "severity": 1,
            "zone": "Internal",
            "zoneId": 4
        }
    },
    {
        "clock": 415,
        "event": "incoming",
        "eventType": 2
    },
    {
        "clock": 425,
        "event": "transfer",
        "eventType": 3
    },
    {
        "clock": 440,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 6,
            "severity": 2,
            "zone": "White",
            "zoneId": 2
        }
    },
    {
        "clock": 480,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 7,
            "severity": 1,
            "zone": "Red",
            "zoneId": 1
        }
    },
    {
        "clock": 520,
        "event": "incoming",
        "eventType": 2
    },
    {
        "clock": 570,
        "event": "phase",
        "eventType": 4
    },
    {
        "clock": 580,
        "event": "transfer",
        "eventType": 3
    },
    {
        "clock": 715,
        "event": "transfer",
        "eventType": 3
    },
    {
        "clock": 810,
        "event": "phase",
        "eventType": 4
    }
]

var double7 = [
    {
        "clock": 10,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 1,
            "severity": 1,
            "zone": "Red",
            "zoneId": 1
        }
    },
    {
        "clock": 70,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 2,
            "severity": 1,
            "zone": "Internal",
            "zoneId": 4,
            "unconfirmed": true
        }
    },
    {
        "clock": 115,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 2,
            "severity": 1,
            "zone": "White",
            "zoneId": 2
        }
    },
    {
        "clock": 145,
        "event": "incoming",
        "eventType": 2
    },
    {
        "clock": 160,
        "event": "transfer",
        "eventType": 3
    },
    {
        "clock": 180,
        "event": "incoming",
        "eventType": 2
    },
    {
        "clock": 210,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 3,
            "severity": 2,
            "zone": "Blue",
            "zoneId": 3
        }
    },
    {
        "clock": 260,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 4,
            "severity": 1,
            "zone": "White",
            "zoneId": 2
        }
    },
    {
        "clock": 310,
        "event": "phase",
        "eventType": 4
    },
    {
        "clock": 315,
        "event": "transfer",
        "eventType": 3
    },
    {
        "clock": 330,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 5,
            "severity": 2,
            "zone": "Internal",
            "zoneId": 4
        }
    },
    {
        "clock": 360,
        "event": "transfer",
        "eventType": 3
    },
    {
        "clock": 385,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 6,
            "severity": 1,
            "zone": "Red",
            "zoneId": 1,
            "unconfirmed": true
        }
    },
    {
        "clock": 450,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 7,
            "severity": 1,
            "zone": "White",
            "zoneId": 2
        }
    },
    {
        "clock": 480,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 8,
            "severity": 1,
            "zone": "Internal",
            "zoneId": 4
        }
    },
    {
        "clock": 510,
        "event": "transfer",
        "eventType": 3
    },
    {
        "clock": 535,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 8,
            "severity": 1,
            "zone": "Blue",
            "zoneId": 2
        }
    },
    {
        "clock": 590,
        "event": "phase",
        "eventType": 4
    },
    {
        "clock": 605,
        "event": "transfer",
        "eventType": 3
    },
    {
        "clock": 795,
        "event": "transfer",
        "eventType": 3
    },
    {
        "clock": 840,
        "event": "phase",
        "eventType": 4
    }
]

var double8 = [
    {
        "clock": 10,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 2,
            "severity": 1,
            "zone": "Internal",
            "zoneId": 4
        }
    },
    {
        "clock": 35,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 2,
            "severity": 1,
            "zone": "Blue",
            "zoneId": 3
        }
    },
    {
        "clock": 95,
        "event": "incoming",
        "eventType": 2
    },
    {
        "clock": 105,
        "event": "transfer",
        "eventType": 3
    },
    {
        "clock": 140,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 3,
            "severity": 1,
            "zone": "White",
            "zoneId": 2
        }
    },
    {
        "clock": 170,
        "event": "incoming",
        "eventType": 2
    },
    {
        "clock": 180,
        "event": "transfer",
        "eventType": 3
    },
    {
        "clock": 200,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 4,
            "severity": 2,
            "zone": "Red",
            "zoneId": 1
        }
    },
    {
        "clock": 250,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 4,
            "severity": 1,
            "zone": "Internal",
            "zoneId": 4
        }
    },
    {
        "clock": 300,
        "event": "phase",
        "eventType": 4
    },
    {
        "clock": 315,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 5,
            "severity": 1,
            "zone": "Blue",
            "zoneId": 3
        }
    },
    {
        "clock": 350,
        "event": "incoming",
        "eventType": 2
    },
    {
        "clock": 375,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 6,
            "severity": 2,
            "zone": "White",
            "zoneId": 2,
            "unconfirmed": true
        }
    },
    {
        "clock": 410,
        "event": "transfer",
        "eventType": 3
    },
    {
        "clock": 445,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 7,
            "severity": 1,
            "zone": "Internal",
            "zoneId": 4
        }
    },
    {
        "clock": 485,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 8,
            "severity": 2,
            "zone": "Blue",
            "zoneId": 3
        }
    },
    {
        "clock": 515,
        "event": "transfer",
        "eventType": 3
    },
    {
        "clock": 570,
        "event": "phase",
        "eventType": 4
    },
    {
        "clock": 665,
        "event": "transfer",
        "eventType": 3
    },
    {
        "clock": 810,
        "event": "phase",
        "eventType": 4
    }
]

var double9 = [
    {
        "clock": 25,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 1,
            "severity": 1,
            "zone": "White",
            "zoneId": 2
        }
    },
    {
        "clock": 50,
        "event": "incoming",
        "eventType": 2
    },
    {
        "clock": 65,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 2,
            "severity": 2,
            "zone": "Red",
            "zoneId": 1
        }
    },
    {
        "clock": 90,
        "event": "transfer",
        "eventType": 3
    },
    {
        "clock": 115,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 2,
            "severity": 1,
            "zone": "Internal",
            "zoneId": 4
        }
    },
    {
        "clock": 155,
        "event": "transfer",
        "eventType": 3
    },
    {
        "clock": 200,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 3,
            "severity": 2,
            "zone": "Blue",
            "zoneId": 3,
            "unconfirmed": true
        }
    },
    {
        "clock": 245,
        "event": "transfer",
        "eventType": 3
    },
    {
        "clock": 290,
        "event": "phase",
        "eventType": 4
    },
    {
        "clock": 320,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 5,
            "severity": 1,
            "zone": "Internal",
            "zoneId": 4
        }
    },
    {
        "clock": 340,
        "event": "incoming",
        "eventType": 2
    },
    {
        "clock": 355,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 6,
            "severity": 2,
            "zone": "Red",
            "zoneId": 1
        }
    },
    {
        "clock": 385,
        "event": "transfer",
        "eventType": 3
    },
    {
        "clock": 410,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 7,
            "severity": 1,
            "zone": "White",
            "zoneId": 2
        }
    },
    {
        "clock": 465,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 8,
            "severity": 2,
            "zone": "Blue",
            "zoneId": 3
        }
    },
    {
        "clock": 500,
        "event": "incoming",
        "eventType": 2
    },
    {
        "clock": 550,
        "event": "phase",
        "eventType": 4
    },
    {
        "clock": 575,
        "event": "transfer",
        "eventType": 3
    },
    {
        "clock": 590,
        "event": "transfer",
        "eventType": 3
    },
    {
        "clock": 780,
        "event": "phase",
        "eventType": 4
    }
]

var double10 = [
    {
        "clock": 10,
        "event": "transfer",
        "eventType": 3
    },
    {
        "clock": 25,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 2,
            "severity": 1,
            "zone": "Red",
            "zoneId": 1
        }
    },
    {
        "clock": 75,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 3,
            "severity": 2,
            "zone": "Internal",
            "zoneId": 4
        }
    },
    {
        "clock": 115,
        "event": "transfer",
        "eventType": 3
    },
    {
        "clock": 155,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 3,
            "severity": 1,
            "zone": "White",
            "zoneId": 2
        }
    },
    {
        "clock": 180,
        "event": "transfer",
        "eventType": 3
    },
    {
        "clock": 205,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 4,
            "severity": 1,
            "zone": "Blue",
            "zoneId": 3
        }
    },
    {
        "clock": 300,
        "event": "phase",
        "eventType": 4
    },
    {
        "clock": 305,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 5,
            "severity": 2,
            "zone": "White",
            "zoneId": 2
        }
    },
    {
        "clock": 335,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 6,
            "severity": 2,
            "zone": "Red",
            "zoneId": 1,
            "unconfirmed": true
        }
    },
    {
        "clock": 375,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 7,
            "severity": 1,
            "zone": "Blue",
            "zoneId": 3
        }
    },
    {
        "clock": 400,
        "event": "transfer",
        "eventType": 3
    },
    {
        "clock": 455,
        "event": "transfer",
        "eventType": 3
    },
    {
        "clock": 480,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 8,
            "severity": 1,
            "zone": "Internal",
            "zoneId": 4
        }
    },
    {
        "clock": 520,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 8,
            "severity": 1,
            "zone": "White",
            "zoneId": 2
        }
    },
    {
        "clock": 570,
        "event": "phase",
        "eventType": 4
    },
    {
        "clock": 580,
        "event": "incoming",
        "eventType": 2
    },
    {
        "clock": 630,
        "event": "transfer",
        "eventType": 3
    },
    {
        "clock": 760,
        "event": "transfer",
        "eventType": 3
    },
    {
        "clock": 810,
        "event": "phase",
        "eventType": 4
    }
]

var double11 = [
    {
        "clock": 10,
        "event": "incoming",
        "eventType": 2
    },
    {
        "clock": 20,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 1,
            "severity": 1,
            "zone": "White",
            "zoneId": 2
        }
    },
    {
        "clock": 65,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 2,
            "severity": 1,
            "zone": "Blue",
            "zoneId": 3,
            "unconfirmed": true
        }
    },
    {
        "clock": 130,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 3,
            "severity": 1,
            "zone": "Internal",
            "zoneId": 4
        }
    },
    {
        "clock": 150,
        "event": "transfer",
        "eventType": 3
    },
    {
        "clock": 170,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 3,
            "severity": 2,
            "zone": "White",
            "zoneId": 2
        }
    },
    {
        "clock": 190,
        "event": "transfer",
        "eventType": 3
    },
    {
        "clock": 265,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 4,
            "severity": 1,
            "zone": "Red",
            "zoneId": 1
        }
    },
    {
        "clock": 310,
        "event": "phase",
        "eventType": 4
    },
    {
        "clock": 320,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 5,
            "severity": 2,
            "zone": "Blue",
            "zoneId": 3
        }
    },
    {
        "clock": 365,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 6,
            "severity": 1,
            "zone": "White",
            "zoneId": 2,
            "unconfirmed": true
        }
    },
    {
        "clock": 400,
        "event": "transfer",
        "eventType": 3
    },
    {
        "clock": 415,
        "event": "incoming",
        "eventType": 2
    },
    {
        "clock": 440,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 7,
            "severity": 1,
            "zone": "Internal",
            "zoneId": 4
        }
    },
    {
        "clock": 465,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 7,
            "severity": 1,
            "zone": "Red",
            "zoneId": 1
        }
    },
    {
        "clock": 535,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 8,
            "severity": 1,
            "zone": "White",
            "zoneId": 2
        }
    },
    {
        "clock": 555,
        "event": "incoming",
        "eventType": 2
    },
    {
        "clock": 590,
        "event": "phase",
        "eventType": 4
    },
    {
        "clock": 650,
        "event": "transfer",
        "eventType": 3
    },
    {
        "clock": 800,
        "event": "transfer",
        "eventType": 3
    },
    {
        "clock": 840,
        "event": "phase",
        "eventType": 4
    }
]

var double12 = [
    {
        "clock": 10,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 2,
            "severity": 1,
            "zone": "White",
            "zoneId": 2
        }
    },
    {
        "clock": 40,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 2,
            "severity": 1,
            "zone": "Internal",
            "zoneId": 4,
            "unconfirmed": true
        }
    },
    {
        "clock": 100,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 3,
            "severity": 1,
            "zone": "Blue",
            "zoneId": 3
        }
    },
    {
        "clock": 130,
        "event": "incoming",
        "eventType": 2
    },
    {
        "clock": 140,
        "event": "incoming",
        "eventType": 2
    },
    {
        "clock": 195,
        "event": "transfer",
        "eventType": 3
    },
    {
        "clock": 215,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 4,
            "severity": 2,
            "zone": "Internal",
            "zoneId": 4
        }
    },
    {
        "clock": 300,
        "event": "phase",
        "eventType": 4
    },
    {
        "clock": 305,
        "event": "transfer",
        "eventType": 3
    },
    {
        "clock": 320,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 5,
            "severity": 1,
            "zone": "Red",
            "zoneId": 1
        }
    },
    {
        "clock": 350,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 6,
            "severity": 2,
            "zone": "White",
            "zoneId": 2
        }
    },
    {
        "clock": 375,
        "event": "incoming",
        "eventType": 2
    },
    {
        "clock": 430,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 7,
            "severity": 1,
            "zone": "Red",
            "zoneId": 1,
            "unconfirmed": true
        }
    },
    {
        "clock": 460,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 7,
            "severity": 2,
            "zone": "Internal",
            "zoneId": 4
        }
    },
    {
        "clock": 485,
        "event": "transfer",
        "eventType": 3
    },
    {
        "clock": 525,
        "event": "threat",
        "eventType": 1,
        "threat": {
            "time": 8,
            "severity": 1,
            "zone": "Blue",
            "zoneId": 3
        }
    },
    {
        "clock": 570,
        "event": "phase",
        "eventType": 4
    },
    {
        "clock": 580,
        "event": "transfer",
        "eventType": 3
    },
    {
        "clock": 650,
        "event": "transfer",
        "eventType": 3
    },
    {
        "clock": 725,
        "event": "transfer",
        "eventType": 3
    },
    {
        "clock": 810,
        "event": "phase",
        "eventType": 4
    }
]
