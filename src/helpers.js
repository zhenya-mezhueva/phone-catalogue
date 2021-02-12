
export const getPhones = () => fetch('/api/phones.json')
    .then(response => response.json());

