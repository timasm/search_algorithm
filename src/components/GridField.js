import {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state/index';

import '../scss/gridfield.scss';
import TableCloumn from './TableCloumn';

var stack = [];
var queue = [];
var dfsQueue = [];
var lastElem = false;
var run = false;

const GridField = () => {

    const [arr, setArr] = useState([]);
    const [nodesCalc, setNodesCalc] = useState(false);


    const state = useSelector((state) => state);
    const dispatch = useDispatch();
    const { setNodes, setClickedNodes } = bindActionCreators(actionCreators, dispatch);

    const createNodes = () => {
        var nodes = {}
        for(let i=1; i<60; i++) {
            for(let j=1; j<24; j++) {
                nodes[`${i}-${j}`] = '';
            }
        }
        configNodes(nodes);
    }
    const configNodes = (nodes) => {
        if('{}' === JSON.stringify(nodes) || nodesCalc) return;
        setNodesCalc(true);
        nodes = configInnerNodes(nodes);
        nodes = configCornerNodes(nodes);
        nodes = configUpperLowerNodes(nodes);
        nodes = configLeftRightNodes(nodes);
        nodes[state.nodes.clickedNodes.startNode].status = 'startNode';
        nodes[state.nodes.clickedNodes.endNode].status = 'endNode';
        setNodes(nodes);
    }
    const configInnerNodes = (temp) => {
        for(let i=1; i<60; i++) {
            for(let j=1; j<24; j++) {
               if((i>1 && i<59) && (j>1 && j<23)) {
                temp[`${i}-${j}`] = {
                    1: `${i}-${j-1}`,
                    2: `${i+1}-${j}`,
                    3: `${i}-${j+1}`,
                    4: `${i-1}-${j}`,
                    status: 'unvisit',
                    prev: '-'
                    }
               }
            }
        }
        return temp;
    }
    const configCornerNodes = (temp) => {
        temp['1-1'] = {
            1: '2-1',
            2: '1-2',
            status: 'unvisit',
            prev: '-'
        }
        temp['59-1'] = {
           1: '59-2',
           2: '58-1',
           status: 'unvisit',
           prev: '-'
           }
        temp['59-23'] = {
            1: '59-22',
            2: '58-23',
            status: 'unvisit',
            prev: '-'
        }
        temp['1-23'] = {
            1: '1-22',
            2: '2-23',
            status: 'unvisit',
            prev: '-'
        }

        return temp;
    }
    const configUpperLowerNodes = (temp) => {
        for(let i=2; i<59; i++) {
            temp[`${i}-1`] = {
                1: `${i+1}-1`,
                2: `${i}-2`,
                3: `${i-1}-1`,
                status: 'unvisit',
                prev: '-'
            }
            temp[`${i}-23`] = {
                1: `${i}-22`,
                2: `${i+1}-23`,
                3: `${i-1}-23`,
                status: 'unvisit',
                prev: '-'
            }
        }
        return temp;
    }
    const configLeftRightNodes = (temp) => {
        for(let j=2; j<23; j++) {
            temp[`1-${j}`] = {
                1: `1-${j-1}`,
                2: `2-${j}`,
                3: `1-${j+1}`,
                status: 'unvisit',
                prev: '-'
            }
            temp[`59-${j}`] = {
                1: `59-${j-1}`,
                2: `58-${j}`,
                3: `59-${j+1}`,
                status: 'unvisit',
                prev: '-'
            }
        }
        return temp;
    }


    const startDepthSearch = () => {
        var nodes = state.nodes.nodes;
        stack.push(state.nodes.clickedNodes.startNode);
        run = true;
        recusiveDepthSearch(nodes);
    }
    const recusiveDepthSearch = (nodes) => {
        var elem = stack.pop();
        for(let i = 1; i<5; i++) {
            if(nodes[elem][`${i}`] === undefined) continue;
            if(nodes[`${nodes[elem][`${i}`]}`].status === 'endNode') {
                nodes[`${nodes[elem][`${i}`]}`].prev = elem;
                nodes[elem].status = 'visit';
                nodes[`${nodes[elem][`${i}`]}`].status = 'founded';
                setNodes(nodes);
                drawPath(`${nodes[elem][`${i}`]}`);
                return;
            }
            if(nodes[`${nodes[elem][`${i}`]}`].status === 'unvisit') {
                nodes[`${nodes[elem][`${i}`]}`].prev = elem;
                stack.push(nodes[elem][`${i}`]);
            }
        }
        if(nodes[elem].status !== 'startNode') nodes[elem].status = 'visit';
        setNodes(nodes);
        setTimeout(() => {
            if(stack.length !== 0 && run) {
                recusiveDepthSearch(nodes);
            }
        }, 200)
    }

    /**
     * Breitensuche
     */
    const startBreadthFirstSearch = () => {
        var nodes = state.nodes.nodes;
        queue.push(state.nodes.clickedNodes.startNode);
        run = true;
        recusivetBreadthFirstSearch(nodes);
    }
    const recusivetBreadthFirstSearch = (nodes) => {
        var elem = queue.pop();
        for(let i = 1; i<5; i++) {
            if(nodes[elem][`${i}`] === undefined) continue;
            if(nodes[`${nodes[elem][`${i}`]}`].status === 'endNode') {
                nodes[`${nodes[elem][`${i}`]}`].prev = elem;
                nodes[elem].status = 'visit';
                nodes[`${nodes[elem][`${i}`]}`].status = 'founded';
                setNodes(nodes);
                drawPath(`${nodes[elem][`${i}`]}`);
                return;
            }
            if(nodes[`${nodes[elem][`${i}`]}`].status === 'unvisit') {
                nodes[`${nodes[elem][`${i}`]}`].prev = elem;
                queue.unshift(nodes[elem][`${i}`]);
                nodes[`${nodes[elem][`${i}`]}`].status = 'visit';
                setNodes(nodes);        
            }
        }
        if(!nodes[elem].status === 'startNode') nodes[elem].status = 'visit';
        setTimeout(() => {
            if(queue.length !== 0 && run) {
                recusivetBreadthFirstSearch(nodes);
            }
        }, 50)
    }


    /**
     * Draw Maze
     */
    const drawPath = (goalNode) => {
        var nodes = state.nodes.nodes;
        const previous = nodes[goalNode].prev;
        nodes[previous].status = 'pathNode';
        if(previous === state.nodes.clickedNodes.startNode) return;
        setNodes(nodes);
        setTimeout(() => {
            drawPath(previous);
        }, 100);
    }
    const dfsMazeInitialization = () => {
        var nodes = state.nodes.nodes;
        nodes[state.nodes.clickedNodes.startNode].status = 'unvisit';
        nodes[state.nodes.clickedNodes.endNode].status = 'unvisit';
        for(let i=1; i<60; i++) {
            for(let j=1; j<24; j++) {
                if(nodes[`${i}-${j}`].status === 'pathNode') {
                    nodes[`${i}-${j}`].status = 'unvisit';
                }
                if(j % 2 === 0) {
                    nodes[`${i}-${j}`].status = undefined;
                }
                if(i % 2 === 0) {
                    nodes[`${i}-${j}`].status = undefined;
                }
            }
        }
        setNodes(nodes);
    }
    const dfsMazeConvertVisitToNothing = () => {
        var nodes = state.nodes.nodes;
        for(let i=1; i<60; i++) {
            for(let j=1; j<24; j++) {
                if(nodes[`${i}-${j}`].status === 'visit') {
                    nodes[`${i}-${j}`].status = 'unvisit';
                }
            }
        }
        setNodes(nodes);
    }
    const dfsMazeDraw = (node) => {
        var nodes = state.nodes.nodes;
        nodes[node].status = 'visit';
        const neighbors = checkNeighbors(node);
        const filteredNeighbors = neighbors.filter((el) => {
            if(nodes[el].status !== 'unvisit') return false;
            else return true;
        });
        if(lastElem && dfsQueue.length === 1) {
            console.log('Bis hier')
            dfsMazeConvertVisitToNothing();
            return;
        }
        if(filteredNeighbors.length === 0) {
            dfsMazeDraw(dfsQueue.pop());
            return;
        }
        lastElem = true;
        const randomChoice = filteredNeighbors[Math.floor(Math.random() * filteredNeighbors.length)];
        if(parseInt(randomChoice.split('-')[0]) === parseInt(node.split('-')[0])) {
            if(parseInt(randomChoice.split('-')[1]) > parseInt(node.split('-')[1])) {
                nodes[`${parseInt(node.split('-')[0])}-${parseInt(node.split('-')[1]) + 1}`].status = 'visit';
            }
            else {
                nodes[`${parseInt(node.split('-')[0])}-${parseInt(node.split('-')[1]) - 1}`].status = 'visit';
            }
        }
        else {
            if(parseInt(randomChoice.split('-')[0]) > parseInt(node.split('-')[0])) {
                nodes[`${parseInt(node.split('-')[0]) + 1}-${parseInt(node.split('-')[1])}`].status = 'visit';
            }
            else {
                nodes[`${parseInt(node.split('-')[0]) - 1}-${parseInt(node.split('-')[1])}`].status = 'visit';
            }
        }
        nodes[randomChoice].status = 'visit'
        dfsQueue.push(randomChoice);
        //Wir müssen node wieder hinzufügen, node hat ja evtl. vier Nachbarn aber wir haben ihn bisher immer nachdem wir einen
        //explored hatten verworfen indem wir ihn nicht mehr der Queue für mögliche Backtracks hinzugefügt haben
        dfsQueue.push(node);
        setNodes(nodes);
        setTimeout(() => {
            dfsMazeDraw(dfsQueue.pop());
        }, 50);
    }
    const dfsMaze = () => {
        dfsMazeInitialization();
        setClickedNodes({
            start: true,
            end: true,
            startNode: state.nodes.clickedNodes.startNode,
            endNode: state.nodes.clickedNodes.endNode
        });
        const start = '1-1';
        dfsQueue.push(start);
        dfsMazeDraw(start);
    }
    const checkNeighbors = (elem) => {   
        var x = parseInt(elem.split('-')[0]);
        var y = parseInt(elem.split('-')[1]);
        //top left corner
        if(x === 1 && y === 1) return [`3-1`, `1-3`];
        //top right corner
        else if(x === 59 && y === 1) return [`57-1`, `59-3`];
        //bottom left corner
        else if(x === 1 && y === 23) return [`1-21`, `3-23`];
        //bottom right corner
        else if(x === 59 && y === 23) return [`57-23`, `59-21`];
        //left side
        else if (x === 1) return [`${x}-${y-2}`, `${x}-${y+2}`, `${x+2}-${y}`];
        //right side
        else if (x === 59) return [`${x}-${y-2}`, `${x}-${y+2}`, `${x-2}-${y}`];
        //top side
        else if (y === 1) return [`${x-2}-${y}`, `${x+2}-${y}`, `${x}-${y+2}`];
        //bottom side
        else if (y === 23) return [`${x-2}-${y}`, `${x+2}-${y}`, `${x}-${y-2}`];
        //mid section
        else return [`${x-2}-${y}`, `${x+2}-${y}`, `${x}-${y-2}`, `${x}-${y+2}`];
    }

    const stopAnimation = () => {
        run = false;
    }

    const resetGridTable = () => {
        var nodes = state.nodes.nodes;
        run = false;
        stack = [];
        queue = [];
        for(let i=1; i<60; i++) {
            for(let j=1; j<24; j++) {
                nodes[`${i}-${j}`].status = 'unvisit';
                document.getElementById(`${i}-${j}`).classList.remove('gray');
            }
        }
        run = true;
        nodes[state.nodes.clickedNodes.startNode].status = 'startNode';
        nodes[state.nodes.clickedNodes.endNode].status = 'endNode';
        setNodes(nodes);
    }


    useEffect(() => {
        createNodes();
        var temp = []
        for(let i=1; i<60; i++) {
            temp.push(i);
        }
        setArr(temp);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

  return (
    <>
        <div className='btn'>
            <button onClick={startDepthSearch}>Starten der Tiefensuche</button>
            <button onClick={startBreadthFirstSearch}>Starten der Breitensuche</button>
            <button onClick={stopAnimation}>Stop</button>
            <button onClick={resetGridTable}>Zurücksetzen</button>
            <button onClick={dfsMaze}>Labyrinth</button>
        </div>
        <div className='table-container'>
            { arr.map((el, index) => {
                console.log();
                return (
                    <TableCloumn num={el} key={index}/> 
                );
            })}
        </div>
    </>
  );
}

export default GridField