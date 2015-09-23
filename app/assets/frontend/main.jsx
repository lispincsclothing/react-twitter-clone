import TweetBox from "./components/TweetBox";
import TweetsList from "./components/TweetsList";
import TweetActions from "./actions/TweetActions";

TweetActions.getAllTweets();

let mockTweets = [];

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tweetsList: mockTweets
    };
  }

  // formattedTweets(tweetsList){
  //   let formattedList = tweetsList.map(tweet => {
  //     tweet.formattedDate = moment(tweet.created_at).fromNow();
  //     return tweet;
  //   });
  //   return {
  //     tweetsList: formattedList
  //   };
  // }

  addTweet(tweetToAdd) {
    // $.ajax({
    //   url: '/tweets',
    //   type: 'POST',
    //   dataType: 'json',
    //   data: { body: tweetToAdd }
    // }).success(savedTweet => {
    //   console.log("success");
    //   let newTweetsList = this.state.tweetsList;
    //   newTweetsList.unshift(savedTweet);
    //   this.setState({
    //     tweetsList: formattedTweets(newTweetsList)
    //   });
    // }).fail(error => {
    //   console.log('error');
    // });
  }

  componentDidMount() {
    // $.ajax({
    //   url: '/tweets',
    //   dataType: 'json'})
    // .success(data => this.setState(this.formattedTweets(data)))
    // .fail(error  => console.log(error));
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
