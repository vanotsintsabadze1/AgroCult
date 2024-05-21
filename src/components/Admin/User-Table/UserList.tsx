"use client";

import { User } from "../../../types/types";
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
        <td className="text-[1.3rem] border border-black p-[2rem]">{user.id}</td>
        <td className="text-[1.3rem] border border-black p-[2rem]">{user.name}</td>
        <td className="text-[1.3rem] border border-black p-[2rem]">{user.email}</td>
        <td className="text-[1.3rem] border border-black p-[2rem] xs:hidden md:hidden sm:hidden">{user.password}</td>
        <td className="text-[1.3rem] border border-black p-[2rem] xs:hidden md:hidden sm:hidden">{user.role}</td>
        <td className="text-[1.3rem] border border-black p-[2rem] relative">
          <div className="gap-[1.5rem] flex justify-center items-center">
            <button onClick={editSelectedUser}>
              <Image
                src="/images/actions/edit-icon.webp"
                className="cursor-pointer hover:scale-110 duration-200 ease-out"
                width={17}
                height={17}
                alt="edit-icon"
              />
            </button>
            <button onClick={deleteSelectedUser}>
              <Image
                src="/images/actions/delete-icon.webp"
                className="cursor-pointer hover:scale-110 duration-200 ease-out"
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
            <div className="fixed w-screen h-screen top-0 left-0 flex justify-center items-center z-[10]">
              <canvas className="w-full h-screen bg-black opacity-50 z-[4] absolute"></canvas>
              <div className="w-[40rem] xs:w-full bg-white rounded-[.5rem] z-[10] h-[40rem]">
                <div className="w-full flex justify-end px-[3rem] font-semibold text-gray-400 py-[1rem]">
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
