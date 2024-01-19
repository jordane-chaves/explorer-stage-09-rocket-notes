import styled from 'styled-components'

import backgroundImg from '../../assets/background.png'

export const Container = styled.div`
  display: flex;
  align-items: stretch;

  height: 100vh;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;

  padding: 0 136px;

  > h1 {
    color: ${({ theme }) => theme.COLORS.ORANGE};
    font-size: 48px;
  }

  > h2 {
    font-size: 24px;

    margin-top: 48px;
    margin-bottom: 48px;
  }

  > p {
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    font-size: 14px;
  }

  > a {
    color: ${({ theme }) => theme.COLORS.ORANGE};
    margin-top: 124px;
  }
`

export const Background = styled.div`
  background: url(${backgroundImg}) no-repeat center/cover;
  flex: 1;

  position: relative;

  &::before {
    content: '';

    background: rgb(35, 33, 41);
    opacity: 0.8;

    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }
`
