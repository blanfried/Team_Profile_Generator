// Mmporting paths
const path = require("path");
const fs = require("fs");

// Importing from html files
const pageDir = path.resolve( "./src/pages");

const render = employees => {
      const html = [];
    
    
      html.push(employees
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => renderManager(manager))
      );
      html.push(employees
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => renderEngineer(engineer))
      );
      html.push(employees
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => renderIntern(intern))
      );
    
      return renderMain(html.join(""));
    
    };