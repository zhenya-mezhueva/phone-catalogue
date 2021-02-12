
export const getPhones = () => fetch('https://zhenya-mezhueva.github.io/phone-catalogue/api/phones.json')
    .then(response => response.json());

