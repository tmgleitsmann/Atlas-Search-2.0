const DEFAULT_OBJ = {
  imageUrl:'https://stat1-mlycdn.bmyy520.com/dota2/Content/images/uploaded/player/762b152a-d069-43c2-bdeb-c509b46cfd43.png',
  name:'?',
  overall:'?',
  club:'',
  country: '',
  position: [],
  shooting: '?',
  dribbling:'?',
  passing:'?',
  phsyicality:'?',
  defending:'?',
  pace:'?',
  foot:'?',
  skill:'?'
};

const DEFAULT_STATE = new Array(11)
  .fill().map(u => (DEFAULT_OBJ));

export default (state=DEFAULT_STATE, action) => {
  switch(action.type){
    case 'UPDATE_TEAM':
      return state.map((item, idx) => {
        if(idx === action.cardId){
          return action.payload;
        }
        else{ return item; }
      })
    case 'REMOVE_PLAYER':
      return state.map((item, idx) => {
        if(idx === action.cardId){
          return DEFAULT_OBJ;
        }
        else{ return item; }
      })
    case 'RESET':
      return {...DEFAULT_STATE};
    default:
      return state;
  }
}

