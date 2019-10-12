import jsonData from '../config/config.json';

const getConfigData = () => JSON.parse(JSON.stringify(jsonData));

export { getConfigData };
