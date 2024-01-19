import { useEffect, useState } from 'react'
import { FiPlus } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'

import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'
import { Input } from '../../components/Input'
import { Section } from '../../components/Section'
import { Note } from '../../components/Note'
import { api } from '../../services/api'
import {
  Brand,
  Container,
  Content,
  EmptyNotes,
  Menu,
  NewNote,
  Search,
} from './styles'

export function Home() {
  const [search, setSearch] = useState('')
  const [tags, setTags] = useState([])
  const [selectedTags, setSelectedTags] = useState([])
  const [notes, setNotes] = useState([])

  const navigate = useNavigate()

  function handleSelectTag(tagName) {
    if (tagName === 'all') {
      return setSelectedTags([])
    }

    const alreadySelected = selectedTags.includes(tagName)

    if (alreadySelected) {
      const filteredSelected = selectedTags.filter((item) => item !== tagName)
      setSelectedTags(filteredSelected)
    } else {
      setSelectedTags((prev) => [...prev, tagName])
    }
  }

  function handleDetails(id) {
    return navigate(`/details/${id}`)
  }

  useEffect(() => {
    async function fetchTags() {
      const response = await api.get('/tags')
      setTags(response.data.tags)
    }

    fetchTags()
  }, [])

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(
        `/notes?title=${search}&tags=${selectedTags}`,
      )

      setNotes(response.data.notes)
    }

    fetchNotes()
  }, [selectedTags, search])

  return (
    <Container>
      <Brand>
        <h1>Rocket Notes</h1>
      </Brand>

      <Header />

      <Menu>
        <li>
          <ButtonText
            title="Todos"
            onClick={() => handleSelectTag('all')}
            isActive={selectedTags.length === 0}
          />
        </li>

        {tags.map((tag) => (
          <li key={String(tag.id)}>
            <ButtonText
              title={tag.name}
              onClick={() => handleSelectTag(tag.name)}
              isActive={selectedTags.includes(tag.name)}
            />
          </li>
        ))}
      </Menu>

      {notes.length > 0 ? (
        <>
          <Search>
            <Input
              placeholder="Pesquisar pelo título"
              onChange={(event) => setSearch(event.target.value)}
            />
          </Search>

          <Content>
            <Section title="Minhas notas">
              {notes.map((note) => (
                <Note
                  key={note.id}
                  data={note}
                  onClick={() => handleDetails(note.id)}
                />
              ))}
            </Section>
          </Content>
        </>
      ) : (
        <EmptyNotes>
          <span>Crie uma nova nota</span>
        </EmptyNotes>
      )}

      <NewNote to="new">
        <FiPlus />
        <span>Criar nota</span>
      </NewNote>
    </Container>
  )
}
