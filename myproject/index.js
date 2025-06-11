const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Centralized state object
const globalState = {
  var1: "значение1",
  var2: "значение2",

  userkick: "user",
  userkickreason: "1234",

  userban: "user",
  userbanreason: "1234",
  userbantime: "1y",

  juser: "user",
  jlenght: "10",
  jtype: "1",

  suser: "user",

  muser: "user",
  mlenght: "10"
};

// Reusable setter function
function createSetterRoute(endpoint, key, allowedTypes = ['string']) {
  app.post(endpoint, (req, res) => {
    const { value } = req.body;

    if (allowedTypes.includes(typeof value)) {
      globalState[key] = value;
      res.json({ status: 'ok', [key]: value });
    } else {
      res.status(400).json({ error: `Value must be of type: ${allowedTypes.join(' or ')}` });
    }
  });
}

// Reusable getter for JSON response
function createGetterRoute(endpoint, keys) {
  app.get(endpoint, (req, res) => {
    const response = {};
    keys.forEach(key => {
      response[key] = globalState[key];
    });
    res.json(response);
  });
}

// Getters (same as your original API)
createGetterRoute('/all', Object.keys(globalState));
createGetterRoute('/j', ['juser', 'jlenght', 'jtype']);
createGetterRoute('/spy', ['suser']);
createGetterRoute('/mute', ['muser', 'mlenght']);
createGetterRoute('/vars', ['var1', 'var2']);
createGetterRoute('/kicksbans', ['userkick', 'userkickreason', 'userban', 'userbanreason', 'userbantime']);

// Setters (same paths as before)
createSetterRoute('/setVar1', 'var1', ['string', 'number']);
createSetterRoute('/setVar2', 'var2', ['string', 'number']);

createSetterRoute('/setUserkick', 'userkick', ['string', 'number']);
createSetterRoute('/setUserkickreason', 'userkickreason', ['string', 'number']);

createSetterRoute('/setUserban', 'userban', ['string', 'number']);
createSetterRoute('/setUserbanreason', 'userbanreason', ['string']);
createSetterRoute('/setUserbantime', 'userbantime', ['string', 'number']);

createSetterRoute('/setjuser', 'juser', ['string', 'number']);
createSetterRoute('/setjlenght', 'jlenght', ['string', 'number']);  // originally was a string
createSetterRoute('/setjtype', 'jtype', ['string', 'number']);

createSetterRoute('/setspy', 'suser', ['string', 'number']);

createSetterRoute('/setmuser', 'muser', ['string', 'number']);
createSetterRoute('/setmlenght', 'mlenght', ['string', 'number']); // match flexibility

// Start server
app.listen(port, '0.0.0.0', () => {
  console.log(`API listening at http://0.0.0.0:${port}`);
  console.log('MADE BY ILOVEPOTATOCHISP2022. GITHUB Izibrizi798 ROBLOX IlovePotatochips2022')
});
