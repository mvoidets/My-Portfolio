export default function Resume() {
  return (
    <section id="resume">
      <div>
        <p> Download my <a href="/MichelleVoidets_Resume.docx" download> resume</a></p>
        <style dangerouslySetInnerHTML={{ __html: `
          a:hover {
            text-decoration: none;
            animation: sparkle 1s infinite;
          }
          @keyframes sparkle {
            0% {
              text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #2D6BB2FF, 0 0 20px #2D6BB2FF, 0 0 25px #2D6BB2FF, 0 0 30px #2D6BB2FF, 0 0 35px #2D6BB2FF;
            }
            100% {
              text-shadow: 0 0 5px #fff, 0 0 10px #2D6BB2FF, 0 0 15px #2D6BB2FF, 0 0 20px #2D6BB2FF, 0 0 25px #2D6BB2FF, 0 0 30px#2D6BB2FF, 0 0 35px #2D6BB2FF;
            }
          }
        ` }} />
        <br></br>
        <h2 className="text-left mb-5"h2>Resume</h2>
        <ul className="list-unstyled">
          <li className="h4">Front-End Proficiencies</li>
          <ul>
            <li className="h5">HTML</li>
            <li className="h5">CSS</li>
            <li className="h5">JavaScript</li>
            <li className="h5">jQuery</li>
            <li className="h5">responsive design</li>
            <li className="h5">React</li>
          </ul>
          <li className="h4">Back-End Proficiencies</li>
          <ul>
            <li className="h5">APIs</li>
            <li className="h5">Node</li>
            <li className="h5">Express</li>
            <li className="h5">MySQL</li>
          </ul>
        </ul>
      </div>
    </section>
  );
}
