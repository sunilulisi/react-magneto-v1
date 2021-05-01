const getDropDown = (attributes) => {
  return `<Paper variant="outlined" className="wrapper">
            <Grid item xs>
                <InputLabel htmlFor="select" className="formlabel" >${attributes.label}</InputLabel>
                    <NativeSelect id="select">
                    {componentOptions.${attributes.id}Options.map((item, i) => (
                        <option value={i}>{item}</option> ))}
                    </NativeSelect>
            </Grid>
        </Paper>
        `;
};

module.exports = { getDropDown };
