import { useSelector } from 'react-redux';
import Card from './Card'
import { RootState } from '../store';
import { memo, useMemo } from 'react';
import { motion } from 'framer-motion'

const Cards = () => {
  const { transactions } = useSelector((state: RootState) => state.transactions);

  const { totalIncome, totalExpense, availableAmount } = useMemo(() => {
    return transactions.reduce(
      (acc, transaction) => {
        if (transaction.type === "income") {
          acc.totalIncome += transaction.amount;
        } else if (transaction.type === "expense") {
          acc.totalExpense += transaction.amount;
        }
        acc.availableAmount = acc.totalIncome - acc.totalExpense;
        return acc;
      },
      { totalIncome: 0, totalExpense: 0, availableAmount: 0 }
    );
  }, [transactions]);

  return (
    <div className="mt-18 w-[90%] grid grid-cols-1 sm:grid-cols-2 sm:gap-3 md:grid-cols-3 md:gap-3 gap-2">
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -50 }}
        transition={{ duration: 1 }}
      >
        <Card title='Balance Actual' total={availableAmount} />
      </motion.div>
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 1 }}
      >
        <Card title='Ingresos' total={totalIncome} />
      </motion.div>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 50 }}
        transition={{ duration: 1 }}
      >
        <Card title='Gastos' total={totalExpense} />
      </motion.div>
    </div>
  )
}

export default memo(Cards)