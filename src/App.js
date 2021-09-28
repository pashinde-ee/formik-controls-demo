import './App.css';
import EnrollmentForm from './components/EnrollmentForm';
import FormikContainer from './components/formikContainer';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';

function App() {
  return (
    <div className="App">
      {/* <div>
        <FormikContainer />
      </div> */}
      {/* <div>
        <LoginForm />
      </div> */}
      {/* <div>
        <RegisterForm />
      </div> */}
      <div>
        <EnrollmentForm />
      </div>
  </div>
  );
}

export default App;
