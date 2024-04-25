import { useState, useEffect} from 'react';
import './content.css';
import axios from 'axios';



const TotalAmount = ({ expenses }) => {
  const totalAmount = expenses.reduce((acc, expense) => acc + expense.amount, 0);

  return (
    <div className="total">
      <h2>Expense Logging</h2>
      <h3>Total Expenses: Rs. {totalAmount}</h3>
    </div>
  );
};

export default TotalAmount;


// const TotalAmount = ({ userId }) => {
//   const [totalAmount, setTotalAmount] = useState(0);

//   useEffect(() => {
//     const fetchTotalAmount = async () => {
//       try {
//         const response = await axios.get(`http://localhost:8012/expenses/user/total/${userId}`);
//         setTotalAmount(response.data); // Assuming response.data is the total amount
//       } catch (error) {
//         console.error('Error fetching total amount:', error);
//       }
//     };

//     fetchTotalAmount();
//   }, [userId]);

//   return (
//     <div className="total">
//       <h2>Expense Logging</h2>
//       <h3>Total Expenses: Rs. {totalAmount}</h3>
//     </div>
//   );
// };

// export default TotalAmount;





