import styled from "styled-components";

const ListContainer = styled.div`
  ul {
    list-style: none;
    padding: 0;
  }

  li {
    cursor: pointer;
    transition: background-color 0.3s;
  }

  li:hover {
    background-color: #800080;
    color:#ffff
  }
`;

export const List = ({ todos, todoInput, removeTodo }) => {
  return (
    <>
      <ListContainer>
       <h3 className="head">Yapılacaklar: {todoInput}</h3> 
        <ul>
          {todos.map((todo, index) => (
            <li className="li-item" key={index} onClick={() => removeTodo(index)}>
              {todo}
            </li>
          ))}
        </ul>
      </ListContainer>
    </>
  );
};
