import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      items: []
    }
  }

componentDidMount(){
  fetch("https://api.rajaongkir.com/starter/province",{
    headers: {
      "X-Auth-Token": "ae39bb9151609f3c5786bc1960064dac",
      "Content-Type": "application/json"
    }
  })
    .then(response => response.json() )
    .then( data => this.setState( {items : data}))
}

  render(){
    const { items } = this.state

    return (
      <div className="App">
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="#">Zayyid</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <ul>
          {
            items.map((item, index) =>
              <li key={index}>{item}</li>
            )
          }
        </ul>
      </div>
    );
  }
}

export default App;
