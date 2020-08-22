export const requestTime = (text) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const time = new Date().getTime();
      resolve(`${text}${time}`);
    }, 3000);
  });
}