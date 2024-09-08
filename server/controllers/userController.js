import { user } from "../models/userModel.js"

let users = [
];

export const createNewUser = (req,res) =>{
    const {id,nome,idade,deficiencia,cep} = req.body;
    let newUser = new user (id,nome,idade,deficiencia,cep);
    users.push({newUer});
    res.json({newUser});
}

export const deleteUser = (req,res) =>{
    const deleteId = req.params.id;
    res.send('user deleted')
    }
    
    export const editUser = (req,res) =>{
    const editId = req.params.id;
        
    res.send('user uploaded')
    }
    
    export const getUser = (req,res) =>{
            res.json({users});
    }