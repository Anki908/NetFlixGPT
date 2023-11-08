import './App.css';
import Body from './components/body'
import { Provider } from 'react-redux';
import appStore from './utils/appStore';

function App() {
  console.log("For Better Experience Please Enable CORS extension")
  return (
    <Provider store = {appStore}>
      <Body />
    </Provider>
  );
}

export default App;
