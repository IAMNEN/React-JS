import React from 'react'
import Card from './components/card'

const App = () => {
  return (
    <div>
      <div className='parent'>
        <Card logo="amazon.jpg" name="Amazon" time="3 Days Ago" title="Senior UI/UX Designer " type1="Part Time" type2="Full Time" rate="$100" location="Mumbai India"/>
        <Card logo="google.jpg" name="Google" time="59 Sec Ago" title="Backend Developer" type1="Senior" type2="Full Time" rate="$500" location="Ahmedabad"/>
        <Card logo="dribble.jpg" name="Dribble" time="1 Day Ago" title="Motion Designer" type1="Contrat" type2="Remote" rate="$85/hr" location="Chennai India"/>
        <Card logo="figma.jpg" name="Figma" time="30 Day Ago" title="UX Designer" type1="Full-Time" type2="In Office" rate="$50-200k" location="Rajkot India"/>
        <Card logo="airbnb.jpg" name="Airbnb" time="1 Month Ago" title="Junior Developer" type1="Junior" type2="Remote" rate="$100/hr" location="Mumbai India"/>
        <Card logo="apple.jpg" name="Apple" time="6 Month Ago" title="Graphic Designer" type1="Full-Time" type2="Flexible Schedual" rate="$1000-5000k" location="Delhi India"/>
      </div>
    </div>
  )
}

export default App
