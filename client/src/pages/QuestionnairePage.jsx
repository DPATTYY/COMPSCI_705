import {useState} from 'react';
import {Link} from 'react-router-dom';
import './QuestionnairePage.css';
import LinearProgressWithLabel from '../components/ProgressBar';
import RadioGroup from '../components/RadioGroup';



function QuestionnairePage() {

    const [selectedAnswer, setSelectedAnswer] = useState('');

    const anxietyOptions = [
    { value: 'not-at-all', label: 'Not at all' },
    { value: 'rarely', label: 'Rarely' },
    { value: 'sometimes', label: 'Sometimes' },
    { value: 'most-time', label: 'Most of the time' },
    { value: 'all-time', label: 'All the time' }
    ];

    const handleAnswerChange = (event) => {
    setSelectedAnswer(event.target.value);
    };

  return (
    <div id="survey_superdiv">

        <div className="left-aligned">
          <Link to="/">
              <button>
                &lt; Quit Survey
              </button>
          </Link>
        </div>

        <div className="center-aligned">
          <LinearProgressWithLabel value={30} />
        </div>

        <div className="left-aligned heading"> Question 1: Anxiety</div>
        <div className="left-aligned subheading"> Over the last two weeks, have you felt nervous, anxious, or on edge? </div>

        <div className="center-aligned flex-container">
          <div className="face-cam">face-cam</div>
          <div className="input-widgets">
            <RadioGroup
                label="How often do you feel anxious?"
                options={anxietyOptions}
                value={selectedAnswer}
                onChange={handleAnswerChange}
                name="anxiety-question"
            />
          </div>
        </div>

          
        

        <div className="center-aligned flex-container">
          <button>
              &lt; Previous
          </button>

          <Link to="/completion">
            <button>
                Submit Survey
            </button>
          </Link>

          <button>
              Next &gt;
          </button>
        </div>

    </div>
  );
}

export default QuestionnairePage;