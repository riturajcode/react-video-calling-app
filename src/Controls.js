import { useState } from "react";
import { useClient } from "./settings.js";
import { Grid, Button } from "material-design-lite";
import MicIcon from "@material-icons/svg/outline/mic";
import MicOffIcon from "@material-icons/svg/outline/mic_off";
import VideocamIcon from "@material-icons/svg/outline/videocam";
import VideoCamOffIcon from "@material-icons/svg/outline/videocam_off";
import ExittoAppIcon from "@material-icons/svg/outline/exit_to_app";


export default function Controls(props) {
    const client = useClient();
    const { tracks, setStart, setInCall } = props;
    const [trackState, setTrackState] = useState({video: true, audio: true});


    const mute = async (type) => {
        if (type === audio) {
            await track[0].setEnabled(!trackState.audio);
            setTrackState((prevState) => {
                return {...prevState, audio: !prevState.audio};
            });
        }
        else if (type === video) {
            await track[1].setEnabled(!trackState.video);
            setTrackState((prevState) => {
                return {...prevState, video: !prevState.video};
        });
        };
    }    
    const leaveChannel = async () => {
        await client.leave();
        client.removeAllListeners();
        track[0].close();
        track[1].close();
        setStart(false);
        setInCall(false); 
    };    

    return (
        <Grid container spacing={2} alignItems="center">
            <Grid item><Button 
                variant="contained" 
                color={trackState.audio ? "primary": "secondary"}
                onClick={() => mute("audio")}
            >
                {trackState.audio ? <MicIcon /> : <MicOffIcon />}
                </Button>
            </Grid>
            <Grid item><Button 
                variant="contained" 
                color={trackState.video ? "primary": "secondary"}
                onClick={() => mute("video")}
            >
                {trackState.video ? <VideocamIcon /> : <VideoCamOffIcon />}
                </Button>
                
            </Grid>
            <Grid item><Button 
                variant="contained" 
                color="default"
                onClick={() => leaveChannel()}
            >
                Leave
                <ExittoAppIcon />
                </Button></Grid>
        </Grid>
    )
}