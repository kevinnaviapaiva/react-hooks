import { useCountdown } from "../../hooks/useCountdown";

export const Countdown = () => {
    const {time, handleButton, isActive} = useCountdown();
    return (<>
        <h2>Countdown</h2>
        <b>{time}</b> 
        <button onClick={handleButton}>{isActive ? "Stop": "Continue"}</button>
        <br />
    </>);
}