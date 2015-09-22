import TweetBox from "./components/TweetBox"
import TweetsList from "./components/TweetsList"

let numofmockTweets = 10;
let mockTweets = [];

class Main extends React.Component {constructor(props) {
    super(props);
    this.state = {
      tweetsList: mockTweets
    };
  }

  addTweet(tweetToAdd) {
    $.ajax({
      url: '/tweets',
      type: 'POST',
      dataType: 'json',
      data: { body: tweetToAdd }
    }).success(savedTweet => {
      console.log("success");
      let newTweetsList = this.state.tweetsList;
      newTweetsList.unshift(savedTweet);
      this.setState({
        tweetsList: newTweetsList
      });
    }).fail(error => {
      console.log('error');
    });
  }

  componentDidMount() {
    $.ajax({
      url: '/tweets',
      dataType: 'json'
    }).done(data => this.setState({
      tweetsList: data
    })).fail(function() {
      console.log("error");
    });
  }

  render() {
    return (
      <div className="container">
        <TweetBox sendTweet={this.addTweet.bind(this)}/>
        <TweetsList tweets={this.state.tweetsList}/>
      </div>
    );
  }
}

let documentReady = () => {
  React.render(<Main/>, document.getElementById('react'));
};

$(documentReady);
