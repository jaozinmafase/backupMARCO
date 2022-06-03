import { Router } from "express";
const server = Router();

import { logar } from '../reposiory/usuarioRepository.js';


server.post('/usuario/logar', async (req, resp) => {
    try{

        const { login, senha } = req.body;
        const resposta = await logar(login, senha);
        if(!resposta){
            throw new Error('Credenciais Invalidas')
        }
        resp.send(resposta)
    }catch(err){
        resp.status(401).send({
            erro: err.message
        })
    }
})

export default server;