<template>
    <section class="cep-checker">
        <label>Digite o seu cep</label>
        <input type="text" @blur="checkCep"/>
        <router-link class="home" to="/">Ver tarefas</router-link>
        <div class="address" v-show="hasAddress()">
            <p>Rua: {{this.address.logradouro}}</p>
            <p>Bairro: {{this.address.bairro}}</p>
            <p>Cidade: {{this.address.cidade}}</p> 
            <p>Estado: {{address.estado}}</p>
        </div>
    </section>
</template>

<script>
export default {
    data(){
        return {
          address: {
          }
        }
    },
    methods: {
      checkCep($event){
        let cep = $event.target.value;
        this.$http.get('http://api.postmon.com.br/v1/cep/'+cep).then(
          response => {
            this.address = response.body
          }, 
          response => {
            console.log(response)
          }
        )
      },
      hasAddress(){
        return Object.keys(this.address).length > 0
      }
    }
}
</script>

<style lang="less">
.home{
  text-decoration: none;
  font-size: 16px;
  display: block;
  padding: 5px;
  text-align: center;
}
.cep-checker{
  margin: 20px 0;
  text-align: center;
  label{
    display: block;
  }
  input{
    margin: 20px;
    height: 2em;
    padding: 2px;
  }
}
</style>
