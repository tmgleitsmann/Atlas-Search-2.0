import React, {useState} from 'react';
import Header from '../../components/Header/Header';
import imageList from '../../images/clubs';
import SearchBar from '../../components/SearchBar/SearchBar';
import ClubSlots from '../../components/ClubSlots/ClubSlots';
import './SearchClubs.styles.scss';

const SearchClubs = () =>{
  const [images] = useState(imageList.items);
  const [filterClub, setFilterClub] = useState('');

  const clubCallback = (value) => {
    setFilterClub(value);
  }

  const reduced = images.reduce((filtered, option)=>{
    if (option.title.toUpperCase().includes(filterClub.toUpperCase())){
      filtered.push(option);
    }
    return filtered;
  }, []);

  return(
    <div className='club-overall'>
      <Header />
      <div className='sp-sb'>
        <SearchBar namecallback={clubCallback} color={'green'}/>
      </div>
      <div className='wrapper'>
        {
          reduced.map(({...objectprops}, index) => (
            <ClubSlots key={index} {...objectprops} />
          ))
        }
      </div>
  </div>
  );
}

export default SearchClubs;