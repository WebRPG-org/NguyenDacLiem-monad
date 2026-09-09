If you are using YEP_OptionsCore.js, you can add a new Option using this
plugin. Here's the following code/parameter settings you can use with it.

---------
Settings:
---------

Name:
\i[231]Autosave

Help Description:
Enables \c[4]Autosaving\c[0] for your game if ON.
You can still manually save your game.

Symbol:
autosave

Show/Hide:
show = Imported.AutosaveShowOpt;

Enable:
enabled = true;

Ext:
ext = 0;

----------
Functions:
----------

Make Option Code:
this.addCommand(name, symbol, enabled, ext);

Draw Option Code:
var rect = this.itemRectForText(index);
var statusWidth = this.statusWidth();
var titleWidth = rect.width - statusWidth;
this.resetTextColor();
this.changePaintOpacity(this.isCommandEnabled(index));
this.drawOptionsName(index);
this.drawOptionsOnOff(index);

Process OK Code:
var index = this.index();
var symbol = this.commandSymbol(index);
var value = this.getConfigValue(symbol);
this.changeValue(symbol, !value);

Cursor Right Code:
var index = this.index();
var symbol = this.commandSymbol(index);
var value = this.getConfigValue(symbol);
this.changeValue(symbol, true);

Cursor Left Code:
var index = this.index();
var symbol = this.commandSymbol(index);
var value = this.getConfigValue(symbol);
this.changeValue(symbol, false);

Default Config Code:
// Empty. Provided by this plugin.

Save Config Code:
// Empty. Provided by this plugin.

Load Config Code:
// Empty. Provided by this plugin.