type SquareT = {
  color: string;
};

function Square({ color }: SquareT) {
  return (
    <div
      style={{
        width: '48px',   // 48 + 2 of border
        height: '48px',
        background: color,
        border: '1px solid black'
      }}
    >
    </div>
  );
}

export default Square;
