import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state/index';


import '../scss/gridfield.scss';

var mouseDown = 0;
document.body.onmousedown = function() { 
  ++mouseDown;
}
document.body.onmouseup = function() {
  --mouseDown;
}

const TableCloumn = ({ num }) => {

    const [arr, setArr] = useState([]);

    const state = useSelector((state) => state);
    const dispatch = useDispatch();
    const { setNodes, setClickedNodes } = bindActionCreators(actionCreators, dispatch);

    const fillArr = () => {
        var temp = [];
        for(let i=1; i<24; i++) {
            temp.push(i);
        }
        setArr(temp);
    }

    useEffect(() => {
        fillArr();
    },[])

  return (
    <>
        <table>
            <tbody>
                {arr.map((el, index) => {
                    const nodeStatus = state.nodes.nodes[`${num}-${el}`].status;
                    const nodes = state.nodes.nodes;
                    var clickedNodes = state.nodes.clickedNodes;
                    return (
                        <tr key={index}>
                            <td id={`${num}-${el}`} 
                                onMouseEnter={() => {
                                    if(mouseDown === 1) {
                                        nodes[`${num}-${el}`].status = undefined;
                                        setNodes(nodes);
                                }}}
                                onClick={() => {
                                    if(clickedNodes.start === true && `${num}-${el}` !== clickedNodes.endNode) {
                                        nodes[`${num}-${el}`].status = 'startNode';
                                        nodes[clickedNodes.startNode].status = 'unvisit';
                                        clickedNodes.start = !clickedNodes.start;
                                        clickedNodes.startNode = `${num}-${el}`;
                                        setClickedNodes(clickedNodes);
                                        setNodes(nodes);
                                    }
                                    else if(clickedNodes.end === true && `${num}-${el}` !== clickedNodes.startNode) {
                                        nodes[`${num}-${el}`].status = 'endNode';
                                        nodes[clickedNodes.endNode].status = 'unvisit';
                                        clickedNodes.end = !clickedNodes.end;
                                        clickedNodes.endNode = `${num}-${el}`;
                                        setClickedNodes(clickedNodes);
                                        setNodes(nodes);
                                    }
                                    else if(nodeStatus === 'startNode') {
                                        nodes[`${num}-${el}`].status = '';
                                        clickedNodes.start = !clickedNodes.start;
                                        setClickedNodes(clickedNodes);
                                        setNodes(nodes);
                                    }
                                    else if(nodeStatus === 'endNode') {
                                        nodes[`${num}-${el}`].status = '';
                                        clickedNodes.end = !clickedNodes.end;
                                        setClickedNodes(clickedNodes);
                                        setNodes(nodes);
                                    }
                                    else {
                                        nodes[`${num}-${el}`].status = undefined;
                                        setNodes(nodes);
                                    }
                                }}
                                className={ (() => {
                                        if(nodeStatus === 'visit') {
                                            return 'green';
                                        }
                                        else if(nodeStatus === 'startNode') {
                                            return 'start-node';
                                        }
                                        else if(nodeStatus === 'endNode') {
                                            return 'end-node';
                                        }
                                        else if(nodeStatus === undefined) {
                                            return 'gray';
                                        }
                                        else if(nodeStatus === 'founded') {
                                            return 'founded';
                                        }
                                        else {
                                            return '';
                                        }
                                    })()
                                }
                            ></td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    </>
  )
}

export default TableCloumn