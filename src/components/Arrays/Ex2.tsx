import { useArrays } from "../../hooks/useArrays";

export const Ex2 = () => {
    const { arr, setArr } = useArrays();
    return (
        <>
            <label>Arreglo</label>
            <input type="text" value={arr} onChange={e => setArr(e.target.value)} />
            <br />
            La suma del arreglo es {arr.split(" ").map(item => {
                return parseInt(item);
            }).reduce((total, num) => {return total + num}, 0)} <br />
            Multiplicar los numeros impares * 2<br/ >
            <ul>
            {arr.split(" ").map(item => parseInt(item)).map(item => 
                <li>{item % 2 === 0 ? item: 2 * item}</li>)}
            </ul>
        </>
    )
}