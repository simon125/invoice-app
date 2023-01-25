export type Status = "paid" | "draft" | "pending";

export interface Address {
  street: string;
  city: string;
  postalCode: string;
  country: string;
}

export interface Client {
  name: string;
  email: string;
  address: Address;
}

export interface ServiceItem {
  name: string;
  quantity: string;
  price: string;
}

export interface Invoice {
  id: string;
  status: Status;
  from: {
    address: Address;
  };
  client: Client;
  date: string;
  paymentTerms: string;
  description: string;
  items: ServiceItem[];
}

// {
//     "id": "RT3080",
//     "status": "pending",
//     "from": {
//       "address": {
//         "street": "Leśna 1",
//         "city": "Świdnik",
//         "postalCode": "21-040",
//         "country": "Polnad"
//       }
//     },
//     "client": {
//       "name": "Alex Grim",
//       "email": "alexgrim@mail.com",
//       "address": {
//         "street": "84 Church Way",
//         "city": "Bradford",
//         "postalCode": "BD1 9PB",
//         "country": "United Kingdom"
//       }
//     },
//     "date": "Wed, 07 Dec 2022 22:44:47 GMT",
//     "paymentTerms": "Net 1 Day",
//     "projectDescription": "Graphic Desgin",
//     "items": [{ "name": "Banner Design", "quantity": 1, "price": 156 }]
//   }
