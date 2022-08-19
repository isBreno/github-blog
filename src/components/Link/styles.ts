import styled, { css } from "styled-components";

interface ExternalLinkProps {
  variant?: "iconLeft";
}

export const ExternalLinkContainer = styled.a<ExternalLinkProps>`
  border: none;
  background: none;
  color: #3294f8;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 700;
  transition: 0.4s;
  border-bottom: 1px solid transparent;
  height: 19px;
  line-height: 19px;
  margin-bottom: 0 auto;
  svg {
    width: 0.75rem;
    height: 0.75rem;
  }
  &:hover {
    cursor: pointer;
  }
  ${({ variant }) =>
    variant === "iconLeft" &&
    css`
      flex-direction: row-reverse;
    `}
`;

