module.exports = {
	preset: 'ts-jest/presets/js-with-ts',
	testEnvironment: 'node',
	globals: {
		'ts-jest': {
			tsconfig: 'test/tsconfig.json',
		},
	},
	collectCoverage: true,
	collectCoverageFrom: [
		'src/**/*.ts',
	],
	coverageDirectory: 'build',
};
