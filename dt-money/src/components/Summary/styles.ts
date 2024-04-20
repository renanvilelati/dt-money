import styled from "styled-components";

export const SummaryContainer = styled.main`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -10rem;
  padding: 4rem;
  

  div {
    background: var(--shape);
    padding: 1.5rem;
    border-radius: 0%.25rem;
    color: var()(--text-title);
    width: 100%;

    header {
      display: flex;
      align-items: center;
      justify-content: space-around;
    }

    strong {
      display: block;
      margin-top: 1rem;
      font-size: 2rem;
      font-weight: 500;
      line-height: 3rem;
    }

    &.highlight-background {
      background: var(--green);
      color: #FFF;
    }
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  `