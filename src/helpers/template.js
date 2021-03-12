// module.exports = (obj, str) => {

// };

const template = (obj, str) => {
  //   console.log("OBJ", obj);
  //   console.log("STR", str);

  //   var htmlStr = str.toString();
  //   var matchPattern = /{{first_name/g;
  //   const result = str.match(matchPattern);
  //   if (result) {
  //     console.log("INSIDE IF", str.replace(`{{first_name}}`, obj.first_name));
  //   }
  //   console.log("RESULT", result);

  //   Object.keys(obj).map((key, index) => {
  //     // console.log("KEY ", key);
  //     // console.log("index ", obj[key]);
  //     var matchPattern = /{{first_name}}/g;
  //     console.log("MATCHPATTERN", matchPattern);
  //     const result = str.match(/key/g);
  //     console.log("RESULT", result);
  //     console.log(str.replace("{{first_name}}", obj.first_name));
  //     // if (result) {
  //     //   str.replace(`{{key}}`, obj[key]);
  //     // }
  //   });

  //   for (var key in obj) {
  //     console.log("KEY", key);
  //     if (key.match(/{{first_name/)) {
  //       console.log(str.replace(`{{key}}`, obj[key]));
  //     }
  //   }

    // Object.keys(obj).forEach(
    //   (keyValue) =>
    //     (str = str.replace(`{{${keyValue}}}`, obj[keyValue]))
    // );
    // return str;

  // const regularExp = [
  //   /id/,
  //   /first_name/,
  //   /last_name/,
  //   /email_id/,
  //   /dob/,
  //   /gender/,
  //   /phone/,
  //   /password/,
  //   /is_deleted/,
  //   /created_at/,
  // ];

  // regularExp.forEach((keyValue) => {
  //   console.log("KEYVALUE", keyValue);
  //   keyValue = keyValue.toString().split("/")[1];
  //   console.log("KEYKEY", keyValue);
  //   str = str.replace(`{{${keyValue}}}`, obj[keyValue]);
  // });
  // return str;

  const regularExp = /{{.+}}/gm;
  const matchedStr = str.match(regularExp);
  var tempStr = str;
  matchedStr.forEach((keyValue) => {
    console.log("KEYVALUE", keyValue);
    var key = keyValue.replace(/{/g, "").replace(/}/g, "");
    console.log("KEYKEY", key);
    console.log("OBJECT KEY", obj[key]);
    tempStr = tempStr.replace(keyValue, obj[key]);
  });
  return tempStr;
};

module.exports = { template };
