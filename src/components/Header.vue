<template>
  <div class="app__header">
    <div class="app__title">
      <div class="app__title__logo">
        <font-awesome-icon icon="comment-dots"/>
      </div>
      <h2>Youtube Live Chat</h2>
    </div>
    <div class="app__header__search">
      <input type="text" placeholder="Please enter a youtube video link" v-model="youtubeURL">
      <button class="app_header__searchButton" v-on:click="sendYoutubeURL">OK</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Header",
  data: function() {
    return { youtubeURL: "" };
  },
  methods: {
    sendYoutubeURL: function() {
      this.$emit("youtubeURL", this.youtubeURL);
    }
  }
};
</script>

<style>
.app__header {
  text-align: left;
}
.app__title {
  display: flex;
  color: #fb406c;
  font-size: 36px;
}
.app__title__logo {
  margin: 10px 10px 0 0;
}
.app__title h2 {
  text-align: left;
  margin: 10px 30px 10px 0;
}
.app__header input {
  padding: 15px;
  padding: 7px;
  width: 85%;
}
.app__header__search {
  justify-content: space-between;
  display: flex;
  width: 80%;
}
.app_header__searchButton {

  display: inline-block;
  font-size: 16px;
  bottom: 0px;
}

.app__header input {
  flex: 1;
}
.app__title {
  display: flex;
}

@media screen and (max-width: 767px) {
  .app_header__searchButton {
    padding: 5px;
  }
}

@media (min-width: 768px) and (max-width: 991px) {
  .app__title {
    display: flex;
    margin: 30px 30px 30px 0;
  }
  .app__header input {
    flex: 1;
  }
}

@media (min-width: 992px) and (max-width: 1199px) {
  .app__title {
    display: -webkit-box;
    margin: 30px 30px 30px 0;
  }
  .app__title__logo {
    margin: 10px 15px 10px 0;
  }
}

@media screen and (min-width: 1200px) {
  .app__title h2 {
    width: 30%;
    margin: 30px 30px 30px 0;
  }
  .app__title__logo {
    margin: 30px 30px 30px 0;
  }
  .app__header input {
    width: 50%;
  }
}
</style>
