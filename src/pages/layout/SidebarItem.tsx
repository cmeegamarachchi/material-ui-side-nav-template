import React from "react";
import { Link } from "react-router-dom";
import {ListItem, ListItemIcon, ListItemText} from '@mui/material';

interface SidebarItemProps {
    icon: any;
    text: string;
    target: string;
    className?:string;
}

const SidebarItem: React.FC<SidebarItemProps> = (props) => {

    const { target, icon, text, className } = props;

    const _target = {
        pathname: target,
        hash: window.location.hash
    }

    const internal = (
        <ListItem className={className} button component={Link} to={_target}>
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText primary={text} />
        </ListItem>
    );

    const external = (
        <ListItem className={className} button onClick={() => window.open(target)}>
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText primary={text} />
        </ListItem>
    );

    return target.trim().toLowerCase().indexOf('http') === 0 ? external : internal;
};

export default SidebarItem;
