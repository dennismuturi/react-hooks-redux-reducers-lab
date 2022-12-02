const initialState ={ friends:[]} ;
const action = {
  type: "friends/add",
  payload : {
    name :"Chrome Boi",
    hometown: "NYC",
    id :1
  },
  type: "friends/remove",
     payload: 1,
}

export function manageFriends(state = initialState, action) {

  switch(action.type){
    case "friends/add":
      return {friends: [...state.friends,{name:"Joe",hometown:"Boston",id: 101}]};
      case "friends/remove":
        return {friends:  state.friends.filter(friend => friend.id !== 100)}
      default:
        return state;
  }
}
