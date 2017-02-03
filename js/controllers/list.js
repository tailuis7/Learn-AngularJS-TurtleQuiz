(function() {
    //Call angular module
    angular
        .module("turtleFacts")
        //Create controller
        .controller("listCtrl", ListController);

    function ListController() {
    	this.dummyData = "Hello World";//Bind this keyword to its controller
    }
})();
