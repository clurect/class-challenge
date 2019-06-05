import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        return {
            teams:[{name:'Green', score:0}, {name:'Blue Team',score:1}]
        };
    }
});
