// import { useEffect } from "react";
// import axios from "axios";
// import { useState } from "react";

// const BookedTickets = async ({ tokenMaster, provider }) => {
//     const signer = await provider.getSigner()
//     const [tickets, setTickets] = useState([]);

//     useEffect(() => {
//         const fetchTickets = async () => {
//             try {
//                 const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/ticket/${signer.getAddress()}`);
//                 setTickets(response.data);
//             } catch (error) {
//                 console.error("Error fetching booked tickets:", error);
//             }
//         };

//         fetchTickets();
//     }, []);

//     const occasions = tickets.map(async (ticket) => {
//         const occasion = await tokenMaster.connect(signer).getOccasion(ticket.occasionId)
//         return occasion;
//     })
//     console.log(occasions)

//     return (
//         <div>
//             <h1>Booked Tickets</h1>
//             <ul>
//                 {/* {occasions.map((occasion) => (
//                     <li key={ticket.id}>{ticket.name}</li>
//                 ))} */}
//                 {occasions}
//             </ul>
//         </div>
//     );
// };

// export default BookedTickets;