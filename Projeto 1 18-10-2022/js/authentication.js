const baseURL = "http://127.0.0.1:5500/"
/**
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
        alert(`Erro ao efetuar o login: ${error.message}`)
    })
}