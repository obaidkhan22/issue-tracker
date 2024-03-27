"use client";

import { Issue, User } from "@prisma/client";
import { Select } from "@radix-ui/themes";
import axios from "axios";
import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const AssigneeSelector = ({ issue }: { issue: Issue }) => {
  const [users, setUsers] = useState<User[]>([]);
  useEffect(() => {
    const fetchUsers = async () => {
      const { data } = await axios.get<User[]>("/api/users");
      setUsers(data);
    };
    fetchUsers();
  }, []);
  const onValueChange = async (userId: string) => {
    await axios
      .patch("/api/issues/" + issue.id, {
        assignedToUserId: userId !== "unasigned" ? userId : null,
      })
      .catch(() => {
        toast.error("Changes could not be saved.");
      });
  };
  return (
    <>
      <Select.Root
        defaultValue={issue.assignedToUserId || "unasigned"}
        onValueChange={onValueChange}
      >
        <Select.Trigger placeholder="Assign..." variant="soft" />
        <Select.Content position="popper">
          <Select.Group>
            <Select.Label>Suggestions</Select.Label>
            <Select.Item value="unasigned">Unasigned</Select.Item>
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
