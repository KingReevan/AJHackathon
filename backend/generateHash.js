const bcrypt = require('bcrypt');

const run = async () => {
  const password = "password123";
  const hash = await bcrypt.hash(password, 10);
  console.log("Hash for 'password123':", hash);
};

run();
