import styled from 'styled-components'

export const CardContainer = styled.div`
  flex-wrap: wrap;
  width: 49%;
  background: #112131;
  border-radius: 10px;
  padding: 2rem;
  margin: 1rem 0;



  a {
    text-decoration: none;
    max-width: 85%;
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h3 {
      color: #e7edf4;
      font-weight: 700;
      font-size: 20px;
      max-width: 85%;
    }

    span {
      font-weight: 400;
      font-size: 14px;
      color: #7b96b2;
      margin-bottom: auto;
    }
  }

  p {
    font-weight: 400;
    font-size: 16px;
    margin-top: 20px;
    color: #afc2d4;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }


    @media (max-width: 768px) {
    
      width: 100%;

  }
`;