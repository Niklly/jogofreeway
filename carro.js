//código do carro

let xCarros = [0,100,0,100,250,490,250];
let yCarros = [79,79,125,128,128,78,78];
let xCarrosE = [480,400,-10,180,300,-10,100];
let yCarrosE = [288,239,239,290,290,290,239];

let velocidadeCarros = [2.2,2.2,5,5,5,2.2,2.2];
let velocidadeCarrosE = [2,5,5,2,2,2,5];


function mostraCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
   image(imagemCarros[i],xCarros[i],yCarros[i],50,35);
  }      
}

function mostraCarroE(){
   for (let i = 0; i < imagemCarrosE.length; i++){
   image(imagemCarrosE[i],xCarrosE[i],yCarrosE[i],50,35);
  }   
}

function movimentaCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
    xCarros[i] += velocidadeCarros[i];
  }
}

function movimentaCarroE(){
  for (let i = 0; i < imagemCarrosE.length; i++){
    xCarrosE[i] -= velocidadeCarrosE[i];
  }
}


function voltaPosiçaoInicialCarro(){
  for (let i = 0; i < imagemCarros.length; i++)
     if (passouTodaTela(xCarros[i])){
       xCarros[i] = -50;
     }  
}

function passouTodaTela(xCarros){
  return xCarros > 550;
}


function voltaPosiçaoInicialCarroE(){
  for (let i = 0; i < imagemCarrosE.length; i++)
     if (passouTodaTelaE(xCarrosE[i])){
       xCarrosE[i] = 550;
     }  
}

function passouTodaTelaE(xCarrosE){
  return xCarrosE < -50;
}


