export type Items = {
  page: number;
  results: results;
  total_pages: number;
  total_results: number;
};

export type results = {
  backdrop_path: string;
  id: string;
  release_date: string;
  title: string;
}[];

export const fetchAllProducts = async (page: string): Promise<Items[]> => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/top_rated?page=${page}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_TMDB_API_KEY || ""}`,
      },
    }
  );
  return res.json();
  //const data = await res.json();
  //const factText = data.data[0];
};

// export  function async useGetAllProduct(setCards: any): any {
// return await fetchAllProducts() //
//     .then((data) => setCards((prevItems) => [...data.results] ));
// }
