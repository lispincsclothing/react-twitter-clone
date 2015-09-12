import TweetBox from "./components/TweetBox"
import TweetsList from "./components/TweetsList"

var faker = require('faker');

let numofmockTweets = 10;
let mockTweets = [];
for (var i = 0; i < numofmockTweets; i++) {
  mockTweets.push({key: i, name: faker.name.findName(), body: faker.hacker.phrase()});
}

class Main extends React.Component {
  render() {
    return (
      <div className="container">
        <TweetBox />
        <TweetsList tweets={mockTweets} />
      </div>
    );
  }
}

let documentReady = () => {
  React.render(
      <Main />,
      document.getElementById('react')
  );
};

$(documentReady);
