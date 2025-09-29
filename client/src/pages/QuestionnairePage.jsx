import {useState} from 'react';
import {Link} from 'react-router-dom';
import './QuestionnairePage.css';
import LinearProgressWithLabel from '../components/ProgressBar';
import RadioGroup from '../components/RadioGroup';
import {Button, IconButton} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';




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

        <div className="left-aligned bottom-margin">
          <Link to="/">
              <Button variant="outlined" color="secondary">Quit Survey</Button>
          </Link>
        </div>

        <div className="center-aligned bottom-margin progress-bar">
          <LinearProgressWithLabel value={30} />
        </div>

        <div className="left-aligned heading"> Question 1: Anxiety</div>
        <div className="left-aligned subheading"> Over the last two weeks, have you felt nervous, anxious, or on edge? </div>

        <div className="center-aligned flex-container">
          <div className="input-widgets">
            <RadioGroup
                options={anxietyOptions}
                value={selectedAnswer}
                onChange={handleAnswerChange}
                name="anxiety-question"
            />
          </div>
          <div className="face-cam">face-cam</div>
        </div>

          
        

        <div className="center-aligned flex-container">
          <IconButton>
              <ArrowBackIcon />
          </IconButton>

          <Link to="/completion">
            <button className="submit-button" disabled={!selectedAnswer}>
                Submit Survey
            </button>
          </Link>

          <IconButton>
              <ArrowForwardIcon />
          </IconButton>
        </div>

    </div>
  );
}

export default QuestionnairePage;