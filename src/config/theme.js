import {createMuiTheme} from '@material-ui/core/styles';

import green from '@material-ui/core/colors/green'

export const darkTheme = createMuiTheme({
    palette: {
        type: 'dark',
        primary: green
    }
});

export const darkTable = createMuiTheme({
    overrides: {

    }
});
