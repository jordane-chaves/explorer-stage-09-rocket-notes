import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'
import { Header } from '../../components/Header'
import { Section } from '../../components/Section'
import { Tag } from '../../components/Tag'
import { api } from '../../services/api'
import { Container, Content, Links, Tags } from './styles'

export function Details() {
  const [note, setNote] = useState(null)

  const navigate = useNavigate()
  const params = useParams()

  function handleBack() {
    return navigate(-1)
  }

  async function handleRemove() {
    const confirm = window.confirm('Deseja realmente remover a nota?')

    if (confirm) {
      await api.delete(`/notes/${params.id}`)
      return navigate(-1)
    }
  }

  useEffect(() => {
    async function fetchNote() {
      const response = await api.get(`/notes/${params.id}`)
      setNote(response.data.note)
    }

    fetchNote()
  }, [params.id])

  return (
    <Container>
      <Header />

      {note && (
        <main>
          <Content>
            <ButtonText
              isActive
              title="Excluir a nota"
              onClick={handleRemove}
            />

            <h1>{note.title}</h1>

            <p>{note.description}</p>

            {note.links && (
              <Section title="Links úteis">
                <Links>
                  {note.links.map((link) => (
                    <li key={link.id}>
                      <a href={link.url} target="_blank" rel="noreferrer">
                        {link.url}
                      </a>
                    </li>
                  ))}
                </Links>
              </Section>
            )}

            {note.tags && (
              <Section title="Marcadores">
                <Tags>
                  {note.tags.map((tag) => (
                    <Tag key={tag.id} title={tag.name} />
                  ))}
                </Tags>
              </Section>
            )}

            <Button title="Voltar" onClick={handleBack} />
          </Content>
        </main>
      )}
    </Container>
  )
}
