import axios from "axios";
import { Buildings, GithubLogo, Users } from "phosphor-react";
import { useCallback, useEffect, useState } from "react";
import { LoadingSpinner } from "../../../../components/LoadingSpinner";
import { GithubUserDataProps } from "../../../../types";
import * as Styled from './styles'

export const Profile = () => {
    const username = import.meta.env.VITE_GITHUB_USERNAME;

  const [userData, setUserData] = useState<GithubUserDataProps>(
    [] as unknown as GithubUserDataProps
  );
  const [isLoading, setisLoading] = useState(true);

  const getProfileData = useCallback(async () => {
    setisLoading(true);
    const { data } = await axios.get(`https://api.github.com/users/${username}`);
    setUserData(data);
    setisLoading(false);
  }, [userData]);

  useEffect(() => {
    getProfileData();
  }, []);

  return (
    <Styled.CardProfile>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <Styled.ProfileAvatar>
            <img src={userData.avatar_url} alt="Avatar" />
          </Styled.ProfileAvatar>

          <Styled.ProfileInfos>
            <span>{userData.name}</span>
            <p>{userData.bio}</p>
            <ul>
              <li>
                <GithubLogo size={18} />
                {userData.login}
              </li>
              {userData.company && (
                <li>
                  <Buildings size={18} />
                  {userData.company}
                </li>
              )}
              <li>
                <Users size={18} />
                {userData.followers}
              </li>
            </ul>
          </Styled.ProfileInfos>
        </>
      )}
    </Styled.CardProfile>
  );
};
