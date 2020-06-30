
var operandoa;
var operandob;
var operacion;

function calculadora(){
    var hojaestilos= document.createElement("style");
    hojaestilos.innerHTML= 
    ".teclado img:hover {-webkit-transform:scale(1.05) !important}.teclado img:active { border: 2px inset slategrey;}";
    /*border-style: inset;*/
    document.head.appendChild(hojaestilos);



    //variables
    var resultado=document.getElementById("display");
    var on    =document.getElementById("on");
    var sign  =document.getElementById("sign");
    var punto =document.getElementById("punto");
    var igual =document.getElementById("igual");

    var division        =document.getElementById("dividido");
    var multiplicacion  =document.getElementById("por");
    var suma  =document.getElementById("mas");
    var resta =document.getElementById("menos");  

    var uno   =document.getElementById("1");
    var dos   =document.getElementById("2");
    var tres  =document.getElementById("3");
    var cuatro=document.getElementById("4");
    var cinco =document.getElementById("5");
    var seis  =document.getElementById("6");
    var siete =document.getElementById("7");
    var ocho  =document.getElementById("8");
    var nueve =document.getElementById("9");
    var cero  =document.getElementById("0");

    //eventos teclas de numeros
    uno.onclick=function(e){
        if(resultado.textContent==0 && resultado.textContent !== '0.'){
            limpiar();
            if (resultado.textContent.length < 8) {
                resultado.textContent=resultado.textContent + "1";
            } else {
                alert("Maximo 8 Digitos a ingresar");
            }
        }else{
            if (resultado.textContent.length < 8) {
                resultado.textContent=resultado.textContent + "1";
            } else {
                alert("Maximo 8 Digitos a ingresar");
            }
        }
    }
	
	dos.onclick=function(e){
        if(resultado.textContent==0 && resultado.textContent !== '0.'){
            limpiar();
            if (resultado.textContent.length < 8) {
                resultado.textContent=resultado.textContent + "2";
            } else {
                alert("Maximo 8 Digitos a ingresar");
            }
        }else{
            if (resultado.textContent.length < 8) {
                resultado.textContent=resultado.textContent + "2";
            } else {
                alert("Maximo 8 Digitos a ingresar");
            }
        }
    }
	
	tres.onclick=function(e){
        if(resultado.textContent==0 && resultado.textContent !== '0.'){
            limpiar();
            if (resultado.textContent.length < 8) {
                resultado.textContent=resultado.textContent + "3";
            } else {
                alert("Maximo 8 Digitos a ingresar");
            }
        }else{
            if (resultado.textContent.length < 8) {
                resultado.textContent=resultado.textContent + "3";
            } else {
                alert("Maximo 8 Digitos a ingresar");
            }
        }
    }
	
	cuatro.onclick=function(e){
        if(resultado.textContent==0 && resultado.textContent !== '0.'){
            limpiar();
            if (resultado.textContent.length < 8) {
                resultado.textContent=resultado.textContent + "4";
            } else {
                alert("Maximo 8 Digitos a ingresar");
            }
        }else{
            if (resultado.textContent.length < 8) {
                resultado.textContent=resultado.textContent + "4";
            } else {
                alert("Maximo 8 Digitos a ingresar");
            }
        }
    }
	
	
	cinco.onclick=function(e){
        if(resultado.textContent==0 && resultado.textContent !== '0.'){
            limpiar();
            if (resultado.textContent.length < 8) {
                resultado.textContent=resultado.textContent + "5";
            } else {
                alert("Maximo 8 Digitos a ingresar");
            }
        }else{
            if (resultado.textContent.length < 8) {
                resultado.textContent=resultado.textContent + "5";
            } else {
                alert("Maximo 8 Digitos a ingresar");
            }
        }
    }
	
	seis.onclick=function(e){
        if(resultado.textContent==0 && resultado.textContent !== '0.'){
            limpiar();
            if (resultado.textContent.length < 8) {
                resultado.textContent=resultado.textContent + "6";
            } else {
                alert("Maximo 8 Digitos a ingresar");
            }
        }else{
            if (resultado.textContent.length < 8) {
                resultado.textContent=resultado.textContent + "6";
            } else {
                alert("Maximo 8 Digitos a ingresar");
            }
        }
    }
	
	siete.onclick=function(e){
        if(resultado.textContent==0 && resultado.textContent !== '0.'){
            limpiar();
            if (resultado.textContent.length < 8) {
                resultado.textContent=resultado.textContent + "7";
            } else {
                alert("Maximo 8 Digitos a ingresar");
            }
        }else{
            if (resultado.textContent.length < 8) {
                resultado.textContent=resultado.textContent + "7";
            } else {
                alert("Maximo 8 Digitos a ingresar");
            }
        }
    }
	
	ocho.onclick=function(e){
        if(resultado.textContent==0 && resultado.textContent !== '0.'){
            limpiar();
            if (resultado.textContent.length < 8) {
                resultado.textContent=resultado.textContent + "8";
            } else {
                alert("Maximo 8 Digitos a ingresar");
            }
        }else{
            if (resultado.textContent.length < 8) {
                resultado.textContent=resultado.textContent + "8";
            } else {
                alert("Maximo 8 Digitos a ingresar");
            }
        }
    }
	
	nueve.onclick=function(e){
        if(resultado.textContent==0 && resultado.textContent !== '0.'){
            limpiar();
            if (resultado.textContent.length < 8) {
                resultado.textContent=resultado.textContent + "9";
            } else {
                alert("Maximo 8 Digitos a ingresar");
            }
        }else{
            if (resultado.textContent.length < 8) {
                resultado.textContent=resultado.textContent + "9";
            } else {
                alert("Maximo 8 Digitos a ingresar");
            }
        }
    }
	
    cero.onclick=function(e){
        if(resultado.textContent==0 && resultado.textContent !== '0.'){
            limpiar();
            if (resultado.textContent.length < 8) {
                resultado.textContent=resultado.textContent + "0";
            } else {
                alert("Maximo 8 Digitos a ingresar");
            }
        }else{
            if (resultado.textContent.length < 8) {
                resultado.textContent=resultado.textContent + "0";
            } else {
                alert("Maximo 8 Digitos a ingresar");
            }
        }
    }
	
 
    /***********-------------------------------********* */
    //Opecione y Funciones
    on.onclick=function(e){

        if(resultado.textContent != "") {
            resetear();
        }//si es positivo haz negativo 
        else {
            resultado.textContent=0
        }
    }

    //cambio de signo
    sign.onclick=function(e){
        //si es negativo haz positivo
        if(resultado.textContent < 0) {
            resultado.textContent=resultado.textContent *(-1);
            console.log("el cambio de signo es positivo" );
        }//si es positivo haz negativo 
        else {
            resultado.textContent=resultado.textContent *(-1) ;
            console.log("el cambio de signo es positivo" );
        }
        
    }
    /***********---------OPERACIONES-----------********* */
    suma.onclick=function(e){
        operandoa=resultado.textContent;
        operacion="+";
        limpiar();
    }
    resta.onclick=function(e){
        operandoa=resultado.textContent;
        operacion="-";
        limpiar();
    }
    multiplicacion.onclick=function(e){
        operandoa=resultado.textContent;
        operacion="*";
        limpiar();
    }
    division.onclick=function(e){
        operandoa=resultado.textContent;
        operacion="/";
        limpiar();
    }

    /***********---------FUNCIONES-----------********* */
    igual.onclick= function(e){
        operandob=resultado.textContent;
        resolver();
    }

    punto.onclick= function(e){
        if(resultado.textContent == 0) {
            resultado.textContent = '0.';
        } else if(resultado.textContent.indexOf('.') == -1) {
            resultado.textContent += '.';
        }
        
    }

    //funciones 
    function limpiar(){
        resultado.textContent = "";
      }

    function resetear(){
        resultado.textContent="";
        operandoa=0;
        operandob=0;
        operacion="";
    }

    function resolver(){
        var res = 0;
        switch(operacion){
          case "+":
            res = parseFloat(operandoa) + parseFloat(operandob);
            break;
          case "-":
              res = parseFloat(operandoa) - parseFloat(operandob);
              break;
          case "*":
            res = parseFloat(operandoa) * parseFloat(operandob);
            break;
          case "/":
            res = parseFloat(operandoa) / parseFloat(operandob);
            break;
        }
        resetear();

        if (Number.isInteger(res)==true) {
                if (res.toPrecision().length < 8) {
                    resultado.textContent =  res.toPrecision();
                } else {
                    alert("Maximo 8 Digitos a calcular, " + "se han calculado " +res.toPrecision().length + "caracteres." );
                }
            } else {

                if (res.toPrecision(2).length < 8) {
                    resultado.textContent =  res.toPrecision(2);
                } else {
                    alert("Maximo 8 Digitos a calcular, " + "se han calculado " +res.toPrecision(2).length + "caracteres." );
                }
        }
    }
}








