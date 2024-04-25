import MainContainer from './MainContainer';

const App: React.FC = () => (
  <div className='outer-container'>
    <h1 className='header-h1'>Messages</h1>
    <div className='header'></div>
    <MainContainer />
    <div className='footer'>
      Made with <span className='emoji'>❤️</span> by{' '}
      <a href='https://github.com/oliviacarlisle'>Olivia Carlisle</a>
    </div>
  </div>
);

export default App;
