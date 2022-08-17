/**
 * State function for reducerNodes
 */
export const setNodes = (nodes) => {
    return(dispatch) => {
        dispatch({
            type: 'SET_NODES',
            nodes: nodes
        });
    }
}
export const setQueue = (queue) => {
    return(dispatch) => {
        dispatch({
            type: 'SET_QUEUE',
            queue: queue
        });
    }
}



