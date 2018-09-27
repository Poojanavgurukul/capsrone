import React from "react";
import Dropzone from "react-dropzone";

class Basic extends React.Component {
  constructor() {
    super();
    this.state = { files: [] };
  }

  onDrop(files) {
    this.setState({
      files
    });
  }

  render() {
    return (
      <div>
        <h4>Upload files</h4>
        <section>
          <div className="dropzone">
            <Dropzone onDrop={this.onDrop.bind(this)} className="cls">
              <p className="sometext">click here to select files to upload.</p>
            </Dropzone>
          </div>
          <aside>
            <ol>
              {this.state.files.map(f => (
                <li key={f.name}>
                  {f.name} - {f.size} bytes
                </li>
              ))}
            </ol>
          </aside>
        </section>
      </div>
    );
  }
}

<Basic />;

export default Basic;
