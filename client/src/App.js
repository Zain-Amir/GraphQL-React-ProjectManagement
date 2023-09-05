import Header from './components/Header'
import {ApolloProvider , ApolloClient, InMemoryCache } from '@apollo/client'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Client from './pages/Client'
import Project from './pages/Project'
import NotFound from './pages/NotFound'

const client = new ApolloClient({
      uri : 'http://localhost:5000/graphql',
      cache : new InMemoryCache(),
})

function App() {
  return (
    <>
    <ApolloProvider client={client}>
      <Header />
      <Router>
        <Routes>
            <Route path='/' element= {<Home/>}/>
            <Route path='/client' element= {<Client/>}/>
            <Route path='/projects/:id' element= {<Project/>}/>
            <Route path='*' element= {<NotFound/>}/>
        </Routes>
      </Router>
    </ApolloProvider>
    </>
  );
}
export default App;
