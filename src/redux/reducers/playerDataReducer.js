const DEFAULT_OBJ = {};

export default (state=DEFAULT_OBJ, action) => {
  switch(action.type){
    case 'ASSIGN':
      return {...action.payload};
    case 'RESET':
      return DEFAULT_OBJ;
    default:
      return DEFAULT_OBJ;
  }
}