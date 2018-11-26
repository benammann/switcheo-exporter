import {createMuiTheme} from '@material-ui/core/styles';

import green from '@material-ui/core/colors/green'

export const darkTheme = createMuiTheme({
    palette: {
        type: 'dark',
        primary: green
    },
    typography: {
        useNextVariants: true,
    },
});

export const darkTable = createMuiTheme({
    typography: {
        useNextVariants: true,
    },
});
