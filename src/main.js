import Vue from 'vue'
import App from './App.vue'
import VueSocketIO from 'vue-socket.io'
import VueYouTubeEmbed from 'vue-youtube-embed'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee, faPaw, faDog, faCat, faGrinStars, faCommentDots, faSmile } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueMq from 'vue-mq'

Vue.use(VueMq, {
  breakpoints: {
    mobile: 450,
    tablet: 900,
    laptop: 1250,
    desktop: Infinity,
  }
})

library.add(faCoffee)
library.add(faPaw)
library.add(faCat)
library.add(faDog)
library.add(faGrinStars)
library.add(faCommentDots)
library.add(faSmile)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(VueYouTubeEmbed);
 
Vue.use(new VueSocketIO({
    debug: true,
    connection: 'http://localhost:3000',
}));

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
