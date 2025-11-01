import axios from "axios";


const API_BASE = "https://mockapi.io/projects/eazypayouts";

export async function fetchCompanies() {
  
  return axios.get(`${API_BASE}/companies`);
}

export async function fetchAccounts(companyId) {
  return axios.get(`${API_BASE}/companies/${companyId}/accounts`);
}

export async function fetchAccountData(accountId) {
  return axios.get(`${API_BASE}/accounts/${accountId}/transactions`);
}
