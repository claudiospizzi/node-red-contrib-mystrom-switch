import { EditorRED } from 'node-red';
import { MyStromSwitchStatusEditorNodeProperties } from './modules/types';

declare const RED: EditorRED;

RED.nodes.registerType<MyStromSwitchStatusEditorNodeProperties>('mystrom-switch-status', {
  category: 'mystrom switch',
  color: '#75b03a',
  defaults: {
    name: {
      value: '',
    },
    device: {
      value: '',
      type: 'mystrom-switch-config',
      required: true,
    },
  },
  inputs: 1,
  outputs: 1,
  icon: 'status.png',
  paletteLabel: 'status',
  label: function () {
    return this.name || 'mystrom switch status';
  },
});
