(function() {
	angular
		.module("turtleFacts")
		.controller("quizCtrl", QuizController);

		QuizController.$inject = ['quizMetrics', 'DataService']; //Another way to inject dependencies

		function QuizController(quizMetrics, DataService) {
			var vm = this;
			vm.quizMetrics = quizMetrics;
			vm.dataService = DataService;
		}
})();
