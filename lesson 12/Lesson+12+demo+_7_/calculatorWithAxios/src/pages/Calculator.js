import React, { useState } from 'react';
import './Calculator.css'
import axios from 'axios';

export const Calculator = () => {
    const [first, setFirst] = useState(0);
    const [second, setSecond] = useState(0);
    const [operator, setOperator] = useState('add');
    const [result, setResult] = useState(0);

    const fetchBackend = e => {
        const url = 'http://localhost:8080/calc/' + first + '/' + second + '/' + operator;
        const response = axios.get(url)
            .then((response) => {
                setResult(response.data.value);
            });
        e.preventDefault();
    }

    let calcpage = (
        <form>
            <h3>Calculator</h3>
            <table>
                <tbody>
                <tr>
                    <td>First number</td>
                    <td><input
                        type="text"
                        name="first"
                        value={first}
                        onChange={e => setFirst(e.target.value)} /></td>
                </tr>
                <tr>
                    <td>Second number</td>
                    <td><input
                        type="text"
                        name="second"
                        value={second}
                        onChange={e => setSecond(e.target.value)} /></td>
                </tr>
                <tr>
                    <td>Operator</td>
                    <td><select
                        type="text"
                        name="operator"
                        value={operator}
                        onChange={e => setOperator(e.target.value)} >
                        <option>add</option>
                        <option>subtract</option>
                        <option>multiply</option>
                        <option>divide</option>
                        <option>clear</option>
                    </select></td>
                </tr>
                <tr>
                    <td></td>
                    <td><button onClick={fetchBackend}>Submit</button></td>
                </tr>
                <tr>
                    <td>Result</td>
                    <td>{result}</td>
                </tr>
                </tbody>
            </table>
        </form>
    );
    return calcpage;
}