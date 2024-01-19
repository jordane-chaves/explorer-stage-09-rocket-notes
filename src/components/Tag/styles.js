import styled from 'styled-components'

export const Container = styled.span`
  border-radius: 4px;
  background-color: ${({ theme }) => theme.COLORS.ORANGE};

  color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  font-size: 12px;

  padding: 4px 16px;
`
