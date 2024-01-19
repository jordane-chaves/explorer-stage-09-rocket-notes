import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  color: ${({ theme }) => theme.COLORS.GRAY_300};

  border-radius: 10px;

  display: flex;
  align-items: center;
  gap: 16px;

  margin-bottom: 8px;
  padding-inline: 16px;

  width: 100%;

  > input {
    background-color: transparent;
    border: none;
    color: ${({ theme }) => theme.COLORS.WHITE};

    font-size: 16px;

    height: 56px;
    width: 100%;
    padding: 12px 12px 12px 0;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }
`
