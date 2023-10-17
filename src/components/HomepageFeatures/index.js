import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Homunculi Battles',
    Svg: require('@site/static/img/Defend.svg').default,
    description: (
      <>
        Fight you battles in the arena of Tristigis
      </>
    ),
  },
  {
    title: 'Crafting',
    Svg: require('@site/static/img/Super.svg').default,
    description: (
      <>
       Research recipes and craft powerful Homunculi
      </>
    ),
  },
  {
    title: 'Exploring',
    Svg: require('@site/static/img/Punch.svg').default,
    description: (
      <>
        Explore the continent Alka Sowa and become the most powerful alchemist.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
