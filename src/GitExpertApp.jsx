import { useState } from "react"
import { AddCategory, GifGrid } from "./components"

export const GitExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch'])

    const onAddCategory = ( newCategory ) => {
        if (categories.includes(newCategory)) return;

        setCategories([newCategory, ...categories])
        // setCategories(category => [...category, 'One Pieces'])
    }

    return (
        <>
            {/* titulo */}
            <h1>GitExpertApp</h1>

            {/* input */}
            <AddCategory 
                //setCategories={ setCategories }
                onNewCategory={ onAddCategory }
                currentCategories={categories}
            />

            {/* Listado de GIF */}
            { 
                categories.map( (category) => (
                    <GifGrid 
                        key={ category }
                        category={ category }
                    />
                ))
            }
        </>
    )
}