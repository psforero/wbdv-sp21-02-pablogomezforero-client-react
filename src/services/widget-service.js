export const findAllWidgets = () =>
  fetch('http://localhost:8080/api/widgets')
    .then(response => response.json());

export const findWidgetsForTopic = (topicId) =>
  fetch(`http://localhost:8080/api/topics/${topicId}/widgets`)
    .then(response => response.json());

export const createWidget = (topicId) =>
  fetch(`http://localhost:8080/api/topics/${topicId}/widgets`, {
    method: 'POST',
    body: JSON.stringify({ type: 'HEADING', size: 1, text: 'New Widget' }),
    headers: {
      'content-type': 'application/json'
    }
  })
    .then(response => response.json());

export const deleteWidget = (widgetId) =>
  fetch(`http://localhost:8080/api/widgets/${widgetId}`, {
    method: 'DELETE',
  });

export const updateWidget = (widget) =>
  fetch(`http://localhost:8080/api/widgets/${widget.id}`, {
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