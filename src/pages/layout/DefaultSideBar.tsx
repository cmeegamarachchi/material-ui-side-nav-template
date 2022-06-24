import React from 'react';
import {List, ListItem} from '@mui/material';
import SidebarItem from "./SidebarItem";
import StackIcon from "./../../icons/StackIcon";
import TableIcon from "./../../icons/TableIcon";
import SettingsIcon from "./../../icons/SettingsIcon";

import styles from "./DefaultSideBar.module.scss"

const DefaultSideBar = () => {
    return (
        <div className={styles.root}>
            <List className={styles.mainOptions}>
                <SidebarItem target="/page1" text="Page1" icon={<StackIcon/>}/>
                <SidebarItem target="/page2" text="Page2" icon={<TableIcon/>}/>
            </List>
            <List>
                <ListItem divider/>
                <>
                    <div className={styles.build}>{`${process.env.REACT_APP_VERSION}`}</div>
                </>
                <SidebarItem target="/settings" text="Settings" icon={<SettingsIcon/>}/>
            </List>
        </div>
    );
};

export default DefaultSideBar;
