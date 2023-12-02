export default function Resume() {
  const downloadResume = () => {
    const resumePath = "./src/assets/installables/Resume-Jorge-Castro.pdf";

    const anchor = document.createElement("a");

    anchor.href = resumePath;

    anchor.download = "Resume-Jorge-Castro.pdf";

    anchor.click();
  };

  return (
    <div className="card custom-resume-card">
      <div className="card-header">Download Resume</div>
      <div className="card-body custom-resume-body">
        <h5 className="card-title">Click the button below to install resume</h5>
        <button onClick={downloadResume} className="btn btn-primary">
          Download Resume
        </button>
      </div>
    </div>
  );
}
