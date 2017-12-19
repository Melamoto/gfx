import Display from "./Display";

export default class Main {
    constructor() {
        let container = document.getElementById('container');
        if (container != null) {
            let display = new Display(container);
        }
    }
}

let start = new Main();
