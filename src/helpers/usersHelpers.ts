const usernameVerification = (username: string) => {
  if (!username) return { status: 400, message: '"username" is required' };
  if (typeof username !== 'string') {
    return { status: 422, message: '"username" must be a string' };
  }
  if (username.length < 3) {
    return { status: 422, message: '"username" length must be at least 3 characters long' };
  }
  return true;
};

const classVerification = (classe: string) => {
  if (!classe) return { status: 400, message: '"classe" is required' };
  if (typeof classe !== 'string') {
    return { status: 422, message: '"classe" must be a string' };
  }
  if (classe.length < 3) {
    return { status: 422, message: '"classe" length must be at least 3 characters long' };
  }
  return true;
};

const levelVerification = (level: number) => {
  if (!level && level !== 0) return { status: 400, message: '"level" is required' };
  if (typeof level !== 'number') {
    return { status: 422, message: '"level" must be a number' };
  }
  if (level <= 0) {
    return { status: 422, message: '"level" must be greater than or equal to 1' };
  }
  return true;
};

const passwordVerification = (password: string) => {
  if (!password) return { status: 400, message: '"password" is required' };
  if (typeof password !== 'string') {
    return { status: 422, message: '"password" must be a string' };
  }
  if (password.length < 8) {
    return { status: 422, message: '"password" length must be at least 8 characters long' };
  }
  return true;
};

export {
  usernameVerification,
  classVerification,
  levelVerification,
  passwordVerification,
};
