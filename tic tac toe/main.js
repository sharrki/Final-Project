// javascript commands
"user strict"

//variables
let turn= "x";

// Events

document.getElementById("a").addEventListener("click",aa);
document.getElementById("b").addEventListener("click",bb);
document.getElementById("c").addEventListener("click",cc);
document.getElementById("d").addEventListener("click",dd);
document.getElementById("e").addEventListener("click",ee);
document.getElementById("f").addEventListener("click",ff);
document.getElementById("g").addEventListener("click",gg);
document.getElementById("h").addEventListener("click",hh);
document.getElementById("i").addEventListener("click",ii);
document.getElementById("tab").addEventListener("click",check);
document.getElementById("restart").addEventListener("click",re);
// functions
function aa(){
    if (document.getElementById("a").innerHTML == ""){
        document.getElementById("a").innerHTML= turn;
        if(turn == "x"){
            turn = "o";
        }else{
            turn = "x";
        }
    }
} 
function bb(){
    if (document.getElementById("b").innerHTML == ""){
        document.getElementById("b").innerHTML= turn;
        if(turn == "x"){
            turn = "o";
        }else{
            turn = "x";
        }
    }
}
function cc(){
    if (document.getElementById("c").innerHTML == ""){
        document.getElementById("c").innerHTML= turn;
        if(turn == "x"){
            turn = "o";
        }else{
            turn = "x";
        }
    }
}

function dd (){
    if (document.getElementById("d").innerHTML == ""){
        document.getElementById("d").innerHTML= turn;
        if(turn == "x"){
            turn = "o";
        }else{
            turn = "x";
        }
    }
}
function ee (){
    if (document.getElementById("e").innerHTML == ""){
        document.getElementById("e").innerHTML= turn;
        if(turn == "x"){
            turn = "o";
        }else{
            turn = "x";
        }
    }
}
function ff(){
    if (document.getElementById("f").innerHTML == ""){
        document.getElementById("f").innerHTML= turn;
        if(turn == "x"){
            turn = "o";
        }else{
            turn = "x";
        }
    }
}
function gg (){
    if (document.getElementById("g").innerHTML == ""){
        document.getElementById("g").innerHTML= turn;
        if(turn == "x"){
            turn = "o";
        }else{
            turn = "x";
        }
    }
}
function hh (){
    if (document.getElementById("h").innerHTML == ""){
        document.getElementById("h").innerHTML= turn;
        if(turn == "x"){
            turn = "o";
        }else{
        turn = "x";
        }
    }
}

function ii(){
    if (document.getElementById("i").innerHTML == ""){
        document.getElementById("i").innerHTML= turn;
        if(turn == "x"){
            turn = "o";
        }else{
            turn = "x";
        }
    }
}

function check(){
    // check x
    if(document.getElementById('a').innerHTML== "x" && document.getElementById('b').innerHTML== "x" && document.getElementById('c').innerHTML== "x"){
        document.getElementById("a").style.backgroundColor = "lightgreen";
        document.getElementById("b").style.backgroundColor = "lightgreen";
        document.getElementById("c").style.backgroundColor = "lightgreen";
        turn = "";
        alert("x wins");
    }
    if(document.getElementById('d').innerHTML== "x" && document.getElementById('e').innerHTML== "x" && document.getElementById('f').innerHTML== "x"){
        document.getElementById("d").style.backgroundColor = "lightgreen";
        document.getElementById("e").style.backgroundColor = "lightgreen";
        document.getElementById("f").style.backgroundColor = "lightgreen";
        turn = "";
        alert("x wins");
    }
    if(document.getElementById('g').innerHTML== "x" && document.getElementById('h').innerHTML== "x" && document.getElementById('i').innerHTML== "x"){
        document.getElementById("g").style.backgroundColor = "lightgreen";
        document.getElementById("h").style.backgroundColor = "lightgreen";
        document.getElementById("i").style.backgroundColor = "lightgreen";
        turn = "";
        alert("x wins");
    }
    if(document.getElementById('a').innerHTML== "x" && document.getElementById('d').innerHTML== "x" && document.getElementById('g').innerHTML== "x"){
        document.getElementById("a").style.backgroundColor = "lightgreen";
        document.getElementById("d").style.backgroundColor = "lightgreen";
        document.getElementById("g").style.backgroundColor = "lightgreen";
        turn = "";
        alert("x wins");
    }
    if(document.getElementById('b').innerHTML== "x" && document.getElementById('e').innerHTML== "x" && document.getElementById('h').innerHTML== "x"){
        document.getElementById("b").style.backgroundColor = "lightgreen";
        document.getElementById("e").style.backgroundColor = "lightgreen";
        document.getElementById("h").style.backgroundColor = "lightgreen";
        turn = "";
        alert("x wins");
    }
    if(document.getElementById('c').innerHTML== "x" && document.getElementById('f').innerHTML== "x" && document.getElementById('i').innerHTML== "x"){
        document.getElementById("c").style.backgroundColor = "lightgreen";
        document.getElementById("f").style.backgroundColor = "lightgreen";
        document.getElementById("i").style.backgroundColor = "lightgreen";
        turn = "";
        alert("x wins");
    }
    if(document.getElementById('a').innerHTML== "x" && document.getElementById('e').innerHTML== "x" && document.getElementById('i').innerHTML== "x"){
        document.getElementById("a").style.backgroundColor = "lightgreen";
        document.getElementById("e").style.backgroundColor = "lightgreen";
        document.getElementById("i").style.backgroundColor = "lightgreen";
        turn = "";
        alert("x wins");
    }
    if(document.getElementById('c').innerHTML== "x" && document.getElementById('e').innerHTML== "x" && document.getElementById('g').innerHTML== "x"){
        document.getElementById("c").style.backgroundColor = "lightgreen";
        document.getElementById("e").style.backgroundColor = "lightgreen";
        document.getElementById("g").style.backgroundColor = "lightgreen";
        turn = "";
        alert("x wins");
    }

    // check o
    if(document.getElementById('a').innerHTML== "o" && document.getElementById('b').innerHTML== "o" && document.getElementById('c').innerHTML== "o"){
        document.getElementById("a").style.backgroundColor = "lightgreen";
        document.getElementById("b").style.backgroundColor = "lightgreen";
        document.getElementById("c").style.backgroundColor = "lightgreen";
        turn = "";
        alert("o wins");
    }
    if(document.getElementById('d').innerHTML== "o" && document.getElementById('e').innerHTML== "o" && document.getElementById('f').innerHTML== "o"){
        document.getElementById("d").style.backgroundColor = "lightgreen";
        document.getElementById("e").style.backgroundColor = "lightgreen";
        document.getElementById("f").style.backgroundColor = "lightgreen";
        turn = "";
        alert("o wins");
    }
    if(document.getElementById('g').innerHTML== "o" && document.getElementById('h').innerHTML== "o" && document.getElementById('i').innerHTML== "o"){
        document.getElementById("g").style.backgroundColor = "lightgreen";
        document.getElementById("h").style.backgroundColor = "lightgreen";
        document.getElementById("i").style.backgroundColor = "lightgreen";
        turn = "";
        alert("o wins");
    }
    if(document.getElementById('a').innerHTML== "o" && document.getElementById('d').innerHTML== "o" && document.getElementById('g').innerHTML== "o"){
        document.getElementById("a").style.backgroundColor = "lightgreen";
        document.getElementById("d").style.backgroundColor = "lightgreen";
        document.getElementById("g").style.backgroundColor = "lightgreen";
        turn = "";
        alert("o wins");
    }
    if(document.getElementById('b').innerHTML== "o" && document.getElementById('e').innerHTML== "o" && document.getElementById('h').innerHTML== "o"){
        document.getElementById("b").style.backgroundColor = "lightgreen";
        document.getElementById("e").style.backgroundColor = "lightgreen";
        document.getElementById("h").style.backgroundColor = "lightgreen";
        turn = "";
        alert("o wins");
    }
    if(document.getElementById('c').innerHTML== "o" && document.getElementById('f').innerHTML== "o" && document.getElementById('i').innerHTML== "o"){
        document.getElementById("c").style.backgroundColor = "lightgreen";
        document.getElementById("f").style.backgroundColor = "lightgreen";
        document.getElementById("i").style.backgroundColor = "lightgreen";
        turn = "";
        alert("o wins");
    }
    if(document.getElementById('a').innerHTML== "o" && document.getElementById('e').innerHTML== "o" && document.getElementById('i').innerHTML== "o"){
        document.getElementById("a").style.backgroundColor = "lightgreen";
        document.getElementById("e").style.backgroundColor = "lightgreen";
        document.getElementById("i").style.backgroundColor = "lightgreen";
        turn = "";
        alert("o wins");
    }
    if(document.getElementById('c').innerHTML== "o" && document.getElementById('e').innerHTML== "o" && document.getElementById('g').innerHTML== "o"){
        document.getElementById("c").style.backgroundColor = "lightgreen";
        document.getElementById("e").style.backgroundColor = "lightgreen";
        document.getElementById("g").style.backgroundColor = "lightgreen";
        turn = "";
        alert("o wins");
    }

    
}

function re(){
    document.getElementById("a").innerHTML="";
    document.getElementById("b").innerHTML="";
    document.getElementById("c").innerHTML="";
    document.getElementById("d").innerHTML="";
    document.getElementById("e").innerHTML="";
    document.getElementById("f").innerHTML="";
    document.getElementById("g").innerHTML="";
    document.getElementById("h").innerHTML="";
    document.getElementById("i").innerHTML="";
    document.getElementById("a").style.backgroundColor = "white";
    document.getElementById("b").style.backgroundColor = "white";
    document.getElementById("c").style.backgroundColor = "white";
    document.getElementById("d").style.backgroundColor = "white";
    document.getElementById("e").style.backgroundColor = "white";
    document.getElementById("f").style.backgroundColor = "white";
    document.getElementById("g").style.backgroundColor = "white";
    document.getElementById("h").style.backgroundColor = "white";
    document.getElementById("i").style.backgroundColor = "white";
    
    
}