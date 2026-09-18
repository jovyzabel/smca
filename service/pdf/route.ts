export async function GET(...) {
  const user = await getUser.execute(id);

  return Response.json(user);
}