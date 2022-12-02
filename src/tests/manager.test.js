// Manager test cases 
const Manager = require("../lib/employee");

test("getRole() should be correct position", () => {
    const testRole = "Manager";
    const newManager = new Manager("Nafisa", 1, "nafisa@team.com", "manager01");
    expect(newManager.getRole() == testRole);
  });