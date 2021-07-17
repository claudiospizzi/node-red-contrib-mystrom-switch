import axios from "axios";

export class MyStromSwitchStatus {
  public power: number | undefined;
  public relay: boolean | undefined;
  public temperature: number | undefined;
}

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
    switchStatus.relay = result.data.relay
    switchStatus.temperature = result.data.temperature;

    return switchStatus;
  }
}
