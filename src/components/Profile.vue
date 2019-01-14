<template>
  <div class="profile">
    <h2>Commenting as: {{username}}</h2>
    <a v-if="!changeUsername" href="#" v-on:click="showInput">Change</a>
    <div class="profile__change__username">
      <input v-if="changeUsername" type="text" placeholder="Set your username" v-model="username">
      <button v-if="changeUsername" v-on:click="setUsername">OK</button>
    </div>
    <!--  <div class="profile__icons__container">
      <h2> Pick your emoji </h2>
      <div class="profile__icon__container">
        <font-awesome-icon icon="paw"/>
      </div>
      <div class="profile__icon__container">
        <font-awesome-icon icon="dog"/>
      </div>
      <div class="profile__icon__container">
        <font-awesome-icon icon="cat"/>
      </div>
      <div class="profile__icon__container">
        <font-awesome-icon icon="grin-stars"/>
      </div>
      <div class="profile__icon__container">
        <font-awesome-icon icon="coffee"/>
      </div>
    </div>-->
  </div>
</template>

<script>
export default {
  name: "Profile",
  data: function() {
    return {
      username: "anonymous" + Math.floor(Math.random() * 10000 + 1),
      profileIcons: ["paw", "dog", "cat", "grin-stars", "coffee"],
      changeUsername: false
    };
  },
  methods: {
    setUsername: function() {
      this.$emit("setUsername", this.username);
      this.changeUsername = false;
    },
    showInput: function() {
      this.changeUsername = true;
    }
  },
  mounted() {
    this.setUsername();
  }
};
</script>

<style>
.profile {
  color: #fb406c;
  line-height: 22px;
  text-align: left;
}
.profile a {
  text-decoration: none;
  color: #ff9e24;
  font-weight: bold;
}
.profile__change__username {
  margin: 10px 0;
}
.profile input {
  padding: 10px;
}
.profile__icons__container {
  margin: 20px 0;
  font-size: 36px;
  display: flex;
}
.profile__icon__container {
  margin: 20px;
}
</style>