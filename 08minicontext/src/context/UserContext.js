import React from "react";
// createContext is a method to create context
const UserContext = React.createContext()

export default UserContext;
// UserContext is act as a provider
// it means jo bhi component iske andar hai(like Login,card etc.) 
// un sabhi component ko global context ka access mil jata hai
// context is like global variable

{/*     <UserContext>
            <Login/>
            <Card>
                <Data/>
            </Card>
        </UserContext> 
*/}