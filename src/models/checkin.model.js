export class Checkin {
  constructor({
    clienteId,
    dataHora = new Date().toISOString(),
    status,
    itens = {},
  }) {
    this.clienteId = clienteId;
    this.dataHora = dataHora;
    this.status = status;
    this.itens = {
      descricao: itens.descricao || "",
      quantidade: itens.quantidade || 0,
      servico: itens.servico || "",
      precoUnitario: itens.precoUnitario || 0,
      subtotal: itens.subtotal || 0,
    };
  }
}
