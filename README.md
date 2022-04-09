<h1 align="center">Webpack Configuration</h1>

<h2 align="center">

![](https://img.shields.io/github/languages/count/Alekanteri/webpack_configuration)
![](https://img.shields.io/github/languages/top/Alekanteri/webpack_configuration)
![](https://img.shields.io/github/followers/Alekanteri?style=social)

</h2>

## Finalize

1. If necessary, add support for more files;
2. Optimize Configuration

---

## Scripts

### `yarn start`

```json
"webpack serve --open --config webpack.dev.js"
```

Open local server in development mode. Webpack listens for file changes and changes the content on the page automatically.

### `yarn build`

```json
"webpack --config webpack.prod.js"
```

Creates a _./dist_ folder with final minified files
