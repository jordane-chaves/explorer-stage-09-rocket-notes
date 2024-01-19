import styled from 'styled-components'

export const Container = styled.button`
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  border: none;
  border-radius: 10px;

  padding: 24px;
  margin-bottom: 16px;
  width: 100%;

  > h1 {
    flex: 1;

    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 24px;
    font-weight: 700;
    text-align: left;
  }

  > footer {
    display: flex;
    gap: 8px;

    margin-top: 24px;
    width: 100%;
  }
`
