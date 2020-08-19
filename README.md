<img src='https://i.imgur.com/BNCvB3W.png' align='right' width='25%' alt='Tulip'>

# ESLint Config Tulip
Sharable ESLint configuration.
This configuration is made for Node.js apps.

<br>
<br>
<br>

### Instructions:
1. [Install the package](#installation).
2. [Extend it in your eslint configuration](#usage).
3. Enjoy cleaner code!. 🎉
4. [Contribute!](#contribute)

#### Installation
Open command prompt (or terminal) in your project folder and use:\
```bash
npm i -D eslint-config-tulip
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

### Contribute
1. Fork this repository.
2. Make your changes.
3. Push your changes to a new branch in your fork.
4. Submit a pull request!

### Credits
License - MIT.

&copy; [Riday](https://github.com/ridays2001 "My GitHub Profile ↗").

Thank you to all those who helped me. 💙