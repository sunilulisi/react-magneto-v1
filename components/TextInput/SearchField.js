const FormLabel = require("../FormLabel/FormLabel");
const getSearchField = (attributes) => {
  return `
  <Grid item lg={4}>
    <Grid item lg={12} alignItems="flex-start" className="wrapper">     
    ${FormLabel.getFormLebel(attributes)} 
    </Grid>
    <Grid item xs={4} alignItems="flex-start" className="wrapper">
    <OutlinedInput id="${attributes.id}" type="search"  placeholder="${
    attributes.placeHolder
  }"  variant="outlined"
    endAdornment={
      <InputAdornment position="end">
        <IconButton
          color="primary"
          aria-label="initiate search"
          type="submit"
        ><SearchIcon /></IconButton>
      </InputAdornment>
    }
  />
      </Grid>
      </Grid>`;
};

module.exports = { getSearchField };
