import React from "react";
import "./styles.css";
import CardVideo from "./compoente/CardVideo";
import { isPropertySignature } from "typescript";



export default function App(props) {
  const titulo = "titulo do video"

  function reproduzVideo() {
    alert("O vídeo está sendo reproduzido");

  }

  return (


    <div>
      <div className="tela-inteira">
        <header>
          <h1>LabeTube</h1>
          <input type="text" placeholder="Busca" id="campoDeBusca" />
        </header>

        <main>
          <nav className="menu-vertical">
            <ul>
              <li className="botoes-meunu-vertical">Início</li>
              <li className="botoes-meunu-vertical">Em alta</li>
              <li className="botoes-meunu-vertical">Inscrições</li>
              <hr />
              <li className="botoes-meunu-vertical">Originais</li>
              <li className="botoes-meunu-vertical">Histórico</li>
            </ul>
          </nav>
          <section className="painel-de-videos">
            <CardVideo titulo="titulo 1" imagem={"https://picsum.photos/400/400?a=1"} usuario="usuario 1" />
            <CardVideo titulo="titulo 2" imagem={"https://picsum.photos/200/300"} usuario="usuario 2" />
            <CardVideo titulo="titulo 3" imagem={"https://picsum.photos/200"} usuario="usuario 3" />
            <CardVideo titulo="titulo 4" imagem={"https://picsum.photos/id/237/200/300"} usuario="usuario 4" />
            <CardVideo titulo="titulo 5" imagem={"https://picsum.photos/seed/picsum/200/300"} usuario="usuario 5" />
            <CardVideo titulo="titulo 6" imagem={"https://picsum.photos/200/300?grayscale"} usuario="usuario 6" />
            <CardVideo titulo="titulo 7" imagem={"https://picsum.photos/200/300/?blur"} usuario="usuario 7" />
            <CardVideo titulo="titulo 8" imagem={"https://picsum.photos/id/870/200/300?grayscale&blur=2"} usuario="usuario 8" />
          </section>


        </main>

        <footer>
          <h4>Oi! Eu moro no footer!</h4>
        </footer>
      </div>
    </div>
  );
}
