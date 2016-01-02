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
        trimIfNecessary();
        clickNumbers(1);
    });
    $("#two").click(function() {
        trimIfNecessary();
        clickNumbers(2);
    });
    $("#three").click(function() {
        trimIfNecessary();
        clickNumbers(3);
    });
    $("#four").click(function() {
        trimIfNecessary();
        clickNumbers(4);
    });
    $("#five").click(function() {
        trimIfNecessary();
        clickNumbers(5);
    });
    $("#six").click(function() {
        trimIfNecessary();
        clickNumbers(6);
    });
    $("#seven").click(function() {
        trimIfNecessary();
        clickNumbers(7);
    });
    $("#eight").click(function() {
        trimIfNecessary();
        clickNumbers(8);
    });
    $("#nine").click(function() {
        trimIfNecessary();
        clickNumbers(9);
    });
    $("#zero").click(function() {
        trimIfNecessary();
        clickNumbers(0);
    });
    $("#decimal").click(function() {
        trimIfNecessary();
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
        num = num.toString();
        if(num.length > 7 && num.length < 14) { 
            $("#display").css("font-size", "40px");
            $("#display").css("margin-top", "130px");
        }
        else if(num.length > 18) { 
            num = "Infinity";
            $("#display").css("font-size", "80px");
            $("#display").css("margin-top", "110px");
            $("button").prop("disabled", true);
            $(".clear").attr("disabled", false);
        }
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
        displayBox.innerHTML = displayBox.innerHTML.replace("×", "*");
        displayBox.innerHTML = displayBox.innerHTML.replace("÷", "/");
        var evaluate = eval(displayBox.innerHTML);
        displayBox.innerHTML = evaluate;
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