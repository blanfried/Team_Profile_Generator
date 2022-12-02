// Intern test cases 
const Intern = require("../lib/employee");

test("getSchool() functions properly", () => {
    const testSchool = "UoB";
    const newIntern = new Intern("Intern", 1, "intern01@team.com", testSchool);
    expect(newIntern.getSchool() == testSchool);
  });