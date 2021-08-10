import { useState, useEffect } from 'react'

export const useClock = () => {
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [isActive, setIsActive] = useState(true);

    const handleButton = () => {
        setIsActive(!isActive);
    }

    useEffect(() => {
        if(isActive) {
            setTimeout(() => {
                setSeconds(seconds + 1);
                if(seconds === 60) {
                    setMinutes((minutes + 1) % 60);
                    setSeconds(0);
                }
            }, 1000);
        }
    }, [seconds, minutes, isActive]);

    const format = (num: any) => {
        if(typeof(num) != 'number') {
            return "";
        } else if(num < 10) {
            return "0" + num.toString();
        } else {
            return num;
        }
    }

    return {seconds, minutes, isActive, handleButton, format};
}