import React, { useState } from 'react'
import css from "./SearchForm.module.css"

function SearchForm ({ onSubmit }) {
    const [keyword, setKeyword] = useState('')

    const handleSubmit = evt => {
        evt.preventDefault()
        onSubmit({ keyword })
        
    }

    const handleChange = evt => {
        setKeyword(evt.target.value)
    }

    return (
        <form className={css["c-search"]} onSubmit={handleSubmit}>
        <button className={css["c-search-btn"]}>Buscar</button>
        <input className={css["c-search-input"]} onChange={handleChange} placeholder="Search a Gif" type="text" value={keyword}/>
        </form>
    )
    }

export default React.memo(SearchForm)