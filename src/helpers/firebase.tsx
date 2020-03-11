import firebase from "react-native-firebase";

const androidChannel = new firebase.notifications.Android.Channel(
  "channelId",
  "Channel Name",
  firebase.notifications.Android.Importance.Max
).setDescription("A natural description of the channel");

const waterReminderNotification = new firebase.notifications.Notification()
  .setNotificationId("w1")
  .setTitle("Drink Water!")
  .setBody("Remember to take a glass of water!")
  .android.setChannelId("channelId");

export { waterReminderNotification, androidChannel };
