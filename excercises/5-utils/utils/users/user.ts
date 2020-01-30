export class User {
    constructor(login : string, pass : string) {
        this._login = login;
        this._pass = pass;
    }

    private _login : string;

    get login() : string {
        return this._login;
    }

    private _pass : string;

    get pass() : string {
        return this._pass;
    }
}
