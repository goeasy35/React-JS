import defaultImage from "../assets/no-projects.png";
import Button from "../Button/Button";

export default function DefaultPage({ onLoadPage }) {
  return (
    <div className="mt-24 text-center w-2/3">
      <img
        src={defaultImage}
        alt="default image of wrtitting padd"
        className="w-16 h-16 object-contain mx-auto"
      />
      <h2 className="text-xl font-bold text-stone-500 mt-4">
        No Projects to showcase
      </h2>
      <p className="text-stone-400 mb-4">
        Select a projrct or get started on new one
      </p>
      <p className="mt-8">
        <Button onClick={onLoadPage}>Create New Project</Button>
      </p>
    </div>
  );
}
