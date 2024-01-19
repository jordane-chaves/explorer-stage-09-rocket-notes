import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  background: ${({ theme }) => theme.COLORS.BACKGROUND_800};

  display: grid;
  grid-template-columns: 250px auto;
  grid-template-rows: max-content max-content auto 76px;
  grid-template-areas:
    'brand header'
    'menu search'
    'menu content'
    'new-note content';

  height: 100vh;
  width: 100%;
`

export const Brand = styled.div`
  grid-area: brand;

  background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  border-bottom-style: solid;
  border-bottom-width: 1px;

  display: flex;
  justify-content: center;
  align-items: center;

  > h1 {
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.ORANGE};
  }
`

export const Menu = styled.ul`
  grid-area: menu;

  background: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  text-align: center;

  padding-top: 64px;

  > li + li {
    margin-top: 24px;
  }
`

export const Search = styled.div`
  grid-area: search;

  padding: 64px 64px 0;
`

export const Content = styled.div`
  grid-area: content;

  padding: 64px;
  overflow-y: auto;
`

export const NewNote = styled(Link)`
  grid-area: new-note;

  background-color: ${({ theme }) => theme.COLORS.ORANGE};
  border: none;

  color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  font-size: 20px;
  line-height: 1;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  padding: 28px;
`

export const EmptyNotes = styled.div`
  grid-area: content;

  color: ${({ theme }) => theme.COLORS.GRAY_100};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
