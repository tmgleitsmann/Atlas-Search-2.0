import React from 'react';
import './SelectForm.styles.scss';

const SelectForm = ({listTitle, values, callbackfn}) => {

  const assignFromForm = (event, value) => {
    return callbackfn(event.target.value, value);
  }

  return(
    <div className='select-form-wrapper'>
      <select onChange={(e) => assignFromForm(e, listTitle)} className='select-form-container'>
        <option selected='selected' disabled value={listTitle}>{listTitle}</option>
        {
          values.map((value, idx) => (
            <option key={idx} value={value}>{value}</option>
          ))
        }
      </select>
      <i className="fas fa-caret-down dropdown-icon"></i>
    </div>
  );
}

export default SelectForm;