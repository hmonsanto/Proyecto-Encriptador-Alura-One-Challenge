const abecedarioMayuscula=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
const acentoVocales=['á','é','í','ó','ú']

const desencriptarPalabra=['enter','imes','ai','ober','ufat']
const desencriptarVocal=['e','i','a','o','u']



//Encriptar
function encriptar(){

    var textoEncriptar = document.getElementById("input-texto").value


    if(textoEncriptar==""){
        alert("Texto Vacio!")
    }else{

        if(mayuscula(textoEncriptar)){
            alert("Letra Mayuscula no aceptada")

        }
        else{
            if(acento(textoEncriptar)){
                alert("Acento detectado no aceptado!")
            }
            else{
                encriptarTexto(textoEncriptar)
            }
        }
    }


}
function encriptarTexto(texto){
    var eje="";
    for (let index = 0; index < texto.length; index++) {
        if(texto[index]=='e'){
            eje+='enter';
        }
        else if(texto[index]=='i'){
           eje+='imes';
        }
        else if(texto[index]=='a'){
            eje+='ai';
        }
        else if(texto[index]=='o'){
            eje+='ober';
        }
        else if(texto[index]=='u'){
            eje+='ufat';
        }
        else{
            eje+=texto[index]
        }
        
    }
    document.getElementById('msg').value=eje
    alert("Mensaje Encriptado")
    

}

function acento(texto){
    for (let index = 0; index < texto.length; index++) {
        if(acentoVocales.includes(texto[index])){
            return true;
        }
        
    }
    return false;
    
}

function mayuscula(texto){
    for (let index = 0; index < texto.length; index++) {
        if(abecedarioMayuscula.includes(texto[index])){
            return true;
        }
        
    }
    return false;
    
}


// desencriptar

function desencriptar(){

    var textoDesencriptar = document.getElementById("input-texto").value


    if(textoDesencriptar==""){
        alert("Texto Vacio!")
    }else{
        desencriptarTexto(textoDesencriptar)
    }


}

function desencriptarTexto(texto){

    var eje=texto;

    for (let index = 0; index < desencriptarPalabra.length; index++) {
        if(texto.includes(desencriptarPalabra[index])){
            eje=eje.replaceAll(desencriptarPalabra[index],desencriptarVocal[index])
        }

        
    }
    document.getElementById('msg').value=eje
    alert("Mensaje desencriptado")

   

}
//copiar
function copiar(){
      
  var copyText = document.getElementById("msg");

  navigator.clipboard.writeText(copyText.value);
  alert("Texto Copiado!")

}
//pegar

function pegar(){
    var copyText = document.getElementById("msg").value;

    document.getElementById("input-texto").value=copyText

}

/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/

/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/