export class Client {
  constructor({
    nome,
    email,
    telefone,
    cpf,
    endereco = {},
    dataCadastro = new Date().toISOString(),
    observacoes = "",
    status = "ativo"
  }) {
    this.nome = nome;
    this.email = email;
    this.telefone = telefone;
    this.cpf = cpf;
    this.endereco = {
      rua: endereco.rua || "",
      numero: endereco.numero || "",
      bairro: endereco.bairro || "",
      cidade: endereco.cidade || "",
      estado: endereco.estado || "",
      cep: endereco.cep || "",
      complemento: endereco.complemento || ""
    };
    this.dataCadastro = dataCadastro;
    this.observacoes = observacoes;
    this.status = status;
  }
}
