import axios from 'axios'
// import router from '../../router/index'
import auth from './auth'
export default {
    namespaced: true,
    state: {
        reminders: [],
        reminderEdit: false
    },
    getters: {
        reminders(state) {
            return state.reminders || [];
        },
        reminderEdit(state) {
            return state.reminderEdit;
        }
    },
    mutations: {
        initReminders(state, payload) {
            state.reminders = payload;
        },
        addReminder(state, payload) {
            state.reminders.push(payload);
        },
        removeReminder(state, payload) {
            state.reminders.splice(payload.index, 1);
        },
        reminderToggleEdit(state) {
            state.reminderEdit = !state.reminderEdit;
        },
        saveEditedReminderDetails(state, payload) {
            state.reminders[payload.index] = payload;
        }
    },
    actions: {
        initReminders(context, payload) {
            axios.get('http://0.0.0.0:3000/api/vehicles/' + payload + '/reminders', {
                headers: {
                    Authorization: `Bearer ${auth.state.jwt}`
                }
            })
                .then(res => {
                    if (res.status === 200) {
                        const reminders = res.data;
                        context.commit('initReminders', reminders);
                    }
                    console.log(res) })
                .catch(error => console.log(error))
        },
        addReminder(context, payload) {
            axios.post('http://0.0.0.0:3000/api/reminders', payload, {
                headers: {
                    Authorization: `Bearer ${auth.state.jwt}`
                }
            })
                .then(res => {
                    if (res.status === 200) {
                        context.commit('addReminder', {...payload, id: res.data.id});
                    }
                    console.log(res) })
                .catch(error => console.log(error))
        },
        removeReminder(context, payload) {
            axios.delete('http://0.0.0.0:3000/api/reminders/'+ payload.reminderId, {
                headers: {
                    Authorization: `Bearer ${auth.state.jwt}`
                }
            })
                .then(res => {
                    if (res.status === 200) {
                        context.commit('removeReminder', payload.index);
                    }
                    console.log(res) })
                .catch(error => console.log(error))
        },
        saveEditedReminderDetails(context, payload) {
            axios.put('http://0.0.0.0:3000/api/reminders/'+ payload.id, {vehicle_id: payload.vehicle_id, title: payload.title, changed_on: payload.changed_on, due_change_date: payload.due_change_date, note: payload.note}, {
                headers: {
                    Authorization: `Bearer ${auth.state.jwt}`
                }
            })
                .then(res => {
                    if (res.status === 200) {
                        context.commit('reminderToggleEdit');
                        context.commit('saveEditedReminderDetails', payload);
                        // router.push('/vehicles');
                        // const editedVehicle = res.data;
                        // context.commit('storeEditedSingleVehicle', editedVehicle);
                    }
                    console.log(res) })
                .catch(error => console.log(error))
        },
    }
};