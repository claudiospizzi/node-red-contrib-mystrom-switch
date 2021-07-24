import { EditorRED } from 'node-red';
import { MyStromSwitchRelayEditorNodeProperties } from './modules/types';

declare const RED: EditorRED;

RED.nodes.registerType<MyStromSwitchRelayEditorNodeProperties>('mystrom-switch-relay', {
  category: 'mystrom switch',
  color: '#75b03a',
  defaults: {
    name: {
      value: '',
    },
    switch: {
      value: '',
      type: 'mystrom-switch-config',
      required: true,
    },
    relay: {
      value: '',
      required: true,
    },
  },
  inputs: 1,
  outputs: 0,
  icon: 'relay.png',
  paletteLabel: 'relay',
  label: function () {
    return this.name || 'mystrom switch relay';
  },
});
