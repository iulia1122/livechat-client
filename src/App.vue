<template>
  <div id="app">
    <div class="app__container">
      <Header @youtubeURL="setYoutubeURL"/>
      <div class="app__content">
        <div class="app__chat__area">
          <VideoPlayer :youtubeURL="youtubeURL"/>
          <LiveChat :username="username"/>
        </div>
        <Profile @setUsername="setUsername"/>
      </div>
    </div>
  </div>
</template>

<script>
import VideoPlayer from "./components/VideoPlayer.vue";
import LiveChat from "./components/LiveChat.vue";
import Header from "./components/Header.vue";
import Profile from "./components/Profile.vue";

export default {
  name: "app",
  components: {
    VideoPlayer,
    LiveChat,
    Header,
    Profile
  },
  data: function() {
    return {
      youtubeURL: "",
      username: ""
    };
  },
  methods: {
    setYoutubeURL: function(url) {
      this.youtubeURL = url;
    },
    setUsername: function(username) {
      this.username = username;
    }
  }
};
</script>

<style>
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.app__container {
  width: 90%;
  margin: 0 auto;
}
.app__chat__area {
  display: block;
  margin: 30px 0;
  justify-content: space-between;
}
button {
  background: #fb406c;
  border: none;
  color: white;
  padding: 15px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  padding: 10px 30px;
  box-sizing: border-box;
  transition: all 0.2s;
  font-size:16px;
}
button:hover {
  cursor: pointer;
  box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);
}
@media (min-width: 1350px) {
  .app__chat__area {
    display: flex;
    margin: 30px 0;
  }
}
</style>
