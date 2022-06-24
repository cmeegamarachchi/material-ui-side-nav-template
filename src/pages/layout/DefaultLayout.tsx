import React from "react";
import DefaultSideBar from "./DefaultSideBar";
import LayoutBase from "./LayoutBase";

interface Props {
    children: React.ReactNode;
}

const DefaultLayout: React.FC<Props> = (props) => {
    return <LayoutBase sidebar={<DefaultSideBar/>}>{props.children}</LayoutBase>
};

export default DefaultLayout;
