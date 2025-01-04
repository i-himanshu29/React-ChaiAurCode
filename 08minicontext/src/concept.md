Suppose we have a lots of components in nested form ,and i want to pass the data from starting component (App) to ending component (any particular component) ...
First Way is to pass a props to on by one component so that the innner component got the value.but this is not a good practice because in this senario every component get the value which have no use/or not required Hence the concept of prop drilling is comming.

Second Way is by prop drilling or context api , In this senario we have made a global component/element so that eveery component can access it as required without passing props from one component to another component

There are some another way as well . the context api is purely the part of react but this problem is not only related to the react,it can also came into vue.js as well

Thus the redux came here to solve that problem .
Redux is not the part of react.js it is seperate library
Redux is used for to manange the state.Means it passes the data in a organised way
If we want to work with the redux then we have react-redux.
Redux toolkit is the easier version of react-Redux .also called RTK in sort form.
Zustang are also there.
