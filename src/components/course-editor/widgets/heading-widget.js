import React, { useEffect, useState } from 'react'

const HeadingWidget = ({ widget, editing, updateWidget, deleteWidget, setEditWidget }) => {
  const [cachedWidget, setCachedWidget] = useState(widget);

  useEffect(() => {
    setCachedWidget(widget)
  }, [widget]);

  return (
    <>
      {
        !editing &&
        <>
          {widget.size === 1 && <h1>{widget.text}</h1>}
          {widget.size === 2 && <h2>{widget.text}</h2>}
          {widget.size === 3 && <h3>{widget.text}</h3>}
          {widget.size === 4 && <h4>{widget.text}</h4>}
          {widget.size === 5 && <h5>{widget.text}</h5>}
          {widget.size === 6 && <h6>{widget.text}</h6>}
        </>
      }
      {
        editing &&
        <>
          <i className="fas fa-fw fa-check float-right"
             onClick={() => updateWidget(cachedWidget, setEditWidget)}
          />
          <i className="fas fa-fw fa-trash float-right"
             onClick={() => deleteWidget(widget, setEditWidget)}/>

          <form className="col-11">
            <div className="mb-3">
              <select className="form-control"
                      value={cachedWidget.type}
                      onChange={(e) =>
                        setCachedWidget({ ...cachedWidget, type: e.target.value })}>
                <option value='HEADING'>Heading</option>
                <option value='PARAGRAPH'>Paragraph</option>
                <option value='VIDEO' disabled>Video</option>
                <option value='IMAGE' disabled>Image</option>
                <option value='LINK' disabled>Link</option>
                <option value='LIST' disabled>List</option>
                <option value='HTML' disabled>HTML</option>
              </select>
            </div>
            <div className="mb-3">
              <input className="form-control"
                     value={cachedWidget.text}
                     type="text"
                     onChange={(e) =>
                       setCachedWidget({ ...cachedWidget, text: e.target.value })
                     }
              />
            </div>
            <div className="mb-3">
              <select className="form-control"
                      value={cachedWidget.size}
                      onChange={(e) =>
                        setCachedWidget({ ...cachedWidget, size: e.target.value })}>
                <option value={1}>Heading 1</option>
                <option value={2}>Heading 2</option>
                <option value={3}>Heading 3</option>
                <option value={4}>Heading 4</option>
                <option value={5}>Heading 5</option>
                <option value={6}>Heading 6</option>
              </select>
            </div>
          </form>
        </>
      }
    </>
  );
}

export default HeadingWidget;