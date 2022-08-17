import {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { $CombinedState, bindActionCreators } from 'redux';
import { actionCreators } from '../state/index';

import '../scss/gridfield.scss';
import TableCloumn from './TableCloumn';


const GridField = () => {

    const [arr, setArr] = useState([]);
    const [nodesCalc, setNodesCalc] = useState(false);
    const [isworking, setIsWorking] = useState(true);
    const [knoten, setKnoten] = useState({});


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
        setKnoten(nodes);
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

    function fibonacci(num) {
        if(num < 2) {
            return num;
        }
        else {
            return fibonacci(num-1) + fibonacci(num - 2);
        }
    }

    const breadthFirstSearch = () => {
        var nodes = knoten;
        var queue = [];
        var start = '30-12';
        queue.push(start);
        while(queue.length > 0) {
            if(isworking) {
                //setIsWorking(false);
                var elem = queue.pop();
                console.log(elem);
                for(let i = 1; i<5; i++) {
                    //console.log(nodes[elem]);
                    //console.log('Hier', nodes[elem][`${i}`]);
                    if(nodes[elem][`${i}`] === undefined) continue;
                    if(nodes[`${nodes[elem][`${i}`]}`].status === false) {
                        queue.push(nodes[elem][`${i}`]);
                    }
                }
                //console.log(nodes[elem].status);
                nodes[elem].status = true;
                console.log(elem);
                //document.getElementById(`${elem}`).classList.add('green');
                //setNodes(nodes);
                setKnoten(nodes);
                console.log(fibonacci(40));
            }

            /*setTimeout(() => {
                setIsWorking(true);
            }, 500)*/
        }
    }


    useEffect(() => {
        createNodes();
        var temp = []
        for(let i=1; i<60; i++) {
            temp.push(i);
        }
        setArr(temp);
    },[])

    useEffect(() => {
        configNodes();
    }, [state.nodes.nodes])


  return (
    <>
        <button onClick={breadthFirstSearch}>Starten</button>
        <div className='table-container'>
            { arr.map((el, index) => {
                return (
                    <>
                        <TableCloumn num={el} nodes={knoten} key={index}/>
                    </>
                );
            })}
        </div>
    </>
  );
}

export default GridField