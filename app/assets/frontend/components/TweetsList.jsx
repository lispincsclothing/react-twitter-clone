import Tweet from "./Tweet"

let mockTweets = [
  {name:"Wookie", }
];

export default class TweetsList extends React.Component {
  render() {
    return (
       <ul className="collection">
         <Tweet />
         <Tweet />
         <Tweet />
       </ul>
    );
  }
}
