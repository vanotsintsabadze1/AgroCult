import { getAllUsers } from "../../../../../scripts/actions/admin-panel/getAllUsers";
import InteractionWrapper from "../../../../../components/Admin/Users/InteractionWrapper";

interface Props {
  searchParams: {
    searchName: string;
  };
}

export default async function page({ searchParams }: Props) {
  const searchName = searchParams.searchName;
  const users = await getAllUsers(searchName ? { searchName } : {});

  return <InteractionWrapper users={users as UserDB[]} />;
}
