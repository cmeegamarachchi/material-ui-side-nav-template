import React from "react";

import styles from "./LayoutBase.module.scss";

import clsx from "clsx";

import { useTheme } from "@mui/material/styles";
import { IconButton, Divider, Drawer } from "@mui/material";
import { ChevronLeft as ChevronLeftIcon, ChevronRight as ChevronRightIcon } from "@mui/icons-material";
import DefaultAppBar from "./DefaultAppBar";

interface Props {
    sidebar: any
    children: any;
}

const LayoutBase: React.FC<Props> = (props) => {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div className={styles.root}>
            <DefaultAppBar open={open} onDrawerOpen={handleDrawerOpen} />
            <Drawer
                variant="permanent"
                className={clsx(styles.drawer, {
                    [styles.drawerOpen]: open,
                    [styles.drawerClose]: !open,
                })}
                classes={{
                    paper: clsx({
                        [styles.drawerOpen]: open,
                        [styles.drawerClose]: !open,
                    }),
                }}
            >
                <div className={styles.toolbarButton}>
                    <IconButton onClick={handleDrawerClose} >{theme.direction === "rtl" ? <ChevronRightIcon /> : <ChevronLeftIcon />}</IconButton>
                </div>
                <Divider />
                {props.sidebar}
            </Drawer>
            <main className={styles.content}>
                <div className={styles.toolbar} />
                {props.children}
            </main>
        </div>
    );
};

export default LayoutBase;
