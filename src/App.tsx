import { BrowserRouter, Route } from 'react-router-dom'
import { AuthContextProvider } from './hooks/auth/AuthContext'
import { Home } from './modules/Home'
import { NewRoom } from './modules/NewRoom'

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Route exact path="/" component={Home} />
        <Route path="/rooms/new" component={NewRoom} />
      </AuthContextProvider>
    </BrowserRouter>

  );
}

export default App;
