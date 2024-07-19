import Circle from './Circle';
const Circles = ({ circles }) => {
  return (
    <div>
      {circles.map((circle) => {
        return <Circle key={circle.id} {...circle} />;
      })}
    </div>
  );
};

export default Circles;
