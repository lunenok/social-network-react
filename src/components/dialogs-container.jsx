import {updateMessageTextCreator, sendMessageCreator} from './../redux/dialogs-reducer';
import {Dialogs} from "./dialogs";
import {connect} from 'react-redux';
import {withAuthComponent} from './../hocs/withAuthComponent';
import { compose } from 'redux';

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

// Заменено на compose
// export const DialogsContainer = withAuthComponent(connect(mapStateToProps, mapDispatchToProps)(Dialogs));

export const DialogsContainer = compose(
    withAuthComponent, 
    connect(mapStateToProps, mapDispatchToProps)
    )(Dialogs);
    