module.exports = function (RED) {
    function MyStromSwitchRelay (config) {

        const request = require('request')

        // Node definition, invoked on deployment
        RED.nodes.createNode(this, config)
        var node = this

        // Node configuration
        node.switch = RED.nodes.getNode(config.switch)
        node.relay = config.relay

        node.on('input', function (msg, send, done) {

            // Node implementation, invoked on input trigger
            var relayValue = (node.relay === 'on') ? 1 : 0
            var url = 'http://' + node.switch.address + '/relay?state=' + relayValue

            request.get(url, (error, response, body) => {
                if (error) {
                    // Error during request, e.g. timeout
                    node.status({ fill: 'red', shape: 'dot', text: 'failed (error)' })
                    if (done) {
                        done(error)
                    }
                } else if (response.statusCode !== 200) {
                    // Request was okay, but request code is not 200
                    node.status({ fill: 'red', shape: 'dot', text: 'failed (http/' + response.statusCode + ')' })
                    if (done) {
                        done(new Error('Failed with http code ' + response.statusCode + ' on ' + node.switch.address + ':80'))
                    }
                } else {
                    // Everything fine, return the message object
                    node.status({ fill: 'green', shape: 'dot', text: 'successful' })
                }
            })
        })
    }
    RED.nodes.registerType('mystrom switch relay', MyStromSwitchRelay)
}
