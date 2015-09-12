import Tweet from "./Tweet"

export default class TweetsList extends React.Component {
  render() {
    let tweets = this.props.tweets.map(tweet => <Tweet {...tweet} />)
    return (
       <ul className="collection">
         {tweets}
       </ul>
    );
  }
}
