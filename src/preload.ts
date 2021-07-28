const { Menu, MenuItem, ipcRenderer, contextBridge } = require("electron");

// import {ipcRenderer} from 'electron';

console.log("menu module loaded");


contextBridge.exposeInMainWorld("appRuntime", {
  send: (channel: any, data: any) => {
    ipcRenderer.send(channel, data);
  },
  subscribe: (channel: any, listener: any) => {
    const subsription = (event: any, ...args: any) => listener(...args);
    ipcRenderer.on(channel, subsription);

    return () => {
      ipcRenderer.removeListener(channel, subsription);
    };
  },
});


