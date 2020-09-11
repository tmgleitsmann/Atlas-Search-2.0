import React from 'react';
import './CustomButton.styles.scss';


const CustomButton = ({text}) => (
  <button className='custom-button'>
    {text}
  </button>
);

export default CustomButton;