class User {
    /* Get and Set method for username */
    get userName() {
        return this._strUserName;
    }
    set userName(newName) {
        this._strUserName = newName;
    }
    /* Get and Set method for password */
    get password() {
        return this._strPassword;
    }
    set password(newPassword) {
        this._strPassword = newPassword;
    }
    /*function to check if user is valid or not */
    /*function has used get methods */
    validateUser() {
        let strMessage;
        if (this.password == "SecretKey") {
            strMessage = `${this.userName} , is a valid user`;
        }
        else {
            strMessage = `${this.userName} , is a invalid user`;
        }
        return strMessage;
    }
}
/* Function called by button on HTML */
function testGetSetAssignment() {
    // Define variables
    let strUsername;
    let strPassword;
    let strAgeMessage;
    //Read values from HTML
    strUsername = document.getElementById("txtUserName").value;
    strPassword = document.getElementById("txtpassword").value;
    //Create class and call set methods to set username and password
    let clsUser = new User();
    clsUser.userName = strUsername;
    clsUser.password = strPassword;
    strAgeMessage = clsUser.validateUser();
    //display output in HTML
    document.getElementById("lblMessage").innerHTML = strAgeMessage;
}
