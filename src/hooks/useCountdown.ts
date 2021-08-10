import { useEffect, useState } from "react";

export const useCountdown = () => {
    const [time, setTime] = useState(100);
    const [isActive, setIsActive] = useState(true);

    const handleButton = () => {
        setIsActive(!isActive);
    }

    useEffect(() => {
        if(isActive) {
            setTimeout(() => {
                if(time > 0) {
                    setTime(time - 1);
                }
            }, 1000);
        }
    }, [time, isActive]);
    return {time, handleButton, isActive};
}