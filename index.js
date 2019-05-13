var pos = 0;
var turn = 0
var text =['World!', 'Friends!', 'Family!'];

function typing(){
    if(pos<text[turn].length){
        document.getElementById("greet").innerHTML += text[turn].charAt(pos);
        pos++;
        setTimeout(typing,120);
    }   
    else{
        setTimeout(erase, 200);
    }
}

function erase(){
    if(pos >=0){
        var temp = text[turn].toString().substring(0, pos);
        document.getElementById("greet").innerHTML = temp;
        pos--;
        setTimeout(erase, 200);
    }
    else{
        turn++;
        if(turn>=text.length){
            turn = 0;
        }
        setTimeout(typing, 150);
    }
}

typing(); 

function lol(){
    console.log("Hahahaha");
}

lol();