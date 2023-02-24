import React from 'react';
import Noticia from "./components/noticia/noticia";

function App() {

  const [noticias, setNoticias] = React.useState([]);

  function carregar(){
  setNoticias([
    {
      imagem: "https://picsum.photos/200/200?grayscale" ,
      titulo:"Titulo 1",
      texto: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled "
    },
    {
      imagem: "https://picsum.photos/200/200" ,
      titulo:"Titulo 2",
      texto: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled "
    }
  ])};

  return (
    noticias.length >= 2 ?
    <div className="container">
      <Noticia imagem={noticias[0].imagem} titulo={noticias[0].titulo} texto={noticias[0].texto}/>
      <Noticia imagem={noticias[1].imagem} titulo={noticias[1].titulo} texto={noticias[1].texto}/>
    </div>
    :
    <div className="container">
      <button onClick={carregar}>Carregar Noticias</button>
      <div>Sem noticias</div>
    </div>
  );
}

export default App;
