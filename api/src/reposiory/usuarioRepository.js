import { con } from './connection.js'

export async function logar(login, senha){
    const comando = `
    select id_funcionario	    id,
    nm_funcionario              nome,
    ds_CPF                      CPF,
    nm_login		       	    login,
    ds_senha                    senha
    from tb_funcionario
    where nm_login 		    = ?
    and ds_senha			= ? `;

    const [linhas] = await con.query(comando, [login, senha]);

    return linhas[0];
}