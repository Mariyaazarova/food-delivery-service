import { useProgress } from "./use-progress";

export const ProgressBar = () => {
  const progress = useProgress();

  return (
    <div className="progress">
      <div
        className="progress-bar bg-warning progress-bar-striped progress-bar-animated"
        role="progressbar"
        aria-valuenow={progress}
        aria-valuemin="0"
        aria-valuemax="100"
        style={{
          width: progress,
        }}
      ></div>
    </div>
  );
};
