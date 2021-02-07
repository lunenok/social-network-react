import {addPostActionCreator, updatePostActionCreator} from "../redux/profile-reducer";
import {Profile} from "./profile";
import {connect} from 'react-redux';

// export const ProfileContainer = (props) => {
//     const onUpdatePostText = (text) => {
//         props.dispatch(updatePostActionCreator(text))
//     };
//
//     const addPost = () => {
//         props.dispatch(addPostActionCreator());
//     }
//
//     return (
//         <Profile
//             posts={props.store.profilePage.posts}
//             newPostText={props.store.profilePage.newPostText}
//             onUpdatePostText={onUpdatePostText}
//             addPost={addPost}
//         />
//         )
// };

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onUpdatePostText: (text) => {
            dispatch(updatePostActionCreator(text))
        },
        addPost: () => {
            dispatch(addPostActionCreator())
        }
    };
};

export const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile);