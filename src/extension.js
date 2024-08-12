const vscode = require(`vscode`);
const {
  registerCommand,
  commandQuickPick,
} = require(`./lib/libVSCode.js`);

const {
  _trim,
  _trimFirst,
} = require(`./parts/parts.js`);

const getIndent = (line) => {
  return line.length - _trimFirst(line, [` `, `\t`]).length;
};

const getMinIndent = (editor) => {
  let minIndent = Infinity;
  for (let { start, end } of editor.selections) {
    for (let i = start.line; i <= end.line; i += 1) {
      const line = editor.document.lineAt(i).text;
      if (_trim(line) === ``) { continue; }
      const indent = getIndent(line);
      if (indent < minIndent) {
        minIndent = indent;
      }
    }
  };
  if (minIndent === Infinity) { minIndent = 0; }
  return minIndent;
};

function activate(context) {

  const selectFunction = () => {
    commandQuickPick([
      [`All Lines`,         ``,            () => { main(`SelectAllLines`); }],
      [`Text Lines`,        ``,            () => { main(`SelectTextLines`); }],
      [`Min Indent Lines`,  ``,            () => { main(`SelectMinIndentLines`); }],
    ].map(([label, description, func])=>({label, description, func})),
    `Select Line Cursor : Select Function`);
  };

  const main = (commandName) => {
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
      vscode.window.showInformationMessage(`No editor is active`);
      return;
    }

    switch (commandName) {

    case `SelectAllLines`: {
      const runAfterSelections = [];
      for (let { start, end } of editor.selections) {
        for (let i = start.line; i <= end.line; i += 1) {
          runAfterSelections.push(
            new vscode.Selection(i, 0, i, 0)
          );
        }
      };
      editor.selections = runAfterSelections;
    } break;

    case `SelectTextLines`: {
      const runAfterSelections = [];
      for (let { start, end } of editor.selections) {
        for (let i = start.line; i <= end.line; i += 1) {
          const line = editor.document.lineAt(i).text;
          if (_trim(line) === ``) { continue; }
          runAfterSelections.push(
            new vscode.Selection(i, 0, i, 0)
          );
        }
      };
      editor.selections = runAfterSelections;
    } break;

    case `SelectMinIndentLines`: {
      const runAfterSelections = [];
      const minIndent = getMinIndent(editor);
      for (let { start, end } of editor.selections) {
        for (let i = start.line; i <= end.line; i += 1) {
          const line = editor.document.lineAt(i).text;
          if (_trim(line) === ``) { continue; }
          const indent = getIndent(line);
          if (indent !== minIndent) { continue; }
          runAfterSelections.push(
            new vscode.Selection(i, 0, i, 0)
          );
        }
      };
      editor.selections = runAfterSelections;
    } break;

    default: {
      throw new Error(`BeginOfLine Select Edit`);
    }
    }

  };

  registerCommand(context, `vscode-select-line-cursor.SelectFunction`, () => {
    selectFunction();
  });

  registerCommand(context, `vscode-select-line-cursor.SelectAllLines`, () => {
    main(`SelectAllLines`);
  });

  registerCommand(context, `vscode-select-line-cursor.SelectTextLines`, () => {
    main(`SelectTextLines`);
  });

  registerCommand(context, `vscode-select-line-cursor.SelectMinIndentLines`, () => {
    main(`SelectMinIndentLines`);
  });

}

function deactivate() {}

module.exports = {
  activate,
  deactivate
};
