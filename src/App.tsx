import { BrowserRouter, Route } from 'react-router-dom'

import { Home } from './modules/Home'
import { NewRoom } from './modules/NewRoom'

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route path="/rooms/new" component={NewRoom} />
    </BrowserRouter>

  );
}

export default App;
