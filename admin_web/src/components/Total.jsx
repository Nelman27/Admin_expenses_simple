import { useSelector } from 'react-redux';

const TotalBalance = () => {
   const expenses = useSelector((state) => state.expenses);

   const totalWithInvestment = expenses.reduce((acc, expense) => {
      if (expense.type === 'Income' || expense.type === 'Savings') {
         return acc + parseFloat(expense.amount);
      } else {
         return acc - parseFloat(expense.amount);
      }
   }, 0);

   const totalWithoutInvestment = expenses.reduce((acc, expense) => {
      if (expense.type === 'Income' || expense.type === 'Savings') {
         return acc + parseFloat(expense.amount);
      } else if (expense.type !== 'Investiment') {
         return acc - parseFloat(expense.amount);
      }
      return acc;
   }, 0);

   return (
      <div className="p-4 bg-white shadow rounded w-full max-w-md mx-auto sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3">
         <h2 className="text-2xl font-bold mb-2 text-center bg-blue-700 text-white font-sans">Total balance</h2>
         <p className='font-sans font-semibold text-black text-center text-xl'>Total with Investment: ${totalWithInvestment.toFixed(2)}</p>
         <p className='font-sans font-semibold text-black text-center text-xl'>Total without Investment: ${totalWithoutInvestment.toFixed(2)}</p>
      </div>
   );
};

export default TotalBalance;