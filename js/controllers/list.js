(function() {
    //Call angular module
    angular
        .module("turtleFacts")
        //Create controller
        .controller("listCtrl", ListController);

    ListController.$inject = ['quizMetrics', 'DataService']; //Another way to inject dependencies

    function ListController(quizMetrics, DataService) {
        this.data = DataService.turtlesData; //Bind this keyword to its controller
        this.activeTurtle = {}; //Khởi tạo activeTurtle rỗng
        this.changeActiveTurtle = changeActiveTurtle; //Fired khi click
        this.search = "";
        // this.quizActive = false; //Khởi tạo quizActive cho click show/hide
        this.activateQuiz = activateQuiz; //Fired khi click
        this.quizMetrics = quizMetrics;

        function changeActiveTurtle(index) {
            this.activeTurtle = index; //Set turtle được click tương ứng vào activeTurtle
        }

        function activateQuiz() {
            // this.quizActive = true;
            // this.quizMetrics.quizActive = true;
            quizMetrics.changeState(true); //Không dùng this keyword nữa vì vẫn nằm trong function ListController(quizMetrics), có thể nó sẽ tự hiểu quizMetrics được gán ở đây chính là quizMetrics nằm trong function ListController
        }
    }
})();
