import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { SearchBarContainer } from "./styles"

export const SearchBar = () => {

  interface postsLength {
    total_count: number
  }

  const username = import.meta.env.VITE_GITHUB_USERNAME;
  const repoName = import.meta.env.VITE_GITHUB_REPONAME;
  const [posts, setPosts] = useState<postsLength>([] as unknown as postsLength);
  
  const getPosts = useCallback(
    async () => {
      const response = await axios.get(
        `https://api.github.com/search/issues?q=""%20label:published%20repo:${username}/${repoName}`
      );
      setPosts(response.data)
    },
    [posts]
  );

  useEffect(() => {
    getPosts()
  }, [])

  return (
    <SearchBarContainer>
      <div>
        <span>Publicações</span>
        <p>{posts.total_count} publicações</p>
      </div>
      <div>
        <input type="text" placeholder="Buscar conteúdo" />
      </div>
    </SearchBarContainer>
  );
}