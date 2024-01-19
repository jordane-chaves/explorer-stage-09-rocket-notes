import styled from 'styled-components'

export const Container = styled.section`
  margin-bottom: 28px;

  > h2 {
    border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    border-bottom-style: solid;
    border-bottom-width: 1px;

    color: ${({ theme }) => theme.COLORS.GRAY_100};
    font-size: 20px;
    font-weight: 400;

    padding-bottom: 16px;
    margin-bottom: 24px;
  }
`
