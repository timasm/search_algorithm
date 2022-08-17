import React from 'react'
import { useSelector} from 'react-redux';


import '../scss/gridfield.scss';

const TableCloumn = ({num, nodes, key}) => {

    const state = useSelector((state) => state);

    console.log(nodes);
  return (
    <>
        <table>
            <tr>
                <td id={`${num}-1`} 
                    onClick={() => {
                        document.getElementById(`${num}-1`).classList.add('green');
                    }}
                    className={ nodes[`${num}-1`].status ? 'green'
                                : ''
                    }
                ></td>
            </tr>
            <tr>
                <td id={`${num}-2`} 
                    onClick={() => {
                        document.getElementById(`${num}-2`).classList.add('green');
                    }}
                    className={ nodes[`${num}-2`].status ? 'green'
                                : ''
                    }
                ></td>
            </tr>
            <tr>
                <td id={`${num}-3`} 
                    onClick={() => {
                        document.getElementById(`${num}-3`).classList.add('green');
                    }}
                    className={ nodes[`${num}-3`].status ? 'green'
                                : ''
                    }
                ></td>
            </tr>
            <tr>
                <td id={`${num}-4`} 
                    onClick={() => {
                        document.getElementById(`${num}-4`).classList.add('green');
                    }}
                    className={ nodes[`${num}-4`].status ? 'green'
                                : ''
                    }
                ></td>
            </tr>
            <tr>
                <td id={`${num}-5`} 
                    onClick={() => {
                        document.getElementById(`${num}-5`).classList.add('green');
                    }}
                    className={ nodes[`${num}-5`].status ? 'green'
                                : ''
                    }
                ></td>
            </tr>
            <tr>
                <td id={`${num}-6`} 
                    onClick={() => {
                        document.getElementById(`${num}-6`).classList.add('green');
                    }}
                    className={ nodes[`${num}-6`].status ? 'green'
                                : ''
                    }
                ></td>
            </tr>
            <tr>
                <td id={`${num}-7`} 
                    onClick={() => {
                        document.getElementById(`${num}-7`).classList.add('green');
                    }}
                    className={ nodes[`${num}-7`].status ? 'green'
                                : ''
                    }
                ></td>
            </tr>
            <tr>
                <td id={`${num}-8`} 
                    onClick={() => {
                        document.getElementById(`${num}-8`).classList.add('green');
                    }}
                    className={ nodes[`${num}-8`].status ? 'green'
                                : ''
                    }
                ></td>
            </tr>
            <tr>
                <td id={`${num}-9`} 
                    onClick={() => {
                        document.getElementById(`${num}-9`).classList.add('green');
                    }}
                    className={ nodes[`${num}-9`].status ? 'green'
                                : ''
                    }
                ></td>
            </tr>
            <tr>
                <td id={`${num}-10`} 
                    onClick={() => {
                        document.getElementById(`${num}-10`).classList.add('green');
                    }}
                    className={ nodes[`${num}-10`].status ? 'green'
                                : ''
                    }
                ></td>
            </tr>
            <tr>
                <td id={`${num}-11`} 
                    onClick={() => {
                        document.getElementById(`${num}-11`).classList.add('green');
                    }}
                    className={ nodes[`${num}-11`].status ? 'green'
                                : ''
                    }
                ></td>
            </tr>
            <tr>
                <td id={`${num}-12`} 
                    onClick={() => {
                        document.getElementById(`${num}-12`).classList.add('green');
                    }}
                    className={ nodes[`${num}-12`].status ? 'green'
                                : ''
                    }
                ></td>
            </tr>
            <tr>
                <td id={`${num}-13`} 
                    onClick={() => {
                        document.getElementById(`${num}-13`).classList.add('green');
                    }}
                    className={ nodes[`${num}-13`].status ? 'green'
                                : ''
                    }
                ></td>
            </tr>
            <tr>
                <td id={`${num}-14`} 
                    onClick={() => {
                        document.getElementById(`${num}-14`).classList.add('green');
                    }}
                    className={ nodes[`${num}-14`].status ? 'green'
                                : ''
                    }
                ></td>
            </tr>
            <tr>
                <td id={`${num}-15`} 
                    onClick={() => {
                        document.getElementById(`${num}-15`).classList.add('green');
                    }}
                    className={ nodes[`${num}-15`].status ? 'green'
                                : ''
                    }
                ></td>
            </tr>
            <tr>
                <td id={`${num}-16`} 
                    onClick={() => {
                        document.getElementById(`${num}-16`).classList.add('green');
                    }}
                    className={ nodes[`${num}-16`].status ? 'green'
                                : ''
                    }
                ></td>
            </tr>
            <tr>
                <td id={`${num}-17`} 
                    onClick={() => {
                        document.getElementById(`${num}-17`).classList.add('green');
                    }}
                    className={ nodes[`${num}-17`].status ? 'green'
                                : ''
                    }
                ></td>
            </tr>
            <tr>
                <td id={`${num}-18`} 
                    onClick={() => {
                        document.getElementById(`${num}-18`).classList.add('green');
                    }}
                    className={ nodes[`${num}-18`].status ? 'green'
                                : ''
                    }
                ></td>
            </tr>
            <tr>
                <td id={`${num}-19`} 
                    onClick={() => {
                        document.getElementById(`${num}-19`).classList.add('green');
                    }}
                    className={ nodes[`${num}-19`].status ? 'green'
                                : ''
                    }
                ></td>
            </tr>
            <tr>
                <td id={`${num}-20`} 
                    onClick={() => {
                        document.getElementById(`${num}-20`).classList.add('green');
                    }}
                    className={ nodes[`${num}-20`].status ? 'green'
                                : ''
                    }
                ></td>
            </tr>
            <tr>
                <td id={`${num}-21`} 
                    onClick={() => {
                        document.getElementById(`${num}-21`).classList.add('green');
                    }}
                    className={ nodes[`${num}-21`].status ? 'green'
                                : ''
                    }
                ></td> 
            </tr>
            <tr>
                <td id={`${num}-22`} 
                    onClick={() => {
                        document.getElementById(`${num}-22`).classList.add('green');
                    }}
                    className={ nodes[`${num}-2`].status ? 'green'
                                : ''
                    }
                ></td>
            </tr>
            <tr>
                <td id={`${num}-23`} 
                    onClick={() => {
                        document.getElementById(`${num}-23`).classList.add('green');
                    }}
                    className={ nodes[`${num}-23`].status ? 'green'
                                : ''
                    }
                ></td>
            </tr>
        </table>
    </>
  )
}

export default TableCloumn