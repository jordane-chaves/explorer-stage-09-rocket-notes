import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  width: 100%;

  > header {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    display: flex;
    align-items: center;
    padding: 0 124px;

    height: 144px;
    width: 100%;

    button {
      background-color: transparent;
      border: none;

      display: flex;
      align-items: center;
      justify-content: center;
    }

    svg {
      color: ${({ theme }) => theme.COLORS.GRAY_100};
      font-size: 24px;
    }
  }
`

export const Form = styled.form`
  margin: 0 auto;
  max-width: 340px;

  > div:nth-child(4) {
    margin-top: 24px;
  }
`

export const Avatar = styled.div`
  margin: -93px auto 64px;
  height: 186px;
  width: 186px;

  position: relative;

  > img {
    border-radius: 50%;
    height: 186px;
    width: 186px;
    object-fit: cover;
  }

  > label {
    background-color: ${({ theme }) => theme.COLORS.ORANGE};
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    height: 48px;
    width: 48px;

    position: absolute;
    bottom: 8px;
    right: 8px;

    cursor: pointer;

    input {
      display: none;
    }

    svg {
      color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
      font-size: 20px;
    }
  }
`
