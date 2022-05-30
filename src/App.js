import React, { useState } from 'react';
import MessageBox from './components/MessageBox/MessageBox'
import Header from './components/Website/Header';
import Wheel from './components/Website/Wheel';
const App = () => {

  const journey_data = [
    {
      id: 1,
      title: 'Understand',
      text: `We make sure to udnerstand the client's context and
      current situation. We organise a stategic intake 
      workshop where we explore beyond the brief and our 
      communication audit.`
    },
    {
      id: 2,
      title: 'Inspire',
      text: `We go beyond the work and campaigns the client has 
      created and look at the world's best champaigns in the 
      industry and beyond to get inspiration for what's next.
      We have creation brainstorm with one of our tested
      methods, based on the kind of inspiration we are 
      looking for. The creation brainstorm can include the client.`
    },
    {
      id: 3,
      title: 'Hook',
      text: `We look at the discovery from the first two stages and
      find something people understand and create a
      narrative to hook on an attractive, newsworthy story
      that will engage policymakers, journalists and
      advocates. We develop the story narrative and link it to 
      key milestones in the planning.`
    },
    {
      id: 4,
      title: 'Create',
      text: `We start our content machine and make things to 
      support positioning, dissemination or run-up. These
      are in the form of witty tweets, beatiful brand
      graphics, event videos, advocacy animations, cutom
      interactive websites. We prepare your content with 
      utmost care and attention to detail, based on your 
      existing brand, or an identity we create for you.`
    },
    {
      id: 5,
      title: 'Show',
      text: `We put your beautiful digital content in the world and
      see what happens. If we did our job right, the proposed
      strategy will do its magic, and you will start seeing first
      results. We test what messages work best and adjust
      planned content accordingly. We monitor the
      conversation carefully with a critical eye for known
      opponents.`
    },
    {
      id: 6,
      title: 'Share',
      text: `Once the content has been tested, we activate your
      influencers and your community, engaging with them
      actively and encouraging ambassadors to amplify your 
      messages. We manage your existing influencers and 
      community, while also identifying new opportunities to
      engage and bring in less obvious allies.`
    },
    {
      id: 7,
      title: 'Report',
      text: `While influence is not easy to measure, we always aim	
      to have clear objectives from the beginning and
      measure success based on the discovery stages. After
      the duration of the project, we illustrate the results ina
      comprehensive report, with quantitative and
      qualitative targets and ready to share internally and
      with external partners.`
    },
    {
      id: 8,
      title: 'Reflect',
      text: `Beyond the targets shared in the report, we keep our
      process in check with a retrospective where we look at
      learnings and how we improve the process for the next
      effort. The last two stages of the campaign journey are
      a part of the strategy stage and the next part is back to
      stage one, understand after having reftected on the
      last success.`
    }
  ]

  const [content, setContent] = useState('');
  const [isClicked, setIsClicked] = useState(false);
  const onClickHandler = (clickedJourneyId) => {
    setIsClicked(true);
    let journey_object = journey_data.filter(item => item.id === clickedJourneyId)[0];
    setContent(journey_object);
  }

  return (
    <div id="page" className="site">
      <Header />
      <Wheel onClick={onClickHandler} />
      {isClicked ? <MessageBox key={content.id} id={content.id} title={content.title} text={content.text} /> : null}
    </div >
  );
}

export default App;