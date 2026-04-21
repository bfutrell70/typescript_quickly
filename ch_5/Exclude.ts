// Example using TypeScript's Exclude type, page 113

class Person {
    id!: number;
    name!: string;
    age!: number;
}

type RemoveProps<T, K> = Exclude<keyof T, K>;

type RemainingProps = RemoveProps<Person, 'name' | 'age'>;
type PersonBlindAuditions = Pick<Person, RemainingProps>;