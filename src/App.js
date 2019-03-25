import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'

const APIKey = '&appid=052f26926ae9784c2d677ca7bc5dec98'

class App extends Component {

state = {
  zip: 11249,
  weather: ''
}



handleChange = e => {
  this.setState({
    zip: e.target.value
  })
  console.log(this.state)
}



// <Form onSubmit>
//           <FormGroup>
//             <Label for="exampleEmail">Email</Label>
//             <Input
//               type="Zipcode"
//               name="Zipcode"
//               id="Zipcode"
//               placeholder="with a placeholder"
//               onChange={ e => this.handleChange(e)} />
//           </FormGroup>
//           <Button onClick={this.onSubmit}>Submit</Button>
//   </Form>


  getWeather = () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${this.state.zip},us${APIKey}`, {
    })
    .then((response) => {
      return response.json()
    })
      .then( json =>
      this.setState({
      weather: json.weather[0].description
    })

  )
    .catch((ex) => {
      console.log('Error parsing API data', ex)
    })
  }

  componentDidMount() {
  console.log(this.state)
  console.log(`api.openweathermap.org/data/2.5/weather?zip=${this.state.zip},us${APIKey}`)
  this.getWeather()

  }
  render() {
    return (
      <div className="App">
        <TextField
    label="Enter your zipcode!"
    defaultValue={this.state.zip}
    margin="normal"
    onChange={ e => this.handleChange(e)}
      />

    <div>
      <Button onClick={this.getWeather}>What's the weather?</Button>
    </div>
    <h1>{this.state.weather}</h1>
  </div>

    );
  }
}

export default App;
