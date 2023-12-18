import bcrypt from 'bcrypt';

export const encryptedPassword = async (password) => {
  const salt = await bcrypt.genSalt();

  return await bcrypt.hash(password, salt);
};

export const verifyPassword = async (bodyPassword, userPassword) => {
  return await bcrypt.compare(bodyPassword, userPassword);
};