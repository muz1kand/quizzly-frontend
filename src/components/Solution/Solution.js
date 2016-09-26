import s from 'Solution/Solution.scss'

export default class Solution extends React.Component {
  static propTypes = {
  }

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentDidMount() {
  }
  renderFreeResponse(question){
    return (
      <div className="flex mb20 flexVertical">
        <input
          type="text"
          className={`normalInput lightGreenBackground`}
          value={question.answerText}
          placeholder="Option..."
        />
      </div>
    )
  }
  renderAnswers(question){
    return (
       question.answers.map( (answer, index) => {
        return (
          <div className="flex mb20 flexVertical">
            <span
              className={`mr15 ${answer.correct ? "greenButton" : answer.studentSelectedIncorrect ? "redButton" : "greyButton"}`}
            >
              {answer.option}.)
            </span>
            <input
              type="text"
              className={`normalInput ${answer.correct == true ? "lightGreenBackground" : answer.studentSelectedIncorrect ? "lightRedBackground" : ""}`}
              value={answer.text}
              placeholder="Option..."
            />
          </div>
        )
      })
  )
  }
  renderQuestionAnswer(){
    var pr = this.props;
    return (
      pr.questions.map( ( question, index ) => {
        return (
          <div className="questionAnswerGroup">
            <div className="flex mb20 flexVertical">
              <input
                type="text"
                className={`normalInput`}
                value={question.text}
                placeholder="Option..."
              />
            </div>
            <div>
              { question.answers.length > 0 ? this.renderAnswers(question) : this.renderFreeResponse(question) }
            </div>
          </div>
        )
      })
    )
  }
  render() {
    console.log(this.props.questions);
    var st = this.state;
    var pr = this.props;
    return (
      <div className="questionAnswersGroup">
      {this.renderQuestionAnswer()}
      </div>
    )
  }
}
