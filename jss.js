let n1 = document.getElementById('n1')
let n2 = document.getElementById('n2')

let b1 = document.getElementById('b+')
let b2 = document.getElementById('b-')
let b3 = document.getElementById('b*')
let b4 = document.getElementById('b/')
let b5 = document.getElementById('b=')

let result = document.getElementById('t=')

b1.onclick=function(){
    let nm=n1.value;
    b5.onclick=function(){
        let nm2 = n2.value;
        result.value= +nm+ +nm2 ;
        n1.value="";
        n2.value="";
    }
}

b2.onclick=function(){
    let nm=n1.value;
    b5.onclick=function(){
        let nm2 = n2.value;
        result.value= +nm - +nm2 ;
        n1.value="";
        n2.value="";
    }
}
b3.onclick=function(){
    let nm=n1.value;
    b5.onclick=function(){
        let nm2 = n2.value;

        result.value= +nm * +nm2 ;
        n1.value="";
        n2.value="";
    }
}
b4.onclick=function(){
    let nm=n1.value;
    b5.onclick=function(){
        let nm2 = n2.value;
        result.value= +nm / +nm2 ;
        n1.value="";
        n2.value="";
    }
}
















