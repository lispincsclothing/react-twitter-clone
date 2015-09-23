import ServerActions from "./actions/ServerActions"

export  default {
  getAllTweets(){
    $.ajax({
      url: '/tweets',
      dataType: 'json'})
    .success(rawTweets => ServerActions.receivedTweets(rawTweets))
    .fail(error  => console.log(error));
  }
}
