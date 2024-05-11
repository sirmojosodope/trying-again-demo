const fs = require('fs');

class DeathCounter {
    constructor() {
        this.deaths = 0;
        this.filename = 'death_counter.txt';
    }

    increaseDeath() {
        this.deaths++;
        this.saveToFile();
    }

    saveToFile() {
        fs.writeFileSync(this.filename, this.deaths.toString());
    }

    loadFromFile() {
        try {
            const data = fs.readFileSync(this.filename, 'utf8');
            this.deaths = parseInt(data);
        } catch (err) {
            // Initialize counter if the file doesn't exist
            this.saveToFile();
        }
    }
}

// Example usage
const deathCounter = new DeathCounter();
deathCounter.loadFromFile();

// Simulate player deaths
// Call increaseDeath() whenever the player dies
deathCounter.increaseDeath();
deathCounter.increaseDeath();
deathCounter.increaseDeath();

console.log(`Total deaths: ${deathCounter.deaths}`);
