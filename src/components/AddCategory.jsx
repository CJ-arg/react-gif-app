import React from 'react';
import { useState } from 'react'
import PropTypes from 'prop-types';

const AddCategory = ({ onNewCategory }) => {

  const [inputValue, setInputValue] = useState('')
  const onInputChange = ({ target }) => {

    setInputValue(target.value)
  }
  const onSubmit = (event) => {
    event.preventDefault()
    if (inputValue.trim().length <= 1) return
    onNewCategory(inputValue.trim())
    setInputValue('')
  }
  return (
    <form onSubmit={onSubmit} aria-label='form' >
      <input
        type='text'
        placeholder='Buscar gift'
        value={inputValue}
        onChange={onInputChange}
      />
    </form>

  )
}

AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired,

}
export default AddCategory