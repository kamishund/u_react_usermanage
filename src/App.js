
import './App.css';
import { UserProvider } from './provider/UserProvider';
import { Router } from './router/Router';

function App() {
  
  return (
    <>
    <UserProvider>
    <Router />
    </UserProvider>
    </>
  );
}

export default App;
