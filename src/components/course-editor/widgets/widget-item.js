import React, { useState, useEffect } from 'react'
import HeadingWidget from './heading-widget';
import ParagraphWidget from './paragraph-widget';

const WidgetItem = ({ widget, editing, updateWidget, deleteWidget, setEditWidget }) => {
  const [cachedWidget, setCachedWidget] = useState(widget);

  useEffect(() => {
    setCachedWidget(widget);
  }, [widget, setCachedWidget]);

  return (
    <>
      {
        !editing &&
        <>
          {
            cachedWidget.type === 'HEADING' &&
            <HeadingWidget editing={editing}
                           cachedWidget={widget}/>
          }
          {
            cachedWidget.type === 'PARAGRAPH' &&
            <ParagraphWidget editing={editing}
                             cachedWidget={widget}/>
          }
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
            {
              cachedWidget.type === 'HEADING' &&
              <HeadingWidget
                editing={editing}
                cachedWidget={cachedWidget}
                setCachedWidget={setCachedWidget}/>
            }
            {
              cachedWidget.type === 'PARAGRAPH' &&
              <ParagraphWidget
                editing={editing}
                cachedWidget={cachedWidget}
                setCachedWidget={setCachedWidget}/>
            }
          </form>
        </>
      }
    </>
  )
}


export default WidgetItem;