import { useState, ChangeEvent } from "react"

interface Props {

    addTodo: (text: string) => void;

}



const FormAddTodo = ({ addTodo }: Props) => {


    const [text, setText] = useState('')

    const handleSubmit = (e: ChangeEvent<HTMLFormElement>)  => {
        e.preventDefault()
        const trimmedText = text.trim()
        if(!trimmedText)return
        addTodo(trimmedText)
        setText("")

    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="todo">
                <input type="text" id="todo" placeholder="ingrese todo" value={text} onChange={(e) => setText(e.target.value)}></input>
                <button type="submit">Add Todo</button>
            </label>
        </form>)
}

export default FormAddTodo