export interface GithubUserDataProps 
{
  login: string,
  html_url: string,
  avatar_url: string,
  bio: string,
  company?: string,
  followers: number,
  name: string;
}

export interface IPost {
  title: string;
  body: string;
  created_at: string;
  number: number;
  html_url: string;
  comments: number;
  user: {
    login: string;
  };
}
