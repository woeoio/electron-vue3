import Vue from './apis/vue.esm.browser.min.js';

const pages = () => {
    const fs = require('fs');
    let o = '';
    fs.readdirSync(__dirname + '/views').forEach((view) => {
        let v = require(__dirname + '/views/' + view);
        if (o == '') o = v.main.data().only;
        if (v.main) Vue.component(v.main.data().only, v.main);
    });
    return o;
};

const homeView = pages();
new Vue({
    el: '#app',
    data: {componentName: homeView, util: require('./apis/util'), remote: require('electron').remote},
    created() {
        console.log('init');
    },
    methods: {
        testC() {
            console.log(this.$refs.componentName.only)
        }
    }
});