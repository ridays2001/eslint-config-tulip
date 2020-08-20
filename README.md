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
Make sure you are on Node.js v12.18.3 or higher.
Open command prompt (or terminal) in your project folder and use:
```bash
npm i -D eslint eslint-config-tulip
```
This will install the configuration module and you can now use it in your project.

### Usage
Once you have installed the configuration module, you need to tell eslint to look for it.
You can do this by extending the module in your configuration settings.
ESLint configuration can be done either in your `package.json` file or in a separate eslint configuration file.
For more instructions on eslint configuration, please refer to
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
You can integrate ESLint into your code editor. Follow the editors section on [this link ↗](https://eslint.org/docs/user-guide/integrations#editors) to set it up for your editor.

### Customizing
Here are some examples on how to tweak the configuration according to your preferences.
You may want to change some rules depending upon your development environment:
```json
{
    "extends": "tulip",
    "rules": {
        "max-len": [
            "error",
            {
				"code": 80,
				"ignoreUrls": true,
				"ignoreRegExpLiterals": true,
				"tabWidth": 4
			}
        ]
    }
}
```
The `max-len` rule specifies the max number of characters per line.
Since most people nowadays have wide screens, so the 120 character limit is perfect.
But, the people on smaller screens may not be able to fit 120 characters.
So, you can change the limit to 80 here.
The common ones are 80 or 120.

<br/>

You may also want to turn off some rules depending upon your preferences:
```json
{
    "extends": "tulip",
    "rules": {
        "no-unused-vars": "off"
    }
}
```
The `no-unused-vars` specifies that you should not have any unused variables.
If you have too many unused variables in your code and you know that they're important, you might want to turn this rule off.

For more information, refer to the [Official ESLint Documentation](https://eslint.org/docs/user-guide/getting-started#configuration-1) or [a more detailed one here↗](https://eslint.org/docs/user-guide/configuring)

### Contribute
1. Fork this repository.
2. Make your changes.
3. Push your changes to a new branch in your fork.
4. Submit a pull request!

### Credits
License - MIT.

&copy; [Riday](https://github.com/ridays2001 "My GitHub Profile ↗").

<a href='https://discord.gg/muuyMD9'>
	<img src='https://img.shields.io/badge/Discord-Riday%20%F0%9F%92%99%237468-ff69b4?logo=discord&logoColor=ff69b4&logoWidth=30&labelColor=0080ff&link=https://discord.gg/muuyMD9' alt='Discord - Riday 💙#7468'>
</a>

Thank you to all those who helped me. 💙