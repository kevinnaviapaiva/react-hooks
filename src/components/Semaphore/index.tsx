import { useSemaphore } from "../../hooks/useSemaphore";

export const Semaphore = () => {
    const {redLight, yellowLight, greenLight, handleButton, isActive} = useSemaphore();
    return (<>
        <h2>Semaphore</h2>
        {redLight()}
        {yellowLight()} 
        {greenLight()}       
        <button onClick={handleButton}>{isActive ? "Stop": "Continue"}</button>
        <br />
    </>);
}