import { useEffect, useState } from "react"
import GetGifs from "../helpers/getGifs"

export const useFetchGifs = ( category ) => {
    const [images, setImages] = useState([])
    const [isLoading, setIsLoading] = useState( true )

    const getImagenes = async() => {
      const newImages = await GetGifs(category)
      setImages(newImages)
      setIsLoading(false);
    }

    useEffect(() => {
      getImagenes()
    }, [])

    return {
      images,
      isLoading
    }
}

