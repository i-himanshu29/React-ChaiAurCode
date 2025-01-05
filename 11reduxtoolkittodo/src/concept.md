
<!-- Flux  -->

It is also a state management method,which was used earlier.
It manages the data flow.

<!-- Redux -->

It is independent library.
Better version of flux.
Single source of truth(SSOT) means ek hi store hona chahiye.
It should be read only. You should modify/mutate your state.

Store me changes functon ke through hona chahiye, directly nhi hona chahiye or we say 'reducer'.
Functionality reducer ke through hi jaani chahiye.

Kuch dikkat a rhi thi jaise redux thunks,redux saga and middleware me jo debugging me help karte hai ,unko setup karne me time lagta tha


<!-- Now the latest is Redux-toolkit -->

to solve all these problem 
There is no need to set up thousands of thing ,It give Simple Flow and mannage a lots of things internally.

It give Abstraction and provide easy way to make a store
buildin middleware, Slicing and also it include middleware of redux thunks

Store - jaha se single source of Truth(SSOT) se le lete hai (global variable types), 
Reducers - Functionality wala part reducer ke through hi jayega mini portion me ,
useSelector -  Jab koi value selelect karni hai, 
useDispatch - Jab koi value bhejni ho