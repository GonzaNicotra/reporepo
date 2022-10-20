import React, {useState, createContext, useEffect} from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
    const [items, setItems] = useState(JSON.parse(localStorage.getItem("items"))||[]);

    useEffect(() => {
        localStorage.setItem("items", JSON.stringify(items))
    }, [items])
    

    function addItem(item, quantity){
        if (isInCar(item.id)) {
            let aux = items;
            let itemIndex = aux.findIndex((element) => element.id === item.id);
            aux[itemIndex].quantity += quantity;
            setItems([...aux])
        }else {
            const nuevoItem = {...item, quantity}
            setItems([...items , nuevoItem])
        }
    }

    function removeItem(itemId){
        setItems(items.filter((element) => element.id !== itemId))
    }    

    function clear(){
        setItems([]);
    }

    function isInCar(itemId){
        return items.find((element) => element.id === itemId);
    }

    return(
            <CartContext.Provider value={ {addItem, removeItem, items, clear, isInCar}}>
                {children}
            </CartContext.Provider>
    )
}
