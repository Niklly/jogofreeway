// imagens e sons do jogo

let imagemDaEstrada;
let imagemDoAtor;
let imagemCarro1;
let imagemCarro2;
let imagemCarro3;
let imagemCarro4;
let imagemCarro5;
let imagemCarro6;
let imagemCarro7;
let imagemCarro8;

let somDaTrilha;
let somDoPonto;
let SomDeColidir;


function preload(){
  
  imagemDaEstrada = loadImage("imagens/estrada1.png");
  imagemDoAtor = loadImage("imagens/bird.png");
  
  imagemCarro1 = loadImage("imagens/carro amarelo.png");
  imagemCarro2 = loadImage("imagens/carro branco.png");
  imagemCarro3 = loadImage("imagens/carro verde.png");
  imagemCarro4 = loadImage("imagens/carro vermelho.png");
  
  imagemCarro5 = loadImage("imagens/carroE azul.png");
  imagemCarro6 = loadImage("imagens/carroE laranja.png");
  imagemCarro7 = loadImage("imagens/carroE preto.png");
  imagemCarro8 = loadImage("imagens/carroE roxo.png");
  
  
  somDaTrilha = loadSound("sons/trilha.mp3");
  somDoPonto = loadSound("sons/pontos.wav");
  somDeColidir = loadSound("sons/colidiu.mp3");
  
  
  imagemCarros = [imagemCarro3,imagemCarro1,imagemCarro2, imagemCarro4, imagemCarro3,imagemCarro4,imagemCarro2];
  
  imagemCarrosE = [imagemCarro5,imagemCarro6,imagemCarro7, imagemCarro8,imagemCarro7, imagemCarro6,imagemCarro5 ]; 
   
}