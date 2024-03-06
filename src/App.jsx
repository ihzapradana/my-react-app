import PropTypes from 'prop-types';

Button.propTypes = {
  variant: PropTypes.string.isRequired,
  text: PropTypes.string,
  // children: PropTypes.node
};

function Button(props) {
  //Destrucuturing = default value
  const {text="---",variant="bg-black text-white"} = props;
  return(
    <button
        className={`h-10 px-6 font-semibold rounded-md ${variant} text-white`}
        type="submit"
      >
        {text}
      </button>
  )
}

function App() {
  return (
    <div className="flex justify-center bg-lime-500 min-h-screen items-center gap-3">
      <h1 className="text-3xl font-bold">Silakan Login/Logout!</h1>
      <div className='flex gap-x-3'>
        <Button variant="bg-red-600" text="Logout"></Button>
        <Button variant="bg-blue-700" text="Login"></Button>
        <Button></Button>
      </div>
    </div>
  );
}

export default App;
