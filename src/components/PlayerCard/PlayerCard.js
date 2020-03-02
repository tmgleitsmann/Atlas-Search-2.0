import React from 'react';
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import './PlayerCard.styles.scss';
import {setPlayer} from '../../redux/actions/selectPlayerActions';
import {updateTeam, removePlayer} from '../../redux/actions/playerActions';
import {postPlayers, removePlayers} from '../../ApiRoutes';
import axios from 'axios';

const PlayerCard = ({imageUrl, id, name, position, overall, club, country, history, cardId, setPlayer, removePlayer, playerData, selectPlayer, updateTeam}) => {

  const handleClick = () =>{
    if(Object.entries(playerData).length > 0){
      updateTeam(playerData, cardId);
      axios.post(`${postPlayers}?ID=${id}&value=${cardId}`);
    }
    else if(name.length > 1){
      removePlayer(cardId);
      axios.post(`${removePlayers}?value=${cardId}`);
    }
    else{
      setPlayer(cardId)
      history.push('/');
    }
  }

  const cardStyler = () => {
    if(name.length > 1){
      return 'remove-player';
    }
    if(Object.entries(playerData).length > 1){
      return'insert-player'
    }
  }

  return(
    <div className={`${cardStyler()} player-card-container`} onClick={handleClick}>
      <div className='player-card-image'>
        <img style={{height:'48px', width:'48px'}} src={imageUrl}/>
      </div>
      <div className='player-card-attribs'>
        <span>{name}</span>
        <span>{club}</span>
        <span>{country}</span>
        <span>Position : {position.reduce((accumulator, currentValue) => {return accumulator+' '+currentValue}, ' ')}</span>
        <span>Overall : {overall}</span>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return{
    setPlayer: (value) => dispatch(setPlayer(value)),
    updateTeam: (object, id) => dispatch(updateTeam(object, id)),
    removePlayer: id => dispatch(removePlayer(id))
  };
}
const mapStateToProps = (state, props) => 
{
  return{
    playerData: state.playerData,
    selectPlayer: state.selectPlayer
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(PlayerCard));