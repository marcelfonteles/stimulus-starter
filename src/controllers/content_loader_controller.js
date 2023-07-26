import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
    static values = { url: String, refreshInterval: Number };

    connect() {
        // this.load();

        // if (this.refreshIntervalValue) this.startRefreshing();
    }

    // load() {
    //     fetch(this.urlValue)
    //     .then(response => response.text())
    //     .then(html => this.element.innerHTML = html);
    // }

    // load({ params }) {
    //     fetch(params.url)
    //       .then(response => response.text())
    //       .then(html => this.element.innerHTML = html)
    //   }

    startRefreshing() {
        this.refreshTimer = setInterval(() => {
            this.load()
        }, this.refreshIntervalValue);
    }

    stopRefreshing() {
        if (this.refreshTimer) {
            clearInterval(this.refreshTimer);
        }
        
    }

    disconnect() {
        this.stopRefreshing();
    }
}

// data-
//      param
//      target
//      value