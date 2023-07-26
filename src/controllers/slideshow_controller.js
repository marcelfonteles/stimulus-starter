import { Controller } from '@hotwired/stimulus';

export default class extends Controller {
    static targets = [ 'slide' ];
    static values = { index: Number, abc: String }

    // initialize() {
    //     this.index = Number(this.element.dataset.index);
    //     this.showCurrentSlide();
    // }

    next() {
        this.indexValue++;
        if (this.indexValue > this.slideTargets.length - 1) this.indexValue = 0;
        // this.showCurrentSlide();
    }

    previous() {
        this.indexValue--;
        if (this.indexValue < 0) this.indexValue = this.slideTargets.length - 1;
        // this.showCurrentSlide();
    }
    
    indexValueChanged() {
        this.showCurrentSlide()
      }

    showCurrentSlide() {
        this.slideTargets.forEach((element, index) => {
            // element.hidden = index !== this.index;
            element.style.opacity = index === this.indexValue ? 1 : 0;
        });
    }
}