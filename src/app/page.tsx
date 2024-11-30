import {redirect} from "next/navigation"



export default function JumpToHome() {

    redirect("/home");

  return (
    <div className="moja-klasa">
      <h1 className="font-lg text-red-200">Można używać normalnego CSSa oraz Tailwind CSS</h1>
    </div>
  );
}
