import logo from './logo.svg';
import './App.css';
import { Route, Link } from 'react-router-dom';
import About from './About';
import Home from './Home';
import Profile from './Profile';

function App() {
  // Route 태그에 exact true로 설정해줘야 about 들어갔을때 home 안나온다. 설정 안하면 '/about'과 '/' 이 부분이 겹쳐서 home이 중복으로 나옴.
  // Link 태그는 a 태그랑 비슷. 다른 점은 페이지 새로 불러오지는 않고 히스토리 api를 사용해 주소만 변경해줌.
  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
        <li>
          <Link to="/profile/velopert">velopert 프로필</Link>
        </li>
        <li>
          <Link to="/profile/gildong">gildong 프로필</Link>
        </li>
      </ul>
      <Route path="/" component={Home} exact={true}/>
      <Route path="/about" component={About}/>
      <Route path="/profile/:username" component={Profile}/>
    </div>
  );
}

export default App;