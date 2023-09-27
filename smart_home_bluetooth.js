const bleno = require('bleno');

const serviceUuid = 'service_uuid'; // Replace with your service UUID
const characteristicUuid = 'characteristic_uuid'; // Replace with your characteristic UUID

const primaryService = new bleno.PrimaryService({
  uuid: serviceUuid,
  characteristics: [
    new bleno.Characteristic({
      uuid: characteristicUuid,
      properties: ['read', 'write'],
      onReadRequest: (offset, callback) => {
        // Handle read request from the appliance
        // You can send data or status information here
        callback(bleno.Characteristic.RESULT_SUCCESS, Buffer.from('Data from hub'));
      },
      onWriteRequest: (data, offset, withoutResponse, callback) => {
        // Handle write request from the appliance
        // You can receive control commands from the appliance here
        console.log('Received data from appliance:', data.toString());
        callback(bleno.Characteristic.RESULT_SUCCESS);
      },
    }),
  ],
});

bleno.on('stateChange', (state) => {
  if (state === 'poweredOn') {
    bleno.startAdvertising('SmartHomeHub', [serviceUuid]);
  } else {
    bleno.stopAdvertising();
  }
});

bleno.on('advertisingStart', (error) => {
  if (!error) {
    bleno.setServices([primaryService]);
  }
});
