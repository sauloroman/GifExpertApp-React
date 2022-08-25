import { useState } from 'react';

const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('')

    const onInputChange = event => {
        setInputValue( event.target.value );
    }

    const onSubmit = event => {
        event.preventDefault();

        if ( inputValue.trim().length <= 1 ) return;

        onNewCategory( inputValue.trim().toLowerCase() );
        setInputValue('');
    }

    return (
        <form
            onSubmit={ onSubmit }
        >
            <input
                value={ inputValue } 
                onChange={ onInputChange }
                type='text'
                placeholder = "Buscar Gifs"
            />
        </form>
    )
}

export default AddCategory;