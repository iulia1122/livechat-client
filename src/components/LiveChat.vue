<template>
  <div class="chat">
    <div class="chat__comments__container">
      <div class="chat__comments__scroll">
        <div class="chat__comment" v-for="(comment,index) in messages" v-bind:key="index">
          <div class="chat__comment__header">
            <div class="chat__header__icon">
              <font-awesome-icon icon="grin-stars"/>
            </div>
            <div class="comment__username">{{comment.username}}</div>
          </div>
          <div class="comment__message">{{comment.message}}</div>
        </div>
      </div>
      <div class="chat__controls">
        <input type="text" placeholder="Type your message here" v-model="message">
        <div class="chat__controls__button">
          <button v-on:click="broadcastMessage">Send</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "LiveChat",
  props: ["username"],
  data: function() {
    return { message: "", messages: [] };
  },
  sockets: {
    connect: function() {
      console.log("socket connected");
    },
    customEmit: function(data) {
      this.messages.push({ username: data.username, message: data.message });
    }
  },
  methods: {
    broadcastMessage: function() {
      axios.post("http://localhost:3000/message", {
        username: this.username,
        message: this.message,
        emoji: this.emoji
      });
      this.message = "";
    }
  }
};
</script>

<style>
.chat {
  width: 30%;
  padding: 30px;
  box-sizing: border-box;
}
.comment__username {
  font-weight: bold;
  padding: 15px;
}
.chat__comments__container {
  background-color: white;
  height: 99%;
  width: 100%;
  border: solid #fb406c 2px;
  background: "lightgrey";
  position: relative;
}
.chat__comments__scroll {
  height: 420px;
  width: 100%;
  overflow-y: scroll;
}
.chat__controls__button {
  margin: 0 10px;
}
.chat__comment__header {
  display: flex;
}
.chat__header__icon {
margin: 15px 0;
}
.chat__comment {
  flex: 1;
  padding: 0 30px;
  text-align: left;
}
.chat_comment span {
  font-weight: bold;
}
.chat__controls {
  position: absolute;
  bottom: 0;
  display: flex;
  align-items: stretch;
  width: 100%;
  padding: 10px;
  background: #fb406c;
  width: 100%;
  padding: 10px;
  background: #fb406c;
  float: left;
  box-sizing: border-box;
}
.chat__controls input {
  padding: 10px;
  color: "light-grey";
  border-radius: 5px;
  flex: 1;
  border: 1px solid #fff;
  padding: 10px;
  color: "light-grey";
  border-radius: 5px;
  width: 60%;
  float: left;
  border-radius: 5px;
}
.chat__controls button {
  bottom: 0px;
  bottom: 0px;
  background: rgba(255, 255, 255, 0.8);
  color: #fb406c;
  width: 100%;
  float: left;
  border-radius: 5px;
}
.chat__controls button:hover {
  background: rgba(255, 255, 255, 1);
}

@media (max-width: 1350px) {
  .chat {
    width: 100%;
    height: 256px;
    text-align: center;
    margin: 0 auto;
    padding: 0;
  }
  .chat__comments__scroll {
    height: 195px;
  }
}

@media (min-width: 1350px) {
  .chat {
    width: 50%;
  }
  .chat__comments__container {
    height: 99%;
    width: 100%;
    position: relative;
  }
}

@media screen and (max-width: 767px) {
  .chat__controls button {
    padding: 5px;
  }
  .chat {
    width: 100%;
    height: 160px;
  }
  .chat__comment {
    padding: 10px 5px;
  }
  .chat__comments__scroll {
    height: 100px;
  }
}

</style>
