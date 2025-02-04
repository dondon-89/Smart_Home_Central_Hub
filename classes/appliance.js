// Smart Appliance base class

class SmartAppliance {
    constructor(name='') {
        this._connected = false;
        this._poweredOn = false;
        this._name = String(name);
    }

    get connected() {
        return this._connected;
    }

    get poweredOn() {
        return this._poweredOn;
    }

    get name() {
        return this._name;
    }

    set name(name) {
        this._name = String(name);
    }

    connect() {
        this._connected = true;
    }

    disconnect() {
        this._connected = false;
    }

    powerOn() {
        this._poweredOn = true;
    }

    powerOff() {
        this._poweredOn = false;
    }
}

module.exports = { SmartAppliance }