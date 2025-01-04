import { createContext,useContext } from "react";

//In the previous context , we don't pass any value as default,but there we will pass the initial value 
// means jab context bane toh kya kya value already present ho
// actually you can pass variable and method as well 
export const ThemeContext = createContext({
    themeMode:"light", // Default value
    darkTheme:()=>{}, // method
    lightTheme:()=>{},
})

//In previous we define ThemeProvider in differnt file but now we
// define here
export const ThemeProvider = ThemeContext.Provider

// also u can create a custom hook
export default function useTheme(){
    return useContext(ThemeContext)
}

// after doing this we don't need to import two thing (useContext and UserContext ) as previously do
// Now we have only one thing to import useTheme 