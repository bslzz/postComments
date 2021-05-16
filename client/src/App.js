import { Switch, Route } from 'react-router-dom'
import history from './history'
import AddPostsComponent from './components/AddPosts'
import DashboardComponent from './components/Dashboard'
import Navbar from './components/Navbar'
import { Router } from 'react-router'
import PostComponent from './components/Post'

const App = () => {
  return (
    <Router history={history}>
      <Navbar />
      <Switch>
        <Route exact path='/' component={DashboardComponent}></Route>
        <Route path='/createpost' component={AddPostsComponent}></Route>
        <Route path='/post/:id' component={PostComponent}></Route>
      </Switch>
    </Router>
  )
}

export default App
