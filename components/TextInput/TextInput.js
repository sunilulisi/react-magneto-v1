const getTextField = (attributes) => {
  return `<Grid className="wrapper" variant="outlined">       
        <TextField id="${attributes.id}" label="${attributes.label}" className="formlabel" required="${attributes.mandatory}" variant="outlined" />
    </Grid>`;
};

module.exports = { getTextField };
