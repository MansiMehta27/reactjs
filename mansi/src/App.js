import logo from './logo.svg';
import './App.css';

function App()
{
    //  let a=5;
    //  a=a+2;
    //  console.log(a);

  // {
  //     let b=20;
  //     console.log(b);

  // }
  // {
  //   const a=55;
  //   console.log(a);
  // }
  // {
  //   const a;     //error
  //   a=34;
  //   console.log(a);   
  // }
    // let c;
    // c=23;
    // console.log(c);

      let arr=[10,20,30,40,50];
      arr.map((a,i)=>console.log(a));

      let intro=()=>{
        console.log("mehta mansi");
      }
      intro();
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React js
        </a>
      </header>
    </div>
  );
}

export default App;
