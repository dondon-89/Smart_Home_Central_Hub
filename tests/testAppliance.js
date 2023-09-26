// Tests for Smart Appliance base class

const assert = require('assert');
const { SmartAppliance } = require('../classes/appliance');

describe('SmartAppliance', () => {
    const testAppliance = new SmartAppliance();

    it('should connect when connect method is called', () => {
        testAppliance.connect();
        assert.equal(testAppliance.connected, true);
    });

    it('should disconnect when disconnect method is called', () => {
        testAppliance.disconnect();
        assert.equal(testAppliance.connected, false)
    });

    it('should power on when powerOn method is called', () => {
        testAppliance.powerOn();
        assert.equal(testAppliance.poweredOn, true);
    });

    it('should power off when powerOff method is called', () => {
        testAppliance.powerOff();
        assert.equal(testAppliance.poweredOn, false);
    });

    it('should be able to set a custom name', () => {
        testAppliance.name = 'Bingo';
        assert.equal(testAppliance.name, 'Bingo');
    })
});