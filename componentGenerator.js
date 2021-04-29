const generateComponent = (masterLayout,components) => {
  const name = masterLayout.Label
  console.log(name)
  // let optList = masterLayout.componentList.filter(comp => (comp.type == 'RadioButton' || comp.type == 'DropDown'))
  // //console.log(optList)
  // let componentOptions = {}
  // optList.forEach(comp => {    
  //   componentOptions[comp.attributes.id + 'Options'] = comp.attributes.options.split(',')    
  // })
  // console.log(componentOptions)
   const jsxCode = `import { ${[...new Set(components.map((comp) => comp.compName))].join(', ')} } from '@material-ui/core'
     
const Employee = () => {
  return (
    <div>            
      ${components.map((comp) => `${comp.jsx}`).join('\n')}
    </div>
  )
}
export default Employee`     
    
  return jsxCode
}
    
    

    // fs.writeFile(path.join(__dirname, `${name}.js`), jsxCode, (err) => {
    //     // throws an error, you could also catch it here
    //     if (err) throw err;
    
    //     // the file was saved
    //     console.log('file contents written');
    //   })

module.exports = { generateComponent }