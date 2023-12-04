import './App.css';
import Header from './components/header';
import Content from './components/content';
import Footer from './components/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter as Router, Route, Link, Switch, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar bg="primary" variant="dark">
          <Container>
            <Navbar.Brand href="/">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/read">Read</Nav.Link>
              <Nav.Link as={Link} to="/create">Create</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <Routes>
          <Route path="/create" component={Header} />
          <Route path="/read" component={Footer} />
          <Route path="/" component={Content} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
