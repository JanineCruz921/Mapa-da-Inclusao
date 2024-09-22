import { deficiency } from "../models/deficiencyModel.js";

let deficiencies = [
    { id: "1", nome: "autismo", tipo: "deficiência Intelectual" },
    { id: "2", nome: "deficiencia visual", tipo: "visual" },
    {id:"3", nome:"deficiências Motora", tipo:"motora"}
];

export const createNewDeficiency = (req,res) =>{
    const {id,nome,tipo} = req.body;
    let newDeficiency = new deficiency(id,nome,tipo);
    deficiencies.push({newDeficiency});
    res.json({newDeficiency});
}

export const deleteDeficiency = (req,res) =>{
const deleteId = req.params.id;
res.send('deficiency deleted')
}

export const editDeficiency = (req,res) =>{
const editId = req.params.id;
    const newnome = req.body.nome;
    const newtipo = req.body.tipo;
res.send('deficiency uploaded')
}

export const getDeficiency = (req,res) =>{
        res.json({deficiencies});
}