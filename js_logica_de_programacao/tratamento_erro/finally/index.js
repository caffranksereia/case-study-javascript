// try{
//     console.log(naoExisto)
// }catch(err){
//     console.log("Nao existe")
//     console.log(err)
// }

// function soma(x,y)
// {
//     if(typeof x !== 'number' || typeof y !== 'number')
//     {
//         throw new Error('x or y its a number');
//     }
//     return x+ y;
// }
// try {// e executa quando nao ha erros
//     console.log(soma(2,2));
//     try {
//         console.log(soma('2',2));
//     } catch (error) {
//         console.log('Deu erro')
//     }finally{
//         console.log('tambem Finalmente: eu sempre sou executado')
//     }
// }catch(e) 
// {   // e executada quando ha erros
//     console.log("faz o L do amor");
// }finally{
//     console.log('finali: eu sempre sou executado')
// }

function return_time(data)
{
    if(data &&!(data instanceof Date))
    {
        throw new TypeError('Esperando instancia de Date.')
    }
    if(!data)
    {
        data = new Date();
    }
     return data.toLocaleTimeString('pt-BR',{
        hour: '2-digit',
        minute:'2-digit',
        second: '2-digit',
        hour12: false
     })
    
}
try {
    const data = new Date('01-01-1970 12:58:12')
    const hora = return_time(11);
    console.log(hora)
} catch (error) {
    console.log(e);
}finally
{
    console.log('Tenha um bom dia!')
}
