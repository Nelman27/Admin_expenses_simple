import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addExpense } from '../redux/expensesSlice';
import PropTypes from 'prop-types';

const TransactionForm = ({ type }) => {
   const [amount, setAmount] = useState('');
   const dispatch = useDispatch();

   const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(addExpense({ amount, type, date: new Date().toISOString() }));
      setAmount('');
   };

   const handleCancel = () => {
      setAmount('');
   }

   return (
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4 p-4 max-w-md mx-auto">
         <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Amount"
            className="border p-2 rounded w-full"
         />
         <div className='flex flex-col sm:flex-row justify-between gap-5 '>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded w-full sm:w-auto font-sans w-">Add {type}</button>
            <button type='button' onClick={handleCancel} className='bg-gray-500 text-white px-4 py-2 rounded w-full sm:w-auto font-sans'>Cancel</button>
         </div>               
      </form>
   );
};

TransactionForm.propTypes = {
   type: PropTypes.string.isRequired,
};

export default TransactionForm;
