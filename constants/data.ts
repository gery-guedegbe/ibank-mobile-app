import { Branch } from "@/types/ui.types";
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
