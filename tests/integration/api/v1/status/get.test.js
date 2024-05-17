test("GET to api/v1/status shoul return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  expect(response.status).toBe(200);

  const respondeBody = await response.json();

  const parsedUpdatedAt = new Date(respondeBody.updated_at).toISOString();
  expect(respondeBody.updated_at).toEqual(parsedUpdatedAt);

  expect(respondeBody.dependencies.database.version).toEqual("16.2");
  expect(respondeBody.dependencies.database.max_connections).toEqual(100);
  expect(respondeBody.dependencies.database.opened_connections).toEqual(1);
});
