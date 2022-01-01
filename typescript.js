const path = require('path');

module.exports = {
	extends: path.join(`${__dirname}/index.js`),
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: './tsconfig.json'
	},
	plugins: ['@typescript-eslint'],
	rules: {
		'@typescript-eslint/adjacent-overload-signatures': 'error',
		'@typescript-eslint/array-type': [
			'warn',
			{
				default: 'generic'
			}
		],
		'@typescript-eslint/await-thenable': 'error',
		'@typescript-eslint/ban-ts-comment': [
			'error',
			{
				'ts-check': false,
				'ts-expect-error': 'allow-with-description',
				'ts-ignore': true,
				'ts-nocheck': true
			}
		],
		'@typescript-eslint/ban-tslint-comment': 'error',
		'@typescript-eslint/ban-types': [
			'error',
			{
				types: {
					'{}': {
						message:
							'`{}` actually means "any non-nullish value".' +
							'- If you want a type meaning "any object", ' +
							'you probably want `Record<string, unknown>` instead.\n' +
							'- If you want a type meaning "any value", you probably want `unknown` instead.\n' +
							'- If you want a type meaning "empty object", ' +
							'you probably want `Record<string, undefined>` or `Record<string, never>` instead.',
						fixWith: 'Record<string, undefined>'
					},
					Boolean: {
						message: 'Use boolean instead',
						fixWith: 'boolean'
					},
					Function: {
						message:
							'The `Function` type accepts any function-like value.\n' +
							'It provides no type safety when calling the function, ' +
							'which can be a common source of bugs.\n' +
							'It also accepts things like class declarations, ' +
							'which will throw at runtime as they will not be called with `new`.\n' +
							'If you are expecting the function to accept certain arguments, ' +
							'you should explicitly define the function shape.'
					},
					Number: {
						message: 'Use number instead',
						fixWith: 'number'
					},
					object: {
						message:
							'The `object` type is currently hard to use ' +
							'([see this issue](https://github.com/microsoft/TypeScript/issues/21732)).\n' +
							'Consider using `Record<string, unknown>` instead, ' +
							'as it allows you to more easily inspect and use the keys.',
						fixWith: 'Record<string, unknown>'
					},
					Object: {
						message:
							'The `Object` type actually means "any non-nullish value", ' +
							'so it is marginally better than `unknown`.\n' +
							'- If you want a type meaning "any object", ' +
							'you probably want `Record<string, unknown>` instead.\n' +
							'- If you want a type meaning "any value", you probably want `unknown` instead.',
						fixWith: 'Record<string, unknown>'
					},
					String: {
						message: 'Use string instead',
						fixWith: 'string'
					},
					Symbol: {
						message: 'Use symbol instead',
						fixWith: 'symbol'
					}
				}
			}
		],
		'@typescript-eslint/class-literal-property-style': 'off',
		'@typescript-eslint/consistent-indexed-object-style': ['error', 'record'],
		'@typescript-eslint/consistent-type-assertions': [
			'error',
			{
				assertionStyle: 'as',
				objectLiteralTypeAssertions: 'allow-as-parameter'
			}
		],
		'@typescript-eslint/consistent-type-definitions': ['warn', 'interface'],
		'@typescript-eslint/consistent-type-exports': ['error', { fixMixedExportsWithInlineTypeSpecifier: false }],
		'@typescript-eslint/consistent-type-imports': [
			'error',
			{
				prefer: 'type-imports',
				disallowTypeAnnotations: true
			}
		],
		'@typescript-eslint/explicit-function-return-type': 'off',
		'@typescript-eslint/explicit-member-accessibility': [
			'error',
			{
				accessibility: 'explicit'
			}
		],
		'@typescript-eslint/explicit-module-boundary-types': [
			'error',
			{
				allowArgumentsExplicitlyTypedAsAny: true,
				allowDirectConstAssertionInArrowFunctions: true,
				allowHigherOrderFunctions: false,
				allowTypedFunctionExpressions: true
			}
		],
		'@typescript-eslint/member-delimiter-style': [
			'error',
			{
				multiline: {
					delimiter: 'semi',
					requireLast: true
				},
				singleline: {
					delimiter: 'semi',
					requireLast: false
				}
			}
		],
		'@typescript-eslint/member-ordering': 'off',
		'@typescript-eslint/method-signature-style': ['error', 'property'],
		'@typescript-eslint/naming-convention': 'off',
		'@typescript-eslint/no-base-to-string': ['error', { ignoredTypeNames: ['RegExp'] }],
		'@typescript-eslint/no-confusing-non-null-assertion': 'error',
		'@typescript-eslint/no-confusing-void-expression': 'off',
		'@typescript-eslint/no-dynamic-delete': 'error',
		'@typescript-eslint/no-empty-interface': ['warn', { allowSingleExtends: true }],
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/no-extra-non-null-assertion': 'error',
		'@typescript-eslint/no-extraneous-class': 'off',
		'@typescript-eslint/no-floating-promises': ['error', { ignoreVoid: true, ignoreIIFE: false }],
		'@typescript-eslint/no-for-in-array': 'error',
		'@typescript-eslint/no-implicit-any-catch': 'off',
		'@typescript-eslint/no-inferrable-types': ['error', { ignoreParameters: false, ignoreProperties: false }],
		'@typescript-eslint/no-invalid-void-type': 'warn',
		'@typescript-eslint/no-meaningless-void-operator': 'off',
		'@typescript-eslint/no-misused-new': 'error',
		'@typescript-eslint/no-misused-promises': [
			'error',
			{
				checksVoidReturn: true,
				checkConditionals: true
			}
		],
		'@typescript-eslint/no-namespace': 'error',
		'@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'error',
		'@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
		'@typescript-eslint/no-non-null-assertion': 'error',
		'@typescript-eslint/no-parameter-properties': 'off',
		'@typescript-eslint/no-require-imports': 'error',
		'@typescript-eslint/no-this-alias': [
			'error',
			{
				allowDestructuring: true,
				allowedNames: []
			}
		],
		'@typescript-eslint/no-type-alias': 'off',
		'@typescript-eslint/no-unnecessary-boolean-literal-compare': [
			'error',
			{
				allowComparingNullableBooleansToTrue: true,
				allowComparingNullableBooleansToFalse: true
			}
		],
		'@typescript-eslint/no-unnecessary-condition': 'warn',
		'@typescript-eslint/no-unnecessary-qualifier': 'warn',
		'@typescript-eslint/no-unnecessary-type-arguments': 'off',
		'@typescript-eslint/no-unnecessary-type-assertion': 'error',
		'@typescript-eslint/no-unnecessary-type-constraint': 'error',
		'@typescript-eslint/no-unsafe-argument': 'warn',
		'@typescript-eslint/no-unsafe-assignment': 'warn',
		'@typescript-eslint/no-unsafe-call': 'warn',
		'@typescript-eslint/no-unsafe-member-access': 'warn',
		'@typescript-eslint/no-unsafe-return': 'warn',
		'@typescript-eslint/no-var-requires': 'error',
		'@typescript-eslint/non-nullable-type-assertion-style': 'off',
		'@typescript-eslint/prefer-as-const': 'warn',
		'@typescript-eslint/prefer-enum-initializers': 'off',
		'@typescript-eslint/prefer-for-of': 'error',
		'@typescript-eslint/prefer-function-type': 'off',
		'@typescript-eslint/prefer-includes': 'error',
		'@typescript-eslint/prefer-literal-enum-member': 'warn',
		'@typescript-eslint/prefer-namespace-keyword': 'error',
		'@typescript-eslint/prefer-nullish-coalescing': 'warn',
		'@typescript-eslint/prefer-optional-chain': 'warn',
		'@typescript-eslint/prefer-readonly': 'warn',
		'@typescript-eslint/prefer-readonly-parameter-types': 'off',
		'@typescript-eslint/prefer-reduce-type-parameter': 'error',
		'@typescript-eslint/prefer-regexp-exec': 'warn',
		'@typescript-eslint/prefer-return-this-type': 'warn',
		'@typescript-eslint/prefer-string-starts-ends-with': 'error',
		'@typescript-eslint/prefer-ts-expect-error': 'off',
		'@typescript-eslint/promise-function-async': 'off',
		'@typescript-eslint/require-array-sort-compare': ['error', { ignoreStringArrays: true }],
		'@typescript-eslint/restrict-plus-operands': ['error', { checkCompoundAssignments: true, allowAny: false }],
		'@typescript-eslint/restrict-template-expressions': [
			'warn',
			{
				allowAny: false,
				allowBoolean: false,
				allowNullish: false,
				allowNumber: true,
				allowRegExp: false
			}
		],
		'@typescript-eslint/sort-type-union-intersection-members': [
			'warn',
			{ checkUnions: true, checkIntersections: true }
		],
		'@typescript-eslint/strict-boolean-expressions': 'off',
		'@typescript-eslint/switch-exhaustiveness-check': 'warn',
		'@typescript-eslint/triple-slash-reference': 'off',
		'@typescript-eslint/type-annotation-spacing': [
			'error',
			{
				after: false,
				before: false,
				overrides: {
					arrow: { before: true, after: true }
				}
			}
		],
		'@typescript-eslint/typedef': 'off',
		'@typescript-eslint/unbound-method': ['error', { ignoreStatic: true }],
		'@typescript-eslint/unified-signatures': 'error',

		/* eslint-disable sort-keys */
		// Replacing base javascript rules with typescript specific rules.

		'brace-style': 'off',
		'@typescript-eslint/brace-style': ['error', '1tbs', { allowSingleLine: true }],

		'comma-dangle': 'off',
		'@typescript-eslint/comma-dangle': ['error', 'never'],

		'comma-spacing': 'off',
		'@typescript-eslint/comma-spacing': ['error', { before: false, after: true }],

		'default-param-last': 'off',
		'@typescript-eslint/default-param-last': 'warn',

		'dot-notation': 'off',
		'@typescript-eslint/dot-notation': [
			'error',
			{
				allowIndexSignaturePropertyAccess: false,
				allowKeywords: true,
				allowPattern: '(^[A-Z])|(^[a-z]+(_[a-z]+)+$)',
				allowPrivateClassPropertyAccess: false,
				allowProtectedClassPropertyAccess: false
			}
		],

		'func-call-spacing': 'off',
		'@typescript-eslint/func-call-spacing': ['error', 'never'],

		// Note: This rule is buggy when used in TypeScript.
		indent: 'off',
		'@typescript-eslint/indent': ['error', 'tab'],

		'init-declarations': 'off',
		'@typescript-eslint/init-declarations': ['warn', 'always'],

		'keyword-spacing': 'off',
		'@typescript-eslint/keyword-spacing': [
			'error',
			{
				before: true,
				after: true,
				overrides: {
					if: { after: true },
					for: { after: true },
					while: { after: true },
					catch: { after: true },
					switch: { after: true }
				}
			}
		],

		'lines-between-class-members': 'off',
		'@typescript-eslint/lines-between-class-members': [
			'error',
			'always',
			{
				exceptAfterSingleLine: true,
				exceptAfterOverloaded: true
			}
		],

		'no-array-constructor': 'off',
		'@typescript-eslint/no-array-constructor': 'warn',

		'no-dupe-class-members': 'off',
		'@typescript-eslint/no-dupe-class-members': 'error',

		'no-duplicate-imports': 'off',
		'@typescript-eslint/no-duplicate-imports': ['error', { includeExports: false }],

		'no-empty-function': 'off',
		'@typescript-eslint/no-empty-function': 'off',

		'no-extra-parens': 'off',
		'@typescript-eslint/no-extra-parens': ['warn', 'all', { nestedBinaryExpressions: false }],

		'no-extra-semi': 'off',
		'@typescript-eslint/no-extra-semi': 'error',

		'no-implied-eval': 'off',
		'@typescript-eslint/no-implied-eval': 'error',

		'no-invalid-this': 'off',
		'@typescript-eslint/no-invalid-this': 'off',

		'no-loop-func': 'off',
		'@typescript-eslint/no-loop-func': 'off',

		'no-loss-of-precision': 'off',
		'@typescript-eslint/no-loss-of-precision': 'warn',

		'no-magic-numbers': 'off',
		'@typescript-eslint/no-magic-numbers': 'off',

		'no-redeclare': 'off',
		'@typescript-eslint/no-redeclare': 'error',

		'no-restricted-imports': 'off',
		'@typescript-eslint/no-restricted-imports': 'off',

		// The base 'no-return-await' rule has been renamed to 'return-await' in typescript.

		'no-shadow': 'off',
		'@typescript-eslint/no-shadow': 'warn',

		'no-throw-literal': 'off',
		'@typescript-eslint/no-throw-literal': 'error',

		'no-unused-expressions': 'off',
		'@typescript-eslint/no-unused-expressions': 'off',

		'no-unused-vars': 'off',
		'@typescript-eslint/no-unused-vars': [
			'warn',
			{
				argsIgnorePattern: '^_',
				caughtErrors: 'none'
			}
		],

		'no-use-before-define': 'off',
		'@typescript-eslint/no-use-before-define': [
			'error',
			{
				enums: true,
				functions: false,
				ignoreTypeReferences: true,
				typedefs: false
			}
		],

		'no-useless-constructor': 'off',
		'@typescript-eslint/no-useless-constructor': 'error',

		'object-curly-spacing': 'off',
		'@typescript-eslint/object-curly-spacing': ['error', 'always'],

		'padding-line-between-statements': 'off',
		'@typescript-eslint/padding-line-between-statements': 'off',

		quotes: 'off',
		'@typescript-eslint/quotes': [
			'error',
			'single',
			{
				avoidEscape: true,
				allowTemplateLiterals: false
			}
		],

		'require-await': 'off',
		'@typescript-eslint/require-await': 'error',

		'no-return-await': 'off',
		'@typescript-eslint/return-await': 'warn',

		semi: 'off',
		'@typescript-eslint/semi': ['error'],

		'space-before-function-paren': 'off',
		'@typescript-eslint/space-before-function-paren': [
			'error',
			{
				anonymous: 'never',
				asyncArrow: 'always',
				named: 'never'
			}
		],

		'space-infix-ops': 'off',
		'@typescript-eslint/space-infix-ops': ['error', { int32Hint: false }]
	}
};
