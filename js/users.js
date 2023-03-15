const users = [
    {id: 1, name: "Admin", username: "admin", password: "admin", role: "admin", email: "admin@rasvels.com"},
    {id: 2, name: "Sylvia Espina", username: "sylvia", password: "sylvia", role: "user", email: "sylvia@rasvels.com"},
    {id: 3, name: "Mufida Andi", username: "mufida", password: "mufida", role: "user", email: "mufida@rasvels.com"},
    {id: 4, name: "Jenil Varma", username: "jenil", password: "jenil", role: "user", email: "jenil@rasvels.com"},
    {id: 5, name: "Jay Shah", username: "jay", password: "jay", role: "user", email: "jay@rasvels.com"},
    {id: 6, name: "Ajay Reddy", username: "ajay", password: "ajay", role: "user", email: "ajay@rasvels.com"},
    {id: 7, name: "Vu Lu", username: "vu", password: "vu", role: "user", email: "vu@rasvels.com"},
];

function userGetCurrentLoginUser(){
    var storedUser = localStorage.getItem("currentUser");
    if (storedUser) {
        return storedUser;
    } else {
        return null;
    }
}

function userLogin(username, password) {
    const user = users.find(user => user.username === username && user.password === password);
    if (user) {
      console.log("Login successful");
      localStorage.setItem("currentUser", JSON.stringify(user));
      return user;
    } else {
      console.log("Login failed. Invalid username or password.");
      return null;
    }
}

function userLogout(){
    localStorage.removeItem('currentUser');
    console.log("Logout successful.");
}

