const WIDGET_URL = process.env.REACT_APP_WIDGET_URL;
const TOPIC_URL = process.env.REACT_APP_TOPIC_URL;

export const findAllWidgets = () =>
  fetch(`${WIDGET_URL}`)
    .then(response => response.json());

export const findWidgetsForTopic = (topicId) =>
  fetch(`${TOPIC_URL}/${topicId}/widgets`)
    .then(response => response.json());

export const createWidget = (topicId) =>
  fetch(`${TOPIC_URL}/${topicId}/widgets`, {
    method: 'POST',
    body: JSON.stringify({ type: 'HEADING', size: 1, text: 'New Widget' }),
    headers: {
      'content-type': 'application/json'
    }
  })
    .then(response => response.json());

export const deleteWidget = (widgetId) =>
  fetch(`${WIDGET_URL}/${widgetId}`, {
    method: 'DELETE',
  });

export const updateWidget = (widget) =>
  fetch(`${WIDGET_URL}/${widget.id}`, {
    method: 'PUT',
    body: JSON.stringify(widget),
    headers: {
      'content-type': 'application/json'
    }
  });

const api = {
  findAllWidgets,
  findWidgetsForTopic,
  createWidget,
  deleteWidget,
  updateWidget
};

export default api;