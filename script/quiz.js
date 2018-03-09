function Quiz(questions){
    this.questions = questions;
    this.score = 0;
    this.currentQuestionIndex = 0;
    var _self=this;
    this.fill = function () {
        if (this.isEnded()) {
            this.showScore();
            this.resetQuiz();
        } else {
            this.getCurrentQuestion().fillQuestion();
            this.getCurrentQuestion().fillAnswers();
            this.fillNumberOfCurrentQuestions();
            this.listen();
        }
    };

    this.isEnded = function() {
        return this.questions.length === this.currentQuestionIndex
    };
    this.getCurrentQuestion = function() {
        return this.questions[this.currentQuestionIndex];
    };
    this.fillNumberOfCurrentQuestions = function() {
        var title = document.getElementById("headerText");
        title.innerHTML = "Question " + (this.currentQuestionIndex + 1) + " of " + this.questions.length;
    };
    this.listen = function () {
        var button = document.getElementById("button");
        button.onclick = function () {
            if (_self.getCurrentQuestion().isCorrectAnswer(getUserAnswer())) {
                _self.score += 1;
            }
            _self.currentQuestionIndex += 1;
            _self.fill();
            resetRadios();
        };

    };
    function getUserAnswer() {
        var radios = document.getElementsByName("quiz");
        for (var i = 0; i < radios.length; i++) {
            if (radios[i].checked == true) {
                var checkedRadio = document.getElementById("answer" + i);
                var answer = checkedRadio.value;

                return answer;
            }
        }
    }
    function resetRadios() {
        var radios = document.getElementsByName("quiz");
        for (var i = 0; i < radios.length; i++) {
            var radio = document.getElementById("answer" + i);
            radio.checked = false;
        }
    }
    this.showScore = function() {
        var title = document.getElementById("headerText");
        title.innerHTML = "Your score " +  (typeof(this.score) === "number" ? this.score : 0) + " of " + this.questions.length;
        var header = document.getElementById("header");
        header.style.cssText = "border-bottom: none;";
        var button = document.getElementById("button");
        button.value = "Reset";
        var questionText = document.getElementById("questionText");
        questionText.hidden = true;
        var choices = document.getElementById("choices");
        choices.hidden = true;

    }
    this.resetQuiz = function() {
        var button = document.getElementById("button");
        button.onclick = function () {
            window.location.reload(true);
        };
    }
    this.startTimer = (function() {
        var timer = 89, minutes, seconds;
        setInterval(function() {
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);

            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            document.getElementById("time").textContent = minutes + ":" + seconds;
            if (timer <= 60) {

                var clock = document.getElementById("time");
                clock.className = "warning";
            }
            if (--timer < 0) {
                timer = 0;
                _self.showScore();
            }
        }, 1000);
    })();

}
