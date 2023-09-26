// Smart Appliance base class

class SmartAppliance {
    constructor() {
        this.connected = false;
        this.poweredOn = false;
    }

    connect() {
        this.connected = true;
    }

    disconnect() {
        this.connected = false;
    }

    powerOn() {
        this.poweredOn = true;
    }

    powerOff() {
        this.poweredOn = false;
    }
}

module.exports = { SmartAppliance }