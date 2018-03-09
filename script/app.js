var questions = [
    new Question("The sum of any two odd integers is odd?",["True","False","I don't know","It's possible"],"False"),
    new Question("n Roman Numerals, what does XL equate to?",["90","15","40","5"],"40"),
    new Question("What is the symbol for imaginary numbers?",["e","i","t","m"],"i")
];

var quiz = new Quiz(questions);
quiz.fill();



