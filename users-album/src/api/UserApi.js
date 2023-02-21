// import * as url from "url";

export default class UserApi {
    static URL = 'https://jsonplaceholder.typicode.com/';
    // static URL = 'https://jsonplaceholder.typicode.com/users';

    static request(url = '', method = 'GET', body) {
        return fetch(UserApi.URL + url, {
            method,
            body: body ? JSON.stringify(body) : undefined,
            headers: {
                'Content-type': 'application/json',
            }
        })
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }

                throw new Error('Can not execute request to server');
            })
    }

    static getList(url='') {
        return UserApi.request(url)
            .catch(() => {
                throw new Error('Can not fetch users list from server');
            })
    }

    static getOne(id) {
        return UserApi.request(id)
            .catch(() => {
                throw new Error('Can not fetch user from server');
            })
    }

    static create(user) {
        return UserApi.request('', 'POST', user)
            .catch(() => {
                throw new Error('Can not create user on server');
            })
    }

    static update(id, changes) {
        return UserApi.request(id, 'PUT', changes)
            .catch(() => {
                throw new Error('Can not update user on server');
            })
    }

    static delete(id) {
        return UserApi.request(id, 'DELETE')
            .catch(() => {
                throw new Error('Can not delete user on server');
            })
    }
}