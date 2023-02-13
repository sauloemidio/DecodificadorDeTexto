const textArea = document.querySelector(".text-area");
const mensagem = document.querySelector(".mensagem");
const btnEncriptar = document.querySelector(".btn-encriptar");
const btnDesincriptar = document.querySelector(".btn-desencriptar");

let indice = 0;
let indiceCripto = 1;


btnEncriptar.addEventListener('click', ()=>{
    encryptDecrypt();
})

btnDesincriptar.addEventListener('click', ()=>{
    encryptDecrypt();
})

function encryptDecrypt(){
    if(indice === 1){
        let fraseEncriptada = matrixCrypto(mensagem.value);        
        textArea.value = fraseEncriptada;
        console.log(fraseEncriptada);
        mensagem.value = "";
        retirarBackground();
    } else{
        let fraseEncriptada = matrixCrypto(textArea.value);
        mensagem.value = fraseEncriptada;
        textArea.value = "";
        retirarBackground();

    }
    
        
}

    function retirarBackground(){
    if(mensagem.value.length > 0){
        mensagem.style.backgroundImage = "url('')";
    }else{
        mensagem.style.backgroundImage = "url('./imagens/boneco.png')";
    }
    
    }


function matrixCrypto(frase){

    let matrixCode = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    frase = frase.toLowerCase();



    for(let i = 0; i < matrixCode.length; i ++){
        if(frase.includes(matrixCode[i][indice])){
            frase = frase.replaceAll(matrixCode[i][indice], matrixCode[i][indiceCripto])
        }
    }
    if(indice === 0){
        indice = 1;
        indiceCripto = 0;
    } else{
        indice = 0;
        indiceCripto = 1;
    }
        
        return frase;

    
}