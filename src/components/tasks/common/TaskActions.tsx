import AddTaskModal from "@/components/tasks/common/AddTaskModal";
import { ICONS } from "@/lib/constants/common";
import { useState } from "react";

const TaskActions = () => {
  const [isAddModalOpen, setAddModalOpen] = useState<boolean>(false);

  const handleOpenAddModal = () => setAddModalOpen(true);

  return (
    <>
      <div className="fixed-bottom fm-page-actions">
        <i className={`bi bi-${ICONS.add}`} onClick={handleOpenAddModal} />
        <i className={`bi bi-${ICONS.archive}`} />
      </div>
      <AddTaskModal isOpen={isAddModalOpen} setOpen={setAddModalOpen} />
    </>
  );
};

export default TaskActions;
