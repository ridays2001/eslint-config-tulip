<img src='https://i.imgur.com/BNCvB3W.png' align='right' width='25%' alt='Tulip'>

# ESLint Config Tulip

Sharable ESLint configuration.
This configuration is made for Node.js apps.

<br/>
<br/>

### Instructions:

1. [Install the package](#installation).
2. [Extend it in your eslint configuration](#usage).
3. Enjoy cleaner code!. 🎉
4. [Contribute!](#contribute)

#### Installation

Make sure you are using Node.js v16.13.1 or higher.
Open command prompt (or terminal) in your project folder and use:

```bash
npm i -D eslint eslint-config-tulip
```

This will install the configuration module and you can now use it in your project.

<details>
    <summary>Adding TypeScript</summary>

If you are using TypeScript, then you also need to install the plugin and parser for TypeScript:

```bash
npm i -D @typescript-eslint/eslint-plugin @typescript-eslint/parser
```

</details>
<br>

### Usage

Once you have installed the configuration module, you need to tell eslint to use it.
You can do this by extending it in your config.
ESLint can be configured either in your `package.json` file or in a separate eslint config file.
For more instructions on configuring eslint, please refer to
[ESLint getting started guide ↗](https://eslint.org/docs/user-guide/getting-started).

For `package.json`:

```json
{
    "name": "your-project",
    ...
    "eslintConfig": {
        "extends": "tulip"
    }
}
```

For eslint configuration files (`.eslintrc`, `.eslintrc.json`, `.eslintrc.js`, or `.eslintrc.yml`):

```json
{
	"extends": "tulip"
}
```

You can also integrate eslint into your code editor.
Follow the instructions in the [editors section↗](https://eslint.org/docs/user-guide/integrations#editors) to set it up for your editor.

<details>
    <summary>Adding TypeScript</summary>

If you are using TypeScript, then you need to extend the typescript configuration.

```json
{
    ...
	"root": true,
	"parser": "@typescript-eslint/parser",
	"plugins": ["@typescript-eslint"],
    "extends": "tulip/typescript"
    ...
}
```

</details>
<br>

<details>
	<summary>Using Prettier</summary>

If you wish to use prettier along with eslint, then you need to use the prettier module.
This will turn off certain eslint rules that interfere with prettier.

```json
{
	"extends": "tulip/prettier"
}
```

Using Typescript? Don't worry, I've got you covered!

```json
{
	"extends": "tulip/prettier-ts"
}
```

</details>
<br>

### Customizing

This ESLint configuration comes with the latest rules enabled according to my style guide.
But, you may want to tweak it depending upon your preferences. Here's an example:

```json
{
	"extends": "tulip",
	"rules": {
		"sort-keys": "off"
	}
}
```

The `sort-keys` rule requires you to sort your keys alphabetically.
This is helpful when you have too many keys in the object, but you may want to turn this rule off if you are following some other order.

For more information, refer to the [Official ESLint Documentation↗](https://eslint.org/docs/user-guide/getting-started#configuration-1) or [a more detailed one here↗](https://eslint.org/docs/user-guide/configuring).\
Here's the [list of all Available ESLint rules↗](https://eslint.org/docs/rules/).

### Contribute

1. Fork this repository.
2. Make your changes.
3. Push your changes to a new branch in your fork.
4. Submit a pull request!

### Credits

License - MIT.

&copy; [Riday ♡](https://github.com/ridays2001 'My GitHub Profile ↗').

<a href='https://riday.me/discord'>
	<img src='https://img.shields.io/badge/Discord-Riday%20%F0%9F%92%99%237468-ff69b4?logo=discord&logoColor=ff69b4&logoWidth=30&labelColor=0080ff&link=https://discord.gg/muuyMD9' alt='Discord - Riday 💙#7468'>
</a>

Thank you to all those who helped me. 💙
