// Employee constructor

class Employee {
      constructor(name, id, email, school) {
          this.name = name;
          this.id = id;
          this.email = email;
          this.school = school;
  
      }
  
      getName() {
          return this.name;
      };
  
      getId() {
          return this.id;
      };
  
      getEmail() {
          return this.email;
      }
  
      getRole() {
          return "Employee";
      }
      getSchool() {
          return "School";
      }
  };
  
  module.exports = Employee;