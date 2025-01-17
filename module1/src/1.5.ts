const user: {
  firstName: string;
  lastName?: string;
  age: number;
  readonly company: string;
} = {
  firstName: 'sabbir',
  lastName: 'hossen',
  age: 24,
  company: 'grit system'
}

user.age = 54;