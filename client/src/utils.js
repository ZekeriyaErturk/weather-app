// Removing turkish characters
export const replaceTR = (name) => {
  let formatted = name;
  formatted = formatted.replace(/ı/g, 'i');
  formatted = formatted.replace(/İ/g, 'I');
  formatted = formatted.replace(/ü/g, 'u');
  formatted = formatted.replace(/ş/g, 's');
  formatted = formatted.replace(/ğ/g, 'g');
  formatted = formatted.replace(/ç/g, 'c');
  formatted = formatted.replace(/Ü/g, 'U');
  formatted = formatted.replace(/Ö/g, 'O');
  formatted = formatted.replace(/Ş/g, 'S');
  formatted = formatted.replace(/Ğ/g, 'G');
  formatted = formatted.replace(/Ç/g, 'C');
  return formatted.toLocaleLowerCase();
};

export const checkDuplicateCity = (cities, name) => {
  return (
    cities.find((c) =>
      replaceTR(c.name)
        .toLowerCase()
        .includes(replaceTR(name).toLocaleLowerCase())
    ) === undefined
  );
};

export const getTime = (milliseconds) =>
  Date(milliseconds).toString().split(' ')[4].split(':').slice(0, 2).join(':');
