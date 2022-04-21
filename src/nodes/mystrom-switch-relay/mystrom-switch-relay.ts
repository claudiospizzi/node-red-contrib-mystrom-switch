import { NodeInitializer } from 'node-red';
import { MyStromSwitch } from '../../modules/MyStromSwitch';
import { MyStromSwitchConfigNode } from '../mystrom-switch-config/modules/types';
import { MyStromSwitchRelayNode, MyStromSwitchRelayNodeDef } from './modules/types';

const nodeInit: NodeInitializer = (RED): void => {
  function MyStromSwitchRelayNodeConstructor(this: MyStromSwitchRelayNode, config: MyStromSwitchRelayNodeDef): void {
    RED.nodes.createNode(this, config);
    this.device = RED.nodes.getNode(config.device) as MyStromSwitchConfigNode;
    this.relay = config.relay;

    this.on('input', async (msg, send, done) => {
      this.status({ fill: 'blue', shape: 'dot', text: 'running' });
      try {
        // Calculate the relay state
        let newRelay = false;
        if (this.relay === 'on') {
          newRelay = true;
        } else if (this.relay === 'off') {
          newRelay = false;
        } else {
          newRelay = msg.payload === true;
        }

        const myStromSwitch = new MyStromSwitch(this.device.address);
        await myStromSwitch.setRelay(newRelay);

        this.status({ fill: 'green', shape: 'dot', text: 'successful' });
        send(msg);
        done();
      } catch (error) {
        this.status({ fill: 'red', shape: 'dot', text: 'failed' });
        done(error instanceof Error ? error : new Error(`Unknown: ${error}`));
      }
    });
  }

  RED.nodes.registerType('mystrom-switch-relay', MyStromSwitchRelayNodeConstructor);
};

export = nodeInit;
