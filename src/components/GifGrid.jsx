import { useState,useEffect } from 'react'
//import { getGifs } from '../helpers/getGifs' // ya no se usa por mi hook personalizado
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifItem } from './GifItem';

export const GifGrid = ({category}) => {
       // # Vamos a crear un Hook para optimizar este codigo siguiente: 
    // const [images, setImages] = useState([]);

    // const getImages= async() => {
    //     const newImages=await getGifs(category);
    //     setImages(newImages);
    // }
    // useEffect( () => {
    //     getImages();
    // },[]);
    const {images, isLoading} = useFetchGifs(category);
    
    console.log(isLoading);
    
    
    


    return (
        <>
            <h3>{category}</h3>
            {
                //IsLoading se puede hacer ese componente para mostrarle algo mejor tipo algo cargando
                isLoading ??  (<h1>Cargando...</h1>) 
            }


            {
                <div className='card-grid'>
                    { 
                        images.map((image) => ( 
                        <GifItem 
                            key={image.id}
                            {...image} // esto exparce todos los parametros de image y directo donde utilice puedo solo obtener lo que quiero {tittle, url}
                        />))
                    }
                </div>
            }
        </>
    )
}
