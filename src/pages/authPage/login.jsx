import {useState} from "react"
import { TextField, Grid, Button  , InputAdornment,
  IconButton } from "@mui/material";
import { makeStyles } from "@mui/styles";
import logo from "assets/images/icon.png";
import { useNavigate } from "react-router-dom";
import { setToken,setRefreshToken } from "utils/getAndSetToken";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
const useStyles = makeStyles({
  root: {
    minHeight: "97vh",
    fontFamily: "Tahoma",
    fontSize: "12px",
    "& .muirtl-bu5grg-MuiGrid-root":{
      width:  "350px !important",
    },
    background:'rgb(235,237,239,0.8)',
    margin : "0px important",
    padding : "0px important",
  },
  formContainer: {
    backgroundColor: "white",
    padding: "105px 25px 42px 25px",    
    border: "2px solid rgb(235,237,239)",
    borderRadius: "0.55rem",
    backgroundImage: `url(${logo})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "top 22px  center",
    backgroundSize: "120px",
  },
  loginBtn: {
    display: "flex",
    alignItems: "flex-end",   
    width : '300px',
  },
  field: {
    paddingInlineStart: "0 !important ",       
    width : '300px', 
    "& input": {
      padding: "8px",
      backgroundColor : '#f7f7f9s !important',
    },
    "& .muirtl-y8fhu3-MuiInputBase-root-MuiOutlinedInput-root":{
      paddingLeft: '0 !important'
    }
  },
});
const LoginPage = () => {
  const classes = useStyles();
  let navigate = useNavigate();
  const login = () => {
    setToken("accessToken");  
    setRefreshToken("refreshToken");  
    navigate("/");  
  };
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      className={classes.root}
    >
      <Grid
        container
        item
        direction="column"
        justifyContent="space-around"
        alignItems="center"
        className={classes.formContainer}
        spacing={5}
      >
        <Grid item className={classes.field}>
          <TextField
            label="نام کاربری"
            variant="outlined"
            color="warning"
            focused
            fullWidth
            dir="ltr"
          />
        </Grid>
        <Grid item className={classes.field}>
          <TextField
            label="رمزعبور"
            variant="outlined"
            color="warning"
            focused
            type={showPassword ? "text" : "password"}
            fullWidth
            dir="ltr"
            InputProps={{ 
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword ? <Visibility fontSize="small" /> : <VisibilityOff fontSize="small" />}
                  </IconButton>
                </InputAdornment>
              )
            }}
          />
        </Grid>
        <Grid item className={classes.field}>
          <Button
            onClick={login}
            variant="contained"
            size="medium"
            className={classes.loginBtn}
            color="warning"
          >
            ورود
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default LoginPage;
