import axios from 'axios';
import { MyStromSwitchStatus } from './MyStromSwitchStatus';

/**
 * Class representing a MyStrom switch.
 */
export class MyStromSwitch {
  private address: string;

  constructor(address: string) {
    this.address = address;
  }

  /**
   * Get the current switch state.
   * @returns The switch state.
   */
  async getSwitchStatus(): Promise<MyStromSwitchStatus> {
    const url = `http://${this.address}/report`;
    const result = await axios.get(url);

    const switchStatus = new MyStromSwitchStatus();
    switchStatus.power = result.data.power;
    switchStatus.relay = result.data.relay;
    switchStatus.temperature = result.data.temperature;
    switchStatus.wattSeconds = result.data.Ws;

    return switchStatus;
  }

  /**
   * Set the switch relay state.
   * @param relay The relay state: true if on, false if off.
   */
  async setRelay(relay: boolean): Promise<void> {
    const url = `http://${this.address}/relay?state=${relay ? 1 : 0}`;
    await axios.get(url);
  }
}
