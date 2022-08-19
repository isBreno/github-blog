import styled from "styled-components";

export const CardProfile = styled.div`
  background: #0b1b2b;
  height: 212px;
  display: flex;

  padding: 2rem;
  border-radius: 4px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  transform: translateY(-100px);
`;

export const PostBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2.5rem 2rem;
  margin-bottom: 8rem;
  transform: translateY(-70px);
  color: #a2b8cd; 
  a {
    color: #3294f8;
  }

  img {
    width: 100%;
  }
  h1,
  h2,
  h3 {
    color: #3294f8;
  }
  ul {
    list-style: inherit;
    padding-left: 1.5rem;
  }
  pre {
    background: #112131;
    padding: 1rem;
    > div {
      background: none !important;
      padding: 0 !important;
      margin: 0 !important;
      code {
        font-family: "FiraCode", monospace !important;
        line-height: 160% !important;
      }
    }
  }
`;

export const ProfileInfos = styled.div`
width: 100%;


  a {
    text-decoration: none;  }

  > div {
    display:flex;
    justify-content: space-between;
  }

  display: flex;
  flex-direction: column;

  span {
    font-weight: 700;
    font-size: 1.5rem;
    color: white;
    margin: 20px 0;
  }

  p {
    color: #afc2d4;
  }

  ul {
    display: flex;
    list-style: none;
    gap: 1rem;

  }

  li {
    display: flex;
    margin-top: auto;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;
    color: #afc2d4;
  }
`;


