import MainContainer from './MainContainer';

const App: React.FC = () => (
  <div className='outer-container'>
    <div className='header'>Messages</div>
    <MainContainer />
    <div className='footer'>
      Made with ❤️ by <a href='https://github.com/oliviacarlisle'>Olivia Carlisle</a>
    </div>
  </div>
);

export default App;
