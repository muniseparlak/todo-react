import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, InputGroup } from "react-bootstrap"
import styled from 'styled-components'



const Input = styled.input`
   padding: 0.9rem 1.5rem;
  `;

export const ToDoForm = ({todoInput, setTodoInput, addToDo}) => {
    
return (
    <> 
     <style type="text/css">  
        {`
    .btn-flat {
      background-color: purple;
      color: white;
      &:hover{
        background-color: #C850C0
      }
    }

    .btn-xl {
      padding: 0.8rem 1.5rem;
      font-size: 1.2rem;
      margin: 1rem
    }

    `}
      </style>
    <form>
    <label className='label-head' htmlFor="to-do">Todo  </label>
    <Input id="to-do"
      value={todoInput}
      onChange={(e)=>setTodoInput(e.target.value)}
    />
    <Button variant="flat" size="xl"
  onClick={addToDo}>Ekle</Button>
   </form>
   </>
)
   
}

