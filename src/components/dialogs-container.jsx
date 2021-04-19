import {sendMessageCreator} from './../redux/dialogs-reducer';
import {Dialogs} from "./dialogs";
import {connect} from 'react-redux';
import {withAuthComponent} from './../hocs/withAuthComponent';
import { compose } from 'redux';

const mapStateToProps = (state) => {
    return {
        dialogsName:state.dialogsPage.dialogsName,
        messages: state.dialogsPage.messages,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onMessageSendButtonClick: (message) => {
            dispatch(sendMessageCreator(message))
        }
    };
};

// Заменено на compose
// export const DialogsContainer = withAuthComponent(connect(mapStateToProps, mapDispatchToProps)(Dialogs));

export const DialogsContainer = compose(
    withAuthComponent, 
    connect(mapStateToProps, mapDispatchToProps)
    )(Dialogs);
    