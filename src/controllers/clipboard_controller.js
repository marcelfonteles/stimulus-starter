import { Controller } from '@hotwired/stimulus'

export default class extends Controller {
    static targets = [ 'source' ];
    copy() {

    }

    get source() {
        return this.sourceTarget.innerHTML;
        return this.sourceTarget.value;
    }

    copy(event) {
        console.log(this.source);
        event.preventDefault();
        navigator.clipboard.writeText(this.source);
    }
}
