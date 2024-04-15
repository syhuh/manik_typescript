class User {
  name: string;
  email: string;
  age: number;

  constructor(name: string, email: string, age: number) {
    this.name = name;
    this.email = email;
    this.age = age;
  }
}

class AdminUser extends User {
  isAdmin: boolean = true;
}

const user: User = new User("John", "john@gmail.com", 30);
const admin: AdminUser = new AdminUser("Mark", "mark@gmail.com", 40);

console.log(user);
console.log(admin);
