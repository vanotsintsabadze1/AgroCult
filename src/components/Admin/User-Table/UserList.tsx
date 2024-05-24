"use client";

import Image from "next/image";
import { deleteUser } from "../../../scripts/actions/admin-panel/deleteUser";
import { useRouter } from "next/navigation";
import { useState } from "react";
import UserEditModal from "../User-Edit/UserEditModal";

interface Props {
  user: User;
}

export default function UserList({ user }: Props) {
  const [isEditing, setIsEditing] = useState(false);

  const router = useRouter();

  async function deleteSelectedUser() {
    await deleteUser(user.id);
    router.refresh();
  }

  async function editSelectedUser() {
    setIsEditing(!isEditing);
  }

  async function closeEditModal() {
    setIsEditing(false);
  }

  return (
    <>
      <tr className="text-center">
        <td className="border border-black p-[2rem] text-[1.3rem]">{user.id}</td>
        <td className="border border-black p-[2rem] text-[1.3rem]">{user.name}</td>
        <td className="border border-black p-[2rem] text-[1.3rem]">{user.email}</td>
        <td className="border border-black p-[2rem] text-[1.3rem] xs:hidden sm:hidden md:hidden">{user.password}</td>
        <td className="border border-black p-[2rem] text-[1.3rem] xs:hidden sm:hidden md:hidden">{user.role}</td>
        <td className="relative border border-black p-[2rem] text-[1.3rem]">
          <div className="flex items-center justify-center gap-[1.5rem]">
            <button onClick={editSelectedUser}>
              <Image
                src="/images/actions/edit-icon.webp"
                className="cursor-pointer duration-200 ease-out hover:scale-110"
                width={17}
                height={17}
                alt="edit-icon"
              />
            </button>
            <button onClick={deleteSelectedUser}>
              <Image
                src="/images/actions/delete-icon.webp"
                className="cursor-pointer duration-200 ease-out hover:scale-110"
                width={17}
                height={17}
                alt="delete-icon"
              />
            </button>
          </div>
        </td>
      </tr>
      {isEditing && (
        <tr>
          <td>
            <div className="fixed left-0 top-0 z-[10] flex h-screen w-screen items-center justify-center">
              <canvas className="absolute z-[4] h-screen w-full bg-black opacity-50"></canvas>
              <div className="z-[10] h-[40rem] w-[40rem] rounded-[.5rem] bg-white xs:w-full">
                <div className="flex w-full justify-end px-[3rem] py-[1rem] font-semibold text-gray-400">
                  <button onClick={closeEditModal} className="cursor-pointer text-[2rem]">
                    X
                  </button>
                </div>
                <UserEditModal user={user} closeEditModal={closeEditModal} />
              </div>
            </div>
          </td>
        </tr>
      )}
    </>
  );
}
