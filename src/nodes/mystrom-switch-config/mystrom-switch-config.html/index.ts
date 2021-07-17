import { EditorRED } from "node-red";
import { MyStromSwitchConfigEditorNodeProperties } from "./modules/types";

declare const RED: EditorRED;

RED.nodes.registerType<MyStromSwitchConfigEditorNodeProperties>("mystrom-switch-config", {
  category: "config",
  defaults: {
    name: {
      value: "",
      required: true,
    },
    address: {
      value: "",
      required: true,
    },
  },
  label: function () {
    return this.name || "mystrom switch config";
  },
});
