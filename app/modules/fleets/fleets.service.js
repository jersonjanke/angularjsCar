import angular from 'angular';

function FleetsService() {
    var services = {};

    services.getFleetsData = getFleetsData;
    services.getCarMarks = getCarMarks;
    services.getCar = getCar;
    services.getFuel = getFuel;

    function getFuel() {
        return ['Gasolina', 'Etanol', 'GNV', 'Diesel', 'Flex'];
    }

    function getCar() {
        return [
            {
                mark: 'Ford',
                name: 'Ka'
            },
            {
                mark: 'Ford',
                name: 'Fiesta Seda'
            },
            {
                mark: 'Ford',
                name: 'Focus'
            },
            {
                mark: 'Ford',
                name: 'Ka'
            },
            {
                mark: 'Ford',
                name: 'New Fiesta'
            },
            {
                mark: 'Ford',
                name: 'Fiesta'
            },
            {
                mark: 'Volkswagen',
                name: 'Gol'
            },
            {
                mark: 'Volkswagen',
                name: 'Fox/CrossFox'
            },
            {
                mark: 'Volkswagen',
                name: 'Voyage'
            },
            {
                mark: 'Volkswagen',
                name: 'Space Fox'
            },
            {
                mark: 'Volkswagen',
                name: 'Golf'
            },
            {
                mark: 'Volkswagen',
                name: 'Polo Sedan'
            },
            {
                mark: 'Volkswagen',
                name: 'Jetta'
            },
            {
                mark: 'Volkswagen',
                name: 'Polo'
            },
            {
                mark: 'Fiat',
                name: 'Uno'
            },
            {
                mark: 'Fiat',
                name: 'Palio'
            },
            {
                mark: 'Fiat',
                name: 'Siena'
            },
            {
                mark: 'Fiat',
                name: 'Punto'
            },
            {
                mark: 'Fiat',
                name: 'Idea'
            },
            {
                mark: 'Fiat',
                name: 'Doblò'
            },
            {
                mark: 'Fiat',
                name: 'Palio Weekend'
            },
            {
                mark: 'Fiat',
                name: 'Bravo'
            },
            {
                mark: 'Fiat',
                name: '500'
            },
            {
                mark: 'GM',
                name: 'Celta'
            },
            {
                mark: 'GM',
                name: 'Corsa Sedan'
            },
            {
                mark: 'GM',
                name: 'Onix'
            },
            {
                mark: 'GM',
                name: 'Cobalt'
            },
            {
                mark: 'GM',
                name: 'Spin'
            },
            {
                mark: 'GM',
                name: 'Cruze'
            },
            {
                mark: 'GM',
                name: 'Agile'
            },            
            {
                mark: 'Hyundai',
                name: 'HB20'
            },
            {
                mark: 'Hyundai',
                name: 'i30'
            },
            {
                mark: 'Renault',
                name: 'Sandero'
            },
            {
                mark: 'Renault',
                name: 'Logan'
            },
            {
                mark: 'Renault',
                name: 'Fluence'
            },
            {
                mark: 'Toyota',
                name: 'Corolla'
            },
            {
                mark: 'Toyota',
                name: 'Etios HB'
            },
            {
                mark: 'Toyota',
                name: 'Etios Seda'
            },
            {
                mark: 'Honda',
                name: 'Civic'
            },
            {
                mark: 'Honda',
                name: 'Fit'
            },
            {
                mark: 'Honda',
                name: 'City'
            },
            {
                mark: 'Citroën',
                name: 'C3'
            },
            {
                mark: 'Citroën',
                name: 'C3 Picass'
            },
            {
                mark: 'Nissan',
                name: 'March'
            },
            {
                mark: 'Nissan',
                name: 'Versa'
            },
            {
                mark: 'Nissan',
                name: 'Livina'
            },
            {
                mark: 'Peugeot',
                name: '207'
            },
            {
                mark: 'Peugeot',
                name: '308'
            },
        ];
    }

    function getCarMarks() {
        return [            
            {name: 'Volkswagen'},
            {name: 'Ford'},
            {name: 'Nissan'},
            {name: 'Hyundai'},
            {name: 'Honda'},
            {name: 'GM'},            
            {name: 'Renault'},        
            {name: 'Peugeot'},            
            {name: 'Fiat'},
            {name: 'Citroën'}         
        ]
    }

    function getFleetsData() {
        return [  
            {  
               "combustivel":"Flex",
               "imagem":null,
               "marca":"Volkswagem",
               "modelo":"Gol",
               "placa":"FFF-5498",
               "valor":"20000"
            },
            {  
               "combustivel":"Gasolina",
               "imagem":null,
               "marca":"Volkswagem",
               "modelo":"Fox",
               "placa":"FOX-4125",
               "valor":"20000"
            },
            {  
               "combustivel":"Alcool",
               "imagem":"http://carros.ig.com.br/fotos/2010/290_193/Fusca2_290_193.jpg",
               "marca":"Volkswagen",
               "modelo":"Fusca",
               "placa":"PAI-4121",
               "valor":"20000"
            }
         ];
    }

    return services;
}

export default FleetsService;