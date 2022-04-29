let CryptoJS = require("crypto-js");
let messageToencrypt = "{'hash': 'sample'}";
let secretkey = [
  {
    key: "zAL7X5AVRm8l4Ifs",
    iv: "BE/s3V0HtpPsE+1x",
  },
];

// let secretkey = "zAL7X5AVRm8l4Ifs";

const encryptMessage = (messageToencrypt, secretkey) => {
  var encryptedMessage = CryptoJS.AES.encrypt(
    JSON.stringify(messageToencrypt),
    JSON.stringify(secretkey)
  );
  return encryptedMessage.toString();
};
const decryptMessage = (encryptedMessage, secretkey) => {
  var decryptedBytes = CryptoJS.AES.decrypt(encryptedMessage, secretkey);
  var decryptedMessage = decryptedBytes.toString(CryptoJS.enc.Utf8);

  return decryptedMessage;
};

const encrypt = (text) => {
  return CryptoJS.enc.Base64.stringify(
    CryptoJS.enc.Utf16.parse(JSON.stringify(text))
  );
};

console.log(encryptMessage(messageToencrypt, secretkey));
// console.log(
//   decryptMessage(
//     "U2FsdGVkX19dzpDfqzD2x4KxAdS6g5wsEKv6l+GtbsM=",
//     "zAL7X5AVRm8l4Ifs"
//   )
// );

console.log(encrypt(messageToencrypt).length);

let str = "aGVsbG8gd29ybGQ=";
// console.log(str.length);
