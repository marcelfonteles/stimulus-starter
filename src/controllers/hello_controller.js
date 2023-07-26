import { Controller } from '@hotwired/stimulus';

export default class extends Controller {
    static targets = [ 'username' ];

    connect() {
        console.log('Hello, Stimulus!', this.element);
    }

    greet() {
        // const element = this.usernameTarget;
        // const name = element.value;
        
        console.log(`Hello, ${this.username}!`);
        
        // console.log('Hello, Greet', this.element);
    }

    get username() {
        return this.usernameTarget.value;
    }

    keyPress(e) {
        if (e.keyCode === 13) {
            this.greet();
        }
    }
}

// controllers
// data-controller='controller-name'
// data-controller-name-target='username'
// data-action='event->controller-name#classMethod'
// data-controller-target -> serve para referenciar um elemento HTML na página, 
//                           posso usar para várias coisas, além de verificar o valor do campo