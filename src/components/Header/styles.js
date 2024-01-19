import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.header`
  border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  border-bottom-style: solid;
  border-bottom-width: 1px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  grid-area: header;

  padding: 16px 64px;
  width: 100%;
`

export const Profile = styled(Link)`
  display: flex;
  align-items: center;
  gap: 8px;

  > img {
    border-radius: 50%;
    height: 56px;
    width: 56px;
    object-fit: cover;
  }

  > div {
    display: flex;
    flex-direction: column;
    line-height: 1.5;

    span {
      color: ${({ theme }) => theme.COLORS.GRAY_100};
      font-size: 14px;
    }

    strong {
      color: ${({ theme }) => theme.COLORS.WHITE};
      font-size: 18px;
    }
  }
`

export const Logout = styled.button`
  border: none;
  background: none;

  height: 36px;

  > svg {
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    font-size: 36px;
  }
`
