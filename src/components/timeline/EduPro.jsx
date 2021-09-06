import "./EduPro.scss";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import LaptopMacIcon from "@material-ui/icons/LaptopMac";
import HotelIcon from "@material-ui/icons/Hotel";
import RepeatIcon from "@material-ui/icons/Repeat";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import {
    CalendarToday,
    CalendarTodayRounded,
    LaptopMacRounded,
    School,
    SchoolRounded,
    SchoolTwoTone,
    Unarchive,
} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
    roots: {
        flex: "unset",
    },
    paper: {
        padding: "6px 16px",
    },
    subPaper: {
        display: "inline-flex",
    },
    secondaryTail: {
        backgroundColor: "red",
    },
    primaryTail: {
        background: "blue",
    },
    primaryDottedTail: {
        width: "0",
        backgroundColor: "inherit",
        borderLeft: "4px dotted blue",
    },
}));

export default function EduPro() {
    const classes = useStyles();
    return (
        <div className="eduPro" id="eduPro">
            <h1>{`Education & Employment`}</h1>
            <Timeline
                style={{ minWidth: "95vw" }}
                align="alternate"
                className="eduProTimeline"
            >
                <TimelineItem>
                    <TimelineOppositeContent>
                        <Typography variant="h6" color="primary">
                            2016
                        </Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot color="primary">
                            <SchoolRounded />
                        </TimelineDot>
                        <TimelineConnector className={classes.primaryTail} />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Paper elevation={3} className={classes.paper}>
                            <Typography variant="h5" component="h1">
                                Bachelor of Engineering - Computer Science
                            </Typography>
                            <Typography variant="h6" component="h1">
                                Sona College of Technology, Salem, Tamil Nadu
                            </Typography>
                            <Typography>90%</Typography>
                        </Paper>
                    </TimelineContent>
                </TimelineItem>
                {/* <TimelineItem>
                    <TimelineOppositeContent>
                        <Paper elevation={3} className={classes.paper}>
                            <Typography variant="h6" component="h1">
                                B.E CSE
                            </Typography>
                            <Typography variant="h6" component="h1">
                                Sona
                            </Typography>
                            <Typography>90%</Typography>
                        </Paper>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot color="primary">
                            <SchoolTwoTone />
                        </TimelineDot>
                        <TimelineConnector
                            className={classes.primaryDottedTail}
                        />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Typography variant="h6" color="primary">
                            2016
                        </Typography>
                    </TimelineContent>
                </TimelineItem> */}
                <TimelineItem>
                    <TimelineOppositeContent>
                        <Typography variant="h6" color="primary">
                            2016
                        </Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot color="primary">
                            <LaptopMacRounded />
                        </TimelineDot>
                        <TimelineConnector
                            className={classes.primaryDottedTail}
                        />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Paper elevation={3} className={classes.paper}>
                            <Typography variant="h5">
                                InfoView Technologies Pvt. Ltd.
                            </Typography>
                            <Typography variant="h6">
                                Chennai, Tamil Nadu
                            </Typography>
                        </Paper>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent>
                        <Paper
                            elevation={3}
                            className={[classes.paper, classes.subPaper]}
                        >
                            <Typography variant="h6">
                                Trainee Engineer
                            </Typography>
                        </Paper>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot color="primary" variant="outlined">
                            <LaptopMacRounded />
                        </TimelineDot>
                        <TimelineConnector
                            className={classes.primaryDottedTail}
                        />
                    </TimelineSeparator>
                    <TimelineContent></TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot color="primary" variant="outlined">
                            <LaptopMacRounded />
                        </TimelineDot>
                        <TimelineConnector className={classes.primaryTail} />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Paper
                            elevation={3}
                            className={[classes.paper, classes.subPaper]}
                        >
                            <Typography variant="h6">
                                Junior Engineer
                            </Typography>
                        </Paper>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent>
                        <Typography variant="h6" color="primary">
                            2019
                        </Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot color="primary">
                            <LaptopMacRounded />
                        </TimelineDot>
                        <TimelineConnector
                            className={classes.primaryDottedTail}
                        />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Paper elevation={3} className={classes.paper}>
                            <Typography variant="h5">
                                Virtusa Consulting Services Pvt. Ltd.
                            </Typography>
                            <Typography variant="h6">
                                Chennai, Tamil Nadu
                            </Typography>
                        </Paper>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent>
                        <Paper
                            elevation={3}
                            className={[classes.paper, classes.subPaper]}
                        >
                            <Typography variant="h6">
                                Consultant-Technology
                            </Typography>
                        </Paper>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot color="primary" variant="outlined">
                            <LaptopMacRounded />
                        </TimelineDot>
                        <TimelineConnector className={classes.primaryTail} />
                    </TimelineSeparator>
                    <TimelineContent></TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent>
                        <Typography variant="h6" color="primary">
                            Present
                        </Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot color="primary">
                            <CalendarTodayRounded />
                        </TimelineDot>
                    </TimelineSeparator>
                    <TimelineContent></TimelineContent>
                </TimelineItem>
            </Timeline>
        </div>
    );
}
