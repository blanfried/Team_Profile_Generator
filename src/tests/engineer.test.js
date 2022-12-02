// Engineer test cases 
const Engineer = require("../lib/employee");

test("getRole() should be correct position", () => {
    const testRole = "Engineer";
    const newEngineer = new Engineer("Engineer", 1, "engineer1@hotmail.com", "engineer01");
    expect(newEngineer.getRole() == testRole);
  });