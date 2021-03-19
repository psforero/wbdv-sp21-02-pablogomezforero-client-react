import React, { useState, useEffect } from 'react'
import HeadingWidget from './heading-widget';
import ParagraphWidget from './paragraph-widget';
import { useParams } from 'react-router-dom';

const WidgetList = () => {
  const { topicId } = useParams();
  // MOVE STATE MANAGEMENT TO widgets-reducer
  const [widgets, setWidgets] = useState([]);
  const [editWidget, setEditWidget] = useState({});

  useEffect(() => {
    // MOVE SERVICE COMM TO widgets-service
    fetch(`http://localhost:8080/api/topics/${topicId}/widgets`)
      .then(response => response.json())
      .then(widgets => setWidgets(widgets));
    setEditWidget({})
  }, [topicId]);

  const createWidgetForTopic = () => {
    fetch(`http://localhost:8080/api/topics/${topicId}/widgets`, {
      method: 'POST',
      body: JSON.stringify({ type: 'HEADING', size: 1, text: 'New Widget' }),
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(widgetCreated => {
        setWidgets(widgets => ([...widgets, widgetCreated]));
      })
  }

  const deleteWidget = () =>
    fetch(`http://localhost:8080/api/widgets/${editWidget.id}`, {
      method: 'DELETE',
    }).then(response => {
      setWidgets(widgets => widgets.filter(w => w.id !== editWidget.id));
      setEditWidget({});
    });


  const updateWidget = () => {
    alert(`Update Widget ${editWidget.id}`);
    setEditWidget({})
  }

  return (
    <div>
      <i className="fas fa-plus fa-2x float-right"
         onClick={createWidgetForTopic}/>
      <h3>Widget List {widgets.length} {editWidget.id}</h3>
      <ul className="list-group">
        {
          widgets.map((widget, index) =>
            <li className="list-group-item">
              {
                editWidget.id === widget.id &&
                <>
                  <i className="fas fa-fw fa-check float-right"
                     onClick={() => updateWidget()}/>
                  <i className="fas fa-fw fa-trash float-right"
                     onClick={() => deleteWidget()}/>
                </>
              }
              {
                editWidget.id !== widget.id &&
                <i className="fas fa-cog fa-lg float-right"
                   onClick={() => setEditWidget(widget)}/>
              }
              {
                widget.type === 'HEADING' && <HeadingWidget widget={widget}/>
              }
              {
                widget.type === 'PARAGRAPH' && <ParagraphWidget widget={widget}/>
              }
            </li>
          )
        }
      </ul>
    </div>
  );
}

export default WidgetList;