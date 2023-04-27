import VisibilitySensor from 'react-visibility-sensor'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

export default function CircleProgress(value) {
  return (
    <VisibilitySensor>
      {({ isVisible }) => {
        const percentage = isVisible ? value.value : 0
        return (
          <CircularProgressbar
            value={percentage}
            maxValue={100}
            text={`${percentage}%`}
            strokeWidth={6}
            background={true}
            backgroundPadding={6}
            styles={buildStyles({
              strokeLinecap: 'butt',
              textSize: '2rem',
              pathTransitionDuration: 0.5,
              pathColor: `${
                percentage > 70 ? 'green' : percentage > 40 ? 'yellow' : 'red'
              }`,
              textColor: 'white',
              trailColor: 'gray',
              backgroundColor: 'black'
            })}
          />
        )
      }}
    </VisibilitySensor>
  )
}
