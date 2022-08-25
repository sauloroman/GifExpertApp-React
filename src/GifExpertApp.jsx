import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'One Punch' ]);

    const onAddCategory = newCategory => {

        if ( categories.map( category => category.toLowerCase() ).includes( newCategory ) ) return;

        setCategories( [newCategory[0].toUpperCase() + newCategory.slice(1, newCategory.length), ...categories  ] )
    }

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory 
                onNewCategory = { onAddCategory }
            />

            { categories.map( category => (
                <GifGrid 
                    key={ category } 
                    category = { category }
                />
            ))}
            
        </>
    )
}

export default GifExpertApp;