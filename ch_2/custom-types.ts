type Foot = number;
type Pound = number;

type Patient = {
    name: string;
    height: Foot;
    // doesn't have to be specified
    weight?: Pound;
}

let patient1: Patient = {
    name: 'Joe Smith',
    height: 5,
    weight: 100
};

let patient2: Patient = {
    name: "Joe Smith",
    height: 5
};