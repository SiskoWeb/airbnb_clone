import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";
import { fetchWithTimeout } from "../helpers/fetchWithTimeout";





const Login = async (email: string, password: string) => {


  try {

    
    const result = await fetchWithTimeout("http:/192.168.227.45:3000/auth/login", {
      timeout: 8000, // Adjust the timeout value as needed
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });


    const response = await result.json();

    if (response.access_token) {
      console.log("login done");
      // Save info in local storage
      await AsyncStorage.setItem("access_token", response.access_token);
      await AsyncStorage.setItem("refresh_token", response.refresh_token);
      await AsyncStorage.setItem("user", JSON.stringify(response.user));
      return true;
    } else if (response.error) {
      // Handle specific error cases
      if (response.statusCode === 401) {
        Alert.alert("Login Failed", response.message);
      } else if (response.statusCode === 400) {
        Alert.alert("Login Failed", response.message.join("\n"));
      }
    } else {
      // Fallback in case of unexpected response structure
      Alert.alert("Login Failed", "Unexpected error occurred.");
      return false;
    }
  } catch (error:any) {


    // if the timeout is reached
    if(error.name === 'AbortError'){
      Alert.alert(
        "Login Failed",
        "The Timeout Please try again."
      );

    }
    // Handle network or fetch errors
    console.error("Login Error:", error);
   

      Alert.alert("Login Failed", error[0].TypeError);
   
    return false;
  }
};

const Registration = async (body: any) => {
  try {

    const result = await fetchWithTimeout("http:/192.168.227.45:3000/auth/signup", {
      timeout: 8000, // Adjust the timeout value as needed
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

   
    const response = await result.json();

    if (response.access_token) {
      return true;
    } else if (response.error) {
      // Handle specific error cases
      if (response.statusCode === 401) {
        Alert.alert("Login Failed", response.message);
      } else if (response.statusCode === 400) {
        Alert.alert(
          "Login Failed",
          typeof response.message === "object"
            ? response.message?.join("\n")
            : response.message
        );
      } else {
        Alert.alert("Login Failed", "Unexpected error occurred.");
      }
    } 
  } catch (error:any) {

     // if the timeout is reached
     if(error.name === 'AbortError'){
      Alert.alert(
        "Login Failed",
        "The Timeout Please try again."
      );

    }

    // Handle network or fetch errors
    console.error("Login Error:", error);
    Alert.alert("Login Failed", "An error occurred. Please try again later.");

    return false;
  }
};

const AuthService = {
  Login,
  Registration,
};

export default AuthService;
