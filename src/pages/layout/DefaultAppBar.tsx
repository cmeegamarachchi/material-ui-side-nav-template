import React, {useState, useEffect} from "react";
import styles from "./DefaultAppBar.module.scss";
import {AppBar, IconButton} from '@mui/material';
import { Toolbar, Typography } from '@mui/material';
import {Menu as MenuIcon} from '@mui/icons-material';
import clsx from 'clsx';

interface Props {
    open: boolean;
    onDrawerOpen: () => void;
}

const DefaultAppBar: React.FC<Props> = ({open, onDrawerOpen}) => {
    const [appBarClassNames, setAppBarClassNames] = useState(styles.appBar);

    const pageTitle = `Side nav template`;

    useEffect(() => {
        document.title = `${pageTitle}`;
    }, [])

    useEffect(() => {
        setAppBarClassNames(`${styles.appBar} ${open ? styles.appBarShift: ''}`);
    }, [open])

    return (
        <AppBar
            position="fixed"
            className={appBarClassNames}
        >
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={onDrawerOpen}
                    edge="start"
                    className={clsx(styles.menuButton, {
                        [styles.menuButtonHide]: open,
                    })}>
                    <MenuIcon/>
                </IconButton>
                <Typography variant="h6" noWrap>
                    Side nav template
                </Typography>
                <div className={styles.expander} />
                <Typography variant="h6" noWrap>
                    Chintana Meegamarachchi
                </Typography>
            </Toolbar>
        </AppBar>)
}

export default DefaultAppBar;