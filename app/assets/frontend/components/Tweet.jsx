var faker = require('faker');

export default class Tweet extends React.Component {
  render() {
    return (
        <li className="collection-item avatar">
          <i className="material-icons circle">person_pin</i>
          <span className="title">Ghengis Khan</span>
          <p>{faker.hacker.phrase()}!</p>
        </li>
    );
  }
}
