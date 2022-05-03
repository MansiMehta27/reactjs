import logo from './logo.svg';
import './App.css';

function App() {
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
  // {
  //                  let arr = [10,"mansi",20,30,40,50];
  //                 let res=arr.some((a)=>a>10);
  //              console.log(res);
  // }

  //map //

  // let arr = [3, 4, 5, 6];

  // for (let i = 0; i < arr.length; i++){
  //   arr[i] = arr[i] * 3;
  // }

  // console.log(arr); // [9, 12, 15, 18]

  // map function//

  // let array = [
  //   { id: 101, name: "Abacavir",quantity: 25,price: 150,expiry: 2022,status: true},
  //   { id: 102, name: "Eltrombopag",quantity: 90,price: 550,expiry: 2021,status: true},
  //   { id: 103,  name: "Meloxicam",quantity: 85,price: 450,expiry: 2020,status: false},
  //    { id: 104, name: "Allopurinol",quantity: 50,price: 650,expiry: 2024,status: true},
  //    { id: 105, name: "EPhenytoin",quantity: 65,price: 750,expiry: 2025,status: false},

  // ];

  //     let map = array.map(x=>console.log(x.id,x.name,x.quantity,x.price,x.expiry,x.status));



  //filter//

  //   function xdate(expiry) {
  //     return expiry > 2022;
  // }

  // function func() {
  //     let filtered = [2021,2022,2023,2024,2025].filter(xdate);
  //    console.log(filtered);
  // }
  // func();




  // employe data//

  //   let  array1 = [150,300,450,500,600];


  //   let salery = 0;
  //   let sum = array1.reduce(
  //   (prev, curr) => prev + curr,
  //   salery
  // );

  //  console.log(sum);





  //map function//

  const data = [
    {
      id: 101,
      name: 'Abacavir',
      quantity: 25,
      price: 150,
      expiry: 2022,
      status: true
    },
    {
      id: 102,
      name: 'Eltrombopag',
      quantity: 90,
      price: 550,
      expiry: 2021,
      status: true
    },
    {
      id: 103,
      name: 'Meloxicam',
      quantity: 85,
      price: 450,
      expiry: 2025,
      status: false
    },
    {
      id: 104,
      name: 'Allopurinol',
      quantity: 50,
      price: 600,
      expiry: 2023,
      status: true
    },
    {
      id: 105,
      name: 'Phenytoin',
      quantity: 63,
      price: 250,
      expiry: 2021,
      status: false
    }
  ];

   let obj = {
     id:106,
     name:"rajvi",
     price:340
   };

   let {id,name,price}=obj;
   console.log(id,name,price);
   


  // data.map((value, index) => console.log(value.id, value.name));


  // let filterdata = data.filter((d, i) => d.expiry >= 2022);

  // console.log(ans);

  //reduce function//

  // let ans =filterdata.reduce((acc,d,i)=>acc+d.price,0);
  // console.log(ans);


  //filter&reduces//
  // let abc = data
  //   .filter((d, i) => d.expiry >= 2022)
  //   .reduce((acc, d, i) => acc + d.price, 0);

  // console.log(abc);


    //  All about use of array//

  //copy constructure/

  // let arr =[10,20,30,40,50];
  // //copy//
  // let arr1=[...arr];
  // console.log(arr1);

  // //merge constructure//

  // let arr2 =[99,...arr,100];
  // //merge//
  // console.log(arr2);

  // //destructuring//
  // let [maths,eng,guj,ss,sci]=arr;
  // console.log(ss);


  //All about use of objesct//

  // let obj ={
  //   id:10,
  //   name:"binu"

  // };
  //  //copy//
  //  let obj1 ={
  //    ...obj,
  // }
  // console.log(obj1);

  // //destructuring//

  // let {id,name}=obj;
  // console.log(id,name);

  //end//



  return (
    <>
      {/* <table border="1">
        <tr>
          <td>id</td>

          <td>name</td>
          <td>price</td>
          <td>quantity</td>
          <td>Total</td>

        </tr>


        {
          data.map((value, index) => {
            return (
              <tr>
                <td>{value.id}</td>
                <td>{value.name}</td>
                <td>{value.price}</td>
                <td>{value.quantity}</td>
                {index === 0 ? <td rowspan={data.length}>{abc}</td> : null}
                          
                          
          </tr>
            )
          })
        }
      </table> */
      
      }
  </>
  );
}

export default App;
