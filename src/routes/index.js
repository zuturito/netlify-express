const { Router } = require('express');
const router = Router();
 
//Raiz de la API
router.get('/', (req, res) => {    
    res.json(
        {
            "Estados": [
                {
                    "id": 0,
                    "nombre": "Aguascalientes",
                    "biodiversidad": {
                        "2015": 0,
                        "2016": 2,
                        "2017": 3,
                        "2018": 1,
                        "2019": 0,
                        "2020": 0
                    },
                    "delitos contra el medio ambiente": {
                        "2015": 0,
                        "2016": 0,
                        "2017": 0,
                        "2018": 0,
                        "2019": 1,
                        "2020": 0
                    }
                },
                {
                    "id": 1,
                    "nombre": "Área central del país",
                    "biodiversidad": {
                        "2015": 0,
                        "2016": 28,
                        "2017": 41,
                        "2018": 6,
                        "2019": 4,
                        "2020": 0
                    },
                    "delitos contra el medio ambiente": {
                        "2015": 0,
                        "2016": 1,
                        "2017": 0,
                        "2018": 44,
                        "2019": 47,
                        "2020": 39
                    }
                },
                {
                    "id": 2,
                    "nombre": "Baja California Norte",
                    "biodiversidad": {
                        "2015": 0,
                        "2016": 14,
                        "2017": 38,
                        "2018": 3,
                        "2019": 4,
                        "2020": 2
                    },
                    "delitos contra el medio ambiente": {
                        "2015": 0,
                        "2016": 0,
                        "2017": 0,
                        "2018": 36,
                        "2019": 25,
                        "2020": 26
                    }
                },
                {
                    "id": 3,
                    "nombre": "Baja California Sur",
                    "biodiversidad": {
                        "2015": 4,
                        "2016": 14,
                        "2017": 7,
                        "2018": 2,
                        "2019": 4,
                        "2020": 2
                    },
                    "delitos contra el medio ambiente": {
                        "2015": 0,
                        "2016": 0,
                        "2017": 2,
                        "2018": 10,
                        "2019": 30,
                        "2020": 31
                    }
                },
                {
                    "id": 4,
                    "nombre": "Campeche",
                    "biodiversidad": {
                        "2015": 0,
                        "2016": 8,
                        "2017": 17,
                        "2018": 8,
                        "2019": 2,
                        "2020": 0
                    },
                    "delitos contra el medio ambiente": {
                        "2015": 0,
                        "2016": 0,
                        "2017": 0,
                        "2018": 20,
                        "2019": 27,
                        "2020": 5
                    }
                },
                {
                    "id": 5,
                    "nombre": "Chiapas",
                    "biodiversidad": {
                        "2015": 0,
                        "2016": 7,
                        "2017": 15,
                        "2018": 2,
                        "2019": 1,
                        "2020": 0
                    },
                    "delitos contra el medio ambiente": {
                        "2015": 0,
                        "2016": 2,
                        "2017": 1,
                        "2018": 21,
                        "2019": 30,
                        "2020": 17
                    }
                },
                {
                    "id": 6,
                    "nombre": "Chihuahua",
                    "biodiversidad": {
                        "2015": 0,
                        "2016": 0,
                        "2017": 9,
                        "2018": 1,
                        "2019": 0,
                        "2020": 0
                    },
                    "delitos contra el medio ambiente": {
                        "2015": 0,
                        "2016": 0,
                        "2017": 0,
                        "2018": 5,
                        "2019": 2,
                        "2020": 10
                    }
                },
        ]}
    );
})
 
module.exports = router;