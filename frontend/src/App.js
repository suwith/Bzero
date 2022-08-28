import MyPage from "./MyPage";
import MapPage from "./MapPage";

import {useReducer,useRef} from 'react';
import CleanStoreDetail from './CleanStoreDetail';
import CleanStore from './CleanStore';
import { dummyData } from './util/dummyData';
import Community from './Community'
import Details from './Details'
import './App.css';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';


const dumyData = [
  {
    id:1,
    emotion: 1,
    content: "송하윤 멋져 1",
    date:1660478254683
  },
  {
    id:2,
    emotion: 2,
    content: "송하윤 멋져 2",
    date:1660478254684
  },
  {
    id:3,
    emotion: 3,
    content: "송하윤 멋져 3",
    date:1660478254685
  },
  {
    id:4,
    emotion: 4,
    content: "송하윤 멋져 4",
    date:1660478254686
  },
  {
    id:5,
    emotion: 5,
    content: "송하윤 멋져 5",
    date:1660478254687
  }
]
import CalendarPage from "./CalendarPage";

  
const dummy_checked_date = ["2022-08-01", "2022-08-05", "2022-08-13"];
const dummy_badge = [
  { badge_id: 1, badge_type: "badge1.png" },
  { badge_id: 2, badge_type: "badge1.png" },
  { badge_id: 3, badge_type: "badge1.png" },
  { badge_id: 5, badge_type: "badge1.png" },
  { badge_id: 6, badge_type: "badge1.png" },
  { badge_id: 4, badge_type: "badge1.png" },
  { badge_id: 7, badge_type: "badge1.png" },
];
const dummyList = [
  {
    profile: "example_profile.jpg",
    nickname: "닉네임",
    email: "email@email.com",
    point: 4300,
  },
];
const reducer=(state,action)=>{
  switch(action.type){
    case 'INIT':{
      return action.data;
    }
    default: return state;
  }
};

export const CleanStoreContext = React.createContext();
export const PostStateContext = React.createContext();
export const PostDispatchContext = React.createContext();
function App() {
  const onCreate = (date, content, emotion) => {
    dispatch({type :"CREATE", data:{
      id : dataId.current,
      data: new Date(date).getTime(),
      content,
      emotion
    }})
  
    dataId.current += 1;
  } 
  // REMOVE
  const onRemove = (targetId) =>{
    dispatch({type:"REMOVE",targetId});
  }
  // Edit
  const onEdit = (targetId, date, content, emotion) => {
    dispatch({
      type:"EDIT",
      data:{
        id: targetId,
        date: new Date(date).getTime(),
        content,
        emotion  
      }
    })
  };
  const [data,dispatch]=useReducer(reducer,dummyData);
  const dataId= useRef(10);

  return (
    <PostStateContext.Provider value={data}>
    <PostDispatchContext.Provider value={{
      onCreate,
      onEdit,
      onRemove,}}>
    <CleanStoreContext.Provider value={data}>
      <BrowserRouter>
      <Routes>
        <Route
          element={<CalendarPage checked_date={dummy_checked_date} />}
          path="/calendar"
        ></Route>
        <Route path='/login' element={<LoginPage></LoginPage>}></Route>
        <Route path='/main' element={<MainPage></MainPage>}></Route>
        <Route path='/mypage' element={<MyPage
        user_info={dummyList}
        checked_date={dummy_checked_date}
        badge_info={dummy_badge}
      />}></Route>
      <Route path='/join' element={<JoinPage></JoinPage>}></Route>
      <Route path='/map' element={<MapPage></MapPage>}></Route>
        <Route path='/cleanstore' element={<CleanStore />}></Route>
        <Route path='/cleanstore/:id' element={<CleanStoreDetail />}></Route>
        <Route path="/community" element={<Community />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </BrowserRouter>
    </CleanStoreContext.Provider>
    </PostDispatchContext.Provider>
    </PostStateContext.Provider>
          
  );
}

export default App;
