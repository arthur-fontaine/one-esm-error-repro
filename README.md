## How to run?

To run this:

I've tested on an Android phone, I can't say if there will be the same error on an iOS device.

```
npm run dev
```

Then type `oa` in the terminal.

## What is the problem?

When you run this, there will be an tons of errors (on my phone it says 149) as

```
◆ ../../../../@bufbuild/protobuf/dist/esm/wkt/index.js Error running module (parent: ../../../../@bufbuild/protobuf/dist/esm/wkt/index.js): @bufbuild/protobuf/dist/esm/wkt/index.js
Cannot read property 'ApiSchema' of undefined
TypeError: Cannot read property 'ApiSchema' of undefined
```

The error seems to be related to esm, because when you go to `node_modules/@bufbuild/protobuf/package.json` and make the `import exports` exports the `cjs` files (apply the example below to all exports), it works (I mean, there is only 2 more errors in the Android phone, but they are the same errors with another package).

```patch
    "./reflect": {
-      "import": "./dist/esm/reflect/index.js",
+      "import": "./dist/cjs/reflect/index.js",
      "require": "./dist/cjs/reflect/index.js"
    },
```
