const apiKey = "JqBpVrg3WzpCN3gjpB4uaIdZem4n7nTg"

const GetGifs = async(category) => {
    const URL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}&limit=10`
    const response = await fetch( URL )
    const { data } = await response.json()
    const gits = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))

    return gits
}

export default GetGifs;
