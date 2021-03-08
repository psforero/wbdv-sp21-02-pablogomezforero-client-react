import React, { useState } from 'react'

const EditableItem = (
  {
    item = { title: 'Some Title', _id: 'ABC' },
    deleteItem,
    updateItem
  }) => {
  const [editing, setEditing] = useState(false);
  const [cachedItem, setCachedItem] = useState(item);

  return (
    <>
      {
        !editing &&
        <>
          {item.title}
          <i className="fas fa-fw fa-edit float-right" onClick={() => {
            setEditing(true)
            setCachedItem(item);
          }}/>
        </>
      }
      {
        editing &&
        <>
          <input
            type="text"
            onChange={(e) =>
              setCachedItem({ ...cachedItem, title: e.target.value })}
            value={cachedItem.title}
          />
          <i className="fas fa-fw fa-check float-right" onClick={() => {
            setEditing(false);
            updateItem(cachedItem);
          }}/>
          <i className="fas fa-fw fa-trash float-right" onClick={() => {
            setEditing(false);
            deleteItem(item)
          }}/>
        </>
      }
    </>
  )
}

export default EditableItem;