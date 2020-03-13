import axios from 'axios'
import router from '../../router/index'
import vehicles from "./vehicles";
import reminders from "./reminders";
export default {
    namespaced: true,
    state: {
        jwt: null,
        userId: null,
        firstName: null,
        lastName: null
    },
    getters: {
        isAuthenticated(state) {
            return state.jwt !== null;
        },
        userFirstName(state) {
            return state.firstName;
        },
        // jwt(state) {
        //     return state.jwt;
        // }
    },
    mutations: {
        authUser(state, payload) {
            state.jwt = payload.jwt;
            state.userId = payload.userId;
            state.firstName = payload.firstName;
            state.lastName = payload.lastName;
        },
        logout(state) {
            state.jwt = null;
            state.userId = null;
            state.firstName = null;
            state.lastName = null;
            vehicles.state.vehicleEdit = false;
            reminders.state.reminderEdit = false;
            localStorage.removeItem('jwt');
            localStorage.removeItem('firstName');
            localStorage.removeItem('lastName');
            localStorage.removeItem('userId');
            localStorage.removeItem('expirationDate');
            router.push('/');
        }
    },
    actions: {
        register(context, payload) {
            axios.post('http://0.0.0.0:3000/api/register', payload)
                .then(res => {
                    if (res.status === 200) {
                        const now = new Date();
                        const expirationDate = new Date(now.getTime() + res.expires_in * 1000);
                        const jwt = res.data.token;
                        const userId = res.data.user_id;
                        const firstName = res.data.first_name;
                        const lastName = res.data.last_name;
                        context.commit('authUser', {jwt, userId, firstName, lastName});
                        localStorage.setItem('jwt', jwt);
                        localStorage.setItem('userId', userId);
                        localStorage.setItem('firstName', firstName);
                        localStorage.setItem('lastName', lastName);
                        // @ts-ignore
                        localStorage.setItem('expirationDate', expirationDate);
                        context.dispatch('setLogoutTimer', res.data.expires_in);
                        router.push('/vehicles');
                    }
                    console.log(res) })
                .catch(error => console.log(error))
        },
        login(context, payload) {
            axios.post('http://0.0.0.0:3000/api/login', payload)
                .then(res => {
                    if (res.status === 200) {
                        const now = new Date();
                        const expirationDate = new Date(now.getTime() + res.data.expires_in * 1000);
                        const jwt = res.data.token;
                        const userId = res.data.user_id;
                        const firstName = res.data.first_name;
                        const lastName = res.data.last_name;
                        context.commit('authUser', {jwt, userId, firstName, lastName});
                        localStorage.setItem('jwt', jwt);
                        localStorage.setItem('userId', userId);
                        localStorage.setItem('firstName', firstName);
                        localStorage.setItem('lastName', lastName);
                        localStorage.setItem('expirationDate', expirationDate);
                        context.dispatch('setLogoutTimer', res.data.expires_in);
                        router.push('/vehicles');
                    }
                    console.log(res) })
                .catch(error => console.log(error))
        },
        logout(context) {
            // axios.post('http://0.0.0.0:3000/api/logout', {}, {
            //     headers: {
            //         Authorization: `Bearer ${context.state.jwt}`
            //     }
            // })
            //     .then(res => {
            //         if (res.status === 200) {
            context.commit('logout');
            //     }
            //     console.log(res) })
            // .catch(error => console.log(error))
        },
        setLogoutTimer(context, expirationTime) {
            setTimeout(() => {
                context.dispatch('logout');
            }, expirationTime * 1000);
        },
        tryAutoLogin(context) {
            const jwt = localStorage.getItem('jwt');
            const expirationDate = localStorage.getItem('expirationDate');
            const firstName = localStorage.getItem('firstName');
            const lastName = localStorage.getItem('lastName');
            const userId = localStorage.getItem('userId');
            const now = new Date();
            if (!jwt) {
                return;
                // context.commit('logout');
            }
            if (Date.parse(now) >= Date.parse(expirationDate)) {
                // return;
                context.commit('logout');
            }
            context.commit('authUser', {jwt, firstName, lastName, userId});
        }
    }
};