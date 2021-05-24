import {
    setProfileThunkCreator,
    setProfileStatusThunkCreator,
} from "../redux/profile-reducer";
import {Profile} from "./profile";
import {useDispatch, useSelector} from 'react-redux';
import * as React from "react";
import {useParams} from "react-router";
import { AppStateType } from "../redux/store";
import { useHistory } from "react-router-dom";

export const ProfileContainer: React.FC = (props) => {

    const params = useParams<{userId: string}>();
    const history = useHistory();

    const authorizedUserId = useSelector((state: AppStateType) => {
        return state.authData.id
    });

    const dispatch = useDispatch();

    React.useEffect(() => {
        const setProfileStatus = (userId: number) => {
            dispatch(setProfileStatusThunkCreator(userId));
        };

        const setProfile = (userId: number) => {
            dispatch(setProfileThunkCreator(userId));
        };

        const refreshProfile =  () => {
            let userId: number | null = parseInt(params.userId);
            if (!userId) {
                userId = authorizedUserId;
                if (!userId) {
                    history.push('/login');
                    return
                };
            };


            if (!userId) {
                console.error("ID should exists in URI params or in state ('authorizedUserId')");
            } else {
                setProfile(userId);
                setProfileStatus(userId);
            };
        };

        refreshProfile();
    }, [authorizedUserId, dispatch, params.userId, history]);

    return (
        <Profile
            isOwner={!params.userId}
        />
    )
};