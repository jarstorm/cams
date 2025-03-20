const BASE_URL = "https://www.hispacams.com/wp-json/wp/v2";
//const BASE_URL = "https://www.nasa.gov/wp-json/wp/v2";

export const getPages = async () => {
  try {
    const response = await fetch(`${BASE_URL}/pages`);
    return await response.json();
  } catch (e) {
    console.log(e);
    return [];
  }
};

export const getPosts = async () => {
  try {
    const response = await fetch(
      `${BASE_URL}/posts?_fields=date,slug,link,title,featured_media,_links,_embedded&_embed`,
    );
    return await response.json();
  } catch (e) {
    console.log(e);
    return [];
  }
};

export const getPostData = async (slug: string) => {
  try {
    const response = await fetch(`${BASE_URL}/posts/?slug=${slug}`);
    return await response.json();
  } catch (e) {
    console.log(e);
    return [];
  }
};

export const getWebcamData = async (slug: string) => {
  try {
    const response = await fetch(`${BASE_URL}/pages?per_page=100&page=1`);
    return await response.json();
  } catch (e) {
    console.log(e);
    return [];
  }
};

export const getFeaturedCams = async () => {
  return [
    {
      img: "https://www.hispacams.com/get_imagen_ws.php?id=243&size=s",
      name: "Estación invernal Valgrande – Pajares: Panorámica Cuitunigru – Las Ubiñas",
      slug: "estacion-invernal-valgrande-pajares-panoramica-cuitunigru-las-ubinas",
    },
    {
      img: "https://www.hispacams.com/get_imagen_ws.php?id=256&size=s",
      name: "Valdelugueros – Lugueros",
      slug: "estacion-invernal-valgrande-pajares-panoramica-cuitunigru-las-ubinas",
    },
    {
      img: "https://www.hispacams.com/get_imagen_ws.php?id=243&size=s",
      name: "Estación invernal Valgrande – Pajares: Panorámica Cuitunigru – Las Ubiñas",
      slug: "estacion-invernal-valgrande-pajares-panoramica-cuitunigru-las-ubinas",
    },
  ];
};
