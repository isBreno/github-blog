import styled from 'styled-components'

export const CardProfile = styled.div`
  background: #0b1b2b;
  height: 212px;
  display: flex;
  position: relative;

  padding: 2rem;
  border-radius: 4px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  transform: translateY(-100px);

  @media (max-width: 768px) {
    padding: 1rem;
    height: 160px;
  }

  @media (max-width: 640px) {
    padding: 0.5rem;
    height: 200px;
  }
`;

export const ProfileAvatar = styled.div`
  display: block;
  align-items: center;


  img {
    object-fit: cover;
    border-radius: 10px;
    height: 160px;
    margin-right: 20px;
    width: 160px;

  }

  @media (max-width: 768px) {
    img {
      margin-right: 10px;
      width: 100px;
      height: 115px;
    }

    width: 110px;
  }
`;

export const ProfileInfos = styled.div`
  display: flex;
  flex-direction: column;

  span {
    font-weight: 700;
    font-size: 1.5rem;
    color: white;
  }

  p {
    color: #afc2d4;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  ul {
    display: flex;
    list-style: none;
    gap: 1rem;
    
    position: absolute;
    margin-bottom: 2rem;
    bottom: 0;
  }

  li {
    display: flex;
    margin-top: auto;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;
    color: #afc2d4;
  }

  @media (max-width: 768px) {

  }
`;
