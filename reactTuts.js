const [details, setDetails] = useState({ firstname: "", lastname: "" });
const onChange = (event) => {
    setDetails((prev) => {
      let data = { ...prev };
      data[`${event.target.name}`] = event.target.value;
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
