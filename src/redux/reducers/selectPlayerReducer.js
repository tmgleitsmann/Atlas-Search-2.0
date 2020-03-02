const DEFAULT_OBJ = {
  active:false,
  cardId:0
}

export default (state = DEFAULT_OBJ, action) => {
  switch(action.type){
    case 'SET_PLAYER':
      return {active:true, cardId:action.cardId};
    case 'RESET_PLAYER':
      return DEFAULT_OBJ;
    default:
      return DEFAULT_OBJ;
  }
}