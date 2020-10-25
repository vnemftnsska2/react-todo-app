import React, {useState, useCallback} from 'react';
import {MdAdd} from "react-icons/all";
import './css/TodoInsert.scss';

const TodoInsert = ({onInsert}) => {
    const [value, setValue] = useState('');

    // Component가 리렌더링 될 때마다 함수를 새로 만드는 것이 아닌,
    // 한 번 함수를 만들고 재사용 할 수 있도록 하는 Hook => useCallback()
    const onChange = useCallback(e => {
        setValue(e.target.value);
    }, []);

    const onSubmit = useCallback(e => {
        e.preventDefault();

        onInsert(value);
        setValue('');
    }, [onInsert, value]);

    return (
        <form className="TodoInsert" onSubmit={onSubmit}>
            <input
                placeholder="할 일을 입력하세요"
                value={value}
                onChange={onChange}
            />
            <button type="submit">
                <MdAdd />
            </button>
        </form>
    );
}
export default TodoInsert;