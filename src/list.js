import React, { useState, useEffect } from "react";
import axios from "axios";

function Fetchdata() {
  const [users, setusers] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        console.log(res);
        setusers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return (
    <>
      <div className="App">
        <h1 className="task"> User's Info</h1>
        <div className="home">
          {users.map((user) => (
            <div className="card-preview" key={user.id}>
              {" "}
              <h1 className="inf">{user.name}</h1>{" "}
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum
                ipsa id voluptates facilis animi eius est sapiente, similique
                iusto molestias quo qui ut ullam dolore.
              </p>
              <h2>General Info</h2>
              <pre>Company {user.company.name}</pre>
              <pre>CatchPhrase {user.company.catchPhrase}</pre>
              <pre>Bs {user.company.bs}</pre>
              <pre>Username {user.username}</pre>
              <pre>Phone {user.phone}</pre>
              <pre>Email {user.email}</pre>
              <pre>Website {user.website}</pre>
              <pre>
                Address {user.address.suite}, {user.address.street},{" "}
                {user.address.city}
              </pre>
              <pre>Zipcode {user.address.zipcode}</pre>
              <pre>
                Geo Lat : {user.address.geo.lat}, Lat: {user.address.geo.lng}
              </pre>
            </div>
          ))}
        </div>{" "}
      </div>{" "}
    </>
  );
}
export default Fetchdata;
//  // const Home = () => {
//   class Home extends React.Component {
//       // Constructor
//       constructor(props) {
//           super(props);
//           this.state = {
//               items: [],
//               DataisLoaded: false
//           };
//       }
//       // ComponentDidMount is used to
//       // execute the code
//       componentDidMount() {
//           fetch("https://jsonplaceholder.typicode.com/users")
//             .then((res) => res.json())
//             .then((json) => {
//                 this.setState({
//                     items: json,
//                     DataisLoaded: true
//                 });
//             })
//     }
//     render() {
//         const { DataisLoaded, items } = this.state;
//         if (!DataisLoaded) return <div>
//             <h1> Pleses wait some time.... </h1> </div> ;
//     return (
//         <>

//     <div className="App">
//         <h1 className="task"> User's Info</h1>
//         <div className="home">
//           {users.map((user)=>(
//             <div className="user-preview" key = {user.id}>
//                 <h1 className="inf">{user.name}</h1>
//                 <p>
//                 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum
//                 ipsa id voluptates facilis animi eius est sapiente, similique
//                 iusto molestias quo qui ut ullam dolore.
//                   </p>
//                 <h2>General Info</h2>
//                 <pre>Company              {user.company.name}</pre>
//                 <pre>CatchPhrase          {user.company.catchPhrase}</pre>
//                 <pre>Bs                           {user.company.bs}</pre>
//                 <pre>Username              {user.username}</pre>
//                 <pre>Phone                     {user.phone}</pre>
//                 <pre>Email                      {user.email}</pre>
//                 <pre>Website                  {user.website}</pre>
//                 <pre>Address                  {user.address.suite}, {user.address.street}, {user.address.city}</pre>
//                 <pre>Zipcode                  {user.address.zipcode}</pre>
//                 <pre>Geo                         Lat : {user.address.geo.lat}, Lat: {user.address.geo.lng}</pre>
//             </div>
//         ))}
//     </div>
//     </div>
//         </>
//     );}
// export default App;
