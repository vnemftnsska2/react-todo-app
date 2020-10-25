import React, { useState, useRef, useCallback, } from 'react';
import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";

const App = () => {
    const [todos, setTodos] = useState([
        { id: 1, text: '리액트 기초 공부', checked: true, },
        { id: 2, text: '리액트 이용 해서 FM+ UI 만들기', checked: false, },
        { id: 3, text: 'C# 기초 정리', checked: false, }
    ]);

    // 고유값으로 사용할 id
    // ref를 사용하여 변수 담기
    const nextId = useRef(4);
    const onInsert = useCallback(text => {
        const todo = {
            id : nextId.current,
            text,
            checked: false,
        };
        setTodos(todos.concat(todo));
        nextId.current += 1; // nextId plus 1
    }, [todos],);

    const onRemove = useCallback(
        id => {
                    setTodos(todos.filter(todo => todo.id !== id));
        },
        [todos],
    );

    const onToggle = useCallback(
        id => {
            setTodos(todos.map(todo => todo.id === id ? { ...todo, checked: !todo.checked} : todo));
        },
        [todos],
    );

    return (
      <TodoTemplate>
          <TodoInsert onInsert={onInsert}/>
          <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
      </TodoTemplate>
    );
};

export default App;
