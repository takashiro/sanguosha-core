module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'node',
	transform: {
		'\\.js$': 'ts-jest',
	},
	collectCoverage: true,
	collectCoverageFrom: [
		'./src/**/*.ts',
	],
	coverageDirectory: 'build',
};
