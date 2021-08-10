import { useArrays } from "../../hooks/useArrays";

export const Ex1 = () => {
    const {str1, setStr1, str2, setStr2, reverse} = useArrays();
    return (
        <>
            String <br />
            <input type="text" value={str1} onChange={e => setStr1(e.target.value)} />
            <br />
            Pattern <br />
            <input type="text" value={str2} onChange={e => setStr2(e.target.value)} />
            <br /> 
            "{str2}" is {str1.indexOf(str2) === -1 ? "no" : ""} part of "{str1}"
            <br />
            <button onClick={() => {setStr1(reverse(str1)); setStr2(reverse(str2))}}>Reverse string</button>
        </>
    )
}