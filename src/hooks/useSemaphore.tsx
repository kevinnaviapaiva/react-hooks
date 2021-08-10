import { useEffect, useState } from "react";

export const useSemaphore = () => {
    const [time, setTime] = useState(0);
    const [isActive, setIsActive] = useState(true);

    function handleButton() {
        setIsActive(!isActive);
    }

    useEffect(() => {
        if(isActive) {
            setTimeout(() => {
                setTime((time + 1) % 14);
            }, 1000);
        }
    }, [time, isActive]);

    function redLight() {
        if(time >= 0 && time < 5) {
            return <div style={{backgroundColor: 'red'}}>_</div>
        } else {
            return <div style={{backgroundColor: '#ffdddd'}}>_</div>
        }
    }

    function yellowLight() {
        if((time >= 5 && time < 7) || (time >= 12 && time < 14)) {
            return <div style={{backgroundColor: 'yellow'}}>_</div>
        } else {
            return <div style={{backgroundColor: '#feffc2'}}>_</div>
        }
    }

    function greenLight() {
        if(time >= 7 && time < 12) {
            return <div style={{backgroundColor: 'green'}}>_</div>
        } else {
            return <div style={{backgroundColor: '#c6ffc2'}}>_</div>
        }
    }
    return {redLight, yellowLight, greenLight, handleButton, isActive};
}