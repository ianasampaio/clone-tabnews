function status(request, response) {
  response.status(200).json({ key: "testando rota de status" });
}
export default status;
