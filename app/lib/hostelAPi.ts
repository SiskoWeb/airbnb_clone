import AsyncStorage from "@react-native-async-storage/async-storage";
import { fetchWithTimeout } from "../helpers/fetchWithTimeout";
import dayjs from "dayjs";


interface ReservationData {
  Host_code: string;
  startDate: dayjs.Dayjs | string;
  endDate: dayjs.Dayjs | string;
}

const URL = process.env.EXPO_PUBLIC_BACKEND_URL+'/hostel' ;

if (!URL) {
  throw new Error("EXPO_PUBLIC_BACKEND_URL is not defined");
}


export const LoadHostels = async (selectedCategory: string, page: number = 1, limit: number = 10,maxDistanceKm = 2000,latitude :number =  32.307269,longitude:number = -9.846902) => {



  

  try {
    const response = await fetchWithTimeout(
      `${URL}?cat=${selectedCategory}&page=${page}&limit=${limit}&latitude=${latitude}&longitude=${longitude}&maxDistanceKm=${maxDistanceKm}`,
      {
        timeout: 10000, 
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        
        },
      }
    );
    const res = await response.json();

    if (res.error) {
      throw res.message;
    }



    return res;
  } catch (error: any) {
    // if the timeout is reached
    if (error.name === "AbortError") {
      throw new Error("Timout error");
    }
    // Handle network or fetch errors
    console.error("Login Error:", error);
    throw new Error("Unspected Error ");
  }
};



export const LoadOneHostels = async (id: string) => {



  

  try {
    const response = await fetchWithTimeout(
      `${URL}/${id}`,
      {
        timeout: 8000, // Adjust the timeout value as needed
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        
        },
      }
    );
    const res = await response.json();

    if (res.error) {
      throw res.message;
    }



    return res;
  } catch (error: any) {
    // if the timeout is reached
    if (error.name === "AbortError") {
      throw new Error("Timout error");
    }
    // Handle network or fetch errors
    console.error("Login Error:", error);
    throw new Error("Unspected Error ");
  }
};
