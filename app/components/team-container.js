import Component from '@ember/component';

export default Component.extend({
    actions: {
        reduceScore(score) {
            score = score -1;
        }
    }
});
