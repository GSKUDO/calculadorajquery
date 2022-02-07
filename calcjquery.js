$(document).ready(function(){
    $("td, th").css("border", "1px solid black");
    $("td, th").css("border-radius", "50%");
    $("td, th").css("text-align", "center");
    $("td, th").css("height", "50px");
    $("td, th").css("width", "50px");
    $("td, th").css("font-weight", "bolder");
    $(".cinza").css("background-color", "#A6A6A6");
    $(".numero, .operador, .virgula, .igual").css("color", "white");
    $(".operador, .igual").css("background-color", "#FF9B00");
    $(".numero, .virgula").css("background-color", "#333333");
    $("body").css("background-color", "black");
    $("p").css("margin-top", "30px");
    $("p").css("height", "50px");
    $("p").css("color", "white");
    $("p").css("text-align", "right");
    $("p").css("width", "200px");

    $(".numero").click(function(){
        let contmemoria = document.getElementById("memoria").innerText;
        if (contmemoria.includes("=")){
            $("#memoria").text("");    
            $("#resultado").text("");
        }
        const digito = ($(this).attr("valor"));
        $("#memoria").append(digito);
    });

    $(".operador").click(function(){
        let conteudomemoria = document.getElementById("memoria").innerText;
        let operadordavez = ($(this).attr("valor"));
        if (conteudomemoria.includes("+")){
            conteudomemoria = conteudomemoria.replace("+", (operadordavez + " "));
            document.getElementById("memoria").innerHTML = conteudomemoria;
            $("#resultado").text("");
        } else if (conteudomemoria.includes(" - ")){
            conteudomemoria = conteudomemoria.replace(" - ", (" " + operadordavez + " "));
            document.getElementById("memoria").innerHTML = conteudomemoria;
            $("#resultado").text("");
        }else if (conteudomemoria.includes("X")){
            conteudomemoria = conteudomemoria.replace("X", (operadordavez + " "));
            document.getElementById("memoria").innerHTML = conteudomemoria;
            $("#resultado").text("");
        }else if (conteudomemoria.includes("/")){
                conteudomemoria = conteudomemoria.replace("/", (operadordavez + " "));
                document.getElementById("memoria").innerHTML = conteudomemoria;
                $("#resultado").text("");
        }else{
            const operador = ($(this).attr("valor"));
                $("#memoria").append(" " + operador + " ");
        }
    });

    $("#equal").click(function(){
        let comemoria = document.getElementById("memoria").innerText;
        if (comemoria.includes("=")){
            resultado();
        }else {
            $("#memoria").append(" = ");
            resultado();
        };
    });

    $("#ac").click(function(){
        $("#memoria").text("");
        $("#resultado").text("");
    });

    $(".virgula").click(function(){    
        let cont = document.getElementById("memoria").innerText;
        const contasepar = cont.split(" ");

        if (contasepar[contasepar.length-1].includes("=")){
            $("#memoria").text("");
            $("#resultado").text("");
            $("#memoria").append(".");
        }else if (contasepar[contasepar.length-1].includes(".")){
            alert("numero já possui vírgula");
        }else{$("#memoria").append(".");}
    });

    $("#porcento").click(function(){    
        let cont = document.getElementById("memoria").innerText;
        let contasepa = cont.split(" ");

        if (isNaN(parseFloat(contasepa[contasepa.length-1]))){
            alert("Digite primeiro o número")
        }else{
            let porcentagem = (parseFloat(contasepa[contasepa.length-1])/100);
            contasepa.pop();
            contasepa.push(porcentagem);
            document.getElementById("memoria").innerHTML = contasepa.join(" ");
        };
    });

    $("#maismenos").click(function(){    
        let con = document.getElementById("memoria").innerText;
        let contasep = con.split(" ");
        if (isNaN(parseFloat(contasep[contasep.length-1]))){
            alert("Digite primeiro o número")
        }else{
        let invertesinal = (-(parseFloat(contasep[contasep.length-1])));
        contasep.pop();
        contasep.push(invertesinal);
        document.getElementById("memoria").innerHTML = contasep.join(" ");
        };
    });

    function resultado() {
        let conta = document.getElementById("memoria").innerText;
        const contaseparada = conta.split(" ");

        let primeironumero = parseFloat(contaseparada[0]);
        let segundonumero = parseFloat(contaseparada[2]);
        let operador = contaseparada[1];
        let resultadodaconta = 0;

        if (operador ===  "X"){
            resultadodaconta = (primeironumero * segundonumero); 
        }else if (operador ===  "/"){
            resultadodaconta = (primeironumero / segundonumero); 
        } else if (operador ===  "+"){
            resultadodaconta = (primeironumero + segundonumero); 
        }else if (operador ===  "-"){
            resultadodaconta = (primeironumero - segundonumero);
        }
        document.getElementById("resultado").innerHTML = resultadodaconta;
    }
});