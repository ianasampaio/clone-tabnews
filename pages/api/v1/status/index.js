import database from "../../../../infra/database.js";

async function status(request, response) {
  const result = await database.query("SELECT 8+1 as sum");
  console.log(result.rows);
  response.status(200).json({ key: "testando rota de status" });
}
export default status;
