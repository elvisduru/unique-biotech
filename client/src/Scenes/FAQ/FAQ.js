import React from 'react';
import styles from './FAQ.module.css';
import Menu from '../../containers/Menu/Menu';
import Accordion from '../../components/Accordion/Accordion';
import Footer from '../../containers/Footer/Footer';
import ContactBox from '../../components/ContactBox/ContactBox';

const FAQ = () => {
  return (
    <div className={styles.FAQ}>
      <ContactBox />

      <div className={styles.nav}>
        <Menu dark />
      </div>
      <main>
        <h1>Frequently Asked Questions</h1>
        <div className={styles.content}>
          <Accordion
            title="What insect species do you farm?"
            content="We rear the Black Soldier Fly insect also known as Hermatia Illucens, the premium insect protein of choice and ensure a stable supply of its eggs."
          />
          <Accordion
            title="Are Black Soldier flies harmful?"
            content="The adult black soldier fly does not have mouthparts And does not feed upon waste. They do not bite, and as only the larva feed, are not associated with transmitting any diseases. Also, this species makes the breeding areas of houseflies less desirable."
          />
          <Accordion
            title="Do Black Soldier Fly bite?"
            content="
            NO! Black soldier flies do not fly around as much as houseflies. They have less expendable energy due to their limited ability to consume food as adults. They are very easy to catch and relocate when they get inside a house, as they do not avoid being picked up, they are sanitary, and they neither bite nor sting."
          />
          <Accordion
            title="Are Black Soldier Fly good Compost?"
            content="The Black Soldier Fly Larvae absolutely thrives in a damp environment. Together with decaying, nitrogen-rich organic matter will only enhance the composting process. A warm environment will cause the BFS Larvae to be active within your compost."
          />
          <Accordion
            title="What Do Black Soldier Fly Larvae Eat?"
            content="The black soldier fly consumes any kind of organic waste such as compost, food scraps, coffee grounds, and animal manure. Animal products such as fat and meat aren't the best, so avoid putting them into their feeding container."
          />
          <Accordion
            title="How long do black soldier fly larva live?"
            content="Adult BSF's live for 5-8 days. In this time they must find a mate and lay eggs. The eggs take about 4 days to hatch, and then the larvae will take roughly 2 weeks before they are ready to pupate (become adults)."
          />
          <Accordion
            title="How do you take care of black soldier fly larvae?"
            content="Caring for your Black Soldier Fly Larvae: Rinse the larvae with warm water before feeding them to your animal. Also be careful to avoid the long coconut fiber for small animals. You do not need to feed the worms to keep them alive."
          />
          <Accordion
            title="Can you put black soldier fly larvae in the fridge?"
            content="Soldier Fly Larvae can be kept at room temperature, but keeping them at 50-55F will keep them in the larval stage much longer. DO NOT keep black soldier fly larvae in the fridge – this will kill them! ... After they pupate, the larvae emerge as adult black soldier flies, which resemble small wasps."
          />
          <Accordion
            title="Is there anything to be gained by drying BSF larvae?"
            content="For transport and storage of BSF larvae, and for larvae to be used as an additive in animal feeds, drying is necessary to prevent the larvae from spoiling once they have been harvested."
          />
          <Accordion
            title="Can you expose BSF larvae to the sun or do they prefer shaded areas or semi-exposed areas?"
            content="BSF larvae are photophobic (light fearing) and prefer to feed and grow in places shielded from direct sunlight. In open recycling bins they will burrow under layers of food scrap or waste material to escape direct exposure to light. Adult BSF prefer sunlight and warm temperatures to mate. Males hang out in shaded areas and mate with females in mid-flight. Females prefer to lay eggs in dark crevices hidden from direct sunlight. Recycling bins should be located in semi-exposed areas. Direct and prolonged exposure to sun can cause food scrap and compost recycler bins to overheat inducing heat stress among larvae driving them out of the bins."
          />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default FAQ

