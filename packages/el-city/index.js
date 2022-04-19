import ElCity from './src/main';

/* istanbul ignore next */
ElCity.install = function(Vue) {
  Vue.component(ElCity.name, ElCity);
};

export default ElCity;
