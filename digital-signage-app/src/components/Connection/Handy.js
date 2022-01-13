import React from 'react'

export const Handy = () => {

    const handleInputChange = (e) => {
        localStorage.setItem('input', e.target.value);
        console.log(e.target.value)
        }
    return (
        <div>
            <h1>Handy</h1>
            <input type='text' id='input' onChange={handleInputChange}/>
        </div>
    )
}
