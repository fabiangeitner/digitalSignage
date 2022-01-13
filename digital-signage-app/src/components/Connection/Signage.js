import React from 'react'

export const Signage = () => {

    React.useEffect(() => {
        window.addEventListener('storage', () => {
            document.getElementById('Anzeige').innerHTML = localStorage.getItem('input');
        })
    })

    return (
        <>
            <h1>Signage</h1>
            <div id='Anzeige'>
            </div>
        </>
    )
}