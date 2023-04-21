import VisibilitySensor from 'react-visibility-sensor'
import { CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

export default function CircleProgress(value) {
  return (
    <VisibilitySensor>
      {({ isVisible }) => {
        const percentage = isVisible ? value.value : 0
        return (
          <CircularProgressbar
            value={percentage}
            maxValue={10}
            text={`${percentage}%`}
          />
        )
      }}
    </VisibilitySensor>
  )
}
