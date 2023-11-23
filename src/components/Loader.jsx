import { Html, useProgress } from "@react-three/drei";

const Loader = () => {
  const { progress } = useProgress();
  return (
    <Html>
      <span className="canvas-load">
        <p className="text-center"
          style={{
            fontSize: 14,
            color: "#f1f1f1",
            fontWeight: 800,
            marginTop: 40,
          }}
        >
          LOADING<br></br>
          {progress.toFixed(2)}%
        </p>
      </span>
    </Html>
  );
};

export default Loader;
