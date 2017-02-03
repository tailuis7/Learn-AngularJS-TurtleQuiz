(function() {
	angular
		.module("turtleFacts")
		.controller("quizCtrl", QuizController);

		QuizController.$inject = ['quizMetrics']; //Another way to inject dependencies

		function QuizController(quizMetrics) {
			var vm = this;
			vm.quizMetrics = quizMetrics;
		}
})();
