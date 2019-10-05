import React from 'react';
import Page from '../components/page';
import '../styles.scss';
import * as postmark from 'postmark'
import { ValidationError, useForm } from '@statickit/react';

class Join extends React.Component {


state = {
  name: '',
  comment: ''
}
  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const client = new postmark.ServerClient("3d3618d2-25f5-40ff-9009-b50b7b71ecac")
    console.log('client')

    client.sendEmail({
  "From": "hello@codeforgreensboro.org",
  "To": "tim@codeforgreensboro.org",
  "Subject": `Comment from ${this.state.name}`,
  "TextBody": `${this.state.comment}`
}).then(response => {
    console.log(response.To);
    console.log(response.SubmittedAt);
    console.log(response.Message);
    console.log(response.MessageID);
    console.log(response.ErrorCode);
});
  }

render () {
  console.log(this.state);
  return <Page title="Join Us" >
    <p className="title" >Join Us</p>
    <div>
      <h2><a href="https://www.meetup.com/Code-for-Greensboro">MeetUp</a></h2>
      <h2><a href ="slack.codeforgreensboro.org">Slack</a></h2>
      <h2>Email      <a href="mailto:hello@codeforgreensboro.org">Send Question</a></h2>
      <form class="comment box"  onSubmit={this.handleSubmit}>
      <h1>Comments and Suggestions</h1>
      <div class="field">
        <div class="control">
          <input class="input" type="text" onChange={this.handleChange} name="name" placeholder="Name"/>
        </div>
        </div>
        <textarea class="textarea" name="comment" onChange={this.handleChange} placeholder="Leave us a comment"></textarea>
        <button type="submit" class="button">Submit</button>
        </form>
    </div>
  </Page>
}
}


export default Join;
