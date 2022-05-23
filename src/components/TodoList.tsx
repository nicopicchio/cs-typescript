import { Todo, TodoType } from './Todo'

// Define this
interface StateProps {
  incompleteTodos: Array<TodoType>
  toggleTodoCompletion: (todo: TodoType) => void,
  removeTodo: (todo: TodoType) => void,
}

export const TodoList = (props: StateProps) => {

  const { incompleteTodos, toggleTodoCompletion, removeTodo } = props

  return (
    <section className="todo-list-section">
      <h2 className="title">TODO</h2>
      <ul className="todo-list">
        {incompleteTodos.map((todo: TodoType, index: number) => (
          <Todo
            key={index}
            todo={todo}
            toggleTodoCompletion={toggleTodoCompletion}
            removeTodo={removeTodo}
          />
        ))}
      </ul>
    </section>
  )
}
