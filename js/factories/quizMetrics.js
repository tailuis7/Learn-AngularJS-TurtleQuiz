(function() {
	angular
		.module("turtleFacts")
		//Create factory
		.factory("quizMetrics", QuizMetrics);

		function QuizMetrics() {
			var quizObj = {
				quizActive: false,
				
			};
		}
})();
