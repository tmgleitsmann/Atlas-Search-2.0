import React, {useState} from 'react';
import './StarBlock.styles.scss';

const StarBlock = ({data}) => {
  return(
      <div className='skills'>
        <input type='radio' name='star' id='star1'/><label htmlFor='star1' onClick={()=>{data.changeStars(5)}}></label>
        <input type='radio' name='star' id='star2'/><label htmlFor='star2' onClick={()=>{data.changeStars(4)}}></label>
        <input type='radio' name='star' id='star3'/><label htmlFor='star3' onClick={()=>{data.changeStars(3)}}></label>
        <input type='radio' name='star' id='star4'/><label htmlFor='star4' onClick={()=>{data.changeStars(2)}}></label>
        <input type='radio' name='star' id='star5'/><label htmlFor='star5' onClick={()=>{data.changeStars(1)}}></label>
      </div> 
  );
};

export default StarBlock;