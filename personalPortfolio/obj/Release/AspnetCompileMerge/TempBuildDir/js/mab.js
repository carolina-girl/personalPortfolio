


function calculateLeast() {
    n1 = Number(document.getElementById("number1").value);
    n2 = Number(document.getElementById("number2").value);
    n3 = Number(document.getElementById("number3").value);
    n4 = Number(document.getElementById("number4").value);
    n5 = Number(document.getElementById("number5").value);
    document.getElementById("resultLeast").innerHTML = Math.min(n1, n2, n3, n4, n5);
}
function calculateGreatest() {
    document.getElementById("resultGreatest").innerHTML = Math.max(n1, n2, n3, n4, n5);
}
function calculateMean() {
    document.getElementById("resultMean").innerHTML = (n1 + n2 + n3 + n4 + n5) / 5;
}
function calculateSum() {
    document.getElementById("resultSum").innerHTML = (n1 + n2 + n3 + n4 + n5);
}
function calculateProduct() {
    document.getElementById("resultProduct").innerHTML = (n1 * n2 * n3 * n4 * n5);
}


function factorial() {
    num = Number(document.getElementById("inputNum").value);
    var factNum = "";
    factNum = 1;
    for (var i = 2; i <= num; i++) {
        factNum = factNum * i;

    }
    document.getElementById("resultFact").innerHTML = factNum;
}



function playGame() {
    var firstPlay = Number(document.getElementById("firstNum").value);
    var secondPlay = Number(document.getElementById("secondNum").value);

    var printNum = "";
    for (var i = 1; i <= 100; i++) {
        if (i % firstPlay == 0 && i % secondPlay == 0) {
            printNum += " FizzBuzz  ";
        }
        else if (i % firstPlay == 0) {
            printNum += " Fizz  ";                       //== 0 true
        }
        else if (i % secondPlay == 0) {
            printNum += " Buzz  ";
        }
        else {
            printNum += i + "  ";
        }
    }
}
    document.getElementById("gameAnswer").innerHTML = printNum;
    document.getElementById("myForm").reset();
    //output id gameAnswer should take final results from var printNum (placeholder)


      

    function wordFun(str) {
        var str = (document.getElementById("wordString").value);
        str = str.toLowerCase();
        var newString = "";
        var len = Math.floor(str.length / 2);
        for (var i = 0; i < len; i++) {
            if (str[i] !== str[str.length - i - 1]) {
                newString = "This is not a Palindrome.  Try again!";
            }
            else {
                newString = "Yes, this is a Palindrome!";
            }
        }
        document.getElementById("stringResult").innerHTML = newString;
    }
