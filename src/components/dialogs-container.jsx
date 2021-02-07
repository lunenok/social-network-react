import {updateMessageTextCreator, sendMessageCreator} from './../redux/dialogs-reducer';
import {Dialogs} from "./dialogs";
import {connect} from 'react-redux';

// export const DialogsContainer = (props) => {
//     const {dialogsName, messages, newMessageText} = props.store.dialogsPage;
//
//     const onMessageUpdate = (text) => {
//         props.dispatch(updateMessageTextCreator(text));
//     }
//
//     const onMessageSendButtonClick = () => {
//         props.dispatch(sendMessageCreator());
//     }
//
//     return (
//         <Dialogs
//             dialogsName={dialogsName}
//             messages={messages}
//             newMessageText={newMessageText}
//             onMessageUpdate={onMessageUpdate}
//             onMessageSendButtonClick={onMessageSendButtonClick}
//         />
//     );
// };


const mapStateToProps = (state) => {
    return {
        dialogsName:state.dialogsPage.dialogsName,
        messages: state.dialogsPage.messages,
        newMessageText: state.dialogsPage.newMessageText,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onMessageUpdate: (text) => {
            dispatch(updateMessageTextCreator(text))
        },
        onMessageSendButtonClick: () => {
            dispatch(sendMessageCreator())
        }
    };
};

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);