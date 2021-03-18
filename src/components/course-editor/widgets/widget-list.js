import React, { useState, useEffect } from 'react'
import HeadingWidget from './heading-widget';
import ParagraphWidget from './paragraph-widget';
import { useParams } from 'react-router-dom';

const WidgetList = () => {
  const { topicId } = useParams();
  // MOVE STATE MANAGEMENT TO widgets-reducer
  const [widgets, setWidgets] = useState([]);
  useEffect(() => {
    // MOVE SERVICE COMM TO widgets-service
    fetch(`http://localhost:8080/api/topics/${topicId}/widgets`)
      .then(response => response.json())
      .then(widgets => setWidgets(widgets));
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

  return (
    <div>
      <i className="fas fa-plus fa-2x float-right"
         onClick={createWidgetForTopic}/>
      <h3>Widget List {widgets.length}</h3>
      <ul className="list-group">
        {
          widgets.map((widget, index) =>
            <div>
              <li className="list-group-item">
                {
                  widget.type === 'HEADING' && <HeadingWidget widget={widget}/>
                }
                {
                  widget.type === 'PARAGRAPH' && <ParagraphWidget widget={widget}/>
                }
              </li>
            </div>
          )
        }
      </ul>
    </div>
  );
}

export default WidgetList;