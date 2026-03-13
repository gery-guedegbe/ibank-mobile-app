import { Branch, InterestRate } from "@/types/ui.types";
import { images } from "./theme";

export const HOME_MENUS = [
  {
    id: 1,
    title: "Account and Card",
    icon: images.account_icon,
    link: "(home-menus)/account-and-card",
  },
  {
    id: 2,
    title: "Transfer",
    icon: images.transfert_icon,
    link: "(home-menus)/transfert",
  },
  {
    id: 3,
    title: "Withdraw",
    icon: images.withdraw_icon,
    link: "(home-menus)/withdraw",
  },
  {
    id: 4,
    title: "Mobile prepaid",
    icon: images.mobile_prepaid_icon,
    link: "(home-menus)/mobile-prepaid",
  },
  {
    id: 5,
    title: "Pay the bill",
    icon: images.pay_the_bill_icon,
    link: "(home-menus)/pay-the-bill",
  },
  {
    id: 6,
    title: "Save online",
    icon: images.save_online_icon,
    link: "(home-menus)/save-online",
  },
  {
    id: 7,
    title: "Credit card",
    icon: images.credit_card_icon,
    link: "(home-menus)/credit-card",
  },
  {
    id: 8,
    title: "Transaction report",
    icon: images.transaction_card_icon,
    link: "(home-menus)/transaction-report",
  },
  {
    id: 9,
    title: "Beneficiary",
    icon: images.beneficiary_icon,
    link: "(home-menus)/beneficiary",
  },
];

export const SEARCH_MENUS = [
  {
    id: 1,
    title: "Branch",
    desc: "Search for branch",
    icon: images.branch_icon,
    link: "(search-menus)/branch",
  },
  {
    id: 2,
    title: "Interest rate",
    desc: "Search for interest rate",
    icon: images.interest_rate_icon,
    link: "(search-menus)/interest-rate",
  },
  {
    id: 3,
    title: "Exchange rate",
    desc: "Search for exchange rate",
    icon: images.exchange_rate_icon,
    link: "(search-menus)/exchange-rate",
  },
  {
    id: 4,
    title: "Exchange",
    desc: "Exchange amount of money",
    icon: images.exchange_icon,
    link: "(search-menus)/exchange",
  },
];

export const BRANCHES: Branch[] = [
  {
    id: "1",
    name: "Bank 1656 Union Street",
    address: "Union Street",
    latitude: 40.745,
    longitude: -74.043,
    distance: 50,
  },
  {
    id: "2",
    name: "Bank Secaucus",
    address: "Secaucus",
    latitude: 40.789,
    longitude: -74.056,
    distance: 1200,
  },
  {
    id: "3",
    name: "Bank Riverside Drive",
    address: "Riverside Drive",
    latitude: 40.801,
    longitude: -73.972,
    distance: 5300,
  },
];

export const INTEREST_RATES: InterestRate[] = [
  { id: "1", kind: "Individual customers", deposit: "1m", rate: "4.50%" },
  { id: "2", kind: "Corporate customers", deposit: "2m", rate: "5.50%" },
  { id: "3", kind: "Individual customers", deposit: "1m", rate: "4.50%" },
  { id: "4", kind: "Corporate customers", deposit: "6m", rate: "2.50%" },
  { id: "5", kind: "Individual customers", deposit: "1m", rate: "4.50%" },
  { id: "6", kind: "Corporate customers", deposit: "8m", rate: "6.50%" },
  { id: "7", kind: "Individual customers", deposit: "1m", rate: "4.50%" },
  { id: "8", kind: "Individual customers", deposit: "1m", rate: "4.50%" },
  { id: "9", kind: "Corporate customers", deposit: "7m", rate: "6.80%" },
  { id: "10", kind: "Individual customers", deposit: "1m", rate: "4.50%" },
  { id: "11", kind: "Individual customers", deposit: "12m", rate: "5.90%" },
  { id: "12", kind: "Individual customers", deposit: "1m", rate: "4.50%" },
];

export const EXCHANGE_RATES = [
  {
    id: "1",
    country: "Vietnam",
    flag: images.vietnam_flag,
    buy: "1.403",
    sell: "1.746",
  },
  {
    id: "2",
    country: "Nicaragua",
    flag: images.nicaragua_flag,
    buy: "9.123",
    sell: "12.09",
  },
  {
    id: "3",
    country: "Korea",
    flag: images.korea_flag,
    buy: "3.704",
    sell: "5.151",
  },
  {
    id: "4",
    country: "Russia",
    flag: images.russia_flag,
    buy: "116.0",
    sell: "144.4",
  },
  {
    id: "5",
    country: "China",
    flag: images.china_flag,
    buy: "1.725",
    sell: "2.234",
  },
  {
    id: "6",
    country: "Portuguese",
    flag: images.portuguese_flag,
    buy: "1.403",
    sell: "1.746",
  },
  {
    id: "7",
    country: "French",
    flag: images.french_flag,
    buy: "23.45",
    sell: "34.56",
  },
];

export const LANGUAGES = [
  { id: "1", name: "Vietnamese", flag: images.vietnam_flag },
  { id: "2", name: "French", flag: images.french_flag },
  { id: "3", name: "English", flag: images.english_flag },
  { id: "4", name: "Japanese", flag: images.japan_flag },
  { id: "5", name: "Portuguese", flag: images.portuguese_flag },
  { id: "6", name: "China", flag: images.china_flag },
  { id: "7", name: "Korea", flag: images.korea_flag },
  { id: "8", name: "Nicaragua", flag: images.nicaragua_flag },
  { id: "9", name: "Russia", flag: images.russia_flag },
];

export const TRANSFERT_CARD_ITEMS = [
  {
    id: "1",
    icon: images.credit_card_white_icon,
    title: "Transfer via card number",
    slug: "card",
  },
  {
    id: "2",
    icon: images.user_icon,
    title: "Transfer to the same bank",
    slug: "same_bank",
  },
  {
    id: "3",
    icon: images.bank_icon,
    title: "Transfer to another bank",
    slug: "other_bank",
  },
];

export const BENEFICIARY_ITEMS = [
  { id: "0", icon: null, name: "" },
  { id: "1", icon: images.beneficiary_user_1, name: "Emma" },
  { id: "2", icon: images.beneficiary_user_2, name: "Justin" },
];

export const MY_CARDS = [
  {
    id: "1",
    label: "VISA **** **** **** 1234",
    balance: "10,000",
    fullNumber: "4756123456781234",
  },
  {
    id: "2",
    label: "MasterCard **** **** **** 5678",
    balance: "5,450",
    fullNumber: "5102567812345678",
  },
];

export const MESSAGES_DATA = [
  {
    id: "1",
    title: "Bank of America",
    subtitle: "Bank of America : 256486 is the au...",
    date: "Today",
    icon: images.bank_icon,
    icon_bg: "#3629B7",
  },
  {
    id: "2",
    title: "Account",
    subtitle: "Your account is limited. Please foll...",
    date: "12/10",
    icon: images.user_icon,
    icon_bg: "#FF4267",
  },
  {
    id: "3",
    title: "Alert",
    subtitle: "Your statement is ready for you to...",
    date: "11/10",
    icon: images.alert_icon,
    icon_bg: "#0890FE",
  },
  {
    id: "4",
    title: "Paypal",
    subtitle: "Your account has been locked. Ple...",
    date: "10/11",
    icon: images.paypal_icon,
    icon_bg: "#FFAF2A",
  },
  {
    id: "5",
    title: "Withdraw",
    subtitle: "Dear customer, 2987456 is your co...",
    date: "10/12",
    icon: images.withdraw_white_icon,
    icon_bg: "#52D5BA",
  },
];
