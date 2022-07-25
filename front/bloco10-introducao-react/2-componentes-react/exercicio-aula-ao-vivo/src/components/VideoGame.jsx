import React from "react";

class VideoGame extends React.Component{
  render() {

    const { id, title, developer, sales, img } = this.props.game;

    return (
      <div className="video-game">
        <strong>ID:</strong> { id } <br />
        <strong>Título:</strong> { title } <br />
        <strong>Empresa desenvolvedora:</strong> { developer } <br />
        <strong>Vendas:</strong> { sales.toLocaleString('pt-BR') } <br />
        <img src={img} alt="" />
      </div>
    );
  }
}

export default VideoGame;