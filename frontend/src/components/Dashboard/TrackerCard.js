import React from "react";
import {
    Avatar,
    Box,
    Grid,
    Paper,
    CardMedia,
    Typography,
    Card,
} from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import CompanyController from "../../controller/CompanyController";

const status2text = ["Under Review", "Interview Scheduled", "Rejected"];
function TrackerCard({ post }) {
    const [companyLogo, setCompanyLogo] = React.useState(null);

    React.useEffect(() => {
        if (!companyLogo) {
            CompanyController.getPfp(post.data.companyId).then((res) => {
                const base64String = btoa(
                    new Uint8Array(res.data.data).reduce(function (data, byte) {
                        return data + String.fromCharCode(byte);
                    }, "")
                );
                setCompanyLogo(base64String);
            });
        }
    }, []);
    return (
        <Card>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="stretch"
                spacing={2}
                padding={2}
            >
                <Grid item xs={5}>
                    <Avatar
                        media="picture"
                        variant="rounded"
                        alt={post.data.companyName}
                        src={`data:image/png;base64,${companyLogo}`}
                        sx={{
                            width: 90,
                            height: 90,
                            border: "1px solid #cacacc",
                            backgroundColor: "white",
                            color: "#91A4E8",
                            fontSize: 58,
                            alignSelf: "center",
                            padding: "10px",
                            cursor: "pointer",
                        }}
                    />
                </Grid>
                <Grid item xs={7}>
                    <Typography variant="subtitle1">
                        {post.data.role}
                        <CircleIcon
                            sx={{ fontSize: 10, margin: "0 5px 0 5px" }}
                        />
                        {post.data.companyName}
                    </Typography>
                    <Typography variant="body2">
                        {status2text[post.status]}
                    </Typography>
                </Grid>
            </Grid>
        </Card>
    );
}

export default TrackerCard;
