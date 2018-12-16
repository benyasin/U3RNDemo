# U3RNDemo

> a demo integrated react native with u3.js.
> `u3.js` is default to browser and nodejs environments, but you can still integrate u3.js to react native using `rn-nodeify`.

<img src="https://user-images.githubusercontent.com/1866848/50054220-b7a20f80-017a-11e9-86e5-bbaa1b8fe865.png" width="250"/>

#### steps

1. for a new react native project, `npm install -g react-native-cli` first and then `react-native init XXX`.

2. `npm install -g rn-nodeify`.

3. update package.json adding `"postinstall": "rn-nodeify --install --hack",` to the scripts.

4. `cd XXX` and then `npm install u3.js asyncstorage-down --save` or if you just need the ecc lib for signing, `npm install u3-utils --save` 

5. replace the generated file `shim.js` with the same one in the root of project.

6. add `import './shim';` to top position of the entry file `index.js`.

7. refer to `App.js` and use u3.js in react native.

#### declaration

if you have any problem when integrating u3.js to react native,please contact me.