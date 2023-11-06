class ValidaFormulario{
    constructor(){
        this.formulario = document.querySelector('.formulario')
        this.eventos();
    }

    eventos(){
        this.formulario.addEventListener('submit',  e => {
            this.handleSubmit(e);
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const camposValidos = this.camposValidos();
        const senhasValidas = tis.senhasValidas();

        if(camposValidos && senhasValidas) {
            alert('Formualrio enviado');
            this.formulario.submit();
        }
    
    
    }

    senhasSaoValidas() {
        let valid = true;
    
        const senha = this.formulario.querySelector('.senha');
        const repetirSenha = this.formulario.querySelector('.repetir-senha');
    
        if(senha.value !== repetirSenha.value) {
          valid = false;
          this.criaErro(senha, 'Campos senha e repetir senha precisar ser iguais.');
          this.criaErro(repetirSenha, 'Campos senha e repetir senha precisar ser iguais.');
        }
    
        if(senha.value.length < 6 || senha.value.length > 12) {
          valid = false;
          this.criaErro(senha, 'Senha precisa estar entre 6 e 12 caracteres.');
        }
    
        return valid;
      }

    camposValidos(){

    
        let valid = true;
        let campo;


        for(let errorText of this.formulario.querySelectorAll('.error-text'))
        {
            errorText.remove();
        }
        for(campo of this.formulario.querySelectorAll('.validar')){
            const label = campo.previousElementSibling.innerText;
            if(!campo.value)
            {
                this.criaErro(campo, `Campo "${label}" estao em branco`);
                valid = false;
            }
            if(campo.classList.contains('cpf')){
                if(!this.validaCpf()) valid = false;
            }

            if(campo.classList.contains('usuario')){
                if(!this.validaCpf()) valid = false;
            }


        }
    }

    validaUsuario(campo) {
        const usuario = campo.value;
        if(usuario.length <3 || usuario.length >12){
            this.criaErro(campo, 'CPF invalido.');
            return false;
        }

        if(!usuario.match(/^[a-zA-Z0-9]+$/g)){
            this.criaErro(campo, 'Nome de usuário precisar conter apenas letras e/ou números.');
            valid = false;
        }
        return valid;
    }

    validaCpf(campo) {
        const cpf = new ValidaCpf(campo.value);
        if(!cpf.valid()){
            this.criaErro(campo, 'CPF invalido.');
            return false
        }
        return true;
    }

    criaErro(campo, msg)
    {
        const div = document.createElement('div')
        div.innerHTML = msg;
        div.classList.add('error-text');
        campo.insertAdjacentElement('afterend', div);
        
    }
    
}
const valida = new ValidaFormulario();