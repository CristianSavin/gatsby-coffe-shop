import React, {Component} from 'react'
import Title from '../Global/Title'
import FormGroup from '../Global/FormGroup'
import TextareaGroup from '../Global/TextareaGroup'
import axios from 'axios'

export default class componentName extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      nameErr: false,
      email: '',
      emailErr: false,
      description: '',
      descriptionErr: false
    }

    this.handleField = this.handleField.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  handleField(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  onSubmit(e) {
    e.preventDefault();

    const {name, email, description} = this.state;
    const objToSubmit = {
      name,
      email,
      description
    }
    
    if (name && email && description) {
      axios.post(`https://formcarry.com/s/ZYBTw3XvkoQ`, objToSubmit)
      .then(res => alert(res.data.message))
      .catch(err => console.log(err.message));
    } else {
      alert('All fields are required, and should have value more than 3 characters');
    }
  }
  render() {
    return (
      <section className="contact py-5">
        <Title title="contact us" />
        <div className="row">
          <div className="col-10 col-sm-8 col-md-6 mx-auto">
            <form onSubmit={this.onSubmit}>
              <FormGroup 
                fieldType='text'
                fieldName='Name'
                name='name'
                fieldPlaceholder='Jhon Smith'
                fieldId='name'
                onChageEvent={() => this.handleField}
              />
              <FormGroup 
                fieldType='text'
                fieldName='Email'
                name='email'
                fieldPlaceholder='example@gmail.com'
                fieldId='name'
                onChageEvent={() => this.handleField}
              />
              <TextareaGroup 
                fieldId='description'
                name='description'
                fieldName="Description"
                fieldPlaceholder='Description'
                onChangeEvent={() => this.handleField}
              />
              <button 
                type="submit"
                className="btn btn-yellow btn-block text-capitalize mt-5">
                submit
              </button>
            </form>
          </div>
        </div>
      </section>
    )
  }
}

