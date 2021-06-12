import logo from './logo.svg';
import './App.css';
import UserProfile  from './user-profile/user-profile';
import UserList from './user-list/user-list.component';

function App() {
  return (
    <div className="App">
      <UserList dataSource='https://jsonplaceholder.typicode.com/users'/>
      <UserProfile name='yuha' email='yuha@gmail.com' dataSource='https://jsonplaceholder.typicode.com/posts'/> 
      
    </div>
  );
}

export default App;
