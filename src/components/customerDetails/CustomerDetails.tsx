import { Suspense, lazy } from "react";
import { Customer } from "../../types/types";
import styles from "./CustomerDetails.module.css";

interface CustomerDetailsProps {
  customer: Customer;
}

const PhotoGrid = lazy(() => import("../photoGrid/PhotoGrid"));

function CustomerDetails({ customer }: CustomerDetailsProps) {
  return (
    <div className={styles.customerDetails}>
      <h2 className={styles.headerName}>{customer.customer_name}</h2>
      <p className={styles.title}>{customer.title}</p>
      <p className={styles.address}>{customer.address}</p>
      <Suspense fallback={<div style={{ fontWeight: 800 }}>Loading...</div>}>
        <PhotoGrid />
      </Suspense>
    </div>
  );
}

export default CustomerDetails;
