const BASE_URL = "https://www.hispacams.com/wp-json/wp/v2";

export const getPages = async () => {
    const response = await fetch(`${BASE_URL}/pages`);
    const data = await response.json()    
    return data;
}


export const getPosts = async () => {
    const response = await fetch(`${BASE_URL}/posts?_fields=date,slug,link,title,featured_media,_links,_embedded&_embed`);
    const data = await response.json()    
    console.log(data)
    return data;
}