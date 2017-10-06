import angular from 'angular';

function fleetsController(FleetsService, toastr) {
    var vm = this;        
    vm.model = FleetsService.getFleetsData();
    vm.fuel = FleetsService.getFuel();
    vm.marks = FleetsService.getCarMarks();
    vm.getCarsSeleted = getCarsSeleted;    
    vm.cars = [];

    vm.save = save;    

    function save(novo) {                        
        novo.marca = novo.marca.name;
        novo.modelo = novo.modelo.mark;
        vm.model.push(novo);                
        $('#myModal').on('hidden.bs.modal', function (e) {            
            vm.novo = {};            
        });
        toastr.success('Salvo com sucesso.');
    }

    function getCarsSeleted(mark) {        
        vm.cars = [];
        angular.forEach(FleetsService.getCar(), function(car) {
            if(mark === car.mark) {               
                vm.cars.push(car);
            }
        });
    }
}

export default fleetsController;