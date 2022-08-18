const SET_NODES = 'SET_NODES';
const ClICKED_NODES = 'ClICKED_NODES'


const nodes = {}
const clickedNodes = {
    start: false,
    end: false,
    startNode: '40-12',
    endNode: '12-12'
};

const reducer = (state = { nodes, clickedNodes }, action) => {
    switch (action.type) {
        case SET_NODES:
            return {
                ...state,
                nodes: action.nodes,
            }
        case ClICKED_NODES:
           return {
               ...state,
               clickedNodes: action.clickedNodes,
           }
        default: 
            return state;
    }
}

export default reducer;