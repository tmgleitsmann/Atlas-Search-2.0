import React from 'react';
import {withRouter} from 'react-router-dom';
import './SearchComponent.styles.scss';

const SearchComponent = ({imagePath, title, description, history}) => {

  const pickIcon = (titleSelected) => {
    switch(titleSelected){
      case 'countries':
        return 'fa fa-flag';
      case 'players':
        return 'fa fa-id-badge';
      case 'clubs':
        return 'fa fa-home';
      default:
        return '';
    }
  }
  const iconTitle = pickIcon(title);
  console.log(iconTitle);
  return(
    <div className='content'>
      <div className='wrapper'>
        <div className={`background ${title}`} onClick={() => history.push(`${title}`)} >
            <img alt='' src={imagePath} />
            <i className={`${pickIcon(title)}`}></i>
        </div>
      </div>
      <span className='description' style={{color:'white'}}>{description}</span>
    </div>
  );
}

export default withRouter(SearchComponent);