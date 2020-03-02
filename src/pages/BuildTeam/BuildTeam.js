import React, {useState, useEffect} from 'react';
import Header from '../../components/Header/Header';
import Formation from '../../components/Formation/Formations';
import { connect } from 'react-redux';
import './BuildTeam.styles.scss';

const BuildTeam = ({players}) => {
  const [selectedFormation, setFormation] = useState('4-3-3');

  const selectFormationCallback = (value) => {
    return setFormation(value);
  }

  return(
    <div className='build-team-wrapper'>
      <Header />
      <Formation data={players} 
        desiredFormation={selectedFormation} 
        callbackfn={selectFormationCallback}/>
    </div>
  );
};

const mapStateToProps = (state, props) => ({players: state.players});
export default connect(mapStateToProps)(BuildTeam);