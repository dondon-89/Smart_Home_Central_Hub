// Smart Appliance base class

class SmartAppliance {
    constructor(name='') {
        this._connected = false;
        this._poweredOn = false;
        this._name = String(name);
    }

    get name() {
        return this._name;
    }

    set name(name) {
        this._name = String(name);
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