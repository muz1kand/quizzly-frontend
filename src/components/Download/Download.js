import s from 'Download/Download.scss'
import Api from 'modules/Api.js'

export default class Download extends React.Component {
  static propTypes = {
    //dummy: React.PropTypes.object.isRequired,
  }

  constructor(props) {
    super(props);
  }

  downloadMacVersion() {

  }

  downloadWindowsVersion() {

  }

  render() {
    var st = this.state;
    var pr = this.props;
    return (
      <div className="downloadContainer">
        <div className="flexHorizontal">
        <ul>
          <li><a href="https://s3-us-west-2.amazonaws.com/downloads-quizzly/Quizzly-OSX.zip">mac</a></li>
          <li><a href="https://s3-us-west-2.amazonaws.com/downloads-quizzly/Quizzly-win32-x64.zip">windows</a></li>
        </ul>
        </div>
      </div>
    )
  }
}
