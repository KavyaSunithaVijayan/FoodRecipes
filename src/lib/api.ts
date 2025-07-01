import axios from "axios";

axios.defaults.baseURL = 'https://www.themealdb.com/api/json/v1/1/'

export const GetCategories = async () => {
    const url = `/categories.php`;
    const response = await axios.get(url);
    return response?.data?.categories;
}