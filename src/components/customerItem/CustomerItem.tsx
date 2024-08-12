import React from "react";
import styles from "./CustomerItem.module.css";
import { Customer } from "../../types/types";

interface Props {
  customer: Customer;
  isSelected: boolean;
  onSelect: () => void;
}

function CustomerItem({ customer, isSelected, onSelect }: Props) {
  return (
    <div
      className={`${styles.customerItem} ${isSelected ? styles.customerItemSelected : ""}`}
      onClick={onSelect}
    >
      <p className={styles.headerName}>{customer.customer_name}</p>
      <p className={styles.title}>{customer.title}</p>
    </div>
  );
}

export default React.memo(CustomerItem);
