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
              // Rotation of path and trail, in number of turns (0-1)
              // rotation: 0,

              // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
              strokeLinecap: 'butt',

              // Text size
              textSize: '2rem',
              // How long animation takes to go from one percentage to another, in seconds
              pathTransitionDuration: 0.5,

              // Colors
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
