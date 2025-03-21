import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import clientAxios from "../utils/axios";
import { Transaction } from "../types/Transaction";

interface TransactionsState {
    transactions: Transaction[];
    loading: boolean;
    error: string | null | undefined;
}

const initialState: TransactionsState = {
    transactions: [],
    loading: false,
    error: null,
};

export const fetchTransactions = createAsyncThunk<Transaction[]>("transactions/fetchTransactions", async () => {
    const { data } = await clientAxios.get("/transaction");

    return data.transactions;
});

const transactionSlice = createSlice({
    name: "transactions",
    initialState,
    reducers: {
        updateTransactions: (state, action) => {
            state.transactions = [...state.transactions, action.payload]
        },
        deleteTransaction: (state, action) => {
            state.transactions = state.transactions.filter(tran => tran.id !== action.payload)
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchTransactions.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchTransactions.fulfilled, (state, action) => {
                state.loading = false;
                state.transactions = action.payload;
            })
            .addCase(fetchTransactions.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export const { updateTransactions, deleteTransaction } = transactionSlice.actions;

export default transactionSlice.reducer;
