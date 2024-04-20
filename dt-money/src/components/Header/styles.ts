import styled from "styled-components";

export const Container = styled.header`
  background: var(--blue);
`

export const Content = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;

  padding: 2rem 1rem 12rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h2 {
    color: #F5F5F5;
  }

  button {
    font-size: 1rem;
    color: #fff;
    background: var(--orange);
    border: 0;
    padding: 0 2rem;
    border-radius: 4px;
    height: 3rem;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9)
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    padding-bottom: 10rem;
  }
`