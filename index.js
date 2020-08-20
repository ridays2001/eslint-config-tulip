module.exports = {
	parserOptions: {
		ecmaVersion: 2020
	},
	env: {
		amd: true,
		es2020: true,
		node: true
	},
	rules: {
		'accessor-pairs': 'off',
		'array-bracket-newline': ['error', 'consistent'],
		'array-bracket-spacing': [
			'error',
			'never',
			{
				singleValue: false,
				objectsInArrays: false,
				arraysInArrays: false
			}
		],
		'array-callback-return': 'error',
		'array-element-newline': 'off',
		'arrow-body-style': ['error', 'as-needed'],
		'arrow-parens': ['error', 'as-needed', { requireForBlockBody: false }],
		'arrow-spacing': ['error', { before: true, after: true }],
		'block-scoped-var': 'error',
		'block-spacing': ['error', 'always'],
		'brace-style': ['error', '1tbs', { allowSingleLine: true }],
		camelCase: 'off',
		'capitalized-comments': ['error', 'always'],
		'class-methods-use-this': 'off',
		'comma-dangle': ['error', 'never'],
		'comma-spacing': ['error', { before: false, after: true }],
		'comma-style': ['error', 'last'],
		complexity: ['warn', { max: 5 }],
		'computed-property-spacing': ['error', 'never'],
		'consistent-return': ['warn', { treatUndefinedAsUnspecified: false }],
		'consistent-this': ['error', 'self'],
		'constructor-super': 'error',
		curly: ['error', 'multi-line', 'consistent'],
		'default-case': 'off',
		'default-case-last': 'warn',
		'default-param-last': 'off',
		'dot-location': ['error', 'property'],
		'dot-notation': [
			'error',
			{
				allowKeywords: true,
				allowPattern: '(^[A-Z])|(^[a-z]+(_[a-z]+)+$)'
			}
		],
		'eol-last': ['error', 'always'],
		eqeqeq: ['error', 'smart'],
		'for-direction': 'warn',
		'func-call-spacing': ['error', 'never'],
		'func-name-matching': ['warn', 'always'],
		'func-names': ['warn', 'as-needed'],
		'func-style': ['warn', 'expression'],
		'function-paren-newline': ['error', 'consistent'],
		'generator-star-spacing': ['error', 'before'],
		'getter-return': 'error',
		'grouped-accessor-pairs': 'off',
		'guard-for-in': 'warn',
		indent: ['error', 'tab', { SwitchCase: 1 }],
		'init-declarations': ['warn', 'always'],
		'key-spacing': [
			'error',
			{
				beforeColon: false,
				afterColon: true,
				mode: 'strict'
			}
		],
		'keyword-spacing': [
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
		'line-comment-position': ['error', { position: 'above' }],
		'linebreak-style': 'off',
		'lines-between-class-members': [
			'error',
			'always',
			{
				exceptAfterSingleLine: true
			}
		],
		'max-classes-per-file': 'off',
		'max-depth': ['error', { max: 4 }],
		'max-len': [
			'error',
			{
				code: 120,
				ignoreUrls: true,
				ignoreRegExpLiterals: true,
				tabWidth: 4
			}
		],
		'max-nested-callbacks': ['warn', { max: 4 }],
		'max-statements-per-line': ['error', { max: 2 }],
		'multiline-comment-style': ['error', 'starred-block'],
		'multiline-ternary': ['error', 'always-multiline'],
		'new-cap': 'off',
		'new-parens': ['error', 'always'],
		'newline-per-chained-call': ['error', { ignoreChainWithDepth: 3 }],
		'no-alert': 'error',
		'no-array-constructor': 'off',
		'no-async-promise-executor': 'warn',
		'no-await-in-loop': 'off',
		'no-bitwise': 'off',
		'no-caller': 'error',
		'no-case-declarations': 'error',
		'no-class-assign': 'warn',
		'no-compare-neg-zero': 'error',
		'no-cond-assign': 'error',
		'no-confusing-arrow': 'off',
		'no-console': 'off',
		'no-const-assign': 'error',
		'no-constant-condition': 'warn',
		'no-constructor-return': 'off',
		'no-control-regex': 'warn',
		'no-debugger': 'error',
		'no-delete-var': 'error',
		'no-div-regex': 'warn',
		'no-dupe-args': 'error',
		'no-dupe-class-members': 'error',
		'no-dupe-else-if': 'warn',
		'no-dupe-keys': 'error',
		'no-duplicate-case': 'warn',
		'no-duplicate-imports': ['error', { includeExports: false }],
		'no-else-return': 'error',
		'no-empty': 'off',
		'no-empty-character-class': 'error',
		'no-empty-function': 'off',
		'no-empty-pattern': 'off',
		'no-eq-null': 'warn',
		'no-eval': 'error',
		'no-ex-assign': 'warn',
		'no-extend-native': 'warn',
		'no-extra-bind': 'off',
		'no-extra-boolean-cast': ['warn', { enforceForLogicalOperands: true }],
		'no-extra-label': 'warn',
		'no-extra-parens': ['warn', 'all', { nestedBinaryExpressions: false }],
		'no-extra-semi': 'error',
		'no-fallthrough': 'off',
		'no-floating-decimal': 'error',
		'no-func-assign': 'warn',
		'no-global-assign': 'warn',
		'no-implicit-coercion': 'error',
		'no-implicit-globals': 'off',
		'no-implied-eval': 'error',
		'no-import-assign': 'warn',
		'no-inner-declarations': 'off',
		'no-invalid-regexp': 'warn',
		'no-invalid-this': 'off',
		'no-irregular-whitespace': [
			'error',
			{
				skipStrings: true,
				skipComments: true,
				skipRegExps: true,
				skipTemplates: true
			}
		],
		'no-iterator': 'warn',
		'no-label-var': 'error',
		'no-labels': 'off',
		'no-lone-blocks': 'off',
		'no-lonely-if': 'error',
		'no-loop-func': 'off',
		'no-loss-of-precision': 'warn',
		'no-magic-numbers': 'off',
		'no-misleading-character-class': 'warn',
		'no-mixed-operators': 'error',
		'no-mixed-spaces-and-tabs': ['error', 'smart-tabs'],
		'no-multi-assign': 'warn',
		'no-multi-spaces': 'error',
		'no-multi-str': 'error',
		'no-multiple-empty-lines': ['error', { max: 2 }],
		'no-negated-condition': 'error',
		'no-nested-ternary': 'off',
		'no-new': 'off',
		'no-new-func': 'warn',
		'no-new-object': 'error',
		'no-new-symbol': 'warn',
		'no-new-wrappers': 'warn',
		'no-obj-calls': 'warn',
		'no-octal': 'error',
		'no-octal-escape': 'error',
		'no-param-reassign': 'off',
		'no-plusplus': 'off',
		'no-promise-executor-return': 'off',
		'no-proto': 'off',
		'no-prototype-builtins': 'warn',
		'no-redeclare': 'error',
		'no-regex-spaces': 'warn',
		'no-restricted-globals': 'off',
		'no-restricted-imports': 'off',
		'no-restricted-properties': 'off',
		'no-restricted-syntax': 'off',
		'no-return-assign': 'off',
		'no-return-await': 'warn',
		'no-script-urls': 'off',
		'no-self-assign': 'error',
		'no-self-compare': 'warn',
		'no-sequences': 'error',
		'no-setter-return': 'off',
		'no-shadow': 'off',
		'no-shadow-restricted-names': 'error',
		'no-sparse-arrays': 'warn',
		'no-tabs': 'off',
		'no-template-curly-in-string': 'error',
		'no-ternary': 'off',
		'no-this-before-super': 'error',
		'no-throw-literal': 'error',
		'no-trailing-spaces': 'error',
		'no-undef': 'error',
		'no-undef-init': 'off',
		'no-undefined': 'off',
		'no-underscore-dangle': 'off',
		'no-unexpected-multiline': 'error',
		'no-unmodified-loop-condition': 'off',
		'no-unneeded-ternary': 'off',
		'no-unreachable': 'warn',
		'no-unreachable-loop': 'warn',
		'no-unsafe-finally': 'warn',
		'no-unsafe-negation': 'error',
		'no-unused-expressions': 'off',
		'no-unused-labels': 'error',
		'no-unused-vars': [
			'warn',
			{
				argsIgnorePattern: '^_',
				caughtErrors: 'none'
			}
		],
		'no-use-before-define': ['error', { functions: false }],
		'no-useless-backreference': 'off',
		'no-useless-call': 'off',
		'no-useless-catch': 'off',
		'no-useless-computed-key': 'error',
		'no-useless-concat': 'warn',
		'no-useless-constructor': 'error',
		'no-useless-escape': 'off',
		'no-useless-rename': 'error',
		'no-useless-return': 'warn',
		'no-var': 'error',
		'no-void': 'off',
		'no-warning-comments': 'off',
		'no-whitespace-before-property': 'error',
		'no-with': 'error',
		'nonblock-statement-body-position': ['warn', 'beside'],
		'object-curly-newline': [
			'error',
			{
				multiline: true,
				consistent: true
			}
		],
		'object-curly-spacing': ['error', 'always'],
		'object-property-newline': 'off',
		'object-shorthand': ['error', 'always'],
		'one-var': ['error', 'never'],
		'one-var-declaration-per-line': 'off',
		'operator-assignment': ['error', 'always'],
		'operator-linebreak': [
			'error',
			'after',
			{
				overrides: { '?': 'before', ':': 'before' }
			}
		],
		'padded-blocks': ['error', 'never'],
		'padding-line-between-statements': 'off',
		'prefer-arrow-callback': 'error',
		'prefer-const': ['error', { destructuring: 'all' }],
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
		'prefer-numeric-literals': 'off',
		'prefer-promise-reject-errors': 'error',
		'prefer-rest-params': 'warn',
		'prefer-spread': 'error',
		'prefer-template': 'warn',
		'quote-props': [
			'error',
			'as-needed',
			{
				keywords: true,
				unnecessary: true,
				numbers: false
			}
		],
		quotes: [
			'error',
			'single',
			{
				avoidEscape: true,
				allowTemplateLiterals: true
			}
		],
		radix: 'error',
		'require-atomic-updates': 'warn',
		'require-await': 'warn',
		'require-yield': 'warn',
		'rest-spread-spacing': ['error', 'never'],
		semi: ['error', 'always', { omitLastInOneLineBlock: false }],
		'semi-spacing': ['error', { before: false, after: true }],
		'semi-style': ['error', 'last'],
		'sort-keys': [
			'warn',
			'asc',
			{
				caseSensitive: true,
				minKeys: 10,
				natural: true
			}
		],
		'sort-vars': 'off',
		'space-before-blocks': ['error', 'always'],
		'space-before-function-paren': [
			'error',
			{
				anonymous: 'never',
				named: 'never',
				asyncArrow: 'always'
			}
		],
		'space-in-parens': ['error', 'never'],
		'space-infix-ops': ['error', { int32Hint: true }],
		'space-unary-ops': ['error', { words: true, nonwords: false }],
		'spaced-comment': [
			'error',
			'always',
			{
				block: {
					markers: ['*'],
					balanced: true
				}
			}
		],
		strict: ['error', 'never'],
		'switch-colon-spacing': ['error', { after: true, before: false }],
		'symbol-description': 'error',
		'template-curly-spacing': ['error', 'never'],
		'template-tag-spacing': ['error', 'never'],
		'unicode-bom': ['error', 'never'],
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
		'valid-typeof': 'error',
		'vars-on-top': 'off',
		'wrap-iife': ['error', 'inside'],
		'wrap-regex': 'off',
		'yield-star-spacing': ['error', 'before'],
		yoda: 'error'
	}
};
