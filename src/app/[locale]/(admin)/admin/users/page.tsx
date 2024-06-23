import { getAllUsers } from "../../../../../scripts/actions/admin-panel/getAllUsers";
import InteractionWrapper from "../../../../../components/Admin/Users/InteractionWrapper";

interface Props {
  searchParams: {
    search_name: string;
  };
}

export default async function page({ searchParams }: Props) {
  const search_name = searchParams.search_name;
  const users = await getAllUsers(search_name ? { search_name } : {});

  return <InteractionWrapper users={users as UserDB[]} />;
}
