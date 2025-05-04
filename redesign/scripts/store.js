export class Store {
    static #instance = null;

    static store() {
        if (Store.#instance == null) {
            Store.#instance = new Store();
        }

        console.log("Storage created");
        return Store.#instance;
    }

    get(key) {
        return window.localStorage.getItem(key);
    }

    set(key, value) {
        window.localStorage.setItem(key, value)
    }

    toggle(key) {
        console.log(window.localStorage.getItem(key));
        const oldValue = window.localStorage.getItem(key);
        let newValue = null;

        // let newValue = null; 
        if (key === "contrast") {
            if (oldValue === "contrast-regular") {
                newValue = "contrast-high";
            } else { // contrast-high
                newValue = "contrast-regular";
            }

        } else if (key === "mode") {
            if (oldValue === "mode-light") {
                newValue = "mode-dark";
            } else {
                newValue = "mode-light";
            }

        } else if (key === "text") {
            if (oldValue === "text-regular") {
                newValue = "text-large";
            } else {
                newValue = "text-regular";
            }
        }

        window.localStorage.setItem(key, newValue);
        return [oldValue, newValue]; // new value 

    }

}