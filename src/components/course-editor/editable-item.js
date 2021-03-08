import React, { useState } from 'react'
import { connect } from 'react-redux'

const EditableItem = (
  {
    deleteItem,
    item = { title: 'Some Title', _id: 'ABC' }
  }) => {

  const [editing, setEditing] = useState(false);

  return (
    <>
      {
        !editing &&
        <>
          {item.title}
          <i className="fas fa-fw fa-edit float-right" onClick={() => setEditing(true)}/>
        </>
      }
      {
        editing &&
        <>
          <input type="text"/>
          <i className="fas fa-fw fa-check float-right" onClick={() => setEditing(false)}/>
          <i className="fas fa-fw fa-trash float-right" onClick={() => deleteItem(item)}/>
        </>
      }
    </>
  )
}

const stpm = (item) => {

}

const dtpm = (dispatch) => {
}

export default EditableItem//connect(stpm, dtpm)(EditableItem);