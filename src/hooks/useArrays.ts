import { useState } from "react";

export const useArrays = () => {
    const [str1, setStr1] = useState("");
    const [str2, setStr2] = useState("");

    const [arr, setArr] = useState("");

    function reverse(str: string) {
        return str.split("").reverse().join("");
    }

    type Meal = {
        type: string,
        name: string,
        price?: number
    }

    let meals: Meal[] = [
        {
            type: 'fruit', name: 'apple'
        },
        {
            type: 'drink', name: 'coca cola'
        },
        {
            type: 'drink', name: 'pepsi'
        },
        {
            type: 'fruit', name: 'orange'
        },
        {
            type: 'fruit', name: 'banana'
        }
    ]
    const [mealArr, setMealArr] = useState(meals);

    function assignNewPrices() {
        setMealArr(mealArr.map(item => {
            item.price = Math.floor(Math.random() * 100);
            return item;
        }))
    }

    function sortMeals() {
        setMealArr(mealArr.sort((item1, item2) => {
            let comp = item1.type.localeCompare(item2.type);
            if(comp !== 0) return comp;
            if(item1.price && item2.price) return item2.price - item1.price;
            else return 0;
        }))
    }

    return {str1, setStr1, str2, setStr2, reverse, arr, setArr, mealArr, sortMeals, assignNewPrices};
}