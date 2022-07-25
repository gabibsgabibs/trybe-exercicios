import React from "react";
import PropTypes from 'prop-types';
import VideoGame from './VideoGame';

class VideoGameList extends React.Component {
  render() {

    const gamesList = this.props.games;

    const gamesHtmlElements = gamesList.map((game) => {
      return <VideoGame key={ game.id } game={ game }/>
    });

    return (
      <div className="video-game-list">
        <h1>Lista de jogos mais vendidos no mundo!!!</h1>

        { gamesHtmlElements }

      </div>
    )
  }
}

// especificar todas as regras das props
VideoGameList.prototype = {
  games: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    developer: PropTypes.string,
    sales: PropTypes.number,
    img: PropTypes.string,
  }))
};

export default VideoGameList;
