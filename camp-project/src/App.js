import logo from './logo.svg';
import './App.css';
import Dashboard from './layouts/Dashboard';
import { Button, Icon, Label } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

function App() {
  return (
    <div className="App">
 <Button as='div' labelPosition='right'>
      <Button color='red'>
        <Icon name='heart' />
        Like
      </Button>
      <Label as='a' basic color='red' pointing='left'>
        2,048
      </Label>
    </Button>
    <Button as='div' labelPosition='right'>
      <Button basic color='blue'>
        <Icon name='fork' />
        Fork
      </Button>
      <Label as='a' basic color='blue' pointing='left'>
        2,048
      </Label>
    </Button>    </div>
  );
}

export default App;
