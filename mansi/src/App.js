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

      // let arr=[10,20,30,40,50];
      // arr.map((a,i)=>console.log(a));

      // let intro=()=>{
      //   console.log("mehta mansi");
      // }
      // intro();  

      // {
      //     let arr = [10,"mansi",20,30,40,50];
      //     console.log(arr[3]);
      // }
      // {
      //     let obj={
      //       id:10,
      //       age:20,
      //       per:30
      //     }
      //     console.log(obj.id);
      // }


      // push//
  //  {

  //     let arr = [10,"mansi",20,30,40,50];
  //     arr.push(99);
  //     console.log(arr);
  //   }

      //unshift//
      // {
      //   let arr = [10,"mansi",20,30,40,50];
      //   arr.unshift(99);
      //   console.log(arr);
      // }

      //pop//
      // {
      //   let arr = [10,"mansi",20,30,40,50];
      //   arr.pop();
      //   console.log(arr);
      // }

      //shift//
      // {
      //   let arr = [10,"mansi",20,30,40,50];
      //   arr.shift();
      //   console.log(arr);
      // }
      //spilice//
      // {
      //   let arr = [10,"mansi",20,30,40,50];
      //   arr.splice(2,1);
      //   console.log(arr);
      // }
           //tostring//
    //  {
    //   let arr = [10,"mansi",20,30,40,50];
   
    //   console.log(arr.toString());
    // }
          //some//
    // {
    //   let arr = [10,"mansi",20,30,40,50];
    //    let res=arr.some((a)=>a>100);
    //    console.log(res);
    // }
        //find//
{
                 let arr = [10,"mansi",20,30,40,50];
                let res=arr.some((a)=>a>10);
             console.log(res);
}
   

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
