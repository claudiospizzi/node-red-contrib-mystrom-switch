import { NodeInitializer } from 'node-red';
import { MyStromSwitch } from '../../modules/mystrom-switch';
import { MyStromSwitchConfigNode } from '../mystrom-switch-config/modules/types';
import { MyStromSwitchRelayNode, MyStromSwitchRelayNodeDef } from './modules/types';

const nodeInit: NodeInitializer = (RED): void => {
  function MyStromSwitchRelayNodeConstructor(this: MyStromSwitchRelayNode, config: MyStromSwitchRelayNodeDef): void {
    RED.nodes.createNode(this, config);
    this.switch = RED.nodes.getNode(config.switch) as MyStromSwitchConfigNode;
    this.relay = config.relay;

    this.on('input', (msg, send, done) => {
      this.status({ fill: 'blue', shape: 'dot', text: 'running' });

      // Calculate the relay state
      let relay = false;
      if (this.relay === 'on') {
        relay = true;
      } else if (this.relay === 'off') {
        relay = false;
      } else {
        relay = msg.payload === true;
      }

      new MyStromSwitch(this.switch.address)
        .setRelay(relay)
        .then(() => {
          this.status({ fill: 'green', shape: 'dot', text: 'successful' });

          done();
        })
        .catch((error) => {
          this.status({ fill: 'red', shape: 'dot', text: 'failed' });

          done(error);
        });
    });
  }

  RED.nodes.registerType('mystrom-switch-relay', MyStromSwitchRelayNodeConstructor);
};

export = nodeInit;
