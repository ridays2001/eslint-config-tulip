module.exports = {
	parserOptions: {
		ecmaVersion: 2021
	},
	env: {
		amd: true,
		es2021: true,
		node: true
	},
	rules: {
		'accessor-pairs': 'off',
		'array-bracket-newline': ['error', 'consistent'],
		'array-bracket-spacing': [
			'error',
			'never',
			{
				arraysInArrays: false,
				objectsInArrays: false,
				singleValue: false
			}
		],
		'array-callback-return': 'error',
		'array-element-newline': ['error', 'consistent'],
		'arrow-body-style': ['error', 'as-needed'],
		'arrow-parens': ['error', 'as-needed', { requireForBlockBody: false }],
		'arrow-spacing': ['error', { before: true, after: true }],
		'block-scoped-var': 'error',
		'block-spacing': ['error', 'always'],
		'brace-style': ['error', '1tbs', { allowSingleLine: true }],
		camelcase: [
			'warn',
			{
				ignoreDestructuring: false,
				ignoreGlobals: false,
				ignoreImports: false,
				properties: 'always'
			}
		],
		'capitalized-comments': [
			'error',
			'always',
			{
				ignoreConsecutiveComments: true,
				ignoreInlineComments: true,
				ignorePattern: 'prettier.*|cSpell.*'
			}
		],
		'class-methods-use-this': 'off',
		'comma-dangle': ['error', 'never'],
		'comma-spacing': ['error', { before: false, after: true }],
		'comma-style': ['error', 'last'],
		complexity: 'off',
		'computed-property-spacing': ['error', 'never', { enforceForClassMembers: true }],
		'consistent-return': ['warn', { treatUndefinedAsUnspecified: false }],
		'consistent-this': 'off',
		'constructor-super': 'error',
		curly: ['error', 'multi-line', 'consistent'],
		'default-case': 'off',
		'default-case-last': 'warn',
		'default-param-last': 'warn',
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
		'function-call-argument-newline': ['error', 'consistent'],
		'function-paren-newline': ['error', 'consistent'],
		'generator-star-spacing': ['error', 'before'],
		'getter-return': ['warn', { allowImplicit: true }],
		'grouped-accessor-pairs': ['error', 'getBeforeSet'],
		'guard-for-in': 'off',
		'id-denylist': 'off',
		'id-length': 'off',
		'id-match': 'off',
		'implicit-arrow-linebreak': ['error', 'beside'],
		indent: [
			'error',
			'tab',
			{
				ArrayExpression: 1,
				CallExpression: { arguments: 1 },
				flatTernaryExpressions: true,
				FunctionDeclaration: { parameters: 1, body: 1 },
				FunctionExpression: { parameters: 1, body: 1 },
				ImportDeclaration: 1,
				MemberExpression: 1,
				ObjectExpression: 1,
				offsetTernaryExpressions: true,
				outerIIFEBody: 1,
				StaticBlock: { body: 1 },
				SwitchCase: 1,
				VariableDeclarator: 1
			}
		],
		'init-declarations': ['warn', 'always'],
		'jsx-quotes': ['error', 'prefer-single'],
		'key-spacing': [
			'error',
			{
				afterColon: true,
				beforeColon: false,
				mode: 'strict'
			}
		],
		'keyword-spacing': [
			'error',
			{
				after: true,
				before: true,
				overrides: {
					catch: { after: true },
					for: { after: true },
					if: { after: true },
					switch: { after: true },
					while: { after: true }
				}
			}
		],
		'line-comment-position': 'off',
		'linebreak-style': 'off',
		'lines-around-comment': 'off',
		'lines-between-class-members': [
			'error',
			'always',
			{
				exceptAfterSingleLine: true
			}
		],
		'max-classes-per-file': ['error', { max: 2 }],
		'max-depth': ['error', { max: 4 }],
		'max-len': [
			'error',
			{
				code: 120,
				comments: 120,
				ignoreComments: false,
				ignoreRegExpLiterals: true,
				ignoreStrings: false,
				ignoreTemplateLiterals: false,
				ignoreTrailingComments: false,
				ignoreUrls: true,
				tabWidth: 4
			}
		],
		'max-lines': ['error', { max: 1000, skipBlankLines: true, skipComments: false }],
		'max-lines-per-function': 'off',
		'max-nested-callbacks': ['warn', { max: 4 }],
		'max-params': 'off',
		'max-statements': 'off',
		'max-statements-per-line': ['error', { max: 2 }],
		'multiline-comment-style': ['error', 'starred-block'],
		'multiline-ternary': ['error', 'always-multiline'],
		'new-cap': ['warn', { capIsNew: true, newIsCap: true, properties: true }],
		'new-parens': ['error', 'always'],
		'newline-per-chained-call': ['error', { ignoreChainWithDepth: 3 }],
		'no-alert': 'error',
		'no-array-constructor': 'warn',
		'no-async-promise-executor': 'error',
		'no-await-in-loop': 'warn',
		'no-bitwise': 'warn',
		'no-caller': 'error',
		'no-case-declarations': 'error',
		'no-class-assign': 'error',
		'no-compare-neg-zero': 'error',
		'no-cond-assign': 'error',
		'no-confusing-arrow': 'off',
		'no-console': 'off',
		'no-const-assign': 'error',
		'no-constant-condition': 'warn',
		'no-constructor-return': 'error',
		'no-continue': 'off',
		'no-control-regex': 'warn',
		'no-debugger': 'error',
		'no-delete-var': 'error',
		'no-div-regex': 'warn',
		'no-dupe-args': 'error',
		'no-dupe-class-members': 'error',
		'no-dupe-else-if': 'error',
		'no-dupe-keys': 'error',
		'no-duplicate-case': 'error',
		'no-duplicate-imports': ['error', { includeExports: false }],
		'no-else-return': ['error', { allowElseIf: false }],
		'no-empty': 'off',
		'no-empty-character-class': 'error',
		'no-empty-function': 'off',
		'no-empty-pattern': 'error',
		'no-eq-null': 'warn',
		'no-eval': 'error',
		'no-ex-assign': 'error',
		'no-extend-native': 'warn',
		'no-extra-bind': 'error',
		'no-extra-boolean-cast': ['warn', { enforceForLogicalOperands: true }],
		'no-extra-label': 'warn',
		'no-extra-parens': ['warn', 'all', { nestedBinaryExpressions: false }],
		'no-extra-semi': 'error',
		'no-fallthrough': 'off',
		'no-floating-decimal': 'error',
		'no-func-assign': 'error',
		'no-global-assign': 'error',
		'no-implicit-coercion': 'error',
		'no-implicit-globals': 'error',
		'no-implied-eval': 'error',
		'no-import-assign': 'error',
		'no-inline-comments': 'off',
		'no-inner-declarations': 'off',
		'no-invalid-regexp': 'error',
		'no-invalid-this': 'off',
		'no-irregular-whitespace': [
			'error',
			{
				skipComments: true,
				skipRegExps: true,
				skipStrings: true,
				skipTemplates: true
			}
		],
		'no-iterator': 'warn',
		'no-label-var': 'error',
		'no-labels': 'off',
		'no-lone-blocks': 'warn',
		'no-lonely-if': 'error',
		'no-loop-func': 'off',
		'no-loss-of-precision': 'warn',
		'no-magic-numbers': 'off',
		'no-misleading-character-class': 'warn',
		'no-mixed-operators': 'error',
		'no-mixed-spaces-and-tabs': ['error', 'smart-tabs'],
		'no-multi-assign': 'error',
		'no-multi-spaces': 'error',
		'no-multi-str': 'error',
		'no-multiple-empty-lines': ['error', { max: 2 }],
		'no-negated-condition': 'error',
		'no-nested-ternary': 'off',
		'no-new': 'warn',
		'no-new-func': 'error',
		'no-new-object': 'off',
		'no-new-symbol': 'error',
		'no-new-wrappers': 'error',
		'no-nonoctal-decimal-escape': 'error',
		'no-obj-calls': 'error',
		'no-octal': 'error',
		'no-octal-escape': 'error',
		'no-param-reassign': 'warn',
		'no-plusplus': 'off',
		'no-promise-executor-return': 'off',
		'no-proto': 'error',
		'no-prototype-builtins': 'warn',
		'no-redeclare': 'error',
		'no-regex-spaces': 'warn',
		'no-restricted-exports': 'off',
		'no-restricted-globals': 'off',
		'no-restricted-imports': 'off',
		'no-restricted-properties': 'off',
		'no-restricted-syntax': 'off',
		'no-return-assign': 'warn',
		'no-return-await': 'warn',
		'no-script-url': 'error',
		'no-self-assign': 'error',
		'no-self-compare': 'error',
		'no-sequences': 'error',
		'no-setter-return': 'off',
		'no-shadow': 'warn',
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
		'no-unmodified-loop-condition': 'warn',
		'no-unneeded-ternary': 'error',
		'no-unreachable': 'warn',
		'no-unreachable-loop': 'warn',
		'no-unsafe-finally': 'warn',
		'no-unsafe-negation': 'error',
		'no-unsafe-optional-chaining': 'error',
		'no-unused-expressions': 'off',
		'no-unused-labels': 'error',
		'no-unused-private-class-members': 'error',
		'no-unused-vars': [
			'warn',
			{
				argsIgnorePattern: '^_',
				caughtErrors: 'none'
			}
		],
		'no-use-before-define': ['error', { functions: false }],
		'no-useless-backreference': 'warn',
		'no-useless-call': 'warn',
		'no-useless-catch': 'error',
		'no-useless-computed-key': 'error',
		'no-useless-concat': 'warn',
		'no-useless-constructor': 'error',
		'no-useless-escape': 'warn',
		'no-useless-rename': 'error',
		'no-useless-return': 'warn',
		'no-var': 'error',
		'no-void': 'warn',
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
				array: false,
				object: true
			},
			{
				enforceForRenamedProperties: false
			}
		],
		'prefer-exponentiation-operator': 'off',
		'prefer-named-capture-group': 'off',
		'prefer-numeric-literals': 'off',
		'prefer-object-has-own': 'error',
		'prefer-object-spread': 'off',
		'prefer-promise-reject-errors': 'error',
		'prefer-regex-literals': 'error',
		'prefer-rest-params': 'error',
		'prefer-spread': 'error',
		'prefer-template': 'error',
		'quote-props': [
			'error',
			'as-needed',
			{
				unnecessary: true,
				numbers: false
			}
		],
		quotes: [
			'error',
			'single',
			{
				avoidEscape: true,
				allowTemplateLiterals: false
			}
		],
		radix: 'error',
		'require-atomic-updates': 'warn',
		'require-await': 'error',
		'require-unicode-regexp': 'off',
		'require-yield': 'error',
		'rest-spread-spacing': ['error', 'never'],
		semi: ['error', 'always', { omitLastInOneLineBlock: false }],
		'semi-spacing': ['error', { before: false, after: true }],
		'semi-style': ['error', 'last'],
		'sort-imports': 'off',
		'sort-keys': [
			'warn',
			'asc',
			{
				caseSensitive: false,
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
				asyncArrow: 'always',
				named: 'never'
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
		'valid-typeof': ['error', { requireStringLiterals: true }],
		'vars-on-top': 'off',
		'wrap-iife': ['error', 'inside'],
		'wrap-regex': 'off',
		'yield-star-spacing': ['error', 'before'],
		yoda: 'error'
	}
};
