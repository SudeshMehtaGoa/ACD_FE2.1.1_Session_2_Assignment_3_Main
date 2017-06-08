class User {
    /* Private Variables */
    private _strUserName: string;
    private _strPassword: string;
    
    /* Get and Set method for username */
    get userName(): string {
        return this._strUserName;
    }

    set userName(newName: string) {
            this._strUserName = newName;
    }

    /* Get and Set method for password */
    get password(): string {
        return this._strPassword;
    }

    set password(newPassword: string) {
            this._strPassword = newPassword;
    }

    /*function to check if user is valid or not */
    /*function has used get methods */
    public validateUser() : string {
        let strMessage : string;
        if(this.password =="SecretKey")
        {
            strMessage=`${this.userName} , is a valid user`;
        }
        else
        {
            strMessage=`${this.userName} , is a invalid user`;
        }

        return strMessage;
    }
}

/* Function called by button on HTML */
function testGetSetAssignment () {

    // Define variables
    let strUsername : string;
    let strPassword : string;
    let strAgeMessage : string;

    //Read values from HTML
    strUsername = (<HTMLInputElement>document.getElementById("txtUserName")).value;
    strPassword = (<HTMLInputElement>document.getElementById("txtpassword")).value;

    //Create class and call set methods to set username and password
    let clsUser = new User();
    clsUser.userName=strUsername;
    clsUser.password=strPassword;

    strAgeMessage = clsUser.validateUser();

    //display output in HTML
    (<HTMLInputElement>document.getElementById("lblMessage")).innerHTML = strAgeMessage;
}