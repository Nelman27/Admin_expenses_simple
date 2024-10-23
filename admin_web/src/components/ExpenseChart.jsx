import { useSelector } from 'react-redux';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';
import 'tailwindcss/tailwind.css';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const ExpenseChart = () => {
   const expenses = useSelector((state) => state.expenses);

   const data = expenses.reduce((acc, expense) => {
      const existing = acc.find((item) => item.name === expense.type);
      if (existing) {
        existing.value += parseFloat(expense.amount);
      } else {
        acc.push({ name: expense.type, value: parseFloat(expense.amount) });
      }
      return acc;
   }, []);

   return (
      <div className="w-full max-w-md mx-auto">
         <PieChart width={400} height={400} className="w-full h-auto">
            <Pie
               data={data}
               cx="50%"
               cy="50%"
               labelLine={false}
               outerRadius="80%"
               fill="#8884d8"
               dataKey="value"
            >
               {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
               ))}
            </Pie>
            <Tooltip />
         </PieChart>
      </div>
   );
};

export default ExpenseChart;