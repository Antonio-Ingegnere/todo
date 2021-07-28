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


// window.ipcRenderer = ipcRenderer;

/*
window.addEventListener("DOMContentLoaded", () => {
  const menu = Menu.getApplicationMenu();
  menu.append(
    new MenuItem({
      label: "Todo",
      submenu: [
        {
          label: "New task",
          accelerator: "Ctrl+N",
          click: () => {
            console.log("Local shortcut event");
          },
        },
      ],
    })
  );
});
*/
