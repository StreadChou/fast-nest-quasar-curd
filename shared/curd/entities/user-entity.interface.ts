export interface UserEntityInterface {
    id: number;
    created_at: Date;
}

export type PartialUserEntityInterface = Partial<UserEntityInterface>