import React, { useState } from 'react';
import InputWithLabel from './InputWithLabel.js';
import style from '../css/AllComponents.module.css'

import PropTypes from 'prop-types';

const AddTodoForm = ({ onAddTodo }) => {
    const [todoTitle, setTodoTitle] = useState('');
    const handleTitleChange = (event) => {
        const newTodoTitle = event.target.value;
        setTodoTitle(newTodoTitle);
    };
    const handleAddTodo = (event) => {
        event.preventDefault();

        if (!todoTitle.trim()) {
            alert("Seems like you added  a task without title. Please, provide a title");
            return;
        }

        onAddTodo(todoTitle);
        setTodoTitle('');
    };
    return (
        <div>
            <form onSubmit={handleAddTodo} className={style.Link} >
                <InputWithLabel
                    todoTitle={todoTitle}
                    onChange={handleTitleChange}
                >
                    <strong>Add an item</strong>
                </InputWithLabel>
                <br></br>
                
            </form>
            
        </div>
    );
};
AddTodoForm.propTypes = {
    onAddTodo: PropTypes.func
}
export default AddTodoForm;