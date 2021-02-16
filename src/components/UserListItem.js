import React from 'react';
import {Button} from 'reactstrap';
import "./style.css";

const UserListItem = ({user, onDeleteClick}) => {

    const stringToHslColor = (str = '') => {
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
            hash = str.charCodeAt(i) + ((hash << 5) - hash);
        }

        const h = hash % 360;
        return `hsl(${h},60%,80%)`;
    };

    return (
        <div className="first">
            <div className="firstlastname">
                {!!user && !!user.firstName && !!user.lastName ? user.firstName[0].toUpperCase() + user.lastName[0].toUpperCase() : ''}
            </div>
            <div className="displaynames">
                {user.firstName} {user.lastName}
            </div>
            <div >
                <Button size="sm" color="danger" outline onClick={() => onDeleteClick(user.id)}>
                    Delete
                </Button>
            </div>
        </div>
    );
};

export default UserListItem;