import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-rows: max-content auto;
  grid-template-areas:
    'header'
    'content';

  height: 100vh;
  width: 100%;

  > main {
    grid-area: content;
    overflow-y: auto;

    padding: 64px 0;
  }
`

export const Links = styled.ul`
  list-style: none;

  > li {
    margin-top: 12px;

    a {
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }
`

export const Tags = styled.div`
  display: flex;
  gap: 8px;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  margin: 0 auto;
  max-width: 550px;

  > button:first-child {
    align-self: end;
  }

  > button:last-child {
    margin-top: 64px;
  }

  > h1 {
    font-size: 36px;
    font-weight: 500;
    padding-top: 64px;
  }

  > p {
    font-size: 16px;
    text-align: justify;

    margin-top: 16px;
  }

  > p:has(+ section) {
    margin-bottom: 56px;
  }
`
