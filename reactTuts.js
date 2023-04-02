const [details, setDetails] = useState({ firstname: "", lastname: "" });


const onChange = (event) => {
    setDetails((prev) => {
      let data = { ...prev };
      data[`${event.target.name}`] = event.target.value;
      return data;
    });
  };


        ----OR----

const onChange = (event) => {
    const {name,value} = event.target
    setDetails((prev) => {
      let data = { ...prev };
      data[name] = value;
      return data;
    });
  };



  console.log(details);
  
 const onChange = (event) => {
    setDetails((prev) => {
      let data = { ...prev };
      data[`${event.target.name}`] = event.target.value;
      return data;
    });
  };
  console.log(details);
  
  -------------------------------------
