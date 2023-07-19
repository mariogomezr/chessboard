import Chessboard from './components/Chessboard';

function App() {
  return (
    <main
      className='App'
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'
      }}
    >
      <Chessboard />
    </main>
  );
}

export default App;
