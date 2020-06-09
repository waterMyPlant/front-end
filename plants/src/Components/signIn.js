import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import { loginUser } from '../actions';
import { connect } from 'react-redux';

const useStyles = makeStyles((theme) => ({
	paper  : {
		marginTop     : theme.spacing(8),
		display       : 'flex',
		flexDirection : 'column',
		alignItems    : 'center',
	},
	avatar : {
		margin          : theme.spacing(1),
		backgroundColor : theme.palette.secondary.main,
	},
	form   : {
		width     : '100%', // Fix IE 11 issue.
		marginTop : theme.spacing(1),
	},
	submit : {
		margin : theme.spacing(3, 0, 2),
	},
}));

function SignIn(props) {
	const classes = useStyles();

	const [ user, setUser ] = useState({
		username : '',
		password : '',
	});

	const handleChange = (event) => {
		setUser({ ...user, [event.target.name]: event.target.value });
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		props.loginUser(user);
		setUser({
			username : '',
			password : '',
		});
		props.history.push('/facts');
	};

	return (
		<div className='signCont'>
			<Container className='sign' component='main' maxWidth='xs'>
				<h1>WATER MY PLANTS</h1>
				<CssBaseline />
				<div className={classes.paper}>
					<Typography component='h1' variant='h5'>
						Sign In
					</Typography>
					<form className={classes.form} noValidate>
						<TextField
							variant='outlined'
							margin='normal'
							required
							fullWidth
							id='username'
							label='Username'
							name='username'
							autoComplete='username'
							autoFocus
							onChange={handleChange}
							value={user.username}
						/>
						<TextField
							variant='outlined'
							margin='normal'
							required
							fullWidth
							name='password'
							label='Password'
							type='password'
							id='password'
							autoComplete='current-password'
							onChange={handleChange}
							value={user.password}
						/>
						<FormControlLabel control={<Checkbox value='remember' color='primary' />} label='Remember me' />
						<Button
							type='submit'
							fullWidth
							variant='contained'
							color='primary'
							className={classes.submit}
							onClick={handleSubmit}>
							Sign In
						</Button>
						<Grid container>
							<Grid item xs>
								<Link href='#' variant='body2'>
									Forgot password?
								</Link>
							</Grid>
							<Grid item>
								<Link href='/' variant='body2'>
									{"Don't have an account? Sign Up"}
								</Link>
							</Grid>
						</Grid>
					</form>
				</div>
			</Container>
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		login : state,
	};
};

export default connect(mapStateToProps, { loginUser })(SignIn);
