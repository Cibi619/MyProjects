const os = require('os')

// info about the user

const os_type = os.type;
console.log(os_type)
const user = os.userInfo();
console.log(user, "--user")