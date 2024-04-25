const LoginContainer: React.FC = ({ username, handleChange, submitUsername }) => (
  <div className='login-container'>
    <div className='login-box'>
      <div>Start messaging now.</div>
      <input placeholder='Display name' value={username} onChange={handleChange} />
      <div>
        <button className='display-name' onClick={submitUsername}>
          Proceed
        </button>
      </div>
    </div>
  </div>
);

export default LoginContainer;
