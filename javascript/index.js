var pos = 0;
var text =['Morning!','After Noon' ,'Evening!', 'Night!'];
var today = new Date();
var time = today.getHours();

function turn(time){
    if(time >= 4 && time <= 11 ){
        return 0;
    }
    else if(time >= 12 && time <= 17){
        return 1;
    }
    else if(time >= 18 && time <= 22){
        return 2;
    }
    else{
        return 3;
    }
}

var toPrint = turn(time);

function typing(){
    if(pos<text[toPrint].length){
        document.getElementById("greet").innerHTML += text[toPrint].charAt(pos);
        pos++;
        setTimeout(typing,120);
    }   
    else{
        setTimeout(erase, 200);
    }
}

function erase(){
    if(pos >=0){
        var temp = text[toPrint].toString().substring(0, pos);
        document.getElementById("greet").innerHTML = temp;
        pos--;
        setTimeout(erase, 200);
    }
    else{
        if(toPrint>=text.length){
            toPrint = turn(time);
        }
        setTimeout(typing, 150);
    }
}

typing(); 

function lol(){
    console.log("Hahahaha");
}

lol();