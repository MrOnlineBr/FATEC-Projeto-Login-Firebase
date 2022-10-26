const baseURL = "http://127.0.0.1:5500/"
/**
* loginFirebase
* @param {String} email
* @param {String} senha
* @return {Object} usuario logado
*/

function loginFirebase(email, senha){
    firebase
    .auth()
    .signInWithEmailAndPassword(email, senha)
    .then(result => {
        alert(`Bem vindo, ${JSON.stringify(result.user.email)}`)
        window.location.href = `${baseURL}/home.html`
    })
    .catch(error => {
        let menssagemErro = ''
        switch(error.code){
            case 'auth/invalid-email':
            menssagemErro = 'O e-email informado é inválido!'
            break;
            case 'auth/email-already-exists':
            menssagemErro = 'O e-mail informado já está sendo utilizado.'
            break;
            case 'auth/invalid-password':
            menssagemErro = 'Senha incorreta'
            break;
            default:
                menssagemErro = error.message
        }
        alert(`Erro ao efetuar o login: ${menssagemErro}`)
    })
}

/**
 * noboUsuario
 * @param {String} email 
 * @param {String} senha 
 * @return {object} - usuário criado
 */
function novoUsuario(email,senha){
    firebase.auth().createUserWithEmailAndPassword(email,senha)
    .then((result) => {
        alert(`Bem vindo, ${JSON.stringify(result.user.email)}`)
        window.location.href=`${baseURL}/home.html`
    })
    .catch(error => {
        let mensagemErro = ''
        switch(error.code){
            case 'auth/invalid-email':
            mensagemErro = 'Informe um e-mail válido'
            break;
            case 'auth/invalid-password':
            mensagemErro = 'A senha precisa de pelo menos 6 caracteres.'
            break;
            default:
                mensagemErro = error.message
        }
        alert(`Não foi possível cadastrar o usuário. Erro: ${mensagemErro}`)
    })

}

/**
 * verificaLogado
 * @return {null}
 */
function  verificaLogado(){
    firebase.auth().onAuthStateChanged(user => {
        if(!user){
            console.log('Acesso inválido. Realize o login para concluir o acesso.')
            window.location.href = baseURL
        }
    })
}

function logout(){
    firebase.auth().signOut().then(() => {
        alert('Você saiu com sucesso!')
        window.location.href = baseURL
    })
}