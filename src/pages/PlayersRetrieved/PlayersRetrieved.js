import React from 'react';
import Header from '../../components/Header/Header';
import QueriedPlayer from '../../components/QueriedPlayer/QueriedPlayer';
import './PlayersRetrieved.styles.scss';

//sort the map by overall
//may need to add filters 

const PlayersRetrieved = (props) => {
  const playersList = props.location.state.players;
  return(
    <div className='players-retrieved-wrapper'>
    <Header />
    <div className='pr-wrap'>
      {
        playersList.map((player, idx)=>(
          <QueriedPlayer key={idx} playerData={player}/>
        ))
      }
      </div>
    </div>
  );
};

export default PlayersRetrieved;