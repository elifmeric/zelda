/* 
Dealing with the state of player
Reducers-> map state to props and they map
dispatch to props which means that
whatever state is in the reducer will acutally get mapped
to the props of the component
*/ 

const inialState = {
    position: [0,0],
    spriteLocation: '0px 0px',
    direction: 'EAST',
    walkIndex: 0,
}

const playerReducer = (state=inialState, action) => {
    switch (action.type){
        case 'MOVE_PLAYER':
            return {...action.payload}
        default: 
            return state;
    }
}

export default playerReducer;