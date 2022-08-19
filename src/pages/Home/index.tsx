
import * as Styled from './styles'
import axios from 'axios'
import { useCallback, useEffect, useState } from 'react';
import { SearchBar } from './components/SearchBar/SearchBar';
import { Card } from './components/Cards';
import { Profile } from './components/Profile';
import { IPost } from '../../types';
import { Header } from '../../components/Header';

const username = import.meta.env.VITE_GITHUB_USERNAME;
const repoName = import.meta.env.VITE_GITHUB_REPONAME;

export const Home = () => {
  
  const [posts, setPosts] = useState<IPost[]>([] as unknown as IPost[])
  const getPosts = useCallback(
    async (query: string = "") => {
        const response = await axios.get(
          `https://api.github.com/search/issues?q=""%20label:published%20repo:${username}/${repoName}`
        );
  
        setPosts(response.data.items)
    },
    [posts]
  );

  useEffect(() => {
    getPosts()
  }, [])


  return (
    <>

      
        <Profile />
        <SearchBar />
        <Styled.Cards>
          {posts.map((post) => (
            <Card key={post.number} post={post}/>
          ))}
        </Styled.Cards>

    </>
  );
}
