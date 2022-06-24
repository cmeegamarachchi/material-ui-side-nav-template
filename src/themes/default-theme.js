import { createTheme } from "@mui/material";

export const theme = createTheme();

theme.palette.primary.main = "#448bff";
theme.palette.error.main = "#f54394";
theme.spacingFromHeader = theme.spacing(6);
theme.typography.fontFamily = "Ubuntu";

theme.typography.h5 = {
    fontSize: "12px",
    fontWeight: 400,
};

theme.typography.h4 = {
    fontSize: "14px",
    fontWeight: 500,
};

theme.typography.h3 = {
    fontSize: "16px",
    fontWeight: "600",
};

theme.palette.background.default = '#e3e3e3';