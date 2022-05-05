﻿/* 
=======================
Declaração de variáveis
=======================
*/

var calcResDiv = "calc";

/* 
=======================
Event Listener
=======================
*/

/* A adição dessa função que "escuta" um evento permite que 
   verifiquemos se a página foi carregada para só então chamar
   a função CalcAddAndShow, pois ela só funcionará depois da 
   criação da div de resultado, com id "result" */
document.onreadystatechange = function () {
    if (document.readyState == "complete") {
        var x0 = 10;
        var y0 = 20;
        // Alternativa equivalente: var x0 = 10, y0 = 20;
        CalcAddAndShow(x0, y0);
  }
}


/* 
=======================
Funções
======================= 
*/

/* Função que calcula uma soma e mostra a operação realizada e o resultado obtido */
function CalcAddAndShow(x, y){
    var op = "+";
    var result = Calc(x, y, op);
    ShowOp(x, y, op);
    ShowResult(result);
}

function MultAddAndShow(x, y){
    var op = "*";
    var result = Calc(x, y, op);
    ShowOp(x, y, op);
    ShowResult(result);
}

function PotAddAndShow(x, y){
    var op = "^";
    var result = Calc(x, y, op);
    ShowOp(x, y, op);
    ShowResult(result);
};

function DivAddAndShow(x, y){
    var op = "/";
    var result = Calc(x, y, op);
    ShowOp(x, y, op);
    ShowResult(result);
};

function SayTruth(truth){
    if (truth == Alexandre) {
        ShowTruth("É verdadeiramente uma honra estar ao lado do Alexandre");
    };
    if (truth == Vitoria) {
        ShowTruth("A Vitória é a coisa mais linda que existe");
    };
    if (truth == Vinicius) {
        ShowTruth("Vinicius é o cara mais maneiro que existe");
    };
    if (truth == Kil) {
        ShowTruth("Kil é uma das pessoas mais legais que existe");
    };
}

function SayAnotherTruth() {
    ShowTruth("É verdadeiramente uma honra estar ao lado do Alexandre")
}

/* Função que calcula uma operação entre dois números recebidos como parâmetro */
function Calc(x, y, op){
    var result;
    if (op == "+") {
        result = x + y;
    };
    if (op == "*") {
        result = x*y;
    };
    if (op == "^") {
        result = x**y;
    };
    if (op == "/") {
        result = x/y;
    }
    return result;
}


/* Função que mostra a operação realizada */
function ShowOp(x, y, op){
    document.getElementById(calcResDiv).innerHTML += `<br /> ${x} ${op} ${y} = `;
    //Alternativa: .. += "<br />" + x + " " + op + " " + y + " = "
};


/* Função que mostra o resultado obtido */
function ShowResult(res){
    document.getElementById(calcResDiv).innerHTML += res;
};

function ShowTruth(Truth){
    document.getElementById(calcResDiv).innerHTML += `<br /> ${Truth}`;
};
