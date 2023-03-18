//перше завдання
class User {
  #name;
  constructor(name, login, age) {
    this.#name = name;
    this.login = login;
    this.age = age;
  }
}
let user1 = new User("Mike", "MK_18", 18);
let user2 = new User("", "NRG", 22);
console.log(user1.login); //MK_18
console.log(user1.age); //18
console.log(user2.login); //NRG
console.log(user2.age); //22

//друге завдання
class User {
  #name;
  constructor(name, login, age) {
    this.#name = name;
    this.login = login;
    this.age = age;
  }
  getName(isAdmin) {
    if (isAdmin) {
      return this.#name || this.login;
    } else {
      return "Permission denied";
    }
  }
}
let user1 = new User("Mike", "MK_18", 18);
let user2 = new User("", "NRG", 22);
console.log(user1.getName(true)); //Mike
console.log(user2.getName(true)); //NRG
console.log(user2.getName(false)); //Permission denied

//третє завдання
class User {
  #name;
  constructor(name, login, age) {
    this.#name = name;
    this.login = login;
    this.age = age;
  }
  getName(isAdmin) {
    if (isAdmin) {
      return this.#name || this.login;
    } else {
      return "Permission denied";
    }
  }
  changeName(newName, isAdmin) {
    let password = prompt("Enter your password");
    if (password === "123") {
      let oldName = this.#name || this.login;
      this.#name = newName;
      console.log(`Name changed from ${oldName} to ${this.#name}`);
    } else {
      alert("Permission denied");
    }
  }
}
let user1 = new User("Mike", "MK_18", 18);
let user2 = new User("", "NRG", 22);
user1.changeName("Bill", "123");//Name changed from Mike to Bill

//четверте завдання
class User {
  #name;
  constructor(name, login, age) {
    this.#name = name;
    this.login = login;
    this.age = age;
  }
  getName(isAdmin) {
    if (isAdmin) {
      return this.#name || this.login;
    } else {
      return "Permission denied";
    }
  }
  changeName(newName, isAdmin) {
    let password = prompt("Enter your password");
    if (password === "123") {
      let oldName = this.#name || this.login;
      this.#name = newName;
      console.log(`Name changed from ${oldName} to ${this.#name}`);
    } else {
      alert("Permission denied");
    }
  }
}

class Admin extends User {
  #isAdmin = true;
  constructor(name, login, age) {
    super(name, login, age);
  }
  getUserName(user) {
    if (this.#isAdmin) {
        return user.getName(this.#isAdmin);
    } else {
        return "Permission denied";
    }
  }
}
let admin1 = new Admin("Luba", "LB_35", 35);
let user1 = new User("Mike", "MK_18", 18)
let user2 = new User("", "NRG", 22);
console.log(admin1.getUserName(user1));//Mike;
console.log(admin1.getUserName(admin1)); //Luba;
console.log(admin1.getUserName(user2));//NRG;

//п'яте завдання
//перший шлях
class User {
    #phone;
    constructor(name, phone) {
        this.name = name;
        this.#phone = phone;
    }
    getPhone (isAdmin) {
        if (isAdmin) {
            return this.#phone;
        } else {
            return this.#phone.slice(0, 7) + "******" + this.#phone.slice(13);
        }
    }
}
let user1 = new User("Mike", "+38067-888-88-99");
let user2 = new User("Tom", "+38099-888-88-99");
console.log(user1.getPhone(false));//+38067-******-99
console.log(user2.getPhone(false));//+38099-******-99
console.log(user1.getPhone(true));//+38067-888-88-99
console.log(user2.getPhone(true));//+38099-888-88-99

//другий шлях
class User {
  #phone;
  constructor(name, phone) {
    this.name = name;
    this.#phone = phone;
  }
  getPhone(isAdmin) {
    if (isAdmin) {
      return this.#phone;
    } else {
      let phoneIndex = this.#phone.split("");
      for (let i = 7; i < 13; i++) {
        phoneIndex[i] = "*";
      }
      return phoneIndex.join("");
    }
  }
}
let user1 = new User("Mike", "+38067-888-88-99");
let user2 = new User("Tom", "+38099-888-88-99");
console.log(user1.getPhone(false)); // +38067-******-99
console.log(user2.getPhone(false)); // +38099-******-99
console.log(user1.getPhone(true)); // +38067-888-88-99
console.log(user2.getPhone(true)); // +38099-888-88-99
