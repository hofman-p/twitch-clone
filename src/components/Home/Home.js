import React, {useState, useEffect} from 'react';
import './Home.css';
import Twitch from '../../api/Twitch';

function Home() {
  const [topStreams, setTopStreams] = useState([]);
  const [topGames, setTopGames] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [streams, games] = await Promise.all([
          Twitch.get('https://api.twitch.tv/helix/streams?first=10'),
          Twitch.get('https://api.twitch.tv/helix/games/top?first=10')
        ]);
        console.log(streams);
        console.log(games);
        let streamsData = streams.data.data;
        let gamesData = games.data.data;
        streamsData.map(stream => {
          let newUrl = stream.thumbnail_url.replace('{width}', '300').replace('{height}', '150');
          return stream.thumbnail_url = newUrl;
        })
        gamesData.map(game => {
          let newUrl = game.box_art_url.replace('{width}', '175').replace('{height}', '230');
          return game.box_art_url = newUrl;
        })
        setTopStreams(streamsData);
        setTopGames(gamesData);
      } catch (error) {
        console.error(error);
        throw new Error(error);
      }
    }
    fetchData();
  }, []);
  return (
    <div>
      <p className="topStreamsTitle"><strong>Chaînes live</strong> qui pourraient vous plaire</p>
      <div className="topStreamsList">
        {topStreams.map((stream, index) => (
          <div key={index} className="topStreamsCard">
            <img src={stream.thumbnail_url} alt="Streams lives" className="topStreamsCardImg" />
            <div className="topStreamsCardBody">
              <h5 className="topStreamsCardTitle">{stream.title}</h5>
            </div>
          </div>
        ))}
      </div>
      <p className="topGamesTitle"><strong>Catégories</strong> qui pourraient vous plaire</p>
      <div className="topGamesList">
        {topGames.map((game, index) => (
          <div key={index} className="topGamesCard">
            <img src={game.box_art_url} alt="Catégories" className="topGamesCardImg" />
            <div className="topGamesCardBody">
              <h5 className="topGamesCardTitle">{game.name}</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home;