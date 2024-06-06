"use client";
import { useState } from "react";
import SearchBar from "./SearchBar";
import UserList from "./UserList";
import { AnimatePresence } from "framer-motion";
import ActionModal from "../ActionModal";

interface Props {
  users: User[];
}

export default function InteractionWrapper({ users }: Props) {
  const [search, setSearch] = useState<string>("");
  const [shouldLoadingModalOpen, setShouldLoadingModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState({ type: "", message: "" });

  return (
    <>
      <AnimatePresence>{shouldLoadingModalOpen && <ActionModal modalMessage={modalMessage} />}</AnimatePresence>

      <div className="flex w-full flex-col gap-[1rem] pl-[7rem]">
        <SearchBar search={search} setSearch={setSearch} />
        <UserList
          users={users}
          search={search}
          setShouldLoadingModalOpen={setShouldLoadingModalOpen}
          setModalMessage={setModalMessage}
        />
      </div>
    </>
  );
}
