<template>
  <div class="video__container">
    <youtube :video-id="videoId" :player-width="playerWidth" :player-height="playerHeight"/>
  </div>
</template>


<script>
import { getIdFromURL } from "vue-youtube-embed";

let url = "https://www.youtube.com/embed/WACsubR4-jk";
let videoId = getIdFromURL(url);

export default {
  name: "VideoPlayer",
  props: ["youtubeURL"],
  data: function() {
    return { videoId: videoId, playerWidth: "680", playerHeight: "400" };
  },
  watch: {
    youtubeURL: function() {
      this.youtubeURL.replace("watch?v=", "embed/");
      this.videoId = getIdFromURL(this.youtubeURL);
      this.change();
    },
    $mq: function() {
      if (this.$mq === "mobile") {
        this.playerWidth = "100%";
        this.playerHeight = 280;
      } else if (this.$mq === "tablet") {
        this.playerWidth = "100%";
        this.playerHeight = 300;
      } else if (this.$mq === "laptop") {
        this.playerWidth = "100%";
        this.playerHeight = 380;
      } else if (this.$mq === "desktop") {
        this.playerWidth = "100%";
        this.playerHeight = 500;
      }
    }
  },
  mounted() {
    console.log(this.$mq);
  }
};
</script>

<style>
.video__container {
  width: 100%;
  box-sizing: border-box;
}

@media screen and (max-width: 767px) {
  .video__container {
    width: 100%;
  }
}
@media (min-width: 992px) and (max-width: 1199px) {
  .video__container {
    padding: 20px 0;
    width: 100%;
  }
}

@media screen and (min-width: 1200px) {
  .video__container {
    padding: 20px 0;
    width: 100%;
  }
}
</style>