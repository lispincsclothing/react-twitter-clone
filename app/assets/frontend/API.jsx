import ServerActions from "./actions/ServerActions"

export default {
  getAllTweets() {
    console.log(2, "API.getAllTweets");
    $.ajax({
      url: '/tweets',
      dataType: 'json'
    })
      .success(rawTweets => ServerActions.receivedTweets(rawTweets))
      .fail(error => console.log(error));
  },
  createTweet(body) {
    $.ajax({
      url: '/tweets',
      type: 'POST',
      dataType: 'json',
      data: {
        body: body
      }
    })
      .success(rawTweet => ServerActions.receivedOneTweet(rawTweet))
      .fail(error => console.log(error));
  }
}
