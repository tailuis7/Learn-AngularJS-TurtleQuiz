(function() {
	angular
		.module("turtleFacts")
		.controller("quizCtrl", QuizController);

		QuizController.$inject = ['quizMetrics', 'DataService']; //Another way to inject dependencies

		function QuizController(quizMetrics, DataService) {
			var vm = this;
			vm.quizMetrics = quizMetrics;
			vm.dataService = DataService;
			vm.questionAnswered = questionAnswered;
			vm.setActiveQuestion = setActiveQuestion;
			vm.activeQuestion = 0;

			var numQuestionsAnswered = 0;

			function setActiveQuestion() {
				// vm.activeQuestion++;
				var breakOut = false;
				var quizLength = DataService.quizQuestions.length - 1;

				while (!breakOut) {
					vm.activeQuestion = vm.activeQuestion < quizLength ? ++vm.activeQuestion : 0;
					if (DataService.quizQuestions[vm.activeQuestion].selected === null) {
						breakOut = true;
					}
				}
			}

			function questionAnswered() {
				var quizLength = DataService.quizQuestions.length;

				if (DataService.quizQuestions[vm.activeQuestion].selected !== null) {
					numQuestionsAnswered++;
					if (numQuestionsAnswered >= quizLength) {
						//Finalize quiz
					}
				}
				vm.setActiveQuestion();
			}
		}
})();
