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
  }

  .tags {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
`

export const Form = styled.form`
  margin: 38px auto;
  max-width: 550px;

  > header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 36px;

    button {
      color: ${({ theme }) => theme.COLORS.GRAY_100};
      font-size: 20px;
    }
  }

  > textarea {
    margin-bottom: 36px;
  }
`
