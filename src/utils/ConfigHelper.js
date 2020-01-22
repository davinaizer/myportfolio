import jsonData from '../config.json';

const getConfigData = () => JSON.parse(JSON.stringify(jsonData));

export { getConfigData };
