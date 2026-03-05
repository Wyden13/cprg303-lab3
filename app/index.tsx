import ToDoList from "@/components/ToDoList";
import { Text, View } from "react-native";
import { useState } from "react";

export default function Index() {
  const [tasks, setTasks] = useState(["Do laundry", "Go to gym", "Walk dog"]);
  return (
    <View>
      <ToDoList tasks={tasks} />
    </View>
  );
}
