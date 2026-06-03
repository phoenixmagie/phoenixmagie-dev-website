import { compileImmortal } from '../src/index.js';

// Runtime definieren
window.render = function(text) {
    const output = document.getElementById('output');
    const p = document.createElement("p");
    p.innerText = text;
    output.appendChild(p);
};

// Suche alle Immortal-Tags und führe sie aus
function runInlineImmortal() {
    const scripts = document.querySelectorAll('script[type="immortal"]');
    
    scripts.forEach(script => {
        const source = script.innerText;
        try {
            const jsCode = compileImmortal(source);
            eval(jsCode);
        } catch (err) {
            console.error("Immortal Fehler:", err);
        }
    });
}

// Starten, sobald das DOM bereit ist
document.addEventListener('DOMContentLoaded', runInlineImmortal);