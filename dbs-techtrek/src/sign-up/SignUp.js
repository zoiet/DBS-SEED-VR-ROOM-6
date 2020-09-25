import React, { useState } from "react";
import "./styles.css";

import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

import ImageUploader from "react-images-upload";
import Datetime from "react-datetime";
import DateTimePicker from "react-datetime-picker";
import Select from "react-dropdown-select";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function SignUp() {
  const classes = useStyles();
  const [custInfo, setCustInfo] = useState({
    customerName: null,
    customerAge: null,
    serviceOfficerName: null,
    NRIC: null,
    branchCode: null,
  });

  const langugage = useState(false);
  const [nameSnack, setNameSnack] = useState(false);
  const [ageSnack, setAgeSnack] = useState(false);
  const [NRICSnack, setNRICSnack] = useState(false);
  const [branchCodeSnack, setBranchCodeSnack] = useState("none");
  const regisTime = new Date();
  const [value, onChange] = useState(new Date());
  const [productType, setProductType] = useState("none");
  const productTypeList = [
    { value: "137", label: "Investor" },
    { value: "070", label: "Insurance" },
    { value: "291", label: "Loans" },
    { value: "969", label: "Savings" },
    { value: "555", label: "Credit Cards" }
  ];

  const handleProductType = (e) => {
    setProductType(e.value);
  };

  const handleBranchCode = (e) => {
    setBranchCode(e.value);
  };

  const handleInputChange = (event) => {
    // console.log(custInfo);
    // console.log(event.target);
    // setCustInfo({
    //   ...custInfo,
    //   [event.target.name] : event.target.value
    // });
    if (
      event.target.name == "customerName" ||
      event.target.name == "serviceOfficerName"
    ) {
      if (event.target.value.length > 64) {
        setNameSnack(true);
        setCustInfo({
          ...custInfo,
          [event.target.name]: event.target.value.substring(0, 65)
        });
      } else {
        setCustInfo({
          ...custInfo,
          [event.target.name]: event.target.value
        });
      }
    } else if (event.target.name == "customerAge") {
      if (isNaN(parseInt(event.target.value, 10))) {
      } else {
        setCustInfo({
          ...custInfo,
          [event.target.name]: event.target.value
        });
        if (parseInt(event.target.value, 10) < 18) {
          setAgeSnack(true);
          setCustInfo({
            ...custInfo,
            [event.target.name]: null
          });
        } else {
          setCustInfo({
            ...custInfo,
            [event.target.name]: event.target.value
          });
        }
      }
    } else {
      var numeric_count = 0;
      for (var i = 0; i < event.target.value.length; i++) {
        if (!isNaN(parseInt(event.target.value.substring(i, i + 1)))) {
          numeric_count = numeric_count + 1;
        }
      }
      if (numeric_count != 7) {
        setNRICSnack(true);
      } else {
        setCustInfo({
          ...custInfo,
          [event.target.name]: event.target.value.toUpperCase()
        });
      }
    }
    // console.log(custInfo);
  };
  const handleSubmit = () => {
    //  call validate API
    console.log(custInfo);
    if (
      custInfo.customerName == null ||
      custInfo.customerAge == null ||
      custInfo.serviceOfficerName == null ||
      custInfo.NRIC == null
    ) {
      //  alert form not complete
    } else {
      //  submit
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="customerName"
                label="Customer Name"
                name="customerName"
                value={custInfo.customerName}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="customerAge"
                label="Customer Age"
                name="customerAge"
                type="number"
                value={custInfo.customerAge}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="serviceOfficerName"
                label="Service Officer Name"
                name="serviceOfficerName"
                value={custInfo.serviceOfficerName}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="NRIC"
                label="NRIC"
                name="NRIC"
                value={custInfo.NRIC}
                onChange={handleInputChange}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="registrationTime"
                label="Registration Time"
                type="datetime-local"
                id="registrationTime"
                defaultValue={regisTime}
              />
            </Grid>

            <Grid item xs={12}>
              <DateTimePicker
                variant="outlined"
                required
                fullWidth
                onChange={onChange}
                value={value}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="branchCode"
                label="Branch Code"
                type="number"
                InputProps={{
                  inputProps: { max: 999, min: 100 }
                }}
                id="branchCode"
                onChange={handleBranchCode}
              />
            </Grid>

            <Grid item xs={12}>
              <ImageUploader
                withIcon={true}
                buttonText="Choose images"
                onChange={this.onDrop}
                imgExtension={[".jpg", ".gif", ".png", ".gif"]}
                maxFileSize={2097152}
              />
            </Grid>

            <Grid item xs={12}>
              <Select
                required
                placeholder="Select Product Type"
                options={productTypeList}
                onChange={handleProductType}
                value={productTypeList.filter(function (productTypeList) {
                  return productTypeList.value === productType;
                })}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                required
                placeholder="Select Interface Languge"
                variant="outlined"
                fullWidth
                id="langugage"
                label="langugage"
                name="langugage"
              />
            </Grid>

            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>

          <Button
            type="save"
            fullWidth
            variant="contained"
            color="grey"
            className={classes.Save}
          >
            Save as draft
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
            <Snackbar
              open={nameSnack}
              autoHideDuration={2000}
              onClose={() => {
                setNameSnack(false);
              }}
            >
              <Alert
                onClose={() => {
                  setNameSnack(false);
                }}
                severity="error"
              >
                Name should be less than 65 characters.
              </Alert>
            </Snackbar>
            <Snackbar
              open={ageSnack}
              autoHideDuration={2000}
              onClose={() => {
                setAgeSnack(false);
              }}
            >
              <Alert
                onClose={() => {
                  setAgeSnack(false);
                }}
                severity="error"
              >
                Customer should be above 18.
              </Alert>
            </Snackbar>
            <Snackbar
              open={NRICSnack}
              autoHideDuration={2000}
              onClose={() => {
                setNRICSnack(false);
              }}
            >
              <Alert
                onClose={() => {
                  setNRICSnack(false);
                }}
                severity="error"
              >
                Invalid NRIC.
              </Alert>
            </Snackbar>
          </Grid>
        </form>
      </div>
      {/* <Box mt={5}><Copyright /></Box> */}
    </Container>
  );
}
