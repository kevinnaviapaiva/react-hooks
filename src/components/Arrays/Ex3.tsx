import { useArrays } from "../../hooks/useArrays";

export const Ex3 = () => {
    const {mealArr, sortMeals, assignNewPrices} = useArrays();
    return ( 
        <>
            <table>
                <tr>
                    <th>Type</th>
                    <th>Name</th>
                </tr>
                {mealArr.map(item => {
                    return <tr>
                        <td>{item.type}</td>
                        <td>{item.name}</td>
                        <td>{item.price ? item.price : null}</td>
                    </tr>    
                })}
            </table>
            <button onClick={() => assignNewPrices()}>Assign prices</button>
            <button onClick={() => sortMeals()}>Ordenar</button>
        </>
    )
}