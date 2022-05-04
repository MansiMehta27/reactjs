import logo from './logo.svg';
import './App.css';

function App() {
 

  const data = [
    {
      name: "amit",
      age: 35,
      salary: 40000,
      bonus: 1000,
      status: true
    },
    {
      name: "ajay",
      age: 25,
      salary: 38000,
      bonus: 2000,
      status: false
    },
    {
      name: "mayur",
      age: 23,
      salary: 50000,
      bonus: 500,
      status: true
    },
    {
      name: "jay",
      age: 29,
      salary: 35000,
      bonus: 600,
      status: true
    },
    {
      name: "raj",
      age: 33,
      salary: 22000,
      bonus: 2000,
      status: true
    },
  ];

  // data.map((value, index) => console.log(value.age, value.name));
  
  let filterdata = data.filter((d, i) => (d.status === true));
  let xyz =filterdata.reduce((acc,d)=> acc+d.salary + d.bonus,0);  
  
//project//


return (
    <>
     { <table border="1">
        <tr>
          
          <td>name</td>
          <td>age</td>
          <td>salary</td>
          <td>bonus</td>
          <td>salary+bonus</td>
          <td>status</td>
          <td>total</td>
        </tr>
        {
          filterdata.map((value, index) => {
            return (
              <tr>
                <td>{value.name}</td>
                <td>{value.age}</td>
                <td>{value.salary}</td>
                <td>{value.bonus}</td>
                <td>{value.salary+value.bonus}</td>
                <td>{value.status.toString()}</td>
                
              
                 {index === 0 ? <td rowspan={data.length}>{xyz}</td> : null} 

            </tr>
            )
          })
        }
      </table> 
      
    }
    </>
  );
}

export default App;
