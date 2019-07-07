import React from 'react'

function NewKegForm(){
  return (
    <div>
      <form>
        <input
          type='text'
          id='brewery'
          placeholder='Brewery name'/>
        <input
          type='text'
          id='name'
          placeholder='Item name'/>
        <input
          type='text'
          id='pint'
          placeholder='Price per pint'/>
        <input
          type='text'
          id='growler'
          placeholder='Price per growler'/>
        <input
          type='text'
          id='origin'
          placeholder='Place of origin (initials)'/>
        <input
          type='text'
          id='abv'
          placeholder='Alcohol By Volume'/>
        <button type='submit'>Add</button>
      </form>
    </div>
  )
}

export default NewKegForm