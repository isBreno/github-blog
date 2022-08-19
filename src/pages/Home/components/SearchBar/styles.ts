import styled from 'styled-components'

export const SearchBarContainer = styled.div`
  display: flex;
  gap: 1rem;
  flex-direction: column;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    span {
      color: #c4d4e3;
      font-size: 18px;
      font-weight: 700;
    }

    p {
      color: #7b96b2;
      font-size: 14px;
      font-weight: 400;
    }
  }

  input {
    width: 100%;
    padding: 12px 16px;
    border: 1px solid #1c2f41;
    border-radius: 6px;
    background: #040f1a;
    color: white;

    &::placeholder {
      color: #3a536b;
    }
  }
`;