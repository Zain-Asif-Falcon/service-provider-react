import React from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Button from "@mui/material/Button";

const BillingForm = (props) => {
  return (
    <div>
      <h2>Billing address</h2>
      <form style={{ width: "100%" }} onSubmit={props.handleSubmit}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6} sx={{ mt: 2 }}>
            <p>First name</p>
            <TextField
              type="text"
              name="firstname"
              value={props.values.firstname}
              onChange={(e) =>
                props.handleChange(e.target.name, e.target.value)
              }
              required
              variant="outlined"
              sx={{ width: "100%", mt: 1 }}
            />
          </Grid>
          <Grid item xs={6} sx={{ mt: 2 }}>
            <p>Last name</p>
            <TextField
              type="text"
              name="lastname"
              value={props.values.lastname}
              onChange={(e) =>
                props.handleChange(e.target.name, e.target.value)
              }
              required
              variant="outlined"
              sx={{ width: "100%", mt: 1 }}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <p>Email</p>
            <TextField
              type="email"
              name="email"
              value={props.values.email}
              onChange={(e) =>
                props.handleChange(e.target.name, e.target.value)
              }
              required
              variant="outlined"
              sx={{ width: "100%", mt: 1 }}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <p>Address</p>
            <TextField
              type="text"
              name="address"
              value={props.values.address}
              onChange={(e) =>
                props.handleChange(e.target.name, e.target.value)
              }
              required
              variant="outlined"
              sx={{ width: "100%", mt: 1 }}
            />
          </Grid>
          <Grid item xs={4} sx={{ mt: 2 }}>
            <p>Country</p>
            <TextField
              type="text"
              name="country"
              value={props.values.country}
              onChange={(e) =>
                props.handleChange(e.target.name, e.target.value)
              }
              required
              variant="outlined"
              sx={{ width: "100%", mt: 1 }}
            />
          </Grid>
          <Grid item xs={4} sx={{ mt: 2 }}>
            <p>State</p>
            <TextField
              type="text"
              name="state"
              value={props.values.state}
              onChange={(e) =>
                props.handleChange(e.target.name, e.target.value)
              }
              required
              variant="outlined"
              sx={{ width: "100%", mt: 1 }}
            />
          </Grid>
          <Grid item xs={4} sx={{ mt: 2 }}>
            <p>Zip</p>
            <TextField
              type="number"
              name="zip"
              value={props.values.zip}
              onChange={(e) =>
                props.handleChange(e.target.name, e.target.value)
              }
              required
              variant="outlined"
              sx={{ width: "100%", mt: 1 }}
            />
          </Grid>
        </Grid>
        <FormControl sx={{ mt: 2 }}>
          <FormLabel id="demo-controlled-radio-buttons-group">
            Payment
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value="Paypal"
          >
            <FormControlLabel
              value="Paypal"
              control={<Radio />}
              label="Paypal"
            />
          </RadioGroup>
        </FormControl>
        <Button variant="contained" type="submit" sx={{ mt: 4, width: "100%" }}>
          Continue to checkout
        </Button>
      </form>
    </div>
  );
};

export default BillingForm;
