import { NodeInitializer } from 'node-red';
import { MyStromSwitchStatusNode, MyStromSwitchStatusNodeDef } from './modules/types';
import { MyStromSwitchConfigNode } from '../mystrom-switch-config/modules/types';
import { MyStromSwitch } from '../../modules/MyStromSwitch';

const nodeInit: NodeInitializer = (RED): void => {
  function MyStromSwitchStatusNodeConstructor(this: MyStromSwitchStatusNode, config: MyStromSwitchStatusNodeDef): void {
    RED.nodes.createNode(this, config);
    this.device = RED.nodes.getNode(config.device) as MyStromSwitchConfigNode;

    this.on('input', async (msg, send, done) => {
      this.status({ fill: 'blue', shape: 'dot', text: 'running' });
      try {
        const myStromSwitch = new MyStromSwitch(this.device.address);
        const myStromSwitchStatus = await myStromSwitch.getSwitchStatus();

        msg.payload = {
          name: this.device.name,
          address: this.device.address,
          power: myStromSwitchStatus.power,
          relay: myStromSwitchStatus.relay,
          temperature: myStromSwitchStatus.temperature,
        };

        this.status({ fill: 'green', shape: 'dot', text: 'successful' });
        send(msg);
        done();
      } catch (error) {
        this.status({ fill: 'red', shape: 'dot', text: 'failed' });
        done(error instanceof Error ? error : new Error(`Unknown: ${error}`));
      }
    });
  }

  RED.nodes.registerType('mystrom-switch-status', MyStromSwitchStatusNodeConstructor);
};

export = nodeInit;
