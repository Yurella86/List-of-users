import React, { Fragment } from 'react';
import { Outlet } from 'react-router-dom';

const UserLayout = () => {
    return (
        <Fragment>
            <Outlet />
        </Fragment>
    );
};

export default UserLayout;