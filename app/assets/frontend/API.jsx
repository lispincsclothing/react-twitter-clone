import ServerActions from "./actions/ServerActions"

export  default {
  getAllTweets(){
    console.log(2, "API.getAllTweets");
    $.ajax({
      url: '/tweets',
      dataType: 'json'})
    .success(rawTweets => ServerActions.receivedTweets(rawTweets))
    .fail(error  => console.log(error));
  }
}
