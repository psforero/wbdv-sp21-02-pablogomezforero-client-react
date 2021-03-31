const ListWidget = ({ editing, cachedWidget, setCachedWidget }) => {

  return (
    <>
      {
        !editing &&
        <>
          {
            cachedWidget.ordered &&
            <ol>
              {
                cachedWidget.text.split('\n').map((item) => {
                  return (
                    <li>
                      {item}
                    </li>
                  )
                })
              }
            </ol>
          }
          {
            !cachedWidget.ordered &&
            <ul>
              {
                cachedWidget.text.split('\n').map((item) => {
                  return (
                    <li>
                      {item}
                    </li>
                  )
                })
              }
            </ul>
          }
        </>
      }

      {
        editing &&
        <>
          <div className="mb-3 form-check">
            <input className="form-check-input"
                   type="checkbox"
                   checked={cachedWidget.ordered}
                   id="ordered-check"
                   onChange={(e) =>
                     setCachedWidget({...cachedWidget, ordered: e.target.checked})}/>
            <label className="form-check-label" htmlFor="ordered-check">
              Ordered
            </label>
          </div>

          <div className="mb-3">
            <textarea className="form-control"
                      value={cachedWidget.text}
                      type="text"
                      onChange={(e) =>
                        setCachedWidget({ ...cachedWidget, text: e.target.value })}
                      cols="30"
                      rows="10">
            </textarea>
          </div>
        </>
      }
    </>
  );
}


export default ListWidget;