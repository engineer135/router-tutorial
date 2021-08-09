import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';
import About from './About';
import Home from './Home';

function App() {
  // Route 태그에 exact true로 설정해줘야 about 들어갔을때 home 안나온다. 설정 안하면 '/about'과 '/' 이 부분이 겹쳐서 home이 중복으로 나옴.
  return (
    <div>
      <Route path="/" component={Home} exact={true}/>
      <Route path="/about" component={About}/>
    </div>
  );
}

export default App;