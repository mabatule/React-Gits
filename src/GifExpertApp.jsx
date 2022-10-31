import { useState } from "react"
import { AddCtegory,GifGrid } from "./components"

// Vamos a reducir estas importaciones a como esta arriba se conoce como archivos de barril
//import {AddCtegory} from './components/AddCtegory'
//import { GifGrid } from "./components/GifGrid"

export const GifExpertApp = () => {
    
    const [categories, setCategories] = useState(['One Piece'])
    const onAddCategory = (wordAdd) => {
        if(categories.includes(wordAdd) ) return;

        setCategories([wordAdd, ...categories]);
    } 
    return (
        <>
            {/* Titulo */}
            <h1>GifExpertApp</h1>
            {/* Input */}
            <AddCtegory 
                onAddCategory={onAddCategory}
            />
            {/* Listado de Gif */}


            {
                categories.map((categorie) =>  (
                        <GifGrid key={categorie}
                        category={categorie}/>
                    )
                )
            }


                {/* Gif Item */}
        
        </>
    )
}
