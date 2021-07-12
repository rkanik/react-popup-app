import "./App.css";
import "date-fns";
import React from "react";
import moment from "moment";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import DateFnsUtils from "@date-io/date-fns";
import {
	MuiPickersUtilsProvider,
	KeyboardDatePicker,
} from "@material-ui/pickers";


const useStyles = makeStyles((theme) => ({
	modal: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
	paper: {
		width: 800,
		backgroundColor: theme.palette.background.paper,
		border: "2px solid #000",
		boxShadow: theme.shadows[5],
		padding: theme.spacing(2, 4, 3),
	},
}));

const App = () => {
	const classes = useStyles();
	const [beginn, setBeginn] = React.useState({
		date: new Date(),
		time: "",
	});
	const [ende, setEnde] = React.useState({
		date: null,
		time: "",
	});
	const [open, setOpen] = React.useState(false);

	const handleOpen = () => {
		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
	};

	const onClickHinzufugen = () => {
		console.log(
			moment(beginn.date + " " + beginn.time).format("YYYY/MM/DD hh:mm")
		);
		console.log(moment(ende.date + " " + ende.time).format("YYYY/MM/DD hh:mm"));
		 handleClose() ;
	};

	return (
		<div className="App">
			<header className="App-header">
				<div>
					<button
						variant="contained"
						className="absolute center"
						component="span"
						type="button"
						onClick={handleOpen}
					>
						<span style={{ fontSize: "2rem" }}>+</span>
					</button>

					<Modal
						aria-labelledby="transition-modal-title"
						aria-describedby="transition-modal-description"
						className={classes.modal}
						open={open}
						onClose={handleClose}
						closeAfterTransition
						BackdropComponent={Backdrop}
						BackdropProps={{
							timeout: 500,
						}}
					>
						<Fade in={open}>
							<div className={classes.paper}>
								<div className="d-flex-between">
									<Button
										onClick={handleClose}
										variant="contained"
										color="secondary"
									>
										Abbrechen
									</Button>
									<span>Ereignis</span>
									<Button
										onClick={onClickHinzufugen}
										variant="contained"
										color="primary"
									>
										Hinzufugen
									</Button>
								</div>
								<hr
									style={{
										borderTop: "2px solid black",
										margin: "1rem -2rem",
									}}
								/>
								<MuiPickersUtilsProvider utils={DateFnsUtils}>
									<form className={classes.root} noValidate autoComplete="off">
										<Grid container spacing={3}>
											<Grid item xs={12}>
												<span>Titel:</span> <br />
												<TextField
													size="small"
													style={{ width: "100%", marginTop: "0.5rem" }}
													variant="outlined"
													label="Search"
												/>
											</Grid>
											<Grid style={{ margin: "auto" }} item xs={4}>
												<span>Beginn</span>
											</Grid>
											<Grid item xs={4}>
												<KeyboardDatePicker
													autoOk
													variant="inline"
													size="small"
													inputVariant="outlined"
													label="Datum"
													value={beginn.date}
													format="yyyy/dd/MM"
													onChange={(e) =>
														setBeginn((state) => ({
															...state,
															date: e,
														}))
													}
													InputAdornmentProps={{ position: "start" }}
												/>
											</Grid>
											<Grid item xs={4}>
												<TextField
													type="time"
													label="Time"
													size="small"
													variant="outlined"
													value={beginn.time}
													onChange={(e) =>
														setBeginn((state) => ({
															...state,
															time: e.target.value,
														}))
													}
													style={{ width: "100%" }}
													className={classes.textField}
													InputLabelProps={{ shrink: true }}
													inputProps={{ step: 300 }}
												/>
											</Grid>

											<Grid style={{ margin: "auto" }} item xs={4}>
												<span>Ende</span>
											</Grid>
											<Grid item xs={4}>
												<KeyboardDatePicker
													autoOk
													variant="inline"
													minDate={beginn.date}
													size="small"
													inputVariant="outlined"
													label="Uhrzeit"
													format="yyyy/dd/MM"
													value={ende.date}
													onChange={(e) =>
														setEnde((state) => ({
															...state,
															date: e,
														}))
													}
													InputAdornmentProps={{ position: "start" }}
												/>
											</Grid>
											<Grid item xs={4}>
												<TextField
													variant="outlined"
													label="Time"
													placeholder="Time"
													size="small"
													type="time"
													value={ende.time}
													onChange={(e) =>
														setEnde((state) => ({
															...state,
															time: e.target.value,
														}))
													}
													style={{ width: "100%" }}
													className={classes.textField}
													InputLabelProps={{
														shrink: true,
													}}
													inputProps={{
														step: 300, // 5 min
													}}
												/>
											</Grid>
										</Grid>
									</form>
								</MuiPickersUtilsProvider>
							</div>
						</Fade>
					</Modal>
				</div>
			</header>
		</div>
	);
};

export default App;
