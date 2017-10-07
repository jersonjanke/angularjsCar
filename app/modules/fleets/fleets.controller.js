import angular from 'angular';

function fleetsController(FleetsService, toastr, $scope, $filter) {
    var vm = this;        
    
    /**
     * Carga inicial
     */
    vm.model = FleetsService.getFleetsData();
    vm.fuel = FleetsService.getFuel();
    vm.marks = FleetsService.getCarMarks();    
    vm.cars = [];
    vm.isFiltered = false;

    /**
     * Métodos
     */
    vm.save = save;  
    vm.remove = remove;  
    vm.getSearch = getSearch;
    vm.checkAll = checkAll;
    vm.getCarsSeleted = getCarsSeleted;        

    /**
     * Salva dados no array da lista 
     * @param {*} novo 
     */
    function save(novo) {                        
        novo.marca = novo.marca.name;
        novo.modelo = novo.modelo.mark;
        vm.model.push(novo);                
        $('#myModal').on('hidden.bs.modal', function (e) {            
            vm.novo = {};            
        });
        toastr.success('Salvo com sucesso.');
    }
    
    function remove(model) {
        var newModel = [];
        angular.forEach(model, function(item) {
            if(!item.checked) {
                newModel.push(item);
            }
        });
        vm.model = newModel;
    }

    function getSearch(search) {        
        if(!vm.isFiltered) {
            vm.modelBkp = vm.model;
        }
        if(search) {
            vm.model = $filter('filter')(vm.model, function(item) {            
                if(angular.uppercase(item.marca) === angular.uppercase(search)) {
                    return item;
                }

                if(angular.uppercase(item.combustivel) === angular.uppercase(search)) {
                    return item;
                }
                vm.isFiltered = true;
            });
        }
        if(!search && vm.isFiltered) {
            vm.model = vm.modelBkp;
        }
    }

    function checkAll(model, all) {        
        angular.forEach(model, function(item) {            
            if(all) {
                item.checked = true;
            } else {
                item.checked = false;
            }
        });
    }

    /**
     * Filto de carro passando parâmetro da marca.
     * @param {*} mark 
     */
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