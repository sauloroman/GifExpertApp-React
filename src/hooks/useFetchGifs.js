import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

const useFetchGifs = category => {

    const [images, setImages ] = useState([]);
    const [ isLoading, setIsLoading ] = useState( true );

    // Otra forma de usar la promesa 
    const getImages = async () => {
        const newImages = await getGifs( category );
        setImages( newImages );
        setIsLoading( false );
    }

    useEffect( () => {
        // getGifs( category )
        //     .then( newImages => setImages( newImages ));
        getImages();
    }, [] );

    return {
        images,
        isLoading
    }
}

export default useFetchGifs