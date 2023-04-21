import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class LocalStorageManager {
    userType: number | null | undefined;
    constructor() { }

    setUserType(userType: number) {
        localStorage.setItem('userType', JSON.stringify(userType));
    }

    getUserType(): number {
        //TODO re route to login page if its null
        const type = localStorage.getItem('userType');
        if (type == null) {
            return 1;
        }

        return <number>JSON.parse(type);
    }

    setUserID(id: number) {
        localStorage.setItem('userid', JSON.stringify(id));
    }

    getUserID(): number {
        //TODO re route to login page if its null
        var id = localStorage.getItem('userid');
        if (id == null) {
            return 1;
        }

        return <number>JSON.parse(id);
    }
}