// // import React, { useEffect, useState } from "react";

// // export const Test = () => {
// //   const [lat, setLat] = useState();
// //   const [long, setLong] = useState();

// //   useEffect(() => {

// //     navigator.geolocation.getCurrentPosition(function (position) {
// //       setLat(position.coords.latitude);
// //       setLong(position.coords.longitude);
// //     });
// //   });

// //   console.log(lat)
// //   console.log(long)

// //   return (
// //     <>
// //       <div>
// //       </div>
// //     </>
// //   );
// // };

// const os = require("os");

// function getLocalIPv4() {
//   const interfaces = os.networkInterfaces();
//   for (const interfaceName of Object.keys(interfaces)) {
//     for (const iface of interfaces[interfaceName]) {
//       // Skip over internal and non-IPv4 addresses
//       if (iface.internal || iface.family !== "IPv4") {
//         continue;
//       }
//       return iface.address;
//     }
//   }
//   return null; // Return null if no IPv4 address found
// }

// const localIPv4 = getLocalIPv4();
// localStorage.setItem("Network", localIPv4);
