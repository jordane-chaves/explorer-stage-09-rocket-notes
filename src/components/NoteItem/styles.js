import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;

  border-radius: 10px;
  background-color: ${({ theme, $isNew }) =>
    $isNew ? 'transparent' : theme.COLORS.BACKGROUND_900};
  border: ${({ theme, $isNew }) =>
    $isNew ? `2px dashed ${theme.COLORS.GRAY_300}` : 'none'};

  color: ${({ theme }) => theme.COLORS.WHITE};

  margin-bottom: 8px;
  padding-inline: 20px;

  > button {
    border: none;
    background: none;
    color: ${({ theme, $isNew }) =>
      $isNew ? theme.COLORS.ORANGE : theme.COLORS.RED};

    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      font-size: 24px;
    }
  }

  > input {
    background: transparent;
    border: none;
    color: ${({ theme }) => theme.COLORS.WHITE};

    height: 56px;
    width: 100%;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }
`
