import React from 'react'
import { useSelector} from 'react-redux';


import '../scss/gridfield.scss';

var mouseDown = 0;
document.body.onmousedown = function() { 
  ++mouseDown;
}
document.body.onmouseup = function() {
  --mouseDown;
}

const TableCloumn = ({ num }) => {

    const state = useSelector((state) => state);
  return (
    <>
        <table>
            <tbody>
                <tr>
                    <td id={`${num}-1`} 
                        onMouseEnter={() => {
                            console.log("enter")
                            if(mouseDown === 1) {
                            document.getElementById(`${num}-1`).classList.add('gray');
                            state.nodes.nodes[`${num}-1`].status = undefined;
                        }}}
                        onClick={() => {
                            document.getElementById(`${num}-1`).classList.add('gray');
                            state.nodes.nodes[`${num}-1`].status = undefined;
                        }}
                        className={ state.nodes.nodes[`${num}-1`].status ? 'green'
                                    : ''
                        }
                    ></td>
                </tr>
                <tr>
                    <td id={`${num}-2`} 
                        onMouseEnter={() => {
                            console.log("enter")
                            if(mouseDown === 1) {
                            document.getElementById(`${num}-2`).classList.add('gray');
                            state.nodes.nodes[`${num}-2`].status = undefined;
                        }}} 
                        onClick={() => {
                            document.getElementById(`${num}-2`).classList.add('gray');
                            state.nodes.nodes[`${num}-2`].status = undefined;
                        }}
                        className={ state.nodes.nodes[`${num}-2`].status ? 'green'
                                    : ''
                        }
                    ></td>
                </tr>
                <tr>
                    <td id={`${num}-3`} 
                        onMouseEnter={() => {
                            console.log("enter")
                            if(mouseDown === 1) {
                            document.getElementById(`${num}-3`).classList.add('gray');
                            state.nodes.nodes[`${num}-3`].status = undefined;
                        }}} 
                        onClick={() => {
                            document.getElementById(`${num}-3`).classList.add('gray');
                            state.nodes.nodes[`${num}-3`].status = undefined;
                        }}
                        className={ state.nodes.nodes[`${num}-3`].status ? 'green'
                                    : ''
                        }
                    ></td>
                </tr>
                <tr>
                    <td id={`${num}-4`} 
                        onMouseEnter={() => {
                            console.log("enter")
                            if(mouseDown === 1) {
                            document.getElementById(`${num}-4`).classList.add('gray');
                            state.nodes.nodes[`${num}-4`].status = undefined;
                        }}} 
                        onClick={() => {
                            document.getElementById(`${num}-4`).classList.add('gray');
                            state.nodes.nodes[`${num}-4`].status = undefined;
                        }}
                        className={ state.nodes.nodes[`${num}-4`].status ? 'green'
                                    : ''
                        }
                    ></td>
                </tr>
                <tr>
                    <td id={`${num}-5`} 
                        onMouseEnter={() => {
                            console.log("enter")
                            if(mouseDown === 1) {
                            document.getElementById(`${num}-5`).classList.add('gray');
                            state.nodes.nodes[`${num}-5`].status = undefined;
                        }}} 
                        onClick={() => {
                            document.getElementById(`${num}-5`).classList.add('gray');
                            state.nodes.nodes[`${num}-5`].status = undefined;
                        }}
                        className={ state.nodes.nodes[`${num}-5`].status ? 'green'
                                    : ''
                        }
                    ></td>
                </tr>
                <tr>
                    <td id={`${num}-6`} 
                        onMouseEnter={() => {
                            console.log("enter")
                            if(mouseDown === 1) {
                            document.getElementById(`${num}-6`).classList.add('gray');
                            state.nodes.nodes[`${num}-6`].status = undefined;
                        }}} 
                        onClick={() => {
                            document.getElementById(`${num}-6`).classList.add('gray');
                            state.nodes.nodes[`${num}-6`].status = undefined;
                        }}
                        className={ state.nodes.nodes[`${num}-6`].status ? 'green'
                                    : ''
                        }
                    ></td>
                </tr>
                <tr>
                    <td id={`${num}-7`} 
                        onMouseEnter={() => {
                            console.log("enter")
                            if(mouseDown === 1) {
                            document.getElementById(`${num}-7`).classList.add('gray');
                            state.nodes.nodes[`${num}-7`].status = undefined;
                        }}} 
                        onClick={() => {
                            document.getElementById(`${num}-7`).classList.add('gray');
                            state.nodes.nodes[`${num}-7`].status = undefined;
                        }}
                        className={ state.nodes.nodes[`${num}-7`].status ? 'green'
                                    : ''
                        }
                    ></td>
                </tr>
                <tr>
                    <td id={`${num}-8`} 
                        onMouseEnter={() => {
                            console.log("enter")
                            if(mouseDown === 1) {
                            document.getElementById(`${num}-8`).classList.add('gray');
                            state.nodes.nodes[`${num}-8`].status = undefined;
                        }}} 
                        onClick={() => {
                            document.getElementById(`${num}-8`).classList.add('gray');
                            state.nodes.nodes[`${num}-8`].status = undefined;
                        }}
                        className={ state.nodes.nodes[`${num}-8`].status ? 'green'
                                    : ''
                        }
                    ></td>
                </tr>
                <tr>
                    <td id={`${num}-9`} 
                        onMouseEnter={() => {
                            console.log("enter")
                            if(mouseDown === 1) {
                            document.getElementById(`${num}-9`).classList.add('gray');
                            state.nodes.nodes[`${num}-9`].status = undefined;
                        }}} 
                        onClick={() => {
                            document.getElementById(`${num}-9`).classList.add('gray');
                            state.nodes.nodes[`${num}-9`].status = undefined;
                        }}
                        className={ state.nodes.nodes[`${num}-9`].status ? 'green'
                                    : ''
                        }
                    ></td>
                </tr>
                <tr>
                    <td id={`${num}-10`} 
                        onMouseEnter={() => {
                            console.log("enter")
                            if(mouseDown === 1) {
                            document.getElementById(`${num}-10`).classList.add('gray');
                            state.nodes.nodes[`${num}-10`].status = undefined;
                        }}} 
                        onClick={() => {
                            document.getElementById(`${num}-10`).classList.add('gray');
                            state.nodes.nodes[`${num}-10`].status = undefined;
                        }}
                        className={ state.nodes.nodes[`${num}-10`].status ? 'green'
                                    : ''
                        }
                    ></td>
                </tr>
                <tr>
                    <td id={`${num}-11`} 
                        onMouseEnter={() => {
                            console.log("enter")
                            if(mouseDown === 1) {
                            document.getElementById(`${num}-11`).classList.add('gray');
                            state.nodes.nodes[`${num}-11`].status = undefined;
                        }}} 
                        onClick={() => {
                            document.getElementById(`${num}-11`).classList.add('gray');
                            state.nodes.nodes[`${num}-11`].status = undefined;
                        }}
                        className={ state.nodes.nodes[`${num}-11`].status ? 'green'
                                    : ''
                        }
                    ></td>
                </tr>
                <tr>
                    <td id={`${num}-12`} 
                        onMouseEnter={() => {
                            console.log("enter")
                            if(mouseDown === 1) {
                            document.getElementById(`${num}-12`).classList.add('gray');
                            state.nodes.nodes[`${num}-12`].status = undefined;
                        }}} 
                        onClick={() => {
                            document.getElementById(`${num}-12`).classList.add('gray');
                            state.nodes.nodes[`${num}-12`].status = undefined;
                        }}
                        className={ state.nodes.nodes[`${num}-12`].status ? 'green'
                                    : ''
                        }
                    ></td>
                </tr>
                <tr>
                    <td id={`${num}-13`} 
                        onMouseEnter={() => {
                            console.log("enter")
                            if(mouseDown === 1) {
                            document.getElementById(`${num}-13`).classList.add('gray');
                            state.nodes.nodes[`${num}-13`].status = undefined;
                        }}} 
                        onClick={() => {
                            document.getElementById(`${num}-13`).classList.add('gray');
                            state.nodes.nodes[`${num}-13`].status = undefined;
                        }}
                        className={ state.nodes.nodes[`${num}-13`].status ? 'green'
                                    : ''
                        }
                    ></td>
                </tr>
                <tr>
                    <td id={`${num}-14`} 
                        onMouseEnter={() => {
                            console.log("enter")
                            if(mouseDown === 1) {
                            document.getElementById(`${num}-14`).classList.add('gray');
                            state.nodes.nodes[`${num}-14`].status = undefined;
                        }}} 
                        onClick={() => {
                            document.getElementById(`${num}-14`).classList.add('gray');
                            state.nodes.nodes[`${num}-14`].status = undefined;
                        }}
                        className={ state.nodes.nodes[`${num}-14`].status ? 'green'
                                    : ''
                        }
                    ></td>
                </tr>
                <tr>
                    <td id={`${num}-15`} 
                        onMouseEnter={() => {
                            console.log("enter")
                            if(mouseDown === 1) {
                            document.getElementById(`${num}-15`).classList.add('gray');
                            state.nodes.nodes[`${num}-15`].status = undefined;
                        }}} 
                        onClick={() => {
                            document.getElementById(`${num}-15`).classList.add('gray');
                            state.nodes.nodes[`${num}-15`].status = undefined;
                        }}
                        className={ state.nodes.nodes[`${num}-15`].status ? 'green'
                                    : ''
                        }
                    ></td>
                </tr>
                <tr>
                    <td id={`${num}-16`} 
                        onMouseEnter={() => {
                            console.log("enter")
                            if(mouseDown === 1) {
                            document.getElementById(`${num}-16`).classList.add('gray');
                            state.nodes.nodes[`${num}-16`].status = undefined;
                        }}} 
                        onClick={() => {
                            document.getElementById(`${num}-16`).classList.add('gray');
                            state.nodes.nodes[`${num}-16`].status = undefined;
                        }}
                        className={ state.nodes.nodes[`${num}-16`].status ? 'green'
                                    : ''
                        }
                    ></td>
                </tr>
                <tr>
                    <td id={`${num}-17`} 
                        onMouseEnter={() => {
                            console.log("enter")
                            if(mouseDown === 1) {
                            document.getElementById(`${num}-17`).classList.add('gray');
                            state.nodes.nodes[`${num}-17`].status = undefined;
                        }}} 
                        onClick={() => {
                            document.getElementById(`${num}-17`).classList.add('gray');
                            state.nodes.nodes[`${num}-17`].status = undefined;
                        }}
                        className={ state.nodes.nodes[`${num}-17`].status ? 'green'
                                    : ''
                        }
                    ></td>
                </tr>
                <tr>
                    <td id={`${num}-18`} 
                        onMouseEnter={() => {
                            console.log("enter")
                            if(mouseDown === 1) {
                            document.getElementById(`${num}-18`).classList.add('gray');
                            state.nodes.nodes[`${num}-18`].status = undefined;
                        }}} 
                        onClick={() => {
                            document.getElementById(`${num}-18`).classList.add('gray');
                            state.nodes.nodes[`${num}-18`].status = undefined;
                        }}
                        className={ state.nodes.nodes[`${num}-18`].status ? 'green'
                                    : ''
                        }
                    ></td>
                </tr>
                <tr>
                    <td id={`${num}-19`} 
                        onMouseEnter={() => {
                            console.log("enter")
                            if(mouseDown === 1) {
                            document.getElementById(`${num}-19`).classList.add('gray');
                            state.nodes.nodes[`${num}-19`].status = undefined;
                        }}} 
                        onClick={() => {
                            document.getElementById(`${num}-19`).classList.add('gray');
                            state.nodes.nodes[`${num}-19`].status = undefined;
                        }}
                        className={ state.nodes.nodes[`${num}-19`].status ? 'green'
                                    : ''
                        }
                    ></td>
                </tr>
                <tr>
                    <td id={`${num}-20`} 
                        onMouseEnter={() => {
                            console.log("enter")
                            if(mouseDown === 1) {
                            document.getElementById(`${num}-20`).classList.add('gray');
                            state.nodes.nodes[`${num}-20`].status = undefined;
                        }}} 
                        onClick={() => {
                            document.getElementById(`${num}-20`).classList.add('gray');
                            state.nodes.nodes[`${num}-20`].status = undefined;
                        }}
                        className={ state.nodes.nodes[`${num}-20`].status ? 'green'
                                    : ''
                        }
                    ></td>
                </tr>
                <tr>
                    <td id={`${num}-21`} 
                        onMouseEnter={() => {
                            console.log("enter")
                            if(mouseDown === 1) {
                            document.getElementById(`${num}-21`).classList.add('gray');
                            state.nodes.nodes[`${num}-21`].status = undefined;
                        }}} 
                        onClick={() => {
                            document.getElementById(`${num}-21`).classList.add('gray');
                            state.nodes.nodes[`${num}-21`].status = undefined;
                        }}
                        className={ state.nodes.nodes[`${num}-21`].status ? 'green'
                                    : ''
                        }
                    ></td> 
                </tr>
                <tr>
                    <td id={`${num}-22`} 
                        onMouseEnter={() => {
                            console.log("enter")
                            if(mouseDown === 1) {
                            document.getElementById(`${num}-22`).classList.add('gray');
                            state.nodes.nodes[`${num}-22`].status = undefined;
                        }}} 
                        onClick={() => {
                            document.getElementById(`${num}-22`).classList.add('gray');
                            state.nodes.nodes[`${num}-22`].status = undefined;
                        }}
                        className={ state.nodes.nodes[`${num}-22`].status ? 'green'
                                    : ''
                        }
                    ></td>
                </tr>
                <tr>
                    <td id={`${num}-23`} 
                        onMouseEnter={() => {
                            console.log("enter")
                            if(mouseDown === 1) {
                            document.getElementById(`${num}-23`).classList.add('gray');
                            state.nodes.nodes[`${num}-23`].status = undefined;
                        }}} 
                        onClick={() => {
                            document.getElementById(`${num}-23`).classList.add('gray');
                            state.nodes.nodes[`${num}-23`].status = undefined;
                        }}
                        className={ state.nodes.nodes[`${num}-23`].status ? 'green'
                                    : ''
                        }
                    ></td>
                </tr>
            </tbody>
        </table>
    </>
  )
}

export default TableCloumn