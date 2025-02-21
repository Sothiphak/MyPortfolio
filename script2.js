// Color Generator Class
class ColorGenerator {
    constructor() {
        this.records = [];  // Store history of generated colors
        this.colorBox = document.querySelector(".color-box");
        this.colorCode = document.querySelector(".color-code");
        this.historyContainer = document.querySelector(".history");
        this.init();
    }

    // Generate a random HEX color
    generate() {
        const color = `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0")}`;
        document.body.style.backgroundColor = color;
        this.colorBox.style.backgroundColor = color;
        this.colorCode.textContent = color;
        
        this.records.push(color);
        this.updateHistory();
    
        // Reset the Reset button color when a new color is generated
        document.querySelector(".reset").style.backgroundColor = "white";
        document.querySelector(".reset").style.color = "black";
    }
    

    // Update the history of generated colors
    updateHistory() {
        this.historyContainer.innerHTML = "";
        this.records.slice(-7).forEach(color => { // Show last 7 colors
            const div = document.createElement("div");
            div.classList.add("color-item");
            div.innerHTML = `${color} <div class="color-box-small" style="background-color: ${color};"></div>`;
            this.historyContainer.appendChild(div);
        });
    }

    // Reset the color history
    reset() {
        if (this.records.length > 0) {
            const lastColor = this.records[this.records.length - 1]; // Get last generated color
            document.querySelector(".reset").style.backgroundColor = lastColor; // Apply to reset button
            document.querySelector(".reset").style.color = "white"; // Adjust text color for visibility
        }
    
        this.records = [];
        this.historyContainer.innerHTML = "";
        document.body.style.backgroundColor = "white";
        this.colorBox.style.backgroundColor = "black";
        this.colorCode.textContent = "#FFFFFF";
    }
    

    // Attach event listeners
    init() {
        document.querySelector(".generate").addEventListener("click", () => this.generate());
        document.querySelector(".reset").addEventListener("click", () => this.reset());
    }
}

// Initialize the Color Generator
const colorApp = new ColorGenerator();
