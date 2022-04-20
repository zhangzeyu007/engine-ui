/*
 * @Description:
 * @Author: 张泽雨
 * @Date: 2022-04-20 16:32:30
 * @LastEditors: 张泽雨
 * @LastEditTime: 2022-04-20 18:51:01
 * @FilePath: \engine-ui\examples\play.js
 */
import Vue from 'vue';
import Element from 'main/index.js';
import App from './play/index.vue';
import 'packages/theme-chalk/src/index.scss';

Vue.use(Element);

new Vue({ // eslint-disable-line
  render: h => h(App)
}).$mount('#app');
