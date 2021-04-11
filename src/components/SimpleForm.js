//import Greetings from './Greetings';

const SimpleForm = () => (
  state = {
      firstName: '',
  };

  onFirstNameChange = event => {
    this.setState({
      firstName: event.target.value
    })
  };

  const onFirstNameChange = event => 
  
  return (
      <div>
        <input type="text" name="firstName" onChange={this.onFirstNameChange} />

        <Greetings firstName={this.state.firstName} />
      </div>
    );
);

export default SimpleForm;