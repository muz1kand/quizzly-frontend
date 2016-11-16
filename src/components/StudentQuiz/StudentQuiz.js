import s from 'StudentQuiz/StudentQuiz.scss'
import StudentQuestion from 'StudentQuestion/StudentQuestion.js'
import Panel from 'elements/Panel/Panel.js'

export default class StudentQuiz extends React.Component {
  static propTypes = {
    studentQuiz: React.PropTypes.object.isRequired,
    studentQuizIndex: React.PropTypes.number.isRequired,
    showModal: React.PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);

    this.state = {
      title: "Quiz Title",
      showModal: false,
    };
  }

  componentDidMount() {
  }

  renderStudentAnswersToQuizzes() {
    var pr = this.props;
    return pr.studentQuiz.questions.map((question, i) => {
      return (
        <StudentQuestion
          key={i}
          studentQuizIndex={pr.studentQuizIndex}
          questionIndex={i}
          question={question}
          showModal={pr.showModal.bind(this)}
        />
      );
    });
  }

  renderStudentScore() {
    return (
      <div>{this.props.studentQuiz.countCorrect + "/" + this.props.studentQuiz.size}</div>
    );
  }

  render() {
    var st = this.state;
    var pr = this.props;
    return (
      <Panel
        header={<span className="pointer">{pr.studentQuiz.quiz}</span>}
        body={this.renderStudentAnswersToQuizzes()}
        footer={<div className="studentQuizFooter">{this.renderStudentScore()}</div>}
      />
    )
  }
}
