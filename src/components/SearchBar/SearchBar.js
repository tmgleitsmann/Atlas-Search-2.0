import React, {useState} from 'react';
import './SearchBar.styles.scss';

const SearchBar = ({namecallback, color}) => {
  const [playerName, setPlayerName] = useState('');
  const [iconClicked, toggleIconClicked] = useState(false);

  const handleChange = (e) => {
    setPlayerName(e.target.value);
    namecallback(e.target.value, false);
    //console.log('handling change ', e.target.value);
  }
  const focusInput = (component) => {
    if (component) {
      component.focus();
    }
  };
  const submitInput = (e)=>{
    e.preventDefault();
    namecallback(playerName, true);
  }

  
  return(
    <div className={`${iconClicked ? 'input-wrapper':'disabled input-wrapper'} ${color}`}>
    <form onSubmit={(e)=>submitInput(e)}> 
      <input id="myInput" autoComplete="off" onChange={(e)=>handleChange(e)} 
        type='text'
        className='input-text'
        ref={focusInput}
      />
      </form>
      <i onClick={()=>toggleIconClicked(!iconClicked)} className="fas fa-search"></i>
    </div>
  );
};

export default SearchBar;