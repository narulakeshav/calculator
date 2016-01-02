$(document).ready(function() {
    var displayBox = document.getElementById("display");

    //CHECK IF 0 IS PRESENT. IF IT IS, OVERRIDE IT, ELSE APPEND VALUE TO DISPLAY
    function clickNumbers(val) {
        if(displayBox.innerHTML === "0") { displayBox.innerHTML = val; }
        else { displayBox.innerHTML += val; }
    }

    //PLUS MINUS
    $("#plus_minus").click(function() {
        if(eval(displayBox.innerHTML) > 0) {
            displayBox.innerHTML = "-" + displayBox.innerHTML;
        }
        else {
            displayBox.innerHTML = displayBox.innerHTML.replace("-", "");
        }
    });

    //ON CLICK ON NUMBERS
    $("#clear").click(function() {
        displayBox.innerHTML = "0"; 
        $("#display").css("font-size", "80px");
        $("#display").css("margin-top", "110px");
        $("button").prop("disabled", false);
    });
    $("#one").click(function() {
        checkLength(displayBox.innerHTML);
        clickNumbers(1);
    });
    $("#two").click(function() {
        checkLength(displayBox.innerHTML);
        clickNumbers(2);
    });
    $("#three").click(function() {
        checkLength(displayBox.innerHTML);
        clickNumbers(3);
    });
    $("#four").click(function() {
        checkLength(displayBox.innerHTML);
        clickNumbers(4);
    });
    $("#five").click(function() {
        checkLength(displayBox.innerHTML);
        clickNumbers(5);
    });
    $("#six").click(function() {
        checkLength(displayBox.innerHTML);
        clickNumbers(6);
    });
    $("#seven").click(function() {
        checkLength(displayBox.innerHTML);
        clickNumbers(7);
    });
    $("#eight").click(function() {
        checkLength(displayBox.innerHTML);
        clickNumbers(8);
    });
    $("#nine").click(function() {
        checkLength(displayBox.innerHTML);
        clickNumbers(9);
    });
    $("#zero").click(function() {
        checkLength(displayBox.innerHTML);
        clickNumbers(0);
    });
    $("#decimal").click(function() {
        checkLength(displayBox.innerHTML);
        clickNumbers(".");
    });

    //OPERATORS
    $("#add").click(function() {
        evaluate();
        displayBox.innerHTML += "+";
    });
    $("#subtract").click(function() {
        evaluate();
        displayBox.innerHTML += "-";
    });
    $("#multiply").click(function() {
        evaluate();
        displayBox.innerHTML += "×";
    });
    $("#divide").click(function() {
        evaluate();
        displayBox.innerHTML += "÷";
    });
    $("#square").click(function() {
        var num = Number(displayBox.innerHTML);
        num = num * num;
        checkLength(num);
        displayBox.innerHTML = num;
    });
    $("#sqrt").click(function() {
        var num = parseFloat(displayBox.innerHTML);
        num = Math.sqrt(num);
        displayBox.innerHTML = Number(num.toFixed(5));
    });
    $('#equals').click(evaluate);

    //EVAL FUNCTION
    function evaluate() {
        displayBox.innerHTML = displayBox.innerHTML.replace(",", "");
        displayBox.innerHTML = displayBox.innerHTML.replace("×", "*");
        displayBox.innerHTML = displayBox.innerHTML.replace("÷", "/");
        var evaluate = eval(displayBox.innerHTML);
        checkLength(evaluate);
        if(evaluate.toString().indexOf(".") !== -1) {
            evaluate = evaluate.toFixed(5);
        }
        displayBox.innerHTML = evaluate;
    }

    //CHECK FOR LENGTH & DISABLING BUTTONS
    function checkLength(num) {
        if(num.toString().length > 7 && num.toString().length < 14) { 
            $("#display").css("font-size", "40px");
            $("#display").css("margin-top", "167px");
        }
        else if(num.toString().length > 18) { 
            num = "Infinity";
            $("#display").css("font-size", "80px");
            $("#display").css("margin-top", "110px");
            $("button").prop("disabled", true);
            $(".clear").attr("disabled", false);
        }
    }

    //TRIM IF NECESSARY
    function trimIfNecessary() {
        var length = displayBox.innerHTML.length;
        if(length > 7 && length < 14) { 
            $("#display").css("font-size", "40px");
            $("#display").css("margin-top", "130px");
        }
        else if(length > 14){
            displayBox.innerHTML = "Infinity";
            $("#display").css("font-size", "80px");
            $("#display").css("margin-top", "110px");
            $("button").prop("disabled", true);
            $(".clear").attr("disabled", false);
        }
    }
});