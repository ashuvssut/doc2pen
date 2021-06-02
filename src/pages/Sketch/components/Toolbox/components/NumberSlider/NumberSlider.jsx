import { IconButton, makeStyles } from "@material-ui/core";
import { Add, Remove } from "@material-ui/icons";
import React from "react";
import styles from "./number-slider.module.scss";

const useStyles = makeStyles(() => ({
	button: {
		background: "#e8e8e8",
		"&:hover": {
			background: "#e8e8e8",
		},
	},
}));
function NumberSlider({ min, max, step, value, onChangeFunc }) {
	const classes = useStyles();
	return (
		<div className={styles.root}>
			<label title={value >= max ? `max: ${max}` : null}>
				<IconButton
					size="small"
					color="primary"
					className={classes.button}
					disabled={value >= max}
					onClick={() =>
						onChangeFunc(current => {
							current = parseFloat(current);
							let newVal = current + step;
							return newVal > max ? current : newVal.toFixed(2);
						})
					}
				>
					<Add />
				</IconButton>
			</label>
			<input
				type="number"
				min={min}
				max={max}
				step={step}
				value={value}
				onChange={e =>
					parseFloat(e.target.value) <= max &&
					parseFloat(e.target.value) >= min &&
					e.target.value !== "" &&
					onChangeFunc(parseFloat(e.target.value).toFixed(2))
				}
				className={styles.inputBox}
			/>
			<label title={value <= min ? `min: ${min}` : null}>
				<IconButton
					size="small"
					color="primary"
					className={classes.button}
					disabled={value <= min}
					onClick={() =>
						onChangeFunc(current => {
							current = parseFloat(current);
							let newVal = current - step;
							return newVal < min ? current : newVal.toFixed(2);
						})
					}
				>
					<Remove />
				</IconButton>
			</label>
		</div>
	);
}

export default NumberSlider;
