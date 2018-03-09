function Question(text,choices,correctAnswer){
    this.text = text;
    this.choices = choices;
    this.correctAnswer = correctAnswer;
    this.isCorrectAnswer = function(choice) {
        return  this.correctAnswer === choice;
    };
    this.fillQuestion = function(){
        var question = document.getElementById("questionText");
        question.innerHTML = this.text;
    };
    this.fillAnswers = function(){
        for (var i = 0; i < 4; i++){
            var answer = document.getElementById("answer" + i);
            answer.value = this.choices[i];
            var label = document.getElementById("label" + i);
            label.innerHTML = this.choices[i];
        }
    };
}