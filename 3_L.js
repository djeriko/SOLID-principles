// Liskov Substitution Principle

class Person {}

class Member extends Person {
  access() {
    console.log("You have an access")
  }
}

class Guest extends Person {
  isGuest = true
}

class Frontend extends Member {
  canCreateFrontend() {}
}

class Backend extends Member {
  canCreateBackend() {}
}

class PersonFromDifferentCompany extends Guest {
  access() {
    throw new Error("You havent access, go away!")
  }
}

function openSecureDoor(person) {
  person.access()
}

openSecureDoor(new Frontend())
openSecureDoor(new Backend())
openSecureDoor(new PersonFromDifferentCompany())
