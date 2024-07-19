const Controls = ({ onUndo, onRedo, onReset }) => {
  return (
    <div
      className="controls"
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <button onClick={onUndo}>undo</button>
      <button onClick={onRedo}>redo</button>
      <button onClick={onReset}>reset</button>
    </div>
  );
};

export default Controls;
