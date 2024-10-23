import { useState } from 'react';
import TransactionForm from '../components/TransactionForm';
import ExpenseChart from '../components/ExpenseChart';
import TotalBalance from '../components/Total';

const LandingPage = () => {
   const [showForm, setShowForm] = useState(false);
   const [transactionType, setTransactionType] = useState('');

   const handleButtonClick = (type) => {
      setTransactionType(type);
      setShowForm(true);
   };

   return (
      <div className="min-h-screen flex flex-col items-center justify-between bg-gray-100 p-4 sm:p-7 m-10">
         <h1 className="text-2xl sm:text-4xl font-bold font-sans mb-4 mt-7 bg-indigo-700 w-full text-center text-white py-6 ">Expense Manager</h1>
         <TotalBalance />
         <div className='flex flex-wrap justify-center gap-3 sm:gap-5 m-5'>
            <button onClick={() => handleButtonClick('Expenses')} className="bg-indigo-500 text-white px-3 py-2 sm:px-4 sm:py-2 rounded">Add Expense</button>
            <button onClick={() => handleButtonClick('Income')} className="bg-green-500 text-white px-3 py-2 sm:px-4 sm:py-2 rounded">Add Income</button>
            <button onClick={() => handleButtonClick('Investiment')} className="bg-yellow-500 text-white px-3 py-2 sm:px-4 sm:py-2 rounded">Add Investment</button>
            <button onClick={() => handleButtonClick('Savings')} className="bg-red-500 text-white px-3 py-2 sm:px-4 sm:py-2 rounded">Add Savings</button>
         </div>
         {showForm && <TransactionForm type={transactionType} />}
         <div className="w-full px-4 sm:px-0">
            <ExpenseChart />
         </div>
      </div>
   );
};

export default LandingPage;