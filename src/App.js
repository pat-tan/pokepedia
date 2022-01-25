import { useContext } from 'react'
import Nav from './components/Nav'
import UserContext from './contexts/UserContext.js'
import './App.css'


function App () {
  // To enable use to use our context, we import first, then we can use the useCOntext hook to access our contesxt
  // const user = useContext(UserContext)
  // console.log(user)

  return (
    <div className="App">
      {
        <UserContext.Provider value={'Christina'}>
          <Nav />
        </UserContext.Provider>
      }
    </div>
  );
}

export default App;
