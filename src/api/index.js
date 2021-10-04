import axios from 'axios';

// originally tried this free API, but it was buggy
// export const getRates = async ({ queryKey }) => {
//   const [_, base] = queryKey;
//   console.log(base);
//   const { data } = await axios.get(
//     `https://api.exchangerate.host/latest?base=${base}`
//   );
//   return data;
// };
export const getRates = async ({ queryKey }) => {
  const [_, base] = queryKey;
  const { data } = await axios.get(
    `https://v6.exchangerate-api.com/v6/8d8c27e3d1452afe3748a133/latest/${base}`
  );
  return data;
};
