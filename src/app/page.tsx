// Learnt the usage of Link 
import Link from "next/link";

export default function Home () {
  console.log("Hello I am Home");
  
  return (
    <main className="flex min-h-screen flex-col p-24">
      <Link href = {"react_learning"}>React Learning</Link>
          </main>
  );
}
