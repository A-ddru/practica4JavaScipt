//declarar si un numero es par o impar 


var imparPar = 0;

imparPar = 0;

imparPar=parseInt(prompt("ingresa el numero"));

if(imparPar%2==0){
    alert("es par");
}else("es impar");{
    alert("es impar");
}


//determinar la base y la altura de un rectangulo o cuadrado

function Area(){
    var area,base,altura;

    base=prompt("coloca la base");
    altura=prompt("coloca la altura");
    base=parseInt(base);
    altura=parseInt(altura);
    area=(base * altura);
    alert("el area del cuadrado es:"+area);
}