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
});