//código do ator 
let xAtor = 100; 
let yAtor = 366;
let comprimentoCarro = 50;
let alturaCarro = 35;
let colisao = false;
let meusPontos = 0;


function mostraAtor(){ 
  image(imagemDoAtor,xAtor,yAtor,40,30);
}

function movimentaAtor(){
  
  if (keyIsDown(UP_ARROW)){
    if (podeSeMoverUp()){
    yAtor -= 3;
    }
  }

  if (keyIsDown(DOWN_ARROW)){
    if (podeSeMoverDown()){
    yAtor += 3;
    }
  }
  
  if (keyIsDown(LEFT_ARROW)){
    if (podeSeMoverLeft()){
    xAtor -= 3;
    }
  }
  
  if (keyIsDown(RIGHT_ARROW)){
    if (podeSeMoverRight()){
    xAtor += 3;
    }
  }  
}


function verificaColisao(){
  for (let i = 0; i < imagemCarros.length; i++){
     colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15);
    if (colisao){
     voltaPosiçaoInicial();
     somDeColidir.play();
      if (pontosMaiorQueZero()){
        meusPontos -= 1;
      }
    }   
  }  
}

function verificaColisaoE(){
  for (let i = 0; i < imagemCarrosE.length; i++){
  
    colisao = collideRectCircle(xCarrosE[i], yCarrosE[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15);
    if(colisao){
      voltaPosiçaoInicial();
      somDeColidir.play();
      if (pontosMaiorQueZero()){
        meusPontos -= 1;
      }       
    }
  }
}


function voltaPosiçaoInicial(){
  xAtor = 100; 
  yAtor = 366;  
}

function podeSeMoverUp(){
  return yAtor > 0
}

function podeSeMoverDown(){
  return yAtor < 366
}

function podeSeMoverLeft(){
  return xAtor > 0
}

function podeSeMoverRight(){
  return xAtor < 470
}

function incluiPontos(){
  textAlign(CENTER);
  textSize(25);
  fill(color(255));
  text(meusPontos, width/5,30);
}

function pontosMaiorQueZero(){
  return meusPontos > 0;
}

function marcaPonto(){
  if (yAtor < 10){
    meusPontos += 1;
    somDoPonto.play();
    voltaPosiçaoInicial();
  }    
}





