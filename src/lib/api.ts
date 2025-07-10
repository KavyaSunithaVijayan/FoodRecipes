import axios from "axios";

axios.defaults.baseURL = 'https://www.themealdb.com/api/json/v1/1/'

export const GetCategories = async (food: any) => {
    const url = `search.php?s= ${food}`;
    const response = await axios.get(url);
    return response?.data?.meals;
}
export const GetAllMeals = async () => {
    const url = `search.php?s=`;
    const response = await axios.get(url);
    return response?.data?.meals;
}
