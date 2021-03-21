import React, { useState, useEffect } from 'react'

const ParagraphWidget = ({ widget, editing, updateWidget, deleteWidget, setEditWidget }) => {
  const [cachedWidget, setCachedWidget] = useState(widget);

  useEffect(() => {
    setCachedWidget(widget)
  }, [widget]);
  return (
    <>
      {
        !editing &&
        <p>{widget.text}</p>
      }
      {
        editing &&
        <>
          <i className="fas fa-fw fa-check float-right"
             onClick={() => updateWidget(cachedWidget, setEditWidget)}/>
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
            <textarea className="form-control"
                      value={cachedWidget.text}
                      type="text"
                      onChange={(e) =>
                        setCachedWidget({ ...cachedWidget, text: e.target.value })}
                      cols="30"
                      rows="10">
            }
            </textarea>
            </div>
          </form>
        </>
      }
    </>
  );
};

export default ParagraphWidget;