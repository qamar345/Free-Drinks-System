// import React, { useEffect } from "react";
// const os = require("os");

// export const GetIP = () => {
//   const getLocalIPv4 = () => {
//     const networkInterfaces = os.networkInterfaces();

//     Object.keys(networkInterfaces).forEach((interfaceName) => {
//       const interfaceInfo = networkInterfaces[interfaceName];
//       interfaceInfo.forEach((info) => {
//         if (!info.internal && info.family === "IPv4") {
//           localStorage.setItem("Network", info.address);
//         }
//       });
//     });
//   };

//   useEffect(() => {
//     getLocalIPv4();
//   })
// };
