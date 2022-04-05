import { Universe } from "wasm-game-of-life";

const pre = document.getElementById("game-of-life-canvas");
const width = window.prompt("Enter width:", 64);
const height = window.prompt("Enter height:", 64);
const universe = Universe.new(width, height);

const renderLoop = () => {
    pre.textContent = universe.render();
    universe.tick();

    requestAnimationFrame(renderLoop);
}

requestAnimationFrame(renderLoop);