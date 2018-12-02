import React, {Component} from 'react'

import withStyles from '@material-ui/core/styles/withStyles';
import PropTypes from 'prop-types';
import Tooltip from "@material-ui/core/Tooltip/Tooltip";
import IconButton from "@material-ui/core/IconButton/IconButton";
import WebIcon from "@material-ui/icons/Web";
import Typography from "@material-ui/core/Typography/Typography";
import CodeIcon from '@material-ui/icons/Code';

import packageJson from '../../../package.json'

const styles = theme => ({
    links: {
        paddingTop: 10
    },
    ghPages: {
        paddingTop: 20
    }
});

class Footer extends Component {

    render() {
        return (
            <div>
                <div align="center" className={this.props.classes.links}>
                    <Tooltip title="Go to switcheo.exchange">
                        <IconButton onClick={() => {
                            window.open("https://switcheo.exchange/", "_blank")
                        }}>
                            <WebIcon/>
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Open github project">
                        <IconButton onClick={() => {
                            window.open("https://github.com/benammann/switcheo-exporter", "_blank")
                        }}>
                            <CodeIcon/>
                        </IconButton>
                    </Tooltip>
                </div>
                <div align="center" className={this.props.classes.ghPages}>
                    <Typography>Hosted at</Typography>
                    <a href={"https://pages.github.com/"} target={"_blank"}>
                        <img src={"./gh_pages.svg"} alt="github pages" style={{
                            width: '30%',
                            height: 'auto'
                        }}/></a>
                </div>
                <div align="center" className={this.props.classes.ghPages}>
                    <Typography style={{position: 'absolute', top: 5, right: 5, color: 'gray'}}>{packageJson.name} v{packageJson.version}</Typography>
                </div>
            </div>
        )
    }
}

Footer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);
