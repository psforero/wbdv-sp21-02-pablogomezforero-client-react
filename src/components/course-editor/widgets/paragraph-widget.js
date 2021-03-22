const ParagraphWidget = ({ editing, cachedWidget, setCachedWidget }) => {

  return (
    <>
      {
        !editing &&
        <p>{cachedWidget.text}</p>
      }

      {
        editing &&
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
      }
    </>
  );
};

export default ParagraphWidget;