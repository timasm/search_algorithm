import {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state/index';

import '../scss/gridfield.scss';
import TableCloumn from './TableCloumn';

var __temp_queue = [];

const GridField = () => {

    const [arr, setArr] = useState([]);
    const [nodesCalc, setNodesCalc] = useState(false);


    const state = useSelector((state) => state);
    const dispatch = useDispatch();
    const { setNodes } = bindActionCreators(actionCreators, dispatch);

    const createNodes = () => {
        var nodes = {}
        for(let i=1; i<60; i++) {
            for(let j=1; j<24; j++) {
                nodes[`${i}-${j}`] = '';
            }
        }
        setNodes(nodes);
    }

    const configNodes = () => {
        var temp = state.nodes.nodes;
        if('{}' === JSON.stringify(temp) || nodesCalc) return;
        setNodesCalc(true);
        temp = configInnerNodes(temp);
        temp = configCornerNodes(temp);
        temp = configUpperLowerNodes(temp);
        temp = configLeftRightNodes(temp);
        setNodes(temp);
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
                    status: false
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
            status: false
        }
        temp['59-1'] = {
           1: '59-2',
           2: '58-1',
           status: false
           }
        temp['59-23'] = {
            1: '59-22',
            2: '58-23',
            status: false
        }
        temp['1-23'] = {
            1: '1-22',
            2: '2-23',
            status: false
        }

        return temp;
    }
    const configUpperLowerNodes = (temp) => {
        for(let i=2; i<59; i++) {
            temp[`${i}-1`] = {
                1: `${i+1}-1`,
                2: `${i}-2`,
                3: `${i-1}-1`,
                status: false
            }
            temp[`${i}-23`] = {
                1: `${i}-22`,
                2: `${i+1}-23`,
                3: `${i-1}-23`,
                status: false
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
                status: false
            }
            temp[`59-${j}`] = {
                1: `59-${j-1}`,
                2: `58-${j}`,
                3: `59-${j+1}`,
                status: false
            }
        }
        return temp;
    }


    const startDepthSearch = () => {
        var nodes = state.nodes.nodes;
        var start = '30-12';
        __temp_queue.push(start);
        recusiveDepthSearch(nodes);
    }
    const recusiveDepthSearch = (nodes) => {
        var elem = __temp_queue.pop();
        for(let i = 1; i<5; i++) {
            if(nodes[elem][`${i}`] === undefined) continue;
            if(nodes[`${nodes[elem][`${i}`]}`].status === false) {
                __temp_queue.push(nodes[elem][`${i}`]);
            }
        }
        nodes[elem].status = true;
        setNodes(nodes);
        setTimeout(() => {
            if(__temp_queue.length !== 0) {
                recusiveDepthSearch(nodes);
            }
        },200)
    }

    const startBreadthFirstSearch = () => {
        /**
         * Implementierung
         */
        return;
    }
    const recusivetBreadthFirstSearch = (nodes) => {
        /**
         * Implementierung
         */
        return;
    }


    useEffect(() => {
        createNodes();
        var temp = []
        for(let i=1; i<60; i++) {
            temp.push(i);
        }
        setArr(temp);
    }, [])

    useEffect(() => {
        configNodes();
    }, [state.nodes.nodes])



  return (
    <>
        <div className='btn'>
            <button onClick={startDepthSearch}>Starten der Tiefensuche</button>
            <button onClick={startBreadthFirstSearch}>Starten der Breitensuche</button>
        </div>
        <div className='table-container'>
            { arr.map((el, index) => {
                return (
                    <>
                        <TableCloumn num={el} key={index}/>
                    </>
                );
            })}
        </div>
    </>
  );
}

export default GridField