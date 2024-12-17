import Handlebars from 'handlebars';
import messageComponentHTML from './messageComponent.hbs'
import './messageComponent.css';

class RootComponent extends HTMLElement {
    constructor() {
        super();
        this.skills = [
            'fast learner',
            'team player',
            'creative person',
            'work under pressure',
            'communicative skills',
            'one more'
        ]
    }

    template(skills) {
        return Handlebars.compile(messageComponentHTML)(skills);
    }

    connectedCallback() {
        this.innerHTML = this.template(this.skills);
    }
}

export default RootComponent;