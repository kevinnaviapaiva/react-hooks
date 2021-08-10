import { useClock } from "../../hooks/useClock";

export const Clock = () => {
    const {seconds, minutes, isActive, handleButton, format} = useClock();

    return (<>
        <h2>Clock</h2>
        <b>{format(minutes)}</b>: <b>{format(seconds)}</b> 
        <button onClick={() => handleButton()}>{isActive ? "Stop": "Continue"}</button>
        <br />
    </>);
}