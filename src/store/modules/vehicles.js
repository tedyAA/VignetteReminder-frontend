import axios from 'axios'
import router from '../../router/index'
import auth from './auth'
export default {
    namespaced: true,
    state: {
        vehicles: [],
        singleVehicle: null,
        vehicleEdit: false
    },
    getters: {
        vehicles(state) {
            return state.vehicles || [];
        },
        singleVehicle(state) {
            return state.singleVehicle;
        },
        edit(state) {
            return state.vehicleEdit;
        }
    },
    mutations: {
        initVehicles(state, payload) {
            state.vehicles = payload;
        },
        initSingleVehicle(state, payload) {
            state.singleVehicle = payload;
        },
        addVehicle(state, payload) {
            state.vehicles.push(payload);
        },
        removeVehicle(state, payload) {
            state.vehicles.splice(payload.index, 1);
        },
        vehicleToggleEdit(state) {
            state.vehicleEdit = !state.vehicleEdit;
        },
        // storeEditedSingleVehicle(state, payload) {
        //     state.singleVehicle = payload;
        // }
    },
    actions: {
        initVehicles(context) {
            axios.get('http://0.0.0.0:3000/api/vehicles', {
                headers: {
                    Authorization: `Bearer ${auth.state.jwt}`
                }
            })
                .then(res => {
                    if (res.status === 200) {
                        const vehicles = res.data;
                        context.commit('initVehicles', vehicles);
                    }
                    console.log(res) })
                .catch(error => console.log(error))
        },
        initSingleVehicle(context, payload) {
            axios.get('http://0.0.0.0:3000/api/vehicles/' + payload, {
                headers: {
                    Authorization: `Bearer ${auth.state.jwt}`
                }
            })
                .then(res => {
                    if (res.status === 200) {
                        const vehicle = res.data;
                        context.commit('initSingleVehicle', vehicle);
                    }
                    console.log(res) })
                .catch(error => console.log(error))
        },
        addVehicle(context, payload) {
            axios.post('http://0.0.0.0:3000/api/vehicles', payload, {
                headers: {
                    Authorization: `Bearer ${auth.state.jwt}`
                }
            })
                .then(res => {
                    if (res.status === 200) {
                        context.commit('addVehicle', {...payload, id: res.data.id});
                        router.push('/vehicles');
                    }
                    console.log(res) })
                .catch(error => console.log(error))
        },
        removeVehicle(context, payload) {
            axios.delete('http://0.0.0.0:3000/api/vehicles/'+ payload.vehicleId, {
                headers: {
                    Authorization: `Bearer ${auth.state.jwt}`
                }
            })
                .then(res => {
                    if (res.status === 200) {
                        context.commit('removeVehicle', payload.index);
                    }
                    console.log(res) })
                .catch(error => console.log(error))
        },
        saveEditedDetails(context, payload) {
            axios.put('http://0.0.0.0:3000/api/vehicles/'+ payload.vehicleId, {name: payload.name, vehicle_reg_no: payload.vehicle_reg_no, vignette_reg_no: payload.vignette_reg_no, frame_no: payload.frame_no, sticker_no: payload.sticker_no}, {
                headers: {
                    Authorization: `Bearer ${auth.state.jwt}`
                }
            })
                .then(res => {
                    if (res.status === 200) {
                        context.commit('vehicleToggleEdit');
                        // router.push('/vehicles');
                        // const editedVehicle = res.data;
                        // context.commit('storeEditedSingleVehicle', editedVehicle);
                    }
                    console.log(res) })
                .catch(error => console.log(error))
        }
    }
};