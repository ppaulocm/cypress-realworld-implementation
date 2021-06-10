export const getRandomString = (length) => {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;

  for (let i = 0; i < length; i += 1) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

export const getCurrentDate = () => {
  const today = new Date();
  const time = `${today.getHours()}${today.getMinutes()}`;
  return `${time}`;
};

export const getRndId = () => {
  const max = 999;
  const min = 100;
  return Math.floor(Math.random() * (max - min)) + min;
};
