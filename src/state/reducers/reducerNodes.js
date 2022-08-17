const SET_NODES = 'SET_NODES';
const SET_QUEUE = 'SET_QUEUE'


const nodes = {}
const queue = [];

const reducer = (state = { nodes, queue }, action) => {
    switch (action.type) {
        case SET_NODES:
            return {
                ...state,
                nodes: action.nodes,
            }
        case SET_QUEUE:
           return {
               ...state,
               queue: action.queue,
           }
        default: 
            return state;
    }
}

export default reducer;