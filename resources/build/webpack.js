/**
 * The module dependencies.
 */
const escapeRegEx = require("escape-string-regexp");
const { ProvidePlugin } = require("webpack");
const utils = require("./utils");

/**
 * Setup the env.
 */
const { isProd, isDev } = utils.detectEnv();

/**
 * Babel loader setup
 */
const babelLoader = {
	loader: "babel-loader",
	options: {
		cacheDirectory: isDev,
		comments: false,
		babelrc: false,
		presets: [
			[
				"@babel/preset-env",
				{
					targets: {
						browsers: ["last 3 versions"],
					},
				},
			],
		],
	},
};

/**
 * Setup the plugins for different envs.
 */
const plugins = [
	new ProvidePlugin({
		$: "jquery",
		jQuery: "jquery",
		Popper: ["popper.js", "default"],
	}),
];

const optimization = {
	chunkIds: "named",
	splitChunks: {
		cacheGroups: {
			vendor: {
				name: "vendor",
				test: /node_modules/,
				chunks: "all",
				enforce: true,
			},
		},
	},
};

/**
 * Export the configuration.
 */
module.exports = {
	/**
	 * The mode.
	 *
	 * @since webpack@4.
	 */
	mode: isProd ? "production" : "development",

	/**
	 * The output.
	 */
	output: {
		filename: (pathData) => {
			const name = pathData.chunk.name;

			if (name.includes("block")) return "blocks/[name].js";

			return "[name].js";
		},
	},

	/**
	 * Resolve modules that can't be installed with NPM.
	 */
	resolve: {
		modules: ["node_modules"],
		alias: {
			masonry: "masonry-layout",
			isotope: "isotope-layout",
			"jquery-ui": "jquery-ui-dist/jquery-ui.js",
		},
	},

	/**
	 * Setup the transformations.
	 */
	module: {
		rules: [
			// Process JS files through Babel.
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: [babelLoader],
			},
		],
		noParse: ["raty-js"].map((module) => new RegExp(escapeRegEx(module))),
	},

	/**
	 * Resolve the dependencies that are available in the global scope.
	 */
	externals: {
		jquery: "jQuery",
	},

	/**
	 * Setup the transformations.
	 */
	plugins,

	/**
	 * Setup the development tools.
	 */
	cache: isDev,
	bail: false,
	watch: isDev,
	optimization,
	devtool: isDev ? "source-map" : false,
};
