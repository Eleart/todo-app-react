import Image from "next/image";
import styles from "./page.module.css";
import TodoList from "@/components/todoList";
import Banner from "@/components/banner";
import Footer from "@/components/footer";

export default function Home() {
  return (
      <>
        <Banner />
        <TodoList />
        <Footer />
      </>
  );
}
