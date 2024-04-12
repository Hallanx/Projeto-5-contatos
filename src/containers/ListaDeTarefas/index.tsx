import Tarefa from '../../components/Tarefa'
import { Container } from './styles'

const tarefas = [
  {
    titulo: 'Estudar',
    descricao: 'Ver aulas',
    prioridade: 'importante',
    status: 'concluido'
  },
  {
    titulo: 'Fazer Caminhada',
    descricao: 'Treino diário',
    prioridade: 'importante',
    status: 'pendente'
  },
  {
    titulo: 'Cartão de crédito',
    descricao: 'Itaú',
    prioridade: 'urgente',
    status: 'concluido'
  }
]

const ListaDeTarefas = () => (
  <Container>
    <p>2 tarefas maracadas como: &quot;Categoria&ldquo; e &quot;Termo&ldquo;</p>
    <ul>
      {tarefas.map((t) => (
        <li key={t.titulo}>
          <Tarefa
            descricao={t.descricao}
            titulo={t.titulo}
            status={t.status}
            prioridade={t.prioridade}
          />
        </li>
      ))}
    </ul>
  </Container>
)

export default ListaDeTarefas
