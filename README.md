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

## Investigation notes

One of the error is `Cannot read property 'ApiSchema' of undefined` and is related to this line:

<img width="400" alt="Capture d’écran 2025-01-01 à 04 07 21" src="https://github.com/user-attachments/assets/3599b8b5-a536-4b26-963f-1f45a838bf9b" />

It means `api_pb` is undefined. `api_pb` is defined here:

<img width="558" alt="Capture d’écran 2025-01-01 à 04 08 09" src="https://github.com/user-attachments/assets/83768153-7bd2-409b-800c-463da3711237" />

It means that `require("./gen/google/protobuf/api_pb.js")` returns undefined. The require function is defined here:

<img width="1289" alt="Capture d’écran 2025-01-01 à 04 12 21" src="https://github.com/user-attachments/assets/a3e7609c-09cc-4b31-b3e2-0185f6766830" />

Quickly looking at the code of One, maybe the problem is somewhere there https://github.com/onejs/one/blob/d91251ace4eaca86d0388afeddec6342fa157b71/packages/vxrn/react-native-template.js#L189-L250

I'm really not sure, but maybe it's because the importer is `@bufbuild...` while the import map keys are `../../../node_modules/@bufbuild...`.

The reason I'm not sure is because the `console.error(`Module not found "${_mod}" imported by "${importer}"\n${getErrorDetails()}`)` does not appear in my console (but there is too many errors, maybe it appear but is not showed).
