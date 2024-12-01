export class User {
  constructor(
    public readonly id: string,
    public readonly email: string,
    public readonly name: string,
    public readonly createdAt: Date
  ) {}

  static create(props: Omit<User, 'id' | 'createdAt'>): User {
    return new User(
      Math.random().toString(36).substr(2, 9),
      props.email,
      props.name,
      new Date()
    );
  }
}
