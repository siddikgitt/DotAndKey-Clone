import axios from "axios";

export async function get_NewArrival(){
    let res = await axios.get(`https://dak-db.herokuapp.com/newArrival`)
    return res.data
}

export async function get_BestSeller(value){
    let res = await axios.get(`https://dak-db.herokuapp.com/BS_${value}`)
    return res.data
}

export async function getUser(){
    let res = await axios.get(`https://dak-db.herokuapp.com/users`);
    return res.data;
}