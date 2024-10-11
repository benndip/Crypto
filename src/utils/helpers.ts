import AsyncStorage from "@react-native-async-storage/async-storage";

export const isValidEmail = (email: string) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

export const save = (key: string, value: string|object|boolean) => {  
    let testedValue = typeof value === "string" ? value : JSON.stringify(value);
    AsyncStorage.setItem(key, testedValue)
  };
  
  export const getValueFor = async (key: string) => {
    
    try {
      const jsonValue = await AsyncStorage.getItem(key)
      if (typeof jsonValue === 'string') {
        return JSON.parse(jsonValue)
      }
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch(e) {
      // console.log("error reading value",e);
      // error reading value
    }
  };
  
  export const deleteValueFor = (key:string) => {
    try {
        AsyncStorage.removeItem(key)
    } catch (error) {
      //console.log(error);
    }
  }