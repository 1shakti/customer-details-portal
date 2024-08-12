import { useState, useCallback } from "react";
import { Customer } from "../types/types";
import CustomerList from "../components/customerList/CustomerList";
import CustomerJson from "../constants/MOCK_DATA.json";
import CustomerDetails from "../components/customerDetails/CustomerDetails";

const customers: Customer[] = CustomerJson;

export default function CustomerDetailsContainer() {
  const [selectedCustomerId, setSelectedCustomerId] = useState<number | null>(
    1,
  );

  const handleSelectCustomer = useCallback((id: number) => {
    setSelectedCustomerId(id);
  }, []);

  const selectedCustomer = customers.find(
    (customer) => customer.id === selectedCustomerId,
  );

  return (
    <div className="container">
      <CustomerList
        customers={customers}
        selectedCustomerId={selectedCustomerId}
        onSelectCustomer={handleSelectCustomer}
      />
      {selectedCustomer && <CustomerDetails customer={selectedCustomer} />}
    </div>
  );
}
