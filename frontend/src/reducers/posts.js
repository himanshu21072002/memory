import constant from "../constants/actionTypes";
export default function post(posts=[],action){
    switch(action.type){
    case constant.FETCH_ALL:
        return action.payload;
    case constant.CREATE:
        return [...posts,action.payload];
    case constant.UPDATE:
        return posts.map((post)=>post._id===action.payload._id?action.payload:post);
    case constant.DELETE:
        return posts.filter((post) => post._id !== action.payload);
    case constant.LIKE:
        return posts.map((post) => (post._id === action.payload._id ? action.payload : post));
    default: 
        return posts;
};
}