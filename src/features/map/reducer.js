const inialState = {
    tiles: [],
}

const mapReducer = (state=inialState, action) => {
    switch (action.type){
        case 'ADD_TILES':
            return {...action.payload}
        default: 
            return state;
    }
}

export default mapReducer;