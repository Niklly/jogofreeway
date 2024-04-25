function setup() {
  createCanvas(500, 400);
  somDaTrilha.loop();
}

function draw() {
  background(imagemDaEstrada);
  mostraAtor();
  movimentaAtor();
  mostraCarro();
  mostraCarroE();
  movimentaCarro();
  movimentaCarroE();
  voltaPosiçaoInicialCarro();
  passouTodaTela();
  voltaPosiçaoInicialCarroE();
  passouTodaTelaE();
  verificaColisao();
  verificaColisaoE();
  incluiPontos();
  marcaPonto();

}