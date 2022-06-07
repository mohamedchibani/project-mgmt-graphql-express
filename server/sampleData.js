// clients
const clients = [
  {
    id: "1",
    name: "Tony Stark",
    email: "ironman@gmail.com",
    phone: "312-985-5547",
  },

  {
    id: "2",
    name: "Tony2 Stark",
    email: "ironman2@gmail.com",
    phone: "312-985-5547",
  },

  {
    id: "3",
    name: "Tony3 Stark",
    email: "ironman3@gmail.com",
    phone: "312-985-5547",
  },
];

// projects
const projects = [
  {
    id: "1",
    name: "Project 1 name",
    description: "description 1",
    status: "status 1",
    clientId: "1",
  },

  {
    id: "2",
    name: "Project name 2",
    description: "description 2",
    status: "status 2",
    clientId: "1",
  },

  {
    id: "3",
    name: "Project 3 name",
    description: "description 3",
    status: "status 3",
    clientId: "2",
  },
];

module.exports = { clients, projects };
