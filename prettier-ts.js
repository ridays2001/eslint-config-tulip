const path = require('path');

module.exports = {
	extends: [path.join(`${__dirname}/typescript.js`), path.join(`${__dirname}/prettier.js`)],
	rules: {
		'@typescript-eslint/brace-style': 'off',
		'@typescript-eslint/comma-dangle': 'off',
		'@typescript-eslint/comma-spacing': 'off',
		'@typescript-eslint/func-call-spacing': 'off',
		'@typescript-eslint/indent': 'off',
		'@typescript-eslint/keyword-spacing': 'off',
		'@typescript-eslint/member-delimiter-style': 'off',
		'@typescript-eslint/no-extra-parens': 'off',
		'@typescript-eslint/no-extra-semi': 'off',
		'@typescript-eslint/object-curly-spacing': 'off',
		'@typescript-eslint/quotes': 'off',
		'@typescript-eslint/semi': 'off',
		'@typescript-eslint/space-before-function-paren': 'off',
		'@typescript-eslint/space-infix-ops': 'off',
		'@typescript-eslint/type-annotation-spacing': 'off'
	}
};
