import Square from '../Square';

function Chessboard() {
  const renderGrid = () => {
    const grid = [];

    for (let row = 0; row < 8; row++) {
      const rowSquares = [];

      for (let col = 0; col < 8; col++) {
        const color = (row + col) % 2 === 0 ? 'black' : 'white';
        rowSquares.push(<Square key={`${row}-${col}`} color={color} />);
      }

      grid.push(
        <div key={row} style={{ display: 'flex' }}>
          <div
            style={{
              display: 'flex',
              width: '50px',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            {8 - row}
          </div>
          {rowSquares}
        </div>
      );
    }

    const columnLabels = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    const labelsRow = columnLabels.map((label) => (
      <div
        key={label}
        style={{
          width: '50px',
          height: '50px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        {label}
      </div>
    ));

    grid.push(
      <div
        key='labels'
        style={{
          display: 'flex'
        }}
      >
        <div style={{ width: '50px' }} />
        {labelsRow}
      </div>
    );

    return grid;
  };

  return <div>{renderGrid()}</div>;
}

export default Chessboard;
