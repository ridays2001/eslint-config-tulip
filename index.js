module.exports = {
	parserOptions: {
		ecmaVersion: 2020
	},
	env: {
		amd: true,
		es6: true,
		node: true
	},
	rules: {
		'accessor-pairs': 'off',
		'array-callback-return': 'error',
		'block-scoped-var': 'error',
		'class-methods-use-this': 'off',
		'comma-dangle': ['error', 'never'],
		complexity: ['warn', { max: 5 }],
		'consistent-return': ['warn', { treatUndefinedAsUnspecified: false }],
		curly: ['error', 'multi-line', 'consistent'],
		'default-case': 'off',
		'default-case-last': 'warn',
		'default-param-last': 'off',
		'dot-location': [
			'error',
			{ 
				allowKeywords: true,
				allowPattern: '(^[A-Z])|(^[a-z]+(_[a-z]+)+$)' 
			}
		],
		'eol-last': ['error', 'always'],
		'for-direction': 'warn',
		'getter-return': 'error',
		'keyword-spacing': [
			'error',
			{
				overrides: {
					if: { after: true },
					for: { after: true },
					while: { after: true },
					catch: { after: true },
					switch: { after: true }
				}
			}
		],
		'no-async-promise-executor': 'warn',
		'no-await-in-loop': 'off',
		'no-compare-neg-zero': 'error',
		'no-cond-assign': 'error',
		'no-console': 'off',
		'no-constant-condition': 'warn',
		'no-control-regex': 'warn',
		'no-debugger': 'error',
		'no-dupe-args': 'error',
		'no-dupe-else-if': 'warn',
		'no-dupe-keys': 'error',
		'no-duplicate-case': 'warn',
		'no-empty': 'off',
		'no-empty-character-class': 'error',
		'no-eq-null': 'warn',
		'no-eval': 'error',
		'no-ex-assign': 'warn',
		'no-extra-boolean-cast': ['warn', { enforceForLogicalOperands: true }],
		'no-extra-parens': ['warn', 'all', { nestedBinaryExpressions: false }],
		'no-extra-semi': 'error',
		'no-func-assign': 'warn',
		'no-import-assign': 'warn',
		'no-inner-declarations': 'off',
		'no-invalid-regexp': 'warn',
		'no-irregular-whitespace': [
			'error',
			{
				skipStrings: true,
				skipComments: true,
				skipRegExps: true,
				skipTemplates: true
			}
		],
		'no-loss-of-precision': 'warn',
		'no-misleading-character-class': 'warn',
		'no-obj-calls': 'warn',
		'no-promise-executor-return': 'off',
		'no-prototype-builtins': 'warn',
		'no-regex-spaces': 'warn',
		'no-setter-return': 'off',
		'no-sparse-arrays': 'warn',
		'no-template-curly-in-string': 'error',
		'no-unexpected-multiline': 'error',
		'no-unreachable': 'warn',
		'no-unreachable-loop': 'warn',
		'no-unsafe-finally': 'warn',
		'no-unsafe-negation': 'error',
		'no-useless-backreference': 'off',
		'object-shorthand': ['error', 'always'],
		'prefer-destructuring': [
			'error',
			{
				VariableDeclarator: {
					array: false,
					object: true
				},
				AssignmentExpression: {
					array: true,
					object: false
				}
			},
			{
				enforceForRenamedProperties: true
			}
		],
		'prefer-promise-reject-errors': 'error',
		'quote-props': ['error', 'as-needed'],
		quotes: ['error', 'single'],
		'require-atomic-updates': 'warn',
		semi: ['error', 'always', { omitLastInOneLineBlock: false }],
		'use-isnan': 'error',
		'valid-jsdoc': [
			'warn',
			{
				prefer: {
					arg: 'param',
					argument: 'param',
					desc: 'description',
					func: 'function',
					method: 'function',
					return: 'returns'
				},
				preferType: {
					Boolean: 'boolean',
					date: 'Date',
					error: 'Error',
					function: 'Function',
					Number: 'number',
					object: 'Object',
					String: 'string',
					Symbol: 'symbol'
				},
				requireReturn: false,
				requireReturnDescription: false
			}
		],
		'valid-typeof': 'error'
	}
};
