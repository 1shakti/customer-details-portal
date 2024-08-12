import React, { useCallback, useEffect, useRef, useState } from "react";
import styles from "./CustomerList.module.css";
import CustomerItem from "../customerItem/CustomerItem";
import { Customer } from "../../types/types";

interface Props {
  customers: Customer[];
  selectedCustomerId: number | null;
  onSelectCustomer: (id: number) => void;
}

const CustomerList: React.FC<Props> = ({
  customers,
  selectedCustomerId,
  onSelectCustomer,
}) => {
  const [visibleCustomers, setVisibleCustomers] = useState<Customer[]>([]);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setVisibleCustomers(customers.slice(0, 20));
  }, [customers]);

  const handleScroll = useCallback(() => {
    if (listRef.current && customers.length > 20) {
      const { scrollTop, scrollHeight, clientHeight } = listRef.current;
      if (scrollTop + clientHeight >= scrollHeight - 10) {
        const newItems = customers.slice(
          visibleCustomers.length,
          visibleCustomers.length + 20,
        );
        setVisibleCustomers((prevItems) => [...prevItems, ...newItems]);
      }
    }
  }, [customers, visibleCustomers.length]);

  useEffect(() => {
    const currentRef = listRef.current;
    if (currentRef) {
      currentRef.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (currentRef) {
        currentRef.removeEventListener("scroll", handleScroll);
      }
    };
  }, [handleScroll]);

  return (
    <div ref={listRef} className={styles.customerList}>
      {visibleCustomers?.map((customer) => (
        <CustomerItem
          key={customer.id}
          customer={customer}
          isSelected={selectedCustomerId === customer.id}
          onSelect={() => onSelectCustomer(customer.id)}
        />
      ))}
    </div>
  );
};

export default React.memo(CustomerList);
