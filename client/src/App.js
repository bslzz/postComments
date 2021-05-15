import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import CreatePostsComponent from './components/CreatePosts'
import DashboardComponent from './components/Dashboard'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/' component={DashboardComponent}></Route>
        <Route path='/createpost' component={CreatePostsComponent}></Route>
      </Switch>
    </Router>
  )
}

export default App
