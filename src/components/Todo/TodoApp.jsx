import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Trash2, PlusCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function TodoApp() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, { id: Date.now(), text: task }]);
      setTask("");
    }
  };

  const removeTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  return (
    <div className="max-w-2xl mx-auto mt-16 px-6 text-gray-900 dark:text-gray-100">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8"
      >
        <h1 className="text-4xl font-bold tracking-tight mb-2">My Tasks</h1>
        <p className="text-gray-500 dark:text-gray-400 text-lg">Organize your day effectively</p>
      </motion.div>

      <div className="flex items-center gap-4 mb-6">
        <Input
          placeholder="What's next on your list?"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="flex-grow rounded-xl px-4 py-2 text-base bg-white dark:bg-gray-800 dark:text-white"
        />
        <Button
          onClick={addTask}
          className="rounded-xl px-4 py-2 flex items-center gap-2"
        >
          <PlusCircle className="w-5 h-5" /> Add
        </Button>
      </div>

      <div className="grid gap-3">
        {tasks.map((t) => (
          <motion.div
            key={t.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="flex justify-between items-center px-4 py-3 rounded-2xl shadow-md bg-white dark:bg-gray-900">
              <CardContent className="p-0 text-base font-medium text-gray-800 dark:text-gray-100">
                {t.text}
              </CardContent>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => removeTask(t.id)}
              >
                <Trash2 className="w-5 h-5 text-red-500 hover:text-red-700 dark:hover:text-red-400" />
              </Button>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
