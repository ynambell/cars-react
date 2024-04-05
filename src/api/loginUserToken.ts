import type {UserDataWithToken} from './types';
import {userLoginApiUrl} from './values';

export async function loginUserToken(username: string, password: string) {
    const res = await fetch(userLoginApiUrl, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            username,
            password,
        }),
    });

    const data = await res.json() as UserDataWithToken;

    return data.token;
}
