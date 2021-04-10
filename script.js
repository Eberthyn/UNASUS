$("input[type=radio]").click(function() {
    
    var $answer = $("input[type=radio]:checked"); 
    var answer = $answer.val();
    console.log(answer);
    if (answer === "Eberthyn") {
        $(".resposta").text("Acertou miserarvi !!").css("color", "green");
    } else {
        $(".resposta").text("Tente novamente !!").css("color", "red");
    }
});
