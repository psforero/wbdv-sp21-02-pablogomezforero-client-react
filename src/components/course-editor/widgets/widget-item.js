import React, { useState, useEffect } from 'react'
import HeadingWidget from './heading-widget';
import ParagraphWidget from './paragraph-widget';
import ImageWidget from './image-widget';
import ListWidget from './list-widget';

const WidgetItem = ({ widget, editing, updateWidget, deleteWidget, setEditWidget }) => {
  const [cachedWidget, setCachedWidget] = useState(widget);

  useEffect(() => {
    setCachedWidget(widget);
  }, [widget, setCachedWidget]);

  return (
    <>
      {
        editing &&
        <>
          <i className="fas fa-fw fa-check float-right"
             onClick={() => updateWidget(cachedWidget, setEditWidget)}
          />
          <i className="fas fa-fw fa-trash float-right"
             onClick={() => deleteWidget(widget, setEditWidget)}/>
          <br/>
          <div className="row mb-3">
            <label htmlFor="widget-type"
                   className="col-sm-2
                                col-form-label">
              Type
            </label>
            <select className="form-control
                                 col-sm-9"
                    value={cachedWidget.type}
                    id="widget-type"
                    onChange={(e) =>
                      setCachedWidget({ ...cachedWidget, type: e.target.value })}>
              <option value='HEADING'>Heading</option>
              <option value='PARAGRAPH'>Paragraph</option>
              <option value='VIDEO' disabled>Video</option>
              <option value='IMAGE'>Image</option>
              <option value='LINK' disabled>Link</option>
              <option value='LIST'>List</option>
              <option value='HTML' disabled>HTML</option>
            </select>
          </div>
        </>
      }
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
      {
        cachedWidget.type === 'IMAGE' &&
        <ImageWidget
          editing={editing}
          cachedWidget={cachedWidget}
          setCachedWidget={setCachedWidget}/>
      }
      {
        cachedWidget.type === 'LIST' &&
        <ListWidget
          editing={editing}
          cachedWidget={cachedWidget}
          setCachedWidget={setCachedWidget}/>
      }
    </>
  )
};


export default WidgetItem;