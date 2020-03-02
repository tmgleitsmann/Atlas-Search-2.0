import React from 'react';
import PlayerCard from '../../PlayerCard/PlayerCard';
import './Formations.styles.scss';
//maybe we can export each formation. 

export const FORMATION_ONE = ({data}) => (
  <div className='formation-wrapper'>
    <div className='formation-one-forwards'>
      <PlayerCard {...data[8]} cardId={8}/>
      <div className='lone-striker'>
        <PlayerCard {...data[9]} cardId={9}/>
      </div>
      <PlayerCard {...data[10]} cardId={10}/>
    </div>
    <div className='formation-one-midfielders'>
      <PlayerCard {...data[5]} cardId={5}/>
      <div className='attacking-mid'>
        <PlayerCard {...data[6]} cardId={6}/>
      </div>
      <PlayerCard {...data[7]} cardId={7}/>
    </div>
    <div className='formation-one-defenders'>
      <div className='formation-outer'>
        <PlayerCard {...data[1]} cardId={1}/>
      </div>
      <PlayerCard {...data[2]} cardId={2}/>
      <PlayerCard {...data[3]} cardId={3}/>
      <div className='formation-outer'>
        <PlayerCard {...data[4]} cardId={4}/>
      </div>
    </div>
    <div className='goalkeeper'>
      <PlayerCard {...data[0]} cardId={0}/>
    </div>
  </div>
);

export const FORMATION_TWO = ({data}) => (
  <div className='formation-wrapper'>
    <div className='formation-two-forwards'>
      <PlayerCard {...data[9]} cardId={9}/>
      <PlayerCard {...data[10]} cardId={10}/>
    </div>
    <div className='formation-two-midfielders'>
      <div className='formation-outer'>
        <PlayerCard {...data[5]} cardId={5}/>
      </div>
      <PlayerCard {...data[6]} cardId={6}/>
      <PlayerCard {...data[7]} cardId={7}/>
      <div className='formation-outer'>
        <PlayerCard {...data[8]} cardId={8}/>
      </div>
    </div>
    <div className='formation-two-defenders'>
      <div className='formation-outer'>
        <PlayerCard {...data[1]} cardId={1}/>
      </div>
      <PlayerCard {...data[2]} cardId={2}/>
      <PlayerCard {...data[3]} cardId={3}/>
      <div className='formation-outer'>
        <PlayerCard {...data[4]} cardId={4}/>
      </div>
    </div>
    <div className='goalkeeper'>
      <PlayerCard {...data[0]} cardId={0}/>
    </div>
  </div>
);

export const FORMATION_THREE = ({data}) => (
  <div className='formation-wrapper'>
    <div className='formation-three-forwards'>
      <div className='lone-striker'>
        <PlayerCard {...data[9]} cardId={9}/>
      </div>
    </div>
    <div className='formation-three-midfielders'>
      <div className='formation-outer'>
        <PlayerCard {...data[8]} cardId={8}/>
      </div>
      <PlayerCard {...data[5]} cardId={5}/>
      <div className='attacking-mid'>
        <PlayerCard {...data[6]} cardId={6}/>
      </div>
      <PlayerCard {...data[7]} cardId={7}/>
        <div className='formation-outer'>
          <PlayerCard {...data[10]} cardId={10}/>
        </div>
    </div>
    <div className='formation-three-defenders'>
      <div className='formation-outer'>
        <PlayerCard {...data[1]} cardId={1}/>
      </div>
      <PlayerCard {...data[2]} cardId={2}/>
      <PlayerCard {...data[3]} cardId={3}/>
      <div className='formation-outer'>
        <PlayerCard {...data[4]} cardId={4}/>
      </div>
    </div>
    <div className='goalkeeper'>
      <PlayerCard {...data[0]} cardId={0}/>
    </div>
  </div>
);

export const FORMATION_FOUR = ({data}) => (
  <div className='formation-wrapper'>
    <div className='formation-three-forwards'>
      <div className='lone-striker'>
        <PlayerCard {...data[9]} cardId={9}/>
      </div>
    </div>
    <div className='formation-two-midfielders'>
      <div className='formation-outer'>
        <PlayerCard {...data[8]} cardId={8}/>
      </div>
      <PlayerCard {...data[6]} cardId={6}/>
      <PlayerCard {...data[7]} cardId={7}/>
      <div className='formation-outer'>
        <PlayerCard {...data[10]} cardId={10}/>
      </div>
    </div>
    <div className='formation-four-defenders'>
      <div className='formation-outer'>
        <PlayerCard {...data[1]} cardId={1}/>
      </div>
      <PlayerCard {...data[2]} cardId={2}/>
      <PlayerCard {...data[3]} cardId={3}/>
      <PlayerCard {...data[4]} cardId={4}/>
      <div className='formation-outer'>
        <PlayerCard {...data[5]} cardId={5}/>
      </div>
    </div>
    <div className='goalkeeper'>
      <PlayerCard {...data[0]} cardId={0}/>
    </div>
  </div>
);