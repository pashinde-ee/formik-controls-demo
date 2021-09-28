import './App.css';
import { useState } from 'react';
import EnrollmentForm from './components/EnrollmentForm';
import FormikContainer from './components/formikContainer';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import {ChakraProvider} from '@chakra-ui/react';

const App = () => {

  const [tabIndex, setTabIndex] = useState(0);

  return (
    <ChakraProvider>
      <div className="App">
        <Tabs selectedIndex={tabIndex} onSelect={index => setTabIndex(index)}>
        <TabList>
          <Tab>FormikContainer</Tab>
          <Tab>Login Form</Tab>
          <Tab>Register Form</Tab>
          <Tab>Course Enrollment Form</Tab>
        </TabList>
        <TabPanel><FormikContainer /></TabPanel>
        <TabPanel><LoginForm /></TabPanel>
        <TabPanel><RegisterForm /></TabPanel>
        <TabPanel><EnrollmentForm /></TabPanel>
      </Tabs>
      </div>
    </ChakraProvider>
  );
}

export default App;
