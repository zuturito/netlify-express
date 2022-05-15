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
                    "delitos_medio_ambiente": {
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
                    "delitos_medio_ambiente": {
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
                    "delitos_medio_ambiente": {
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
                    "delitos_medio_ambiente": {
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
                    "delitos_medio_ambiente": {
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
                    "delitos_medio_ambiente": {
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
                    "delitos_medio_ambiente": {
                        "2015": 0,
                        "2016": 0,
                        "2017": 0,
                        "2018": 5,
                        "2019": 2,
                        "2020": 10
                    }
                },
                {
                    "id": 7,
                    "nombre": "Ciudad de México",
                    "biodiversidad": {
                        "2015": 0,
                        "2016": 0,
                        "2017": 8,
                        "2018": 1,
                        "2019": 0,
                        "2020": 0
                    },
                    "delitos_medio_ambiente": {
                        "2015": 0,
                        "2016": 0,
                        "2017": 0,
                        "2018": 7,
                        "2019": 7,
                        "2020": 4
                    }
                },
                {
                    "id": 8,
                    "nombre": "Coahuila",
                    "biodiversidad": {
                        "2015": 0,
                        "2016": 1,
                        "2017": 1,
                        "2018": 0,
                        "2019": 0,
                        "2020": 0
                    },
                    "delitos_medio_ambiente": {
                        "2015": 0,
                        "2016": 2,
                        "2017": 0,
                        "2018": 1,
                        "2019": 3,
                        "2020": 1
                    }
                },
                {
                    "id": 9,
                    "nombre": "Colima",
                    "biodiversidad": {
                        "2015": 0,
                        "2016": 2,
                        "2017": 11,
                        "2018": 1,
                        "2019": 0,
                        "2020": 0
                    },
                    "delitos_medio_ambiente": {
                        "2015": 0,
                        "2016": 3,
                        "2017": 0,
                        "2018": 11,
                        "2019": 25,
                        "2020": 7
                    }
                },
                {
                    "id": 10,
                    "nombre": "Durango",
                    "biodiversidad": {
                        "2015": 1,
                        "2016": 0,
                        "2017": 1,
                        "2018": 0,
                        "2019": 0,
                        "2020": 0
                    },
                    "delitos_medio_ambiente": {
                        "2015": 1,
                        "2016": 0,
                        "2017": 0,
                        "2018": 1,
                        "2019": 3,
                        "2020": 3
                    }
                },
                {
                    "id": 11,
                    "nombre": "Guanajuato",
                    "biodiversidad": {
                        "2015": 0,
                        "2016": 9,
                        "2017": 3,
                        "2018": 1,
                        "2019": 0,
                        "2020": 0
                    },
                    "delitos_medio_ambiente": {
                        "2015": 0,
                        "2016": 0,
                        "2017": 2,
                        "2018": 10,
                        "2019": 9,
                        "2020": 5
                    }
                },
                {
                    "id": 12,
                    "nombre": "Guerrero",
                    "biodiversidad": {
                        "2015": 9,
                        "2016": 11,
                        "2017": 15,
                        "2018": 2,
                        "2019": 0,
                        "2020": 0
                    },
                    "delitos_medio_ambiente": {
                        "2015": 0,
                        "2016": 0,
                        "2017": 0,
                        "2018": 5,
                        "2019": 11,
                        "2020": 6
                    }
                },
                {
                    "id": 13,
                    "nombre": "Hidalgo",
                    "biodiversidad": {
                        "2015": 0,
                        "2016": 4,
                        "2017": 4,
                        "2018": 0,
                        "2019": 0,
                        "2020": 0
                    },
                    "delitos_medio_ambiente": {
                        "2015": 0,
                        "2016": 0,
                        "2017": 0,
                        "2018": 4,
                        "2019": 3,
                        "2020": 5
                    }
                },
                {
                    "id": 14,
                    "nombre": "Jalisco",
                    "biodiversidad": {
                        "2015": 0,
                        "2016": 2,
                        "2017": 17,
                        "2018": 1,
                        "2019": 0,
                        "2020": 0
                    },
                    "delitos_medio_ambiente": {
                        "2015": 0,
                        "2016": 0,
                        "2017": 0,
                        "2018": 9,
                        "2019": 16,
                        "2020": 13
                    }
                },
                {
                    "id": 15,
                    "nombre": "Estado de México",
                    "biodiversidad": {
                        "2015": 0,
                        "2016": 7,
                        "2017": 4,
                        "2018": 0,
                        "2019": 0,
                        "2020": 0
                    },
                    "delitos_medio_ambiente": {
                        "2015": 0,
                        "2016": 0,
                        "2017": 0,
                        "2018": 8,
                        "2019": 4,
                        "2020": 6
                    }
                },
                {
                    "id": 16,
                    "nombre": "Michoacán",
                    "biodiversidad": {
                        "2015": 0,
                        "2016": 2,
                        "2017": 6,
                        "2018": 1,
                        "2019": 0,
                        "2020": 0
                    },
                    "delitos_medio_ambiente": {
                        "2015": 0,
                        "2016": 0,
                        "2017": 0,
                        "2018": 8,
                        "2019": 4,
                        "2020": 6
                    }
                },
                {
                    "id": 17,
                    "nombre": "Morelos",
                    "biodiversidad": {
                        "2015": 0,
                        "2016": 1,
                        "2017": 2,
                        "2018": 0,
                        "2019": 0,
                        "2020": 0
                    },
                    "delitos_medio_ambiente": {
                        "2015": 0,
                        "2016": 0,
                        "2017": 0,
                        "2018": 3,
                        "2019": 2,
                        "2020": 2
                    }
                },
                {
                    "id": 18,
                    "nombre": "Nayarit",
                    "biodiversidad": {
                        "2015": 0,
                        "2016": 7,
                        "2017": 8,
                        "2018": 3,
                        "2019": 0,
                        "2020": 0
                    },
                    "delitos_medio_ambiente": {
                        "2015": 0,
                        "2016": 0,
                        "2017": 0,
                        "2018": 15,
                        "2019": 12,
                        "2020": 3
                    }
                },
                {
                    "id": 19,
                    "nombre": "Nuevo León",
                    "biodiversidad": {
                        "2015": 0,
                        "2016": 4,
                        "2017": 2,
                        "2018": 0,
                        "2019": 0,
                        "2020": 0
                    },
                    "delitos_medio_ambiente": {
                        "2015": 0,
                        "2016": 0,
                        "2017": 0,
                        "2018": 6,
                        "2019": 7,
                        "2020": 4
                    }
                },
                {
                    "id": 20,
                    "nombre": "Oaxaca",
                    "biodiversidad": {
                        "2015": 1,
                        "2016": 6,
                        "2017": 22,
                        "2018": 2,
                        "2019": 8,
                        "2020": 0
                    },
                    "delitos_medio_ambiente": {
                        "2015": 0,
                        "2016": 1,
                        "2017": 6,
                        "2018": 58,
                        "2019": 36,
                        "2020": 67
                    }
                },
                {
                    "id": 21,
                    "nombre": "Puebla",
                    "biodiversidad": {
                        "2015": 2,
                        "2016": 1,
                        "2017": 3,
                        "2018": 0,
                        "2019": 0,
                        "2020": 0
                    },
                    "delitos_medio_ambiente": {
                        "2015": 0,
                        "2016": 0,
                        "2017": 1,
                        "2018": 4,
                        "2019": 3,
                        "2020": 7
                    }
                },
                {
                    "id": 22,
                    "nombre": "Querétaro",
                    "biodiversidad": {
                        "2015": 1,
                        "2016": 0,
                        "2017": 3,
                        "2018": 0,
                        "2019": 0,
                        "2020": 0
                    },
                    "delitos_medio_ambiente": {
                        "2015": 0,
                        "2016": 0,
                        "2017": 0,
                        "2018": 6,
                        "2019": 4,
                        "2020": 2
                    }
                },
                {
                    "id": 23,
                    "nombre": "Quintana Roo",
                    "biodiversidad": {
                        "2015": 0,
                        "2016": 21,
                        "2017": 23,
                        "2018": 0,
                        "2019": 0,
                        "2020": 1
                    },
                    "delitos_medio_ambiente": {
                        "2015": 0,
                        "2016": 1,
                        "2017": 2,
                        "2018": 27,
                        "2019": 24,
                        "2020": 21
                    }
                },
                {
                    "id": 24,
                    "nombre": "San Luis Potosí",
                    "biodiversidad": {
                        "2015": 0,
                        "2016": 6,
                        "2017": 2,
                        "2018": 0,
                        "2019": 3,
                        "2020": 0
                    },
                    "delitos_medio_ambiente": {
                        "2015": 0,
                        "2016": 1,
                        "2017": 0,
                        "2018": 2,
                        "2019": 6,
                        "2020": 18
                    }
                },
                {
                    "id": 25,
                    "nombre": "Sinaloa",
                    "biodiversidad": {
                        "2015": 0,
                        "2016": 5,
                        "2017": 10,
                        "2018": 0,
                        "2019": 0,
                        "2020": 4
                    },
                    "delitos_medio_ambiente": {
                        "2015": 0,
                        "2016": 0,
                        "2017": 0,
                        "2018": 3,
                        "2019": 5,
                        "2020": 14
                    }
                },
                {
                    "id": 26,
                    "nombre": "Sonora",
                    "biodiversidad": {
                        "2015": 0,
                        "2016": 3,
                        "2017": 13,
                        "2018": 5,
                        "2019": 0,
                        "2020": 4
                    },
                    "delitos_medio_ambiente": {
                        "2015": 0,
                        "2016": 0,
                        "2017": 0,
                        "2018": 18,
                        "2019": 12,
                        "2020": 4
                    }
                },
                {
                    "id": 27,
                    "nombre": "Tabasco",
                    "biodiversidad": {
                        "2015": 0,
                        "2016": 9,
                        "2017": 4,
                        "2018": 0,
                        "2019": 0,
                        "2020": 0
                    },
                    "delitos_medio_ambiente": {
                        "2015": 0,
                        "2016": 1,
                        "2017": 0,
                        "2018": 4,
                        "2019": 7,
                        "2020": 3
                    }
                },
                {
                    "id": 28,
                    "nombre": "Tamaulipas",
                    "biodiversidad": {
                        "2015": 0,
                        "2016": 1,
                        "2017": 1,
                        "2018": 0,
                        "2019": 0,
                        "2020": 0
                    },
                    "delitos_medio_ambiente": {
                        "2015": 0,
                        "2016": 0,
                        "2017": 0,
                        "2018": 1,
                        "2019": 2,
                        "2020": 7
                    }
                },
                {
                    "id": 29,
                    "nombre": "Tlaxcala",
                    "biodiversidad": {
                        "2015": 0,
                        "2016": 0,
                        "2017": 1,
                        "2018": 0,
                        "2019": 0,
                        "2020": 0
                    },
                    "delitos_medio_ambiente": {
                        "2015": 0,
                        "2016": 0,
                        "2017": 0,
                        "2018": 1,
                        "2019": 1,
                        "2020": 3
                    }
                },
                {
                    "id": 30,
                    "nombre": "Yucatán",
                    "biodiversidad": {
                        "2015": 28,
                        "2016": 50,
                        "2017": 40,
                        "2018": 7,
                        "2019": 4,
                        "2020": 1
                    },
                    "delitos_medio_ambiente": {
                        "2015": 1,
                        "2016": 0,
                        "2017": 0,
                        "2018": 39,
                        "2019": 25,
                        "2020": 23
                    }
                },
                {
                    "id": 31,
                    "nombre": "Zacatecas",
                    "biodiversidad": {
                        "2015": 2,
                        "2016": 1,
                        "2017": 1,
                        "2018": 1,
                        "2019": 0,
                        "2020": 0
                    },
                    "delitos_medio_ambiente": {
                        "2015": 0,
                        "2016": 0,
                        "2017": 0,
                        "2018": 1,
                        "2019": 1,
                        "2020": 0
                    }
                }],
            "Especies_recuperadas": [
                    {
                        "id": 0,
                        "nombre_especie": "almeja",
                        "anios": {
                            "2015": 453,
                            "2016": 20,
                            "2017": 0,
                            "2018": 1769.2,
                            "2019": 2455,
                            "2020": 620
                        }
                    },
                    {
                        "id": 1,
                        "nombre_especie": "camarón",
                        "anios": {
                            "2015": 881.66,
                            "2016": 2184,
                            "2017": 919.78,
                            "2018": 578.9,
                            "2019": 0,
                            "2020": 688
                        }
                    },
                    {
                        "id": 2,
                        "nombre_especie": "pulpo",
                        "anios": {
                            "2015": 79,
                            "2016": 674,
                            "2017": 570,
                            "2018": 70,
                            "2019": 642,
                            "2020": 2550
                        }
                    },
                    {
                        "id": 3,
                        "nombre_especie": "curvina",
                        "anios": {
                            "2015": 4.46,
                            "2016": 1210,
                            "2017": 2355.4,
                            "2018": 0,
                            "2019": 0,
                            "2020": 0
                        }
                    },
                    {
                        "id": 4,
                        "nombre_especie": "totoaba",
                        "anios": {
                            "2015": 45,
                            "2016": 80,
                            "2017": 75.71,
                            "2018": 929.4,
                            "2019": 1175,
                            "2020": 0
                        }
                    },
                    {
                        "id": 5,
                        "nombre_especie": "caracol",
                        "anios": {
                            "2015": 15,
                            "2016": 934.66,
                            "2017": 454.5,
                            "2018": 0,
                            "2019": 250,
                            "2020": 100
                        }
                    },
                    {
                        "id": 6,
                        "nombre_especie": "cangrejo",
                        "anios": {
                            "2015": 0,
                            "2016": 1500,
                            "2017": 4,
                            "2018": 0,
                            "2019": 0,
                            "2020": 0
                        }
                    },
                    {
                        "id": 7,
                        "nombre_especie": "escama",
                        "anios": {
                            "2015": 0,
                            "2016": 80,
                            "2017": 53,
                            "2018": 70,
                            "2019": 0,
                            "2020": 1300
                        }
                    },
                    {
                        "id": 8,
                        "nombre_especie": "pescado",
                        "anios": {
                            "2015": 925,
                            "2016": 21,
                            "2017": 0,
                            "2018": 450,
                            "2019": 0,
                            "2020": 0
                        }
                    },
                    {
                        "id": 9,
                        "nombre_especie": "langosta",
                        "anios": {
                            "2015": 95.8,
                            "2016": 774,
                            "2017": 0.72,
                            "2018": 0.72,
                            "2019": 306,
                            "2020": 0
                        }
                    },
                    {
                        "id": 10,
                        "nombre_especie": "lisa",
                        "anios": {
                            "2015": 0,
                            "2016": 915,
                            "2017": 5,
                            "2018": 0,
                            "2019": 0,
                            "2020": 0
                        }
                    },
                    {
                        "id": 11,
                        "nombre_especie": "mantarraya",
                        "anios": {
                            "2015": 10,
                            "2016": 0,
                            "2017": 343.4,
                            "2018": 0,
                            "2019": 0,
                            "2020": 51
                        }
                    },
                    {
                        "id": 12,
                        "nombre_especie": "ostión",
                        "anios": {
                            "2015": 200,
                            "2016": 0,
                            "2017": 0,
                            "2018": 155.5,
                            "2019": 0,
                            "2020": 0
                        }
                    },
                    {
                        "id": 13,
                        "nombre_especie": "jaiba",
                        "anios": {
                            "2015": 200,
                            "2016": 120,
                            "2017": 0,
                            "2018": 0,
                            "2019": 0,
                            "2020": 0
                        }
                    },
                    {
                        "id": 14,
                        "nombre_especie": "cazón",
                        "anios": {
                            "2015": 0,
                            "2016": 250,
                            "2017": 32.38,
                            "2018": 0,
                            "2019": 0,
                            "2020": 0
                        }
                    },
                    {
                        "id": 15,
                        "nombre_especie": "pargo",
                        "anios": {
                            "2015": 0,
                            "2016": 0,
                            "2017": 53,
                            "2018": 149.23,
                            "2019": 0,
                            "2020": 0
                        }
                    },
                    {
                        "id": 16,
                        "nombre_especie": "pulpa caracol",
                        "anios": {
                            "2015": 20,
                            "2016": 75,
                            "2017": 7,
                            "2018": 45,
                            "2019": 0,
                            "2020": 0
                        }
                    },
                    {
                        "id": 17,
                        "nombre_especie": "callo de hacha",
                        "anios": {
                            "2015": 90.8,
                            "2016": 0,
                            "2017": 0,
                            "2018": 0,
                            "2019": 0,
                            "2020": 0
                        }
                    },
                    {
                        "id": 18,
                        "nombre_especie": "abulón",
                        "anios": {
                            "2015": 13,
                            "2016": 0,
                            "2017": 48,
                            "2018": 0,
                            "2019": 0,
                            "2020": 0
                        }
                    },
                    {
                        "id": 19,
                        "nombre_especie": "tiburón",
                        "anios": {
                            "2015": 0,
                            "2016": 0,
                            "2017": 20,
                            "2018": 0,
                            "2019": 12,
                            "2020": 6
                        }
                    },
                    {
                        "id": 20,
                        "nombre_especie": "buche de trucha",
                        "anios": {
                            "2015": 0,
                            "2016": 36,
                            "2017": 0,
                            "2018": 0,
                            "2019": 0,
                            "2020": 0
                        }
                    },
                    {
                        "id": 21,
                        "nombre_especie": "atún",
                        "anios": {
                            "2015": 0,
                            "2016": 0,
                            "2017": 0,
                            "2018": 4.7,
                            "2019": 30,
                            "2020": 0
                        }
                    },
                    {
                        "id": 22,
                        "nombre_especie": "pepino de mar",
                        "anios": {
                            "2015": 7,
                            "2016": 8,
                            "2017": 1,
                            "2018": 7,
                            "2019": 0,
                            "2020": 0
                        }
                    },
                    {
                        "id": 23,
                        "nombre_especie": "chano",
                        "anios": {
                            "2015": 0,
                            "2016": 20.4,
                            "2017": 1.2,
                            "2018": 0,
                            "2019": 0,
                            "2020": 0
                        }
                    },
                    {
                        "id": 24,
                        "nombre_especie": "marlin",
                        "anios": {
                            "2015": 0,
                            "2016": 0,
                            "2017": 17.62,
                            "2018": 0,
                            "2019": 0,
                            "2020": 0
                        }
                    },
                    {
                        "id": 25,
                        "nombre_especie": "mojarra",
                        "anios": {
                            "2015": 0,
                            "2016": 15,
                            "2017": 0,
                            "2018": 0,
                            "2019": 0,
                            "2020": 0
                        }
                    },
                    {
                        "id": 26,
                        "nombre_especie": "hueva de trucha",
                        "anios": {
                            "2015": 0,
                            "2016": 15,
                            "2017": 0,
                            "2018": 0,
                            "2019": 0,
                            "2020": 0
                        }
                    },
                    {
                        "id": 27,
                        "nombre_especie": "caracol blanco",
                        "anios": {
                            "2015": 0,
                            "2016": 0,
                            "2017": 10,
                            "2018": 0,
                            "2019": 0,
                            "2020": 0
                        }
                    },
                    {
                        "id": 28,
                        "nombre_especie": "purina",
                        "anios": {
                            "2015": 4,
                            "2016": 0,
                            "2017": 5,
                            "2018": 0,
                            "2019": 0,
                            "2020": 0
                        }
                    },
                    {
                        "id": 29,
                        "nombre_especie": "lobo marino",
                        "anios": {
                            "2015": 0,
                            "2016": 0,
                            "2017": 0,
                            "2018": 0,
                            "2019": 0,
                            "2020": 1
                        }
                    },
                    {
                        "id": 30,
                        "nombre_especie": "ballena",
                        "anios": {
                            "2015": 0,
                            "2016": 0,
                            "2017": 1,
                            "2018": 0,
                            "2019": 0,
                            "2020": 0
                        }
                    },
                    {
                        "id": 31,
                        "nombre_especie": "vaquita marina",
                        "anios": {
                            "2015": 0,
                            "2016": 0,
                            "2017": 1,
                            "2018": 0,
                            "2019": 0,
                            "2020": 0
                        }
                    },
                    {
                        "id": 32,
                        "nombre_especie": "pescado dorgado",
                        "anios": {
                            "2015": 0,
                            "2016": 0,
                            "2017": 0,
                            "2018": 0,
                            "2019": 0,
                            "2020": 0
                        }
                    },
                    {
                        "id": 33,
                        "nombre_especie": "robalo",
                        "anios": {
                            "2015": 0,
                            "2016": 0,
                            "2017": 0,
                            "2018": 0,
                            "2019": 0,
                            "2020": 0
                        }
                    }
            ]}, 
    );
})
 
module.exports = router;