export interface Address {
    city: string;
    street: string;
    suite: string;
    zipcode: string;
    geo: object[];
}

export interface Company {
    bs: string;
    catchPhrase: string;
    name: string;
}

export interface Item {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
    website: string;
    address: Address;
    company: Company;
}
