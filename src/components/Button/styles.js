import styled from 'styled-components'

export const Container = styled.button`
  background-color: ${({ theme }) => theme.COLORS.ORANGE};
  border: 0;
  border-radius: 10px;

  color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  font-weight: 500;

  height: 56px;
  min-height: 56px;
  width: 100%;
  margin-top: 16px;
  padding: 0 16px;

  &:disabled {
    opacity: 0.5;
  }
`
