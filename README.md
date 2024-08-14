# Select Line Cursor

[![](https://vsmarketplacebadges.dev/version-short/SatoshiYamamoto.vscode-select-line-cursor.png)](https://marketplace.visualstudio.com/items?itemName=SatoshiYamamoto.vscode-select-line-cursor)
[![](https://vsmarketplacebadges.dev/installs-short/SatoshiYamamoto.vscode-select-line-cursor.png)](https://marketplace.visualstudio.com/items?itemName=SatoshiYamamoto.vscode-select-line-cursor)
[![](https://vsmarketplacebadges.dev/rating-short/SatoshiYamamoto.vscode-select-line-cursor.png)](https://marketplace.visualstudio.com/items?itemName=SatoshiYamamoto.vscode-select-line-cursor)
[![](https://img.shields.io/github/license/standard-software/vscode-select-line-cursor.png)](https://github.com/standard-software/vscode-select-line-cursor/blob/main/LICENSE)

This extension allows the selection cursor to be positioned each line.

## Install

https://marketplace.visualstudio.com/items?itemName=SatoshiYamamoto.vscode-select-line-cursor

## Usage

### Command
Select a few lines and choose the following command.

```
- Select Line Cursor : All Lines
- Select Line Cursor : Text Lines
- Select Line Cursor : Min Indent Lines
```

Or Select Function

```
- Select Line Cursor : Select Function ...
  - All Lines
  - Text Lines
  - Min Indent Lines
```

### Default Key

| Command             | Default Key Windows     | Default Key Mac         |
|-                    |-                        | -                       |
| Select Function     | Alt + Ctrl + L          | Opt + Ctrl + L          |

### Sample

```
"_" = Space  
"[bold]" = Select Range  
"|" = Cursor  
```

Sample Text
> __Test123  
> ____Test456  
> ______Test789  
> 
> __Test123  
> ____Test456  
> ______Test789  

Select Range

> __Test<b>[123  
> ____Test456  
> ______Test789  
> 
> __Test]</b>123  
> ____Test456  
> ______Test789  

### Select Line Cursor : All Lines

> |__Test123  
> |____Test456  
> |______Test789  
> |  
> |__Test123  
> ____Test456  
> ______Test789  

### Select Line Cursor : Text Lines

> |__Test123  
> |____Test456  
> |______Test789  
> 
> |__Test123  
> ____Test456  
> ______Test789  

### Select Line Cursor : Min Indent Lines

> |__Test123  
> ____Test456  
> ______Test789  
> 
> |__Test123  
> ____Test456  
> ______Test789  

## License

Released under the [MIT License][license].

## Veresion / Change log

[./CHANGELOG.md](./CHANGELOG.md)
