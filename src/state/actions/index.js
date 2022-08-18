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
export const setClickedNodes = (clickedNodes) => {
    return(dispatch) => {
        dispatch({
            type: 'ClICKED_NODES',
            clickedNodes: clickedNodes
        });
    }
}



