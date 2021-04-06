
import './App.css';
import Sidebar from './sidebar';
import Topbar from './topbar';
import Dashboard from './dashboard';
import Createuser from './createUser';
import User from './user';
import {UserProvider} from './usercontext'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Edituser from './edituser';



function App() {
  return (
    <>
    
      <body id="page-top">
      <Router>
      <div id="wrapper">
        <UserProvider>
        <Sidebar></Sidebar>
        <div id="content-wrapper" className="d-flex flex-column">            
            <div id="content">
              <Topbar></Topbar>
              <div className="container-fluid">
                <Switch>
                  <Route path="/" exact={true}>
                    <Dashboard></Dashboard>
                  </Route>
                  <Route path="/user" exact={true}>
                    <User></User>
                  </Route>
                  <Route path="/createUser" exact={true}>
                    <Createuser></Createuser>
                  </Route>
                  <Route path="/edituser/:id" component={Edituser} exact={true}/>
                  
                </Switch>                  
              </div>
            </div>
        </div>    
        </UserProvider>
      </div>
      </Router>
      </body>
      
    </>
  );
}

export default App;
