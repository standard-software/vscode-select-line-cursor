const vscode = require(`vscode`);
const {
  registerCommand,
  commandQuickPick,
} = require(`./lib/libVSCode.js`);

function activate(context) {

  registerCommand(context,
    `vscode-select-line-cursor.helloWorld`,
    () => {
      vscode.window.showInformationMessage(`Hello World from vscode-select-line-cursor!!`);
    }
  );
}

function deactivate() {}

module.exports = {
  activate,
  deactivate
};
