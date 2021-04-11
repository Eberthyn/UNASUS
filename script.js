
//Alternativas de resposta randômicas//
function shuffle(array) {
    var currentIndex = array.length,
        temporaryValue, randomIndex;

    while (0 !== currentIndex) {

        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

var dfl1 = $('#op1');
var dfl2 = $('#op2');
var dfl3 = $('#op3');
var dfl4 = $('#op4');
var dfl5 = $('#op5');

var arr = [];
arr.push(dfl1, dfl2, dfl3, dfl4, dfl5);
arr = shuffle(arr);

$("#questionario").html(arr);



// Feedback de Resposta//
$("input[type=radio]").click(function () {

    var $answer = $("input[type=radio]:checked");
    var answer = $answer.val();
    console.log(answer);
    if (answer === "Eberthyn") {
        $(".resposta").text("Resposta correta !!").css("background-color", "lightgreen");
    } else {
        $(".resposta").text("Tente novamente !!").css("background-color", "rgb(235, 90, 90)");
    }
});
