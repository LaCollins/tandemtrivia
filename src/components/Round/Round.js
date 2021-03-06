
import './Round.css';
import Question from '../Question/Question';

function Round(props) {

    // Checks count of question and changes view according to if a round is complete or not.
    return(
        <div className="Round">
            {props.currentQuestion < 10 ? (<Question
            currentQuestion={props.currentQuestion}
            setCurrentQuestion={props.setCurrentQuestion}
            score={props.score}
            setScore={props.setScore}
            numRound={props.numRound}
            setTotalScore={props.setTotalScore}
            totalScore={props.totalScore}
            />)
            : (
            <div className="endOfGame mt-5 mb-2">
                <h3>Congrats!</h3>
                <h5>You have finished the game!</h5>
                <h5>You have played {props.numRound} round&#40;s&#41;.</h5>
                <h5>You got {props.score} out of 10 correct this round!</h5>
                <h5>Your total score is {props.totalScore} out of {props.numRound}0 correct!</h5>
                <button className="btn btn-info mt-5" onClick={() => props.resetGame()}>Play Again?</button>
            </div>)}
        </div>
    )
}

export default Round;
