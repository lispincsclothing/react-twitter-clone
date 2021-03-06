import AppDispatcher from "../dispatcher";
import actionTypes from "../constants";
import {EventEmitter} from "events";

let _tweets = [];
const CHANGE_EVENT = "CHANGE";

class TweetEventEmitter extends EventEmitter {
  getAll() {
    return _tweets.map(tweet => {
      tweet.formattedDate = moment(tweet.created_at).fromNow();
      return tweet;
    });
  }
  emitChange() {
    this.emit(CHANGE_EVENT);
  }
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }
  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
}

let TweetStore = new TweetEventEmitter();

AppDispatcher.register(action => {
  switch (action.actionType) {
  case actionTypes.RECEIVED_TWEETS :
    console.log(4, "TweetStore");
    _tweets = action.rawTweets;
    TweetStore.emitChange();
    break;
  case actionTypes.RECEIVED_ONE_TWEET:
    _tweets.unshift(action.rawTweet);
    TweetStore.emitChange();
    break;
  default :
    // no operations
  }
});

export default TweetStore;
