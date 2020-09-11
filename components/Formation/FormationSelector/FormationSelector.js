import React from 'react';
import './FormationSelector.styles.scss';

const FormationSelector = ({callbackfn}) => {

  //callback for formation should go here
  const assignFormation = (e) => {
    console.log(e.target.value);
    return callbackfn(e.target.value);
  }

  return(
    <div className='formation-selector-wrapper'>
        <select className='formation-select-form' onChange={(e) => assignFormation(e)}>
          <option selected='selected' value='4-3-3'>4-3-3</option>
          <option value='4-4-2'>4-4-2</option>
          <option value='4-5-1'>4-5-1</option>
          <option value='5-4-1'>5-4-1</option>
        </select>
        <i className="fas fa-caret-down"></i>
    </div>
  );
};

export default FormationSelector;