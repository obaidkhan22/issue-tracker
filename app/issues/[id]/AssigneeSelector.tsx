"use client";

import { Issue, User } from "@prisma/client";
import { Select } from "@radix-ui/themes";
import axios from "axios";
import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const AssigneeSelector = ({ issueId }: { issueId: number }) => {
  const [users, setUsers] = useState<User[]>([]);
  useEffect(() => {
    const fetchUsers = async () => {
      const { data } = await axios.get<User[]>("/api/users");
      setUsers(data);
    };
    fetchUsers();
  }, []);
  return (
    <>
      <Select.Root
        onValueChange={async (userId) => {
          await axios
            .patch("/api/issues/" + issueId, {
              assignedToUserId: userId,
            })
            .catch(() => {
              toast.error("Changes could not be saved.");
            });
        }}
      >
        <Select.Trigger placeholder="Assign..." variant="soft" />
        <Select.Content position="popper">
          <Select.Group>
            <Select.Label>Suggestions</Select.Label>
            {users.map((user) => (
              <Select.Item key={user.id} value={user.id}>
                {user.name}
              </Select.Item>
            ))}
          </Select.Group>
        </Select.Content>
      </Select.Root>

      <Toaster />
    </>
  );
};

export default AssigneeSelector;
