import ToggleModal from "@/components/Admin/User-Creation/ToggleModal";
import SearchUsers from "../../../../components/Admin/SearchUsers";
import UserTable from "@/components/Admin/User-Table/UserTable";
import UserCreationModal from "@/components/Admin/User-Creation/UserCreationModal";

export default function page() {
  return (
    <>
      <main className="w-full flex justify-center px-[2rem] py-[4rem]">
        <div className="w-[40rem] xs:w-full xl:w-[85rem] flex flex-col items-center py-[4rem] gap-[2rem] dark:bg-gray-200 rounded-[.5rem]">
          <section className="w-full flex justify-center px-[2rem]">
            <SearchUsers />
          </section>
          <section className="w-[40rem] flex items-end px-[2rem] flex-col">
            <ToggleModal>
              <UserCreationModal />
            </ToggleModal>
          </section>
          <section className="w-full flex justify-center">
            <UserTable />
          </section>
        </div>
      </main>
    </>
  );
}
