import { getAllUsers } from "../../../../../scripts/actions/admin-panel/getAllUsers";
import InteractionWrapper from "../../../../../components/Admin/Users/InteractionWrapper";

export default async function page() {
  const users = await getAllUsers();

  return <InteractionWrapper users={users as User[]} />;
}
