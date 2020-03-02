export const setPlayer = (value) => {
  return{
    type:'SET_PLAYER',
    cardId:value
  }
}
export const resetPlayer = () => {
  return{
    type:'RESET_PLAYER'
  };
}