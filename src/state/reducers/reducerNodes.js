const SET_NODES = 'SET_NODES';

const nodes = {}

const reducer = (state = { nodes }, action) => {
    switch (action.type) {
        case SET_NODES:
            return {
                ...state,
                nodes: action.nodes,
            }
        default: 
            return state;
    }
}

export default reducer;