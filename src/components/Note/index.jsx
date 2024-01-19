import { Tag } from '../Tag'
import { Container } from './styles'

export function Note({ data, ...rest }) {
  const { title, tags } = data

  return (
    <Container {...rest}>
      <h1>{title}</h1>

      {tags && (
        <footer>
          {tags.map((tag) => (
            <Tag key={tag.id} title={tag.name} />
          ))}
        </footer>
      )}
    </Container>
  )
}
