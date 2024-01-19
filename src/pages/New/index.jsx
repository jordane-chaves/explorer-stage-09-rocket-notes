import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { TextArea } from '../../components/TextArea'
import { NoteItem } from '../../components/NoteItem'
import { Section } from '../../components/Section'
import { api } from '../../services/api'
import { Container, Form } from './styles'

export function New() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [links, setLinks] = useState([])
  const [newLink, setNewLink] = useState('')
  const [tags, setTags] = useState([])
  const [newTag, setNewTag] = useState('')

  const navigate = useNavigate()

  function handleBack() {
    return navigate(-1)
  }

  function handleAddLink() {
    setLinks((prev) => [...prev, newLink])
    setNewLink('')
  }

  function handleRemoveLink(deleted) {
    setLinks((prev) => prev.filter((link) => link !== deleted))
  }

  function handleAddTag() {
    setTags((prev) => [...prev, newTag])
    setNewTag('')
  }

  function handleRemoveTag(deleted) {
    setTags((prev) => prev.filter((tag) => tag !== deleted))
  }

  function handleCreateNote() {
    if (!title) {
      return alert('Digite o título da nota.')
    }

    if (newLink) {
      return alert(
        'Você deixou um link no campo para adicionar, mas não clicou em adicionar. Clique para adicionar ou deixe o campo vazio.',
      )
    }

    if (newTag) {
      return alert(
        'Você deixou uma tag no campo para adicionar, mas não clicou em adicionar. Clique para adicionar ou deixe o campo vazio.',
      )
    }

    api
      .post('/notes', {
        title,
        description,
        tags,
        links,
      })
      .then(() => {
        alert('Nota criada com sucesso!')
        return navigate(-1)
      })
      .catch((error) => {
        if (error.response) {
          return alert(error.response.data.message)
        } else {
          return alert('Falha ao criar a nota!')
        }
      })
  }

  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <h1>Criar nota</h1>
            <ButtonText title="voltar" onClick={handleBack} />
          </header>

          <Input
            placeholder="Título"
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />

          <TextArea
            placeholder="Observações"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />

          <Section title="Links úteis">
            {links.map((link, index) => (
              <NoteItem
                key={String(index)}
                value={link}
                onClick={() => handleRemoveLink(link)}
              />
            ))}

            <NoteItem
              isNew
              placeholder="Novo link"
              value={newLink}
              onChange={(event) => setNewLink(event.target.value)}
              onClick={handleAddLink}
            />
          </Section>

          <Section title="Marcadores">
            <div className="tags">
              {tags.map((tag, index) => (
                <NoteItem
                  key={String(index)}
                  value={tag}
                  onClick={() => handleRemoveTag(tag)}
                />
              ))}

              <NoteItem
                isNew
                placeholder="Nova tag"
                value={newTag}
                onChange={(event) => setNewTag(event.target.value)}
                onClick={handleAddTag}
              />
            </div>
          </Section>

          <Button title="Salvar" onClick={handleCreateNote} />
        </Form>
      </main>
    </Container>
  )
}
